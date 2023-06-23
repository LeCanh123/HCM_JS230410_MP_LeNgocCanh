import React from 'react'
import Head from './Head'
import Body from './Body'

export default function ListProducts() {
  return (
    <>
    <div className='col-md-5 bg-white border border-success me-5 ms-5'>
        <Head></Head>
        <Body></Body>
    </div>
    </>
  )
}
