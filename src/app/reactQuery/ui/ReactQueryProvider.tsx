import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '../model/queryClient';

import type { ReactNode } from 'react';

interface IReactQueryProviderProps {
  children: ReactNode | ReactNode[];
}

export const ReactQueryProvider = ({ children }: IReactQueryProviderProps): JSX.Element => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
