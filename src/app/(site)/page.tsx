import Container from '@/components/container';
import PostCard from '@/components/post-card';
import { Post } from '@/types/post';
import { Fragment } from 'react';

const getPosts = async () => {
  const url = process.env.MARBLE_API_URL;
  const key = process.env.MARBLE_WORKSPACE_KEY;
  try {
    const res = await fetch(`${url}/${key}/posts`);
    const data: Post[] = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const posts = await getPosts();
  if (!posts) return <div>loading...</div>;

  return (
    <section>
      <Container className='py-10'>
        <ul className='grid justify-center gap-20 grid-cols-[repeat(auto-fill,minmax(0,_400px))] w-full'>
          {posts.map((post) => (
            <Fragment key={post.id}>
              <PostCard post={post} />
            </Fragment>
          ))}
        </ul>
      </Container>
    </section>
  );
}
