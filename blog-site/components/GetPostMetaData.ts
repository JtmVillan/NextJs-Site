import { PostMetaData } from "./PostMetaData";
import fs from "fs"
import matter from "gray-matter";

const GetPostMetaData = (): PostMetaData[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
  
    // With meta data on markdown
    // const slugs = markdownPosts.map((file) => file.replace(".md", ""));
    // return slugs;
  
    // Get gray matter data from each file
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
      };
    });
  
    return posts;
  };

  export default GetPostMetaData;