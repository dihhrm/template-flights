import { GetStaticProps, GetStaticPaths } from 'next';
import { useGetLaunchQuery, GetLaunchDocument } from '../generated/graphql';
import { initializeApollo } from '../lib/apollo';

export default function Launch({ id }) {
  const { data, loading, error } = useGetLaunchQuery({ variables: id });
  if (loading) return <h1>Loading...</h1>;

  if (error || !data) return <h2>Error</h2>;

  return <h1>ds</h1>;
}

// Vai saber os launches que ele vai criar durante o build
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = initializeApollo();
  await client.query({
    query: GetLaunchDocument,
    variables: params.id,
  });

  return {
    props: {
      initialApolloState: client.cache.extract(),
      id: params.id,
      revalidate: 60 * 60 * 2, // Incremental Static Regeneration
    },
  };
};
