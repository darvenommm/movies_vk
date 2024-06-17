import { ReduxProvider } from './stateManager';
import { ReactQueryProvider } from './reactQuery';
import { Router } from './router';

export const App = (): JSX.Element => {
  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <Router />
      </ReactQueryProvider>
    </ReduxProvider>
  );
};
