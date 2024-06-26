import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';

import containerClasses from '@/share/styles/components/container.module.scss';
import classes from './RootPage.module.scss';

export const RootPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className={[containerClasses.container, classes.main].join(' ')}>
        <Outlet />
      </main>
    </>
  );
};
