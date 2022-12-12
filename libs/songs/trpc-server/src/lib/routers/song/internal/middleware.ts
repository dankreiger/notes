import { middleware } from '../../../shared';

export const trendingSongsMiddleware = middleware(({ ctx, next }) =>
  next({ ctx: { ...ctx, API_URL: `${ctx.API_URL}/song/trending` as const } })
);

export const likeSongsMiddleware = middleware(({ ctx, next }) =>
  next({
    ctx: {
      ...ctx,
      API_URL:
        `${ctx.API_URL}/interact/like?apikey=${process.env.SONGS_API_KEY}` as const,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  })
);
