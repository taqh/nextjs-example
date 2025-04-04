import Container from '@/components/container';
import PostCard from '@/components/post-card';
import { getTags } from '@/lib/query';
import { MarblePostList } from '@/types/post';
import { Fragment } from 'react';

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const getPostsTagged = async (slug: string) => {
  const url = process.env.MARBLE_API_URL;
  const key = process.env.MARBLE_WORKSPACE_KEY;

  const response = await fetch(`${url}/${key}/posts?tags=${slug}`);
  const data: MarblePostList = await response.json();

  return data;
};

export async function generateStaticParams() {
  const data = await getTags();
  if (!data || !data.tags.length) return [];

  return data.tags.map((tag) => ({
    slug: tag.slug,
  }));
}

async function Page({ params }: PageProps) {
  const slug = (await params).slug;
  const data = await getPostsTagged(slug);

  if (!data || !data.posts.length) return <div>No posts yet</div>;

  return (
    <section>
      <Container className='py-10'>
        <ul className='grid justify-center gap-20 grid-cols-[repeat(auto-fill,minmax(0,_400px))] w-full'>
          {data.posts.map((post) => (
            <Fragment key={post.id}>
              <PostCard post={post} showTags={false} />
            </Fragment>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Page;
