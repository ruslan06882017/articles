import React, {PureComponent} from 'react'
import { Button } from 'react-bootstrap';

class Article extends PureComponent {
  render(){
    const { article, isOpen} = this.props;
    //console.log('Rendered...');
    return (
      <div>
        <div>
          <h3 ref={this.setTitleRef}>{article.title}</h3>
          <Button variant="primary" onClick={this.handleBtnClick}>{isOpen ? 'Open' : 'Close'}</Button>
        </div>
        {isOpen && <section> {article.text} </section>}
      </div>)
  };
  setTitleRef = (ref) => console.log(ref);
  handleBtnClick = () => this.props.toggleOpen(this.props.article.id);
}
export default Article;
