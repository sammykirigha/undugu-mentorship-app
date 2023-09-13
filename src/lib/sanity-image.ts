import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';


const imageBuilder = createImageUrlBuilder({
  projectId: "4cu9frce",
  dataset: "production",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url();
};
