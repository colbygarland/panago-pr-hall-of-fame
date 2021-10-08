import { titleToSlug } from '../lib';

export const Heading = ({ children }: any) => {
  function handleOnClick() {
    const slug = titleToSlug(children);
    // @ts-ignore
    let url = window.location.href;
    url = url.replace(/\/$/, '');
    // @ts-ignore
    navigator.clipboard.writeText(url + slug);
  }
  return (
    <h2 onClick={handleOnClick} className="font-sansBold text-6xl text-gray-700 flex items-center hover:underline cursor-pointer">
      {children}
      <span className="inline-block text-2xl ml-6">🔗</span>
    </h2>
  );
};
