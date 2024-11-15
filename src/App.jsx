import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Room from './pages/Room'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div>
      <h1>Kasa</h1>

      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="room/:roomId" element={<Room />} />
          <Route path="about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
