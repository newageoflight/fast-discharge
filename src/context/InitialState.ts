
export const InitialState = [
    {
        type: "paragraph",
        children: [
            {text: "The patient is "},
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
]