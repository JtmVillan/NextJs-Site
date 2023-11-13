import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import GetPostMetaData from "../../../../components/GetPostMetaData";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
    // return matterResult.content;
};

export const generateStaticParams = async () => {
    const posts = GetPostMetaData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

// props parameter captures input
const PostPage = (props: any) => {
    const slug = props.params.slug; // this param is whatever is in the []
    const post = getPostContent(slug); // display (unstyled) content of posts
    return (
        <div>
            <h1>{post.data.title}</h1>
            <Markdown>{post.content}</Markdown>
            {/* <h1>This is a post: {slug}</h1> */}
            {/* <Markdown>{content}</Markdown> */}
        </div>
    );
};

export default PostPage;