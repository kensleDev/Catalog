export const FetchJson = async <T>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> => {
  const res = await fetch(input, init);
  return (await res.json()) as T;
};
