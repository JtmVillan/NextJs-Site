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
            <div className="my-8 text-center">
              <h1 className="text-2x1 text-violet-600" >{post.data.title}</h1>
              <p className="text-slate-400 mt-2" >{post.data.date}</p>
            </div>

            <article className="prose">
                <Markdown>{post.content}</Markdown>
            </article>
                
            {/* <h1>This is a post: {slug}</h1> */}
            {/* <Markdown>{content}</Markdown> */}
        </div>
    );
};

export default PostPage;