import React from 'react';
import ReactDOM from 'react-dom/client';
// import Detail from './pages/Detail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
<BrowserRouter>
	<Routes>
        <Route  path="/" element={<Home />}/>
        {/* <Route path="Detail" element={<Detail />} /> */}
        <Route path="*" element={<NotFound />} />
	</Routes>
	</BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
