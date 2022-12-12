import { router } from '../shared';
import { songRouter } from './song';

export const appRouter = router({
  song: songRouter,
});
