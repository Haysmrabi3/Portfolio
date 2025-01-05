import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import LayOut from '../LayOut/LayOut'






export default function Router() {

    const routers = createHashRouter([
        {path : "" , element : <LayOut/>}
    ])



  return <>
  <RouterProvider router={routers}/>
  </>
}
