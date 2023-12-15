import logo from './logo.svg';
import './App.css';
import Navbar1 from './component/Navbar1';
import Header from './component/Header';
import TableBooking from './component/TableBooking';
import About from './component/About';
import TestimonialCard from './component/Testimonial/TestimonialCard';
import ProductCard from './component/product/ProductCard';
function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Header/>
      <TableBooking/>
      <About/>
      <TestimonialCard/>
      <ProductCard/>
    </div>
  );
}

export default App;
