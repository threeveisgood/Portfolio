import React from 'react';
import Link from 'next/link'
import Query from '../components/Query'
import CATEGORIES_QUERY from '../apollo/queries/category/categories'

const Nav = () => {
    return (
        <div>
          <Query query={CATEGORIES_QUERY} id={null}>
            {({ data: { categories } }) => {
                return (
                    <div>
                      <nav>
                         <div>
                            <ul>
                              <li>
                                 <Link href="/">
                                    <a>Strapi Blog</a>
                                 </Link>
                              </li>
                            </ul>                                          
                    </div>

                    <div>
                      <ul>
                        {categories.map((category, i) => {
                            return (
                                <li key={category.id}>
                                  <Link
                                    href={{
                                        pathname: "category",
                                        query: { id: category.id }
                                    }}
                                  >
                                    <a>{category.name}</a>
                                  </Link>
                                </li>
                            )
                        })}
                      </ul>
                    </div>
                  </nav>
                 </div>
                )
            }}
          </Query>
        </div>
    );
};

export default Nav;