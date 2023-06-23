import React from 'react'
import "./App.scss"
import ListProducts from './Layout/ListProducts/ListProducts'
import YourCard from './Layout/Card/YourCard'

export default function App() {
  return (
    <div className=' container'>
      <div className="d bg-secondary row ps-0 pe-0 pt-5 text-center">
      <ListProducts></ListProducts>
      <YourCard></YourCard>
      </div>

    </div>
  )
}
