import React from 'react';
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;