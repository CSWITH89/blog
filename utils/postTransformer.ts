import { PostFrontMatter } from "@/types/post";
import matter from "gray-matter";

const postTransformer = (
  post: string,
): { data: PostFrontMatter; readingTime: number; content: string } => {
  const { data, content } = matter(post);
  const readingTime = Math.floor(content.split(" ").length / 238);
  return { data: data as PostFrontMatter, readingTime, content };
};

export default postTransformer;
