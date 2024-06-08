import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import Container from './components/Container';

function App() {
  return (
    <>
      <Header />
        <Container>
          <Search placeholder={'Busque o Herói'} />
          <Showcase />
        </Container>
      <Footer />
    </>
  )
}

export default App;
