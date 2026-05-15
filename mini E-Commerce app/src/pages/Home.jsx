import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css';

const Home = () => {
  const featured = products.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Mini E-Commerce</h1>
          <p>Discover amazing products at unbeatable prices!</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/products" className="see-all-btn">See All Products</Link>
      </section>
    </div>
  );
};

export default Home;