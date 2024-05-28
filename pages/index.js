// pages/index.js

import Navbar from '@/app/components/navbar';
import { getData } from '../lib/posts';
import  Gridbox from '@/app/components/gridbox';
import Footer from '@/app/components/footer';


export async function getStaticProps() {
  const allPostsData = getData();
  
  return { 
    props: {  
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div  className="body">
      <Navbar/>
      <div className='obox'>


      <div className='box'>
         <h1>The heaven for bloggers</h1>
         
      </div>

      </div>

      <div className='blogs'> <h2>Latest Blogs</h2><hr className='hr'></hr></div>
       <Gridbox allPostsData={allPostsData} />
   <Footer/>
      
    </div>
  );
}
