import { defineOperationApi } from '@directus/extensions-sdk';
import { nanoid, customAlphabet } from 'nanoid'

type Options = {
        slugField: string;
        alphabet: string;
        length: string;
};
type Data = Record<string, any>

export default defineOperationApi<Options>({
        id: 'directus-extension-operation-nanoid-slug',
        handler: async ({ slugField, alphabet='', length='21' }, { data }: { data: Data }) => {
                let slug = '';
                if (alphabet.length) {
                        slug = customAlphabet('1234567890abcdef', parseInt(length));
                } else {
                        slug = nanoid(parseInt(length));
                }
                return Object.assign({}, data.$trigger.payload, {
                        [slugField]: slug
                })
        },
});


