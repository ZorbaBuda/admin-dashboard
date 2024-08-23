import HomeForm from "@/components/forms/HomeForm";
import { getHomeData } from "@/lib/actions/home.actions";
import React from "react";

export default async function page() {
  const homeData = await getHomeData();
  const id: string = homeData._id;
  delete homeData._id;
  // console.log(homeData.__V)
  // console.log(homeData)
  return (
    <div className="flex flex-col gap-5">
      <div>Home Page edition</div>
      <p>Select the page section you want to edit </p>
      <div>
        <p>After editing, press SAVE to store changes in database.</p>
        <p>
          If you are sure about your changes, press PUBLISH to update content in
          the client (changes will be updated instantly!!)
        </p>
      </div>
      <HomeForm id={id} defaultValues={homeData} />
    </div>
  );
}
