// import Image from 'next/image'
import fs from "fs"
import Link from "next/link";

const GetPostMetaData = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

// export default function Home() {
const HomePage = () => {
  const postMetaData = GetPostMetaData();
  const postPreviews = postMetaData.map((slug) => (
    <div>
      <Link href={`/posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ));
  return <div>{postPreviews}</div>;
};

export default HomePage;
