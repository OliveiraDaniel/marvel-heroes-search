import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'
import Showcase from './components/Showcase'
import HeroDetails from './components/HeroDetails'

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Showcase />} />
          <Route path="/hero/:id" element={<HeroDetails />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;