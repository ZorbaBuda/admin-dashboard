import connect from "@/lib/db";
import { Home } from "@/lib/models/homePage.model";
import { NextResponse } from "next/server";


export async function GET() {

    try {

        await connect()
        const data = await Home.find()


        return new NextResponse(JSON.stringify(data), {status : 200})
        
    } catch (error) {
        return NextResponse.json(
            { error: true, message: "Something went wrong", data: error },
            { status: 500 }
          );
    }
}