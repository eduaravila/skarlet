import initGQL, { toInitialValue } from "../client/index";

/** @type {import('./$types').PageServerLoad} */
export function load(event) {
  const client = initGQL(event.fetch);
  const q = `
        query {
        socialsCollection{
            items{
            url
            urlname
            }
        }
        }
    `;

    const res = client.query(q, {}).toPromise();
    return toInitialValue(res);
}
