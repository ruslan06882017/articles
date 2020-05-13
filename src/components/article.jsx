import React, {PureComponent} from 'react'
import { Button } from 'react-bootstrap';
import CommentList from './comments-list'

class Article extends PureComponent {
  state = {
    hasError: false
  }
  
  componentDidCatch(err){
    //console.log('article = ', err);
    this.setState({
      hasError: true
    });
  }

  render(){
    const { article, isOpen} = this.props;
    

    return (
      <div>
          <h3> {article.title} 
          <Button
            variant="primary"
            onClick={this.handleBtnClick}>{isOpen ? 'Close' : 'Open'}
          </Button>
          </h3>
          {this.body}
      </div>
    )
  };
  
  handleBtnClick = () => this.props.toggleOpen(this.props.article.id);
  get body(){
    const {isOpen, article} = this.props
    if (!isOpen) return null
    if (this.state.hasError) return <div> Some error in article </div>

    return (
      <section>
        {article.text}
        
        <CommentList
          comments = {article.comments}
        /> 
      </section>
    )
  }
}

export default Article;
