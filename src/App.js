import React from 'react'
import HomeScreen from './Components/Home/section'
import HeadderS from './Components/Headder/Headder'
import ModalY from './Components/cars/modaly'
import ModalS from './Components/cars/modals/modals'
import ModalX from './Components/cars/modalx/modalx'
import Panell from './Components/solar/panel/panel'
import Roof from './Components/solar/roff/roof'
import ItemA from './Components/Items/Item'

function App() {
  return (
    <div>
      <HeadderS />
      <HomeScreen/>
      <ModalY />
      <ModalS />
      <ModalX />
      <Panell />
      <Roof />
      <ItemA />
    </div>

  )
}

export default App