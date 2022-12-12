import { TRPCError } from '@trpc/server';
import { ZodError } from 'zod';

export const getError = (err: ZodError | unknown) => {
  if (err instanceof ZodError) {
    return new TRPCError({
      code: 'PARSE_ERROR',
      message: err.message,
      cause: err,
    });
  } else {
    return new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Something went wrong',
      cause: err,
    });
  }
};
