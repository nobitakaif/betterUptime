import { createClient } from "redis"

const client = await  createClient()
    .on("error",(err)=>console.log("Redis client error",err))
    .connect();

//  this is the cli => XADD race:france * rider Castilla speed 30.2 position 1 location_id 1 
    // to read the event from redis-cli => XREAD COUNT 1 STREAMS betteruptime:website 0

type websiteEvent ={
    url:string,
    id:string
}

type MessageType ={
    id:string,
    messages:{
        url:string,
        id:string
    }
}

const STREAM_NAME = "betteruptime:website"

async function xAdd ({url,id}:websiteEvent){
    await client.xAdd(
        STREAM_NAME, '*', {
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

// consumerGroup is region like india usa america japan something like that
export async function xReadGroup(consuermGroup:string, wokderId: string) : Promise<MessageType[] | undefined>{
    
    const res = await client.xReadGroup(
        consuermGroup, wokderId, {
            key: STREAM_NAME,
            id: '>'
        },{
            COUNT: 5
        }
    )
    // @ts-ignore
    let message :MessageType[] | undefined =res?.[0]?.messages;
    return message  
}

async function xAck(consuermGroup:string, eventId: string){
    await client.xAck( STREAM_NAME, consuermGroup, eventId)
}

export async function xAckBulk(consuermGroup:string, eventIds:string[]){
    eventIds.map(eventId =>{
        xAck(consuermGroup,eventId)
    })
}