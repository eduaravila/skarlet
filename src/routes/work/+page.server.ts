import initGQL, { toInitialValue } from "../../client/index";


/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
    const client = initGQL(event.fetch);
    const q = `
    query {
        resoursesCollection{
          items{
            title
            at
            links
            portrait{
              title
              url
              
            }
            id
            points
            metadata
            resourcesLinksCollection{
              items{
                sys{
                  id
                }
              }
            }
          }
        }
      }
`;

    const res = client.query(q, {}).toPromise();
    let values = await toInitialValue(res);
    
    
    await Promise.all(
      (await values.data.resoursesCollection.items).map(async (item) => {
        const resources = await Promise.all(
          item.resourcesLinksCollection.items.map(async (resource) => {
            const res = await event.fetch("/api/resource/" + resource.sys.id);
            const body = await res.json();             
            return { ...resource, ...body.data.resource};
          })
        );  
        item.resourcesLinksCollection.items = resources;      
        return {  ...resources};
      })
    );  
    
    return {
        projects: values
    }
}
