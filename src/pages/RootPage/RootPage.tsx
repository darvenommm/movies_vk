import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';

export const RootPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
