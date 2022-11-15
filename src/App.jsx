import './App.css'
import { EmblaCarousel } from './components/Carousel';
import Categorias from './components/Categorias';
import Header from './components/Header';
import Search from './components/Search';
import Vitrine from './components/Vitrine';
import Footer from './Footer';

function App() {

  return (
    <>
      <Header />
      <EmblaCarousel/>
      <Categorias/>
      <Search/>
      <Vitrine/>
      <Footer />
    </>
  )
}

export default App
