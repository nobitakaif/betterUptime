import { client } from "db/client";
import { xAddBulk } from "redisstream";


async function main(){
    const website = await client.website.findMany({
        select:{
            url: true,
            id: true
        }
    })
    console.log("checking")
    await xAddBulk(website.map(w=>({
        url: w.url,
        id: w.id
    })))
}


// this is interval run every 3 minutes
setInterval(()=>{
    main()
}, 3 * 1000)
main()