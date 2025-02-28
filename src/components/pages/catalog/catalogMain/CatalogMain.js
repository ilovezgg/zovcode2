import React from 'react'
import z from './CatalogMain.module.css'
import HouseCard from './HouseCard'
const CatalogMain = () => {
  return (
    <div className={z.mainCatalog}>
      <div className={z.catalogContainer}>
      <HouseCard
        image={require('./imgHouses/house1.jpg')}
        title="Проект Д1"
        description="6х6."
        price="3 000 000 ₽"
      />
      <HouseCard
        image={require('./imgHouses/house1.jpg')}
        title="Проект Д2"
        description="Современный дизайн, бассейн и вид на море."
        price="3 000 000 ₽"
      />
      <HouseCard
        image={require('./imgHouses/house1.jpg')}
        title="Проект Д3"
        description="Современный дизайн, бассейн и вид на море."
        price="3 000 000 ₽"
      />
      <HouseCard
        image={require('./imgHouses/house1.jpg')}
        title="Проект Д4"
        description="Современный дизайн, бассейн и вид на море."
        price="3 000 000 ₽"
      />
      <HouseCard
        image={require('./imgHouses/house1.jpg')}
        title="Проект Д5"
        description="Современный дизайн, бассейн и вид на море."
        price="3 000 000 ₽"
      />
      <HouseCard
        image={require('./imgHouses/house1.jpg')}
        title="Проект Д6"
        description="Современный дизайн, бассейн и вид на море."
        price="3 000 000 ₽"
      />
      <HouseCard
        image={require('./imgHouses/house1.jpg')}
        title="Проект Д7"
        description="Современный дизайн, бассейн и вид на море."
        price="3 000 000 ₽"
      />
      <HouseCard
        image={require('./imgHouses/house1.jpg')}
        title="Проект Д8"
        description="Современный дизайн, бассейн и вид на море."
        price="3 000 000 ₽"
      />
      <HouseCard
        image={require('./imgHouses/house1.jpg')}
        title="Проект Д9"
        description="Современный дизайн, бассейн и вид на море."
        price="3 000 000 ₽"
      />
      <HouseCard
        image={require('./imgHouses/house1.jpg')}
        title="Проект Д10"
        description="Современный дизайн, бассейн и вид на море."
        price="3 000 000 ₽"
      />
      
      </div>
    </div>
  )
}

export default CatalogMain
