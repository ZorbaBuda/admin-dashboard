'use server'
import { PublishTypes } from "../data";


export async  function publishToClient(publishType : PublishTypes){

    const response = await fetch(`http://localhost:3001/api/publish/${publishType}`)

}