import sanityClient from '@sanity/client';
import imageUrlBulder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "tv4z50ix",
    dataset:'production',
    apiVersion: '2021-10-21',
    useCdn:false,
    token: import.meta.env.VITE_APP_SANITY_API_TOKEN, 
    ignoreBrowserTokenWarning: true
});
// console.log(import.meta.env.VITE_APP_SANITY_PROJECT_ID, import.meta.env.VITE_APP_SANITY_API_TOKEN)
const builder = imageUrlBulder(client);
export const urlFor = (source) => builder.image(source);
