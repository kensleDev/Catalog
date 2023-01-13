import type { FetchError } from "../shop-site/types";

export const FetchJson = async <T>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T | FetchError> => {
  try {
    const res = await fetch(input, init);

    if (res.ok) {
      return res.json() as T;
    } else {
      console.error({ res });
      return {
        msg: "Sorry there was a problem getting the data",
        status: res.status,
        detail: res,
      };
    }
  } catch (error) {
    console.error({ error });
    return {
      msg: "Sorry there was a problem with the server",
      status: error.status,
      detail: error,
    };
  }
};

export function isFetchError<T>(data: T | FetchError): data is FetchError {
  return (<FetchError>data).msg !== undefined;
}

export async function getPageData(promise) {
  const res = await promise;

  if (isFetchError(res)) {
    console.error({ fetchError: res });
  }

  return res;
}
