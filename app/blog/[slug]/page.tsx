import path from "path";
import fs from "fs";
import postTransformer from "@/utils/postTransformer";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const BlogPage = async ({ params }: BlogPageProps) => {
  const { slug } = await params;
  const post = fs.readFileSync(
    path.join(process.cwd(), "content", "posts", `${slug}.md`),
    "utf-8",
  );
  const { data } = postTransformer(post);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>Date created: {data.date}</p>
    </div>
  );
};

export default BlogPage;
