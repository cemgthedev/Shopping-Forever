import axios from 'axios';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';

import '../../styles/global.css'
import { useEffect, useState } from 'react';

export function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    async function getProducts() {
      try {
        const requestProducts = await axios.get('https://fakestoreapi.com/products');
        const dataProducts = requestProducts.data;
        setProducts(dataProducts);

        const requestCategories = await axios.get('https://fakestoreapi.com/products/categories');
        const dataCategories = requestCategories.data;
        setCategories(dataCategories);

        setOptions([
          {href:'/', label:'Home', links:null},
          {href:'/categories', label:'Categories', links:dataCategories},
          {href:'/coupons', label:'Coupons', links:null},
          {href:'/sponsors', label:'Sponsors', links:null},
          {href:'/feedbacks', label:'Feedbacks', links:null},
          {href:'/about', label:'About', links:null}
        ]);

      } catch(error) {
        console.error(error);
      }
    }

    getProducts();
  }, []);

  return (
    <div className='bg-slate-50 
                    flex 
                    flex-col 
                    gap-2
                    h-screen
                   overflow-auto'>
      <Header options = { options } />
      <main
          className='flex
                     flex-col
                     gap-4
                     p-4'
      >
        <h1 className='text-2xl'>Categories</h1>
        <div
            className='flex
                       gap-8'
        >
            {
              categories.map((label) => (
                <Card key={ label } label={ label } href='https://source.unsplash.com/random' price={null}/>
              ))
            }
        </div>
        <h1 className='text-2xl'>All Products</h1>
        <div
            className='flex
                       flex-wrap
                       gap-8'
        >
            {
              products.map((product) => (
                <Card key={ product.title } label={ product.title } href={ product.image } price={ product.price }/>
              ))
            }
        </div>
      </main>
      <Footer />
    </div>
  );

}

