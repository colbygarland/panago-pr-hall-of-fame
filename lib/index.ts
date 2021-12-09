import Json from '../awards.json';

export const titleToSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

export const copy = Json.copy;
export const nominees = Json.nominees;
export const awards = Json.awards;
