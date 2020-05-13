import React from 'react'
import Comment from './comment'
import toggleOpen from  '../decorators/toggleOpen'


class CommentList extends React.Component {
  
  render() {
    const {isOpen, toggleOpen} = this.props
    const text = !isOpen ? 'Show comments' : 'Close comments'

    return(
      <div>
        <button onClick={toggleOpen}>{text}</button>
        {this.body}
      </div>
    )
  }

  get body(){
    const {comments, isOpen} = this.props;
    if (!isOpen) return null

    const body = (comments && comments.length) ? (
      <ul>
        {comments.map(item => (
          <li key={item.id}>
            <Comment
              comment={item}
            />
          </li>
        ))}
      </ul>
    ) : (<h3> No Comments Yet </h3>)
    
    return <div>{body}</div>;
  }

}
export default toggleOpen(CommentList);