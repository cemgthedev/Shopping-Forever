import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import '../../styles/global.css'

const options = [
  {href:'/', label:'Home'},
  {href:'/categories', label:'Categories'},
  {href:'/coupons', label:'Coupons'},
  {href:'/sponsors', label:'Sponsors'},
  {href:'/feedbacks', label:'Feedbacks'},
  {href:'/about', label:'About'}
];

export function Home() {

  return (
    <div className='bg-slate-50 
                    flex 
                    flex-col 
                    gap-4 
                    h-screen
                   overflow-auto'>
      <Header options = { options } />
      <main>
          <div className='bg-slate-500 h-[50vh]'
      ></div>
      </main>
      <Footer />
    </div>
  );

}

