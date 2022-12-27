import React from 'react'
import {CiHeart } from 'react-icons/ci'
import {BsReplyAll} from 'react-icons/bs'

import profileImg from '../../assets/media/zaliro_p.png';

export function CommentField(props){
  console.log(props)
  return (
    <>
      <div className="comments__main" key={props.key}>
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
      <div className="comments__main">
        <div className="comments__main-profile">
          <img src={profileImg} alt="profile" />
        </div>
        <div className="comments__main-content">
          <div className="comments__main-content_top">
            <h3>Chisomo Zaliro Moyo</h3> <p>3 Months ago</p>
          </div>
          <div className="comments__main-content_message">
            <p>{props.item.content}</p>
          </div>
          <div className="comments__main-content_bottom">
            <div className="content_bottom-social">
              <button><CiHeart className="social-icon"/><span>{props.item.likes}</span></button>
            </div>
            <div className="content_bottom-reply"><button><BsReplyAll className="social-icon"/><span>Reply</span></button></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment