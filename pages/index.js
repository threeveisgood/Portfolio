import React from 'react';
import Box from '@material-ui/core/Box';
import Articles from "../components/articles";  
import Query from "../components/query";  
import ARTICLES_QUERY from "../apollo/queries/article/articles";

export default function Index() {
  return (
    <> 
      <Box my={4}>
      <div>
          <h1>Strapi blog</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
        </div>
      </Box>
    </>
  );
}