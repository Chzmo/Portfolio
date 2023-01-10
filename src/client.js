import sanityClient from '@sanity/client';
import imageUrlBulder from '@sanity/image-url';

export const client = sanityClient({
    projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID,
    dataset:'chzmo',
    apiVersion: '2021-10-21',
    useCdn:false,
    token: import.meta.env.VITE_APP_SANITY_API_TOKEN, 
    ignoreBrowserTokenWarning: true
});

const builder = imageUrlBulder(client);
export const urlFor = (source) => builder.image(source);
