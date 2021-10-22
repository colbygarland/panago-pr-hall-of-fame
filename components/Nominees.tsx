import Awards from '../awards.json';

interface Nominee {
  name: string;
  image?: string;
}

const nominees: any = Awards.nominees;

export const Nominees = () => {
  let count = 0;
  return nominees.map((n: Nominee) => {
    count++;
    return <p className={`font-sansBold text-primary text-4xl lg:text-8xl mb-20 lg:mb-40 ${count % 2 === 0 ? 'text-right' : ''}`}>{n.name}</p>;
  });
};
