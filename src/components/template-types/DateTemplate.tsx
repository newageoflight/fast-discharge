import React, { useCallback, useRef, useState } from 'react'
import { Editor, Transforms } from 'slate';
import { RenderElementProps, ReactEditor, useFocused, useSelected, useEditor } from 'slate-react'
import { InlineIcon } from '@iconify/react-with-api';
import AutoSizeInput from "react-input-autosize";

// should be a span with a button that allows you to pick a date. insert using @@

export const DateTemplate: React.FC = () => {
    const selected = useSelected();
    const focused = useFocused();
    const editor = useEditor();

    return (
        <div>
            
        </div>
    )
}
