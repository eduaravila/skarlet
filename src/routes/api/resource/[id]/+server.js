import { json } from "@sveltejs/kit";
import initGQL, { toInitialValue } from "../../../../client/index";

/** @type {import('./$types').RequestHandler} */

export async function GET({ params, fetch}) {
    const { id } = params;
    const client = initGQL(fetch);
    const q = `
        query($id: String!) {
        resource(id: $id){
        url
        label
        image{
            url
            title      
        }
        iconClass
        imageUrl
        }
    }
    `;
    const res = client.query(q,{id});
    const body = await toInitialValue(res);
    return json(body);
}