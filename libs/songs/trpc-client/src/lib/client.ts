import type { AppRouter } from '@hear/songs/trpc-server';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { getBaseUrl } from './utils/getBaseUrl';

export const songsAppTrpcClient = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   **/
  ssr: true,
});
