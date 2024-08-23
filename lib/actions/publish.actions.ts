"use server";
import connect from "../db";
import { Home } from "../models/homePage.model";
import { getAuthSession } from "../next-auth";

//TODO auth

export async function publishToClient(publishType: string) {
  const session = await getAuthSession();

  const isUser = session?.user.role === "USER";

  if (!isUser) {
    return { error: "Unauthorized" };
  }
  const URL =
    process.env.ENVIRONMENT! === "production"
      ? process.env.CLIENT_URL_PROD!
      : process.env.CLIENT_URL_DEV!;
  try {
    await connect();

    const docs = await Home.find();
    const doc = docs[0];

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: publishType, en: doc.en, es: doc.es }),
    };

    const response = await fetch(`${URL}/api/publish`, requestOptions);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
}
