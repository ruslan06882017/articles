import React from 'react'
import Article from './article'
import accordion from  '../decorators/accordion'

class ArticleList extends React.Component {
  render(){
    return(
      <ul>
        {this.body}
      </ul>
    )
  }

  get body(){
    const {toggleOpenItem, openItemId, article} = this.props

    return this.props.articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen = {toggleOpenItem}
        />
      </li>
    ))}

}
export default accordion(ArticleList);
