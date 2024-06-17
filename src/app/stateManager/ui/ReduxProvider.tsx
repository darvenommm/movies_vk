import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '@/share/stateManager/redux';

import type { ReactNode } from 'react';

interface IReduxProviderProps {
  children: ReactNode | ReactNode[];
}

export const ReduxProvider = ({ children }: IReduxProviderProps): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
