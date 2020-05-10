import React, {PureComponent} from 'react'

function Comment({ comment }){
   return (
      <div>
        {comment.text}
      </div>
    )
};

export default Comment;
