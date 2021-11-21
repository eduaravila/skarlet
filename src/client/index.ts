import { initClient } from "@urql/svelte";

const CONTENFUL_SPACE = process.env.CONTENFUL_SPACE;
const CONTENFUL_ENVIRONMENT = process.env.CONTENFUL_ENVIRONMENT;
const CONTENFUL_ACCESS_TOKEN = process.env.CONTENFUL_ACCESS_TOKEN;

initClient({
  fetchOptions: {
    headers: {
      "content-type": "application/json",
      authotiation: `Bearer ${CONTENFUL_ACCESS_TOKEN}`,
    },
  },
  url: `https://graphql.contentful.com/content/v1/spaces/${CONTENFUL_SPACE}/environments/${CONTENFUL_ENVIRONMENT}`,
});
