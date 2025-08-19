import { defineOperationApp } from '@directus/extensions-sdk';

export default defineOperationApp({
        id: 'directus-extension-operation-nanoid-slug',
        name: 'NanoID Slug',
        icon: 'box',
        description: 'Generates NanoID slugs.',
        overview: ({ slugField, alphabet, length }) => [
                {
                        label: 'Name of the slug field',
                        text: slugField,
                },
                {
                        label: 'Custom alphabet (optional)',
                        text: alphabet,
                },
                {
                        label: 'Length (default = 21)',
                        text: length,
                },
        ],
        options: [
                {
                        field: 'slugField',
                        name: 'Name of the slug field',
                        type: 'string',
                        meta: {
                                width: 'half',
                                interface: 'input',
                        },
                },
                {
                        field: 'alphabet',
                        name: 'Custom alphabet',
                        type: 'string',
                        meta: {
                                width: 'half',
                                interface: 'input',
                        },
                },
                {
                        field: 'length',
                        name: 'Length',
                        type: 'number',
                        meta: {
                                width: 'half',
                                interface: 'input',
                        },
                },
        ],
})