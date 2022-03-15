import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://api-sa-east-1.graphcms.com/v2/cl0rfglg40we201z836xj8zs4/master',
    }),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
