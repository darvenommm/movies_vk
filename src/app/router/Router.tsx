import { RouterProvider } from 'react-router-dom';

import { router } from './model/router';

export const Router = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
