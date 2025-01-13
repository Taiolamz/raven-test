import { BrowserRouter } from 'react-router'
import './App.css'
import AppRoute from './routes'

function App() {


  return (
    <>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </>
  )
}

export default App
