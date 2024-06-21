import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './1-react-tree/table'
import Poetry from './2-react-cycle/1-poetry'
import Display from './2-react-cycle/2-infinite'

function App() {

  return (
  <div>
    <Table />
    <Poetry />
    {/* <Display /> */}
  </div>
  )
}

export default App
