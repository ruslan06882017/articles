import React, {PureComponent} from 'react'
import { Button } from 'react-bootstrap';

class Article extends PureComponent {
  render(){
    const { article, isOpen} = this.props;
    //console.log('Rendered...');
    return (
      <div>
        <div>
          <h3>{article.title}</h3>
          <Button variant="primary" onClick={this.handleBtnClick}>{isOpen ? 'Open' : 'Close'}</Button>
        </div>
        {isOpen && <section> {article.text} </section>}
      </div>)
  };

  handleBtnClick = () => this.props.toggleOpen(this.props.article.id);
}
export default Article;
