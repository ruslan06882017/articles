import React from 'react'
import Article from './article'


class ArticleList extends React.Component {
  state = {
    articleId: null
  }

  render(){
    return(
      <ul>
        {this.body}
      </ul>
    )
  }

  toggleArticleOpen = (articleId) => () => this.setState({ articleId });
  get body(){
    return this.props.articles.map((article) =>
      <li key={article.id}>
        <Article   
          article={article} 
          isOpen={this.state.articleId === article.id}
          toggleOpen = {this.toggleArticleOpen(article.id)}
        />
      </li>
    )}

}
export default ArticleList;
