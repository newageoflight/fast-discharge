import { useCallback } from 'react';
import { Editor, Element, Transforms } from 'slate';
import { ReactEditor } from 'slate-react';
import { TemplateBlockProps } from '../interfaces/Templates';

export const useChangeProps = (editor: Editor, element: Element) => {
    const changeProps = useCallback((elemProps: TemplateBlockProps) => {
        let path = ReactEditor.findPath((editor as ReactEditor), element);
        let newProps = {...elemProps}
        Transforms.setNodes(editor, newProps, {at:path})
    }, [element])
    
    return { changeProps }
}