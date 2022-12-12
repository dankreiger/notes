import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../routers';
import { createContext } from '../utils';

export const songsAppTrpcHandler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError(err) {
    console.error('Error:', err);
  },
});
