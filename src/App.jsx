
import { BrowserRouter } from 'react-router-dom'
import { Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Product from "./components/Product"
import Contact from './components/Contact'
import Featured from './components/Featured'
import Popular from './components/Popular'
import NewAdd from './components/NewAdd'
import Userdetail from './components/Userdetail'
import Searchproduct from './components/Searchproduct'
import toast, { Toaster } from 'react-hot-toast';
import ProductPage from './components/ProductPage'
import Checkout from './components/Checkout'
import Orerdone from './components/Orerdone'


function App() {


  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home/> } >
      <Route index element={<Featured />}></Route>
      <Route path="featured" element={ <Featured />} />
        <Route path="popular" element={ <Popular />} />
        <Route path="newadded" element={ <NewAdd />} />
      </Route>
      <Route path="featured/:id" element={<Userdetail />} />

      <Route path="/about" element={ <About/> } />
      <Route path="/product" element={ <ProductPage/> } />
      
      <Route path="/searchproduct" element={ <Searchproduct/> } />
       
 
     
      <Route path="/Contact" element={ <Contact/> } />
      <Route path="/checkout" element={ <Checkout/> } />
      <Route path="/done" element={ <Orerdone />} />
     
     
    </Routes>
    <Toaster />
    </BrowserRouter>
  )
}

export default App
