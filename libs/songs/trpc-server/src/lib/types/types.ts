import type { inferAsyncReturnType } from '@trpc/server';
import type { appRouter } from '../routers';
import type { createContext } from '../utils';

export type AppRouter = typeof appRouter;

export type SongsTrpcContext = inferAsyncReturnType<typeof createContext>;
