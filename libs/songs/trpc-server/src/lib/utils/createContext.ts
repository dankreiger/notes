/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext() {
  return {
    API_URL: 'https://api-stg.jam-community.com',
    abortOnUnmount: true,
  } as const;
}
