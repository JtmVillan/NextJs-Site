// import Image from 'next/image'
import Link from "next/link";
import GetPostMetaData from "../../components/GetPostMetaData";
import PostPreview from "../../components/PostPreview";

// export default function Home() {
const HomePage = () => {
  const postMetaData = GetPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    // This is how we use the PostPreview component we made
    // The '...' operator called the 'spread' operator
    // take all the fields of this item and make the input parameter of this component
    <PostPreview key={post.slug} {...post} />
    // Note: Keys are needed and they must be unique, slugs are a good way
    // Alternative way to write below
    // <PostPreview
    //   key={post.slug}
    //   title={post.title}
    //   subtitle={post.subtitle}
    //   slug={post.slug}
    //   date={post.date}
    // />
  ));

  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >{postPreviews}</div>;
};

export default HomePage;
