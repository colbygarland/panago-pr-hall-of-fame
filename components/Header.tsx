import Head from 'next/head';

export const Header = () => {
  return (
    <>
      <Head>
        <title>Panago PR Hall of Fame</title>
      </Head>
      <header className="p-16 flex justify-between">
        <img className="w-32 lg:w-48" src="PanagoWordmark.svg" alt="Panago" />
      </header>
    </>
  );
};
