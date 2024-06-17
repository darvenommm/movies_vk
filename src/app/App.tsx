import { ReactQueryProvider } from './reactQuery';
import { Router } from './router';

export const App = (): JSX.Element => {
  return (
    <ReactQueryProvider>
      <Router />
    </ReactQueryProvider>
  );
};
