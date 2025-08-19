import { defineOperationApi } from '@directus/extensions-sdk';
import { nanoid, customAlphabet } from 'nanoid'

type Options = {
        slugField: string;
        length: number;
        alphabet: string;
};
type Data = Record<string, any>

export default defineOperationApi<Options>({
        id: 'directus-extension-operation-nanoid-slug',
        handler: async ({ slugField, length=21, alphabet=''  }, { data }: { data: Data }) => {
                let slug = '';
                if (alphabet.length) {
                        slug = customAlphabet('1234567890abcdef', length);
                } else {
                        slug = nanoid(length);
                }
                return Object.assign({}, data.$trigger.payload, {
                        [slugField]: slug
                })
        },
});


