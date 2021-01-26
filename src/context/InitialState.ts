
export const InitialState = [
    {
        type: "paragraph",
        children: [
            {text: "Type in {{ to create a template block like this (the gear icon allows you to name the field): "},
            {
                type: "template-block",
                name: "sex", 
                opts: [{label: "male", value: "male"}, {label: "female", value: "female"}],
                defaultValue: {label: 'male', value: 'male'},
                children: [{text: ''}],
            },
            {text: ''},
        ]
    },
    {
        type: "paragraph",
        children: [
            {text: "FastDischarge also comes with all the rich text editing features you know and love!"}
        ]
    },
]