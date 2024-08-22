'use server'
import { PublishTypes } from "../data";
import connect from "../db";
import { Home } from "../models/homePage.model";
import { HomeProps } from "../schemas/home-page-schemas";
// https://codingwithmanny.medium.com/3-ways-to-configure-cors-for-nextjs-13-app-router-api-route-handlers-427e10929818
// https://www.youtube.com/watch?v=0unKd46yVkw
export async  function publishToClient(publishType : string){


    await connect()

    const docs = await Home.find()
    const doc = docs[0]
    

    // console.log(JSON.stringify(values))
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({type: publishType, values : doc })
    }

   

    const response = await fetch(`http://localhost:3001/api/publish` ,
        {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({type: publishType, en: doc.en, es:doc.es})
    }
)
     const data = await response.json()

    //  console.log(response)
}