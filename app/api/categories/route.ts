import connect from "@/lib/db";
import Category from "@/lib/models/category.model";
import { NextResponse } from "next/server";


export async function GET() {

    try {

        await connect()
        const categories = await Category.find().sort({createdAt: -1})

        return new NextResponse(JSON.stringify(categories), {status : 200})
        
    } catch (error) {
        return NextResponse.json(
            { error: true, message: "Something went wrong", data: error },
            { status: 500 }
          );
    }
}