import matter from "gray-matter";

const postTransformer = (post: string) => {
  const { data, content } = matter(post);
  const readingTime = Math.floor(content.split(" ").length / 238);
  return { data, readingTime, content };
};

export default postTransformer;
