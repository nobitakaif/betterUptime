import {  xAckBulk, xReadGroup } from "redisstream";
import { client } from "db/client"
import  axios  from "axios"

const REGION_ID = process.env.REGION_ID!
const WORKER_ID = process.env.WORKER_ID!

if(!REGION_ID){
    throw new Error("REGOIN ID Not Provided")
}

if(!WORKER_ID){
    throw new Error("WORDER ID Not Provided")
}


type message={
        id:string
        url:string
    }


async function main(){
    
        // read from the stream
        const res = await xReadGroup(REGION_ID,WORKER_ID)
        if(!res){
            return;
        }
        // process the website and the store the result in the db. # it should be probably be routed through a queue in a bulk db request 
        let response = res.map(({message}:any) => getWebsiteResponse(message.url, message.id))
        await Promise.all(response)
        // ack back to the queue that this event has been processed 
        xAckBulk(REGION_ID, res.map(({id}) => id))
    
}

async function getWebsiteResponse( url:string, websiteId:string){
    return new Promise<void>((resolve, reject)=>{
                const startTime = Date.now()
                axios.get(url).then(async (res)=>{
                    const endTime = Date.now()
                    await client.websiteTicks.create({
                        data:{
                            response_time_ms : endTime - startTime,
                            status: "Good",
                            region_id: REGION_ID,
                            website_id: websiteId
                        }
                    })
                    resolve()
                }).catch(async(e)=>{
                    const endTime = Date.now()
                    await client.websiteTicks.create({
                        data:{
                            response_time_ms: endTime - startTime,
                            region_id: REGION_ID,
                            website_id: websiteId,
                            status:"Bad"
                        }
                    })
                })
                resolve()
    })
}

main()