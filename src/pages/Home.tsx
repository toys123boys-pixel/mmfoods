import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Button } from '../components/ui/button';
import productData from '@/data/productData';
import Offers from '@/components/OfferCard';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredProducts = productData.slice(0, 8);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-5xl font-extrabold tracking-tight mb-6"
          >
            Welcome to MM Foods
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="text-xl/8 mb-8 max-w-2xl mx-auto opacity-95"
          >
            Discover the finest collection of chocolate products, from premium cocoa powder to delicious chocolate chips. 
            Quality ingredients for all your chocolate cravings.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <Link to="/products">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-800 shadow">
                Shop Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium chocolate products
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="shadow hover:shadow-md">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className='py-16'>
          <Offers/>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Premium Quality</h3>
              <p className="text-gray-600">Only the finest chocolate products sourced from trusted suppliers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Fast Delivery</h3>
              <p className="text-gray-600">Quick and secure delivery to your doorstep</p>
            </div>
            
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-amber-900">100% Satisfaction</h3>
              <p className="text-gray-600">Money-back guarantee if you're not completely satisfied</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;