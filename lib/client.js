import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
  projectId: 'j7uwwze9',
  dataset: 'production',
  apiVersion: '2023-12-11',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);