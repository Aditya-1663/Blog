// pages/posts/[id].js
import style from '@/app/style/post.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <div className="body">
    <Navbar/>
     <div className={style.postbox}>
     <img className={style.postimg} src={postData.image} alt=""/>

     </div>

    <div className={style.outerbox}>
      <div className={style.innerbox}>
        
      <h1>{postData.title}</h1>
      <hr className={style.hr}></hr>
      <i>{postData.date}</i>
      <i>{postData.author}</i>
      {/* <pre>{postData}</pre> */}
      <div className={style.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </div>
    <Footer/>
    </div>
  );
}
