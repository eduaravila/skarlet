import { Client, cacheExchange, fetchExchange } from "@urql/svelte";

import { CONTENFUL_ACCESS_TOKEN, CONTENFUL_ENVIRONMENT, CONTENFUL_SPACE } from '$env/static/private';

/**
 * Helper function to create an urql client for a server-side-only load function
 *
 *
 * @returns
 */
export default (fetch) => {
  return new Client({
    fetch,
    url: `https://graphql.contentful.com/content/v1/spaces/${CONTENFUL_SPACE}/environments/${CONTENFUL_ENVIRONMENT}`,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${CONTENFUL_ACCESS_TOKEN}`,
      },
    },
  });
};


/**
 * Make the result object of a urql query serialisable.
 *
 *
 * @template T
 * @param {Promise<import('@urql/svelte').OperationResult<T, any >>|import('@urql/svelte').OperationResult<T, any >} result
 * @returns {Promise<{fetching:false, error: undefined | {name?: string, message?: string; graphQLErrors?: any[]; networkError?: Error; response?: any;}, data: T|undefined}>}
 */
export async function toInitialValue(result) {
  const { error, data } = await result;

  // required to turn class array into array of javascript objects
  const errorObject = error ? {} : undefined;
  if (errorObject) {
    console.warn(error);
    errorObject.graphQLErrors = error?.graphQLErrors?.map((e) => ({ ...e }));
    errorObject.networkError = { ...error?.networkError };
    errorObject.response = { value: "response omitted" };
  }

  return {
    fetching: false,
    error: { ...error, ...errorObject },
    data,
  };
}