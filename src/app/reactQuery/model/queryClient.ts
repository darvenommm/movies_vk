import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 120 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});
