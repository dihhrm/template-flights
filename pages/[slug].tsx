import { GetStaticProps, GetStaticPaths } from 'next';
import { useGetLaunchQuery, GetLaunchDocument } from '../generated/graphql';
import { initializeApollo } from '../lib/apollo';

export default function Launch({ slug }) {
  const { data } = useGetLaunchQuery({ variables: slug });

  return <h1>{data?.launch.name}</h1>;
}

// Vai saber os launches que ele vai criar durante o build
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo();
  await client.query({
    query: GetLaunchDocument,
    variables: { slug: params.slug },
  });

  return {
    props: {
      initialApolloState: client.cache.extract(),
      slug: params.slug,
      revalidate: 60 * 60 * 2, // Incremental Static Regeneration
    },
  };
};
