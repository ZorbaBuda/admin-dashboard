import HomeForm from '@/components/forms/HomeForm'
import { getHomeData } from '@/lib/actions/home.actions'
import React from 'react'

export default async function page() {

  const homeData = await getHomeData()
  const id : string = homeData._id
  delete homeData._id
  // console.log(homeData.__V)
  // console.log(homeData)
  return (
    <div className='flex flex-col'>
    <div>Home Page edition</div>
    <HomeForm id={id} defaultValues={homeData}/>
    </div>
  )
}
