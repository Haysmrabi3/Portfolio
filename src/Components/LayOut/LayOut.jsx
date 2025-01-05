import React from 'react'
import { Outlet } from 'react-router-dom'
import MainContent from '../MainContent/MainContent'












export default function LayOut() {



  return <>
  <MainContent/>
  <Outlet/>
  </>
}
