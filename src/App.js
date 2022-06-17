import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import {Layout, Typography, Space} from "antd"
import "./App.css"

import {Navbar, CryptoDetails, Cryptocurrencies , Homepage, Exchanges, News} from './components'


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
           <div className="routes">
             <Routes>
               <Route exact path="/" element ={<Homepage/>} /> 
               <Route path="/exchanges" element={<Exchanges />} />
               <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
               <Route path="/crypto/:coinId" element={<CryptoDetails />} />
               <Route path="/news" element={<News />} />
             </Routes>
             </div>
        </Layout>
         <div className="footer">
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Sultan-crypto <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
        </div>
   </div>
  );
}

export default App;
