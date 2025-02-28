import React from 'react'
import Header from '../home/header/Header'
import Footer from '../home/footer/Footer'
import Buttons from '../home/header/Buttons'
import CatalogMain from './catalogMain/CatalogMain'
export const Catalog = () => {
  return (
    <div>
         <Buttons />
         <CatalogMain/>
         <Footer />
    </div>
  )
}
export default Catalog;