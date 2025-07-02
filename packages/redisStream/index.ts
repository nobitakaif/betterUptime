import { createClient } from "redis"

const client = createClient().on("error",(err)=>console.log("Redis client error",err));

//  this is the cli > XADD race:france * rider Castilla speed 30.2 position 1 location_id 1 

type websiteEvent ={
    url:string,
    id:string
}

async function xAdd ({url,id}:websiteEvent){
    await client.xAdd(
        'betteruptime:website', '*', {
          url,
          id
        }
    )
}

export async function xAddBulk(website: websiteEvent[]){
    for(let i = 0; i<website.length;i++){
        await xAdd({
            url:website[i].url,
            id:website[i].id
        })
    }
}