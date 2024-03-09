//import logo from './logo.svg';
import './App.css';
import Footer from './customer/component/Footer/Footer';
import Navigation from './customer/component/Navigation/Navigation';
import Product from './customer/component/Product/Product';
import HomePage from './customer/pages/HomePages/HomePages';
import ProductDetails from './customer/component/ProductDetails/ProductDetails';
function App() {
  return (
    <div className="">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navigation />
      <div>
        <HomePage/>
        <Product/> 
        <ProductDetails/>
      </div>
      <Footer/>
    </div>
  );
}
//hello world;
export default App;
