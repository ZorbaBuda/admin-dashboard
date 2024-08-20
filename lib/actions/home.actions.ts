'use server'

import connect from "../db";
import { Home } from "../models/homePage.model";
import { getAuthSession } from "../next-auth";
import { HomeProps, homeSchema } from "../schemas/home-page-schemas";

export async function editHome({values}: {values: HomeProps}){
    const session = await getAuthSession()

    const isUser = session?.user.role === "USER"

    if (!isUser) {
        return { error: "Unauthorized" };
      }

      const parsedBody = homeSchema.safeParse(values);

      if (!parsedBody.success) {
        const { errors } = parsedBody.error;
    
        return { error: "Invalid request", data: errors };
      }
    
      const { data } = parsedBody;

      const {en, es} = data

      try {
        
        await connect()

        const response = await Home.create({
            en,
            es
        })

        const result = JSON.parse(JSON.stringify(response))

        return {
          success: "Operation successful!",
           data: result,
        };


      } catch (error) {
        console.log(error)
        return { error: "Something went wrong", data: error };
      }
    
}