import Head from 'next/head';
import { copy } from '../lib';

export const Header = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>
          {copy.title} {currentYear}
        </title>
      </Head>
      <header className="p-16 flex justify-between">
        <img className="w-32 lg:w-48" src="PanagoWordmark.svg" alt="Panago" />
      </header>
    </>
  );
};
