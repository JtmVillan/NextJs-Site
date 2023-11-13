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
    // Alternative way to write below
    // <PostPreview
    //   key={post.slug}
    //   title={post.title}
    //   subtitle={post.subtitle}
    //   slug={post.slug}
    //   date={post.date}
    // />
  ));

  return <div>{postPreviews}</div>;
};

export default HomePage;
