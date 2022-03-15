import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl0rfglg40we201z836xj8zs4/master',
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});

export { client };
