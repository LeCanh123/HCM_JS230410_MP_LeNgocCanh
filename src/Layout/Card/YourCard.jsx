import React from 'react'
import Head from './Head'
import Body from './Body'
import { Outlet } from 'react-router-dom'

export default function YourCard() {
  return (
    <>
    <div className='col-md-5 bg-white border border-success ms-1'>
        <Head></Head>
        <Body></Body>
        <Outlet></Outlet>
    </div>
    </>
  )
}
