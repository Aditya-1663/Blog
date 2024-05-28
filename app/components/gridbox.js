import React from 'react'
import Link from 'next/link'

export default function gridbox({allPostsData}) {
  return (
    <div  className="">
    
  <div className={`post container `}>

{allPostsData.map(({ id, date, title, description,image }) => (
    
    <div className="post-box tech" >

      <Link href={`/posts/${id}`}>
        <img src={image} alt="" className="post-img"/>
        <h2 className="category">{id}</h2>
      </Link>
        <Link href={`/posts/${id}`} className="post-title">{title}</Link>
        
        <span className="post-date">{date}</span>
        <p className="post-description">{description}</p>
       
    </div>
        ))}
{allPostsData.map(({ id, date, title, description,image }) => (
          
    <div className="post-box tech">
       <Link href={`/posts/${id}`}>
        <img src={image} alt="" className="post-img"/>
        <h2 className="category">{id}</h2>
      </Link>
        <Link href={`/posts/${id}`} className="post-title">{title}</Link>
        <span className="post-date">{date}</span>
        <p className="post-description">{description}</p>
        
    </div>
        ))}
   
</div>
     
    </div>
  )
}
