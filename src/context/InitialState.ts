
export const InitialState = JSON.parse(`
[
    {
        "type": "h1",
        "children": [
            {
                "text": "Welcome to FastDischarge!"
            }
        ]
    },
    {
        "type": "p",
        "children": [
            {
                "text": "FastDischarge has lots of features that will help you to document faster:"
            }
        ]
    },
    {
        "type": "ul",
        "children": [
            {
                "type": "li",
                "children": [
                    {
                        "type": "p",
                        "children": [
                            {
                                "text": "Template blocks"
                            }
                        ]
                    },
                    {
                        "type": "ul",
                        "children": [
                            {
                                "type": "li",
                                "children": [
                                    {
                                        "type": "p",
                                        "children": [
                                            {
                                                "text": "If you frequently choose out of a set list of options, make a "
                                            },
                                            {
                                                "text": "selection",
                                                "italic": true
                                            },
                                            {
                                                "text": " template by typing in 2 {'s: "
                                            },
                                            {
                                                "type": "template-block",
                                                "templateType": "select",
                                                "children": [
                                                    {
                                                        "text": ""
                                                    }
                                                ],
                                                "name": "fruits",
                                                "opts": [
                                                    {
                                                        "label": "orange",
                                                        "value": "orange"
                                                    },
                                                    {
                                                        "label": "apple",
                                                        "value": "apple"
                                                    },
                                                    {
                                                        "label": "pear",
                                                        "value": "pear"
                                                    }
                                                ],
                                                "defaultValue": {
                                                    "label": "pear",
                                                    "value": "pear"
                                                }
                                            },
                                            {
                                                "text": ""
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "li",
                                "children": [
                                    {
                                        "type": "p",
                                        "children": [
                                            {
                                                "text": "Or if you need to choose multiple options at once, use a multiple selection template by typing in 2 ['s: "
                                            },
                                            {
                                                "type": "template-block",
                                                "templateType": "multiselect",
                                                "children": [
                                                    {
                                                        "text": ""
                                                    }
                                                ],
                                                "name": "berries",
                                                "opts": [
                                                    {
                                                        "label": "blueberry",
                                                        "value": "blueberry"
                                                    },
                                                    {
                                                        "label": "raspberry",
                                                        "value": "raspberry"
                                                    },
                                                    {
                                                        "label": "strawberry",
                                                        "value": "strawberry"
                                                    },
                                                    {
                                                        "label": "watermelon",
                                                        "value": "watermelon"
                                                    }
                                                ],
                                                "defaultValue": [
                                                    {
                                                        "label": "blueberry",
                                                        "value": "blueberry"
                                                    },
                                                    {
                                                        "label": "raspberry",
                                                        "value": "raspberry"
                                                    },
                                                    {
                                                        "label": "strawberry",
                                                        "value": "strawberry"
                                                    },
                                                    {
                                                        "label": "watermelon",
                                                        "value": "watermelon"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": ""
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "li",
                                "children": [
                                    {
                                        "type": "p",
                                        "children": [
                                            {
                                                "text": "To pick a date type in 2 @'s: "
                                            },
                                            {
                                                "type": "template-block",
                                                "templateType": "date",
                                                "children": [
                                                    {
                                                        "text": ""
                                                    }
                                                ],
                                                "name": "date"
                                            },
                                            {
                                                "text": ""
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "li",
                                "children": [
                                    {
                                        "type": "p",
                                        "children": [
                                            {
                                                "text": "To template a numeric field e.g. age, type in 2 #'s: "
                                            },
                                            {
                                                "type": "template-block",
                                                "templateType": "number",
                                                "children": [
                                                    {
                                                        "text": ""
                                                    }
                                                ],
                                                "name": "number",
                                                "defaultValue": 120
                                            },
                                            {
                                                "text": ""
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "li",
                                "children": [
                                    {
                                        "type": "p",
                                        "children": [
                                            {
                                                "text": "To create a void template (whose only purpose is to be typed over), type in 2 *'s: "
                                            },
                                            {
                                                "type": "template-block",
                                                "templateType": "void",
                                                "children": [
                                                    {
                                                        "text": ""
                                                    }
                                                ],
                                                "name": "myvoid"
                                            },
                                            {
                                                "text": ""
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "type": "li",
                "children": [
                    {
                        "type": "p",
                        "children": [
                            {
                                "text": "Snippets"
                            }
                        ]
                    },
                    {
                        "type": "ul",
                        "children": [
                            {
                                "type": "li",
                                "children": [
                                    {
                                        "type": "p",
                                        "children": [
                                            {
                                                "text": "Similar to PowerChart or EPIC, you can also select arbitrary parts of the document and save them as named snippets to be recalled later. Try highlighting this sentence and clicking the dot icon in the tooltip!"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "p",
        "children": [
            {
                "text": "FastDischarge also comes with all the rich text editing features you know and love! For more information, click the help button on the bottom right (?)."
            }
        ]
    }
]
`);