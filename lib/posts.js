import fs from 'fs'
import matter from "gray-matter";
import path from "path";
import { remark } from 'remark';
import html from 'remark-html';
const postpath=path.join(process.cwd(),"content/posts")


export function getData(){
    const filename=fs.readdirSync(postpath)
    const allpost=filename.map((files)=>{
        // if (typeof filename !== 'string') {
        //     throw new Error(`Expected string but received ${typeof filename}`);
        // }
        //   const id = filename.replace(/\.md$/, '');
        const id=files.replace(/\.md$/,"")
  
        const fullpath=path.join(postpath,files);
        const filecontent=fs.readFileSync(fullpath,"utf8")
        const matterres=matter(filecontent)

        return {
            id,
            ...(matterres.data )
        }
    });

  return allpost
}

export async function getPostData(id) {
    const fullPath = path.join(postpath, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
 
    const processedContent = await remark().use(html ,{sanitize:false}).process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
      id,
      contentHtml,
      ...matterResult.data
    };
  }

  export function getAllPostIds() {
    const fileNames = fs.readdirSync(postpath);
    return fileNames.map((fileName) => {
      if (typeof fileName !== 'string') {
        throw new Error(`Expected string but received ${typeof fileName}`);
      }
      return {
        params: {
          id: fileName.replace(/\.md$/, ''), 
        },
      };
    });
  }