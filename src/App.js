import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Howitworks from './pages/howitworks';  
import Pricing from './pages/pricing';
import Reviews from './pages/reviews';
import Services from './pages/services';
import Blog from './pages/blog';
import SignIn from './pages/signin';

function App() {
  return (
    <div style={{background:'#f1f1f1',height:700,borderRadius:10,}}>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/howitworks' component={Howitworks} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/reviews' component={Reviews} />
        <Route path='/services' component={Services} />
        <Route path='/blog' component={Blog} />
        <Route path='/signin' component={SignIn} />
      </Routes>
    </Router>
    </div>
  );
}
  
export default App;