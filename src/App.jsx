import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import ProductPage from './pages/ProductPage.jsx';
import About from './pages/About.jsx';
import Support from './pages/Support.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="product/:slug" element={<ProductPage />} />
        <Route path="about" element={<About />} />
        <Route path="support" element={<Support />} />
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
