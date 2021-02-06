import React from 'react'
import Option from 'react-select/src/components/Option'

interface Props {
    innerProps: any,
    innerRef: any
}

export const OptionWithRemove: React.FC<Props> = ({ innerProps, innerRef }) => {
    return (
        <Option ref={innerRef} {...innerProps} />
    )
}
