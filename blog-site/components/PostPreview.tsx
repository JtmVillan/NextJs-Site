import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props: PostMetaData) => {
    return (
      <div className="border border-violet-200 p-4 rounded-md shadow-md 
        bg-white">
        <Link href={`/posts/${props.slug}`}>
          <h2 className="text-violet-600">{props.title}</h2>
        </Link>
        <p className="text-sm text-slate-400" >{props.date}</p>
        <p className="text-slate-700" >{props.subtitle}</p>
      </div>
    );
}

export default PostPreview;