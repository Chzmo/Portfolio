import React from 'react'
import { formatDistanceToNow } from 'date-fns';

import {CiHeart } from 'react-icons/ci'
import {BsReplyAll} from 'react-icons/bs'

import profileImg from '../../assets/media/zaliro_p.png';

function handleReply(id=5){
  const textarea = document.querySelector('textarea');
  textarea.focus();
}

export function CommentField(props){

  return (
    <>
      <div className="comments__main">
        <div className="comments__main-profile">
          <img src={profileImg} alt="profile" />
        </div>
        <div className="form">
          <textarea 
            name="reply" 
            cols="80" rows="1" 
            onChange={(e) => props?.setComment(e.target.value)} 
            value={props.comment}
          >

          </textarea>
          <button onClick={props.addComment}>Comment</button>
        </div>
      </div>
    </>
  );
}




function Comment(props){

  return (
    <>
      {props.items.map((comment) => {
  return (
    <div key={comment.id}>
      <div className="comments__main">
        <div className="comments__main-profile">
          <img src={profileImg} alt="profile" />
        </div>
        <div className="comments__main-content">
          <div className="comments__main-content_top">
            <h3>{comment.user.username}</h3><p>{formatDistanceToNow(new Date(comment.createdAt))} ago</p>
          </div>
          <div className="comments__main-content_message">
            <p>{comment.content}</p>
          </div>
          <div className="comments__main-content_bottom">
            <div className="content_bottom-social">
              <button><CiHeart className="social-icon"/><span>{comment.likes}</span></button>
            </div>
            <div className="content_bottom-reply"><button onClick={handleReply}><BsReplyAll className="social-icon"/><span>Reply</span></button></div>
          </div>
        </div>
      </div>
      {
        comment?.replies &&(
          comment.replies.map((reply) => {
            return (
              <div className="reply" key={reply.id}>
                <div className="comments__main">
                  <div className="comments__main-profile">
                    <img src={profileImg} alt="profile" />
                  </div>
                  <div className="comments__main-content">
                    <div className="comments__main-content_top">
                      <h3>{reply.user.username}</h3> <p>{formatDistanceToNow(new Date(reply.createdAt))} ago</p>
                    </div>
                    <div className="comments__main-content_message">
                      <p>{reply.content}</p>
                    </div>
                    <div className="comments__main-content_bottom">
                      <div className="content_bottom-social">
                        <button><CiHeart className="social-icon"/><span>{reply.likes}</span></button>
                      </div>
                      <div className="content_bottom-reply"><button onClick={handleReply}><BsReplyAll className="social-icon" /><span>Reply</span></button></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )
      }
    </div>
  );
})}

    </>
  )
}

export default Comment