import React from "react";  
import Link from "next/link";

const Card = ({ article }) => {  
  return (
    <Link href={{ pathname: "article", query: { id: article.id } }}>
      <a>
        <div>
          <div>
            <img
              src={process.env.API_URL + article.image.url}
              alt={article.image.url}
              height="100"
            />
          </div>
          <div>
            <p>
              {article.category.name}
            </p>
            <p>
              {article.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;