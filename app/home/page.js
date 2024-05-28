"use client";
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Grid  from '../components/gridbox'
import { getData } from '@/lib/posts';
// export const getStaticProps= async ()=> {
//   const allPostsData = getData();
//   return { 
//     props: {
//       allPostsData
//     }
//   };
// }
export default function Home() {

  // const allPostsData = getSortedPostsData();

  
  return (  
  <>
   
  <Navbar/>

  <div className='box4'> </div>
<Grid/>
  <hr/>
  </>
  );
}
