import React from 'react'
import Article from './article-list'
import articles from './'

class ArticleList extends React.Component {
  render(){
    const articleElements = this.props.articles.map(article => <li> <Article article={article}/></li>);
    return(
      <ul>
        {articleElements}
      </ul>
    )
  }

}
export default ArticleList;