import { useCallback, useState } from "react";
import { Descendant, Editor, Location, Range, Transforms } from "slate";
import { matchBefore, matchAfter } from "../../utils/matches";

export const useFragmentInserter = (abbrevs: Record<string, Descendant[]>) => {
    const [target, setTarget] = useState<Range | null>();
    const [index, setIndex] = useState(0);
    const [search, setSearch] = useState("");

    const searchedAbbrevs = Object.fromEntries(Object.entries(abbrevs).filter(([key]) => 
        (search !== "$") ? key.toLowerCase().startsWith(search.toLowerCase()) : !!key
    ));
    
    const onInsertFragment = useCallback((editor: Editor, data: [key: string, value: Descendant[]]) => {
        if (!!target) {
            let [, value] = data;
            Transforms.select(editor, target);
            Editor.insertFragment(editor, value)
            setTarget(null)
        }
    }, [target])
    
    
    const onKeyDownFragmentInserter = useCallback((event: React.KeyboardEvent, editor: Editor) => {
        if (target) {
            switch (event.key) {
                case "ArrowDown":
                    event.preventDefault();
                    const prevIndex = index >= Object.keys(searchedAbbrevs).length - 1 ? 0 : index + 1
                    setIndex(prevIndex);
                    break;
                case "ArrowUp":
                    event.preventDefault();
                    const nextIndex = index <= 0 ? Object.keys(searchedAbbrevs).length - 1 : index - 1
                    setIndex(nextIndex);
                    break;
                case "Tab":
                case "Enter":
                    event.preventDefault();
                    Transforms.select(editor, (target as Location));
                    let keyToGet = Object.keys(searchedAbbrevs)[index]
                    let fragmentToInsert = abbrevs[keyToGet]
                    Editor.insertFragment(editor, fragmentToInsert);
                    setTarget(null);
                    break;
                case "Escape":
                    event.preventDefault();
                    setTarget(null);
                    break;
            }
        }
    }, [index, search, target])
    
    const onChangeFragmentInserter = useCallback((editor: Editor) => {
        const { selection } = editor;
        // if nothing is currently selected under the cursor
        if (selection && Range.isCollapsed(selection)) {
            const [start] = Range.edges(selection);
            // if the two characters beforce the cursor are {{, select them and replace with a template block
            const wordBefore = Editor.before(editor, start, {unit: "word"})
            const wordBeforeMatch = wordBefore && matchBefore(editor, wordBefore, /^\.(\w+|\$)$/, {}, start)
            let beforeWordRange, beforeWordText, beforeWordMatch;
            if (wordBeforeMatch) {
                beforeWordRange = wordBeforeMatch.range;
                beforeWordText = wordBeforeMatch.text;
                beforeWordMatch = wordBeforeMatch.match;
            }
            // let {range: beforeWordRange, text: beforeWordText, match: beforeWordMatch} = wordBeforeMatch;
            const {match: afterMatch} = matchAfter(editor, start, /^(\s|$)/)
            if (beforeWordMatch && afterMatch) {
                setTarget(beforeWordRange)
                setSearch(beforeWordMatch[1]);
                setIndex(0);
                return;
            }
        }

        setTarget(null);
    }, [])
    
    return {
        target,
        search,
        index,
        searchedAbbrevs,

        onInsertFragment,
        onKeyDownFragmentInserter,
        onChangeFragmentInserter,
    }
}