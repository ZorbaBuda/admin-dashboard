"use server";

import connect from "../db";
import { Home } from "../models/homePage.model";
import { getAuthSession } from "../next-auth";
import { HomeProps, homeSchema } from "../schemas/home-page-schemas";
import { parseStringify } from "../utils";

export async function getHomeData() {
  const session = await getAuthSession();

  const isUser = session?.user.role === "USER";

  if (!isUser) {
    return { error: "Unauthorized" };
  }

  try {
    await connect();
    const dataArr = await Home.find();

    const data = dataArr[0];

    return parseStringify(data);
  } catch (error) {
    return JSON.stringify({
      error: true,
      message: "Something went wrong",
      data: error,
    });
  }
}

export async function createHome({ values }: { values: HomeProps }) {
  const session = await getAuthSession();

  const isUser = session?.user.role === "USER";

  if (!isUser) {
    return { error: "Unauthorized" };
  }

  const parsedBody = homeSchema.safeParse(values);

  if (!parsedBody.success) {
    const { errors } = parsedBody.error;

    return { error: "Invalid request", data: errors };
  }

  const { data } = parsedBody;

  const { en, es } = data;

  try {
    await connect();

    const response = await Home.create({
      en,
      es,
    });

    const result = JSON.parse(JSON.stringify(response));

    return {
      success: "Operation successful!",
      data: result,
    };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong", data: error };
  }
}


export async function editHome({ values, id }: { values: HomeProps, id: string }) {
  const session = await getAuthSession();

  const isUser = session?.user.role === "USER";

  if (!isUser) {
    return { error: "Unauthorized" };
  }

  const parsedBody = homeSchema.safeParse(values);

  if (!parsedBody.success) {
    const { errors } = parsedBody.error;

    return { error: "Invalid request", data: errors };
  }

  const { data } = parsedBody;

  const { en, es } = data;

  try {
    await connect();

    const response = await Home.findOneAndUpdate({_id: id},{
      en,
      es,
    });

    const result = JSON.parse(JSON.stringify(response));

    return {
      success: "Operation successful!",
      data: result,
    };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong", data: error };
  }
}

