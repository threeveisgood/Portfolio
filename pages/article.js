import { useRouter } from "next/router";  
import Query from "../components/query";  
import ReactMarkdown from "react-markdown";  
import Moment from "react-moment";  
import ARTICLE_QUERY from "../apollo/queries/article/article";

const Article = () => {  
  const router = useRouter();
  return (
    <Query query={ARTICLE_QUERY} id={router.query.id}>
      {({ data: { article } }) => {
        return (
          <div>
            <div>              
              <h1>{article.title}</h1>
              <img src={process.env.API_URL + article.image.url} alt={article.title} />
            </div>

            <div>
              <div>
                <ReactMarkdown source={article.content} />
                <p>
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Article;  