import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci';
import { useParams } from 'react-router-dom';
import { BsReplyAll } from 'react-icons/bs';
import { formatDistanceToNow } from 'date-fns';

import { client } from '../../client';

import { fetchUser } from '../../utils/utils';

function SingleComment({comment, props, index}){
  const _id = {useParams}
  const [likeCount, setlikeCount] = useState(0)

  function updateLikeScore(id){
    if(1 in comment.likes){
      alert(1)
    }
  }
  function handleReplyComment(id){
    props.setReplyTo(comment.postedBy.userName);
    props.setCommentType('reply');
    props.setReplyToId(index+1); // this is subtracted in single blog so that it should not be equal to zero
  }

  return (
    <div className="comments__main" tabIndex="1">
      <div className="comments__main-profile">
        <img src={comment?.postedBy[0]?.image ? comment?.postedBy[0]?.image : comment?.postedBy?.image} alt="profile" />
      </div>
      <div className="comments__main-content">
        <div className="comments__main-content_top">
          <h3>{comment.postedBy.userName}</h3>
          {/* <p>{formatDistanceToNow(new Date(comment._createdAt))} ago</p> */}
        </div>
        <div tabIndex="0" id={comment.id}  className="comments__main-content_message">
          <p>{comment?.comment}</p>
        </div>
        <div className="comments__main-content_bottom">
          <div className="content_bottom-social">
            <button onClick={()=>updateLikeScore(index)}><CiHeart className="social-icon"/><span>{comment?.likedBy ? comment?.likedBy?.length : (0)}</span></button>
          </div>
          <div className="content_bottom-reply">
            <button onClick={() => handleReplyComment(comment.id)}>
              <BsReplyAll className="social-icon"/><span>Reply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function SingleReply({reply, props, index}){
  
  const [likeCount, setlikeCount] = useState(0)

  function updateLikeScore(id){
    if(1 in reply.likes){
      alert(1)
    }
  }

  function handleReplyReply(id){
    const textarea = document.querySelector('textarea');
    textarea.focus();
    
    props.setReplyTo(reply?.userName);
    props.setCommentType('reply');
    props.setReplyToId(index+1);
    console.log(reply.userName)
  }

  return (
    <div className="comments__main">
      <div className="comments__main-profile">
        <img src={reply.userImage} alt="profile" />
      </div>
      <div className="comments__main-content">
        <div className="comments__main-content_top">
          <h3>{reply.userName}</h3> <p>{formatDistanceToNow(new Date(reply._createdAt))} ago</p>
        </div>
        <div id={reply.id} tabIndex="0" className="comments__main-content_message">
          <p><a>@{reply.replyingTo} </a>{reply.content}</p>
        </div>
        <div className="comments__main-content_bottom">
          <div className="content_bottom-social">
            <button
              onClick={() => updateLikeScore(reply.id)}
            >
              <CiHeart className="social-icon"/><span>{likeCount}</span>
            </button>
          </div>
          <div className="content_bottom-reply">
            <button 
              onClick={() => handleReplyReply(reply.id)}
            >
              <BsReplyAll className="social-icon" /><span>Reply</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CommentField(props){

  const setReplyToNull = () =>{
    props.setReplyTo(null)
    props.setCommentType(null)
  }

  return (
    <>
      {props.replyTo && (
        <div>Replying to <strong>{props.replyTo}</strong> <button onClick={setReplyToNull}>Cancel</button></div>
      )}
      <div className="comments__main">
        <div className="comments__main-profile">
          {fetchUser && (<img src={fetchUser.picture} alt="profile" />)}
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
  
  const [loading, setLoading] = useState(false);
  const [commentData, setCommentData] = useState(null)
  const {_id} = useParams()

  const updateLikeScore = (id) =>{
    // const [score, setScore] = useState(null)
    
  }

  // useEffect(() => {
  //   setLoading(true);
  //   const query = commentQuery(_id);
  //   client.fetch(query)
  //     .then((data)=> {
  //       setCommentData(data)
  //       setLoading(false)
  //       console.log(data)
  //     }) 

  // }, [_id])
  

  return (
    <>
      {props.items && props?.items?.map((comment, index) => {
        return (
          <div key={comment?._key}>
            <SingleComment comment={comment} props={props} index={index}/>
            {
              comment?.replies &&(
                comment.replies.map((reply) => {
                  //passing props with states
                  return <div className="reply" key={reply._key}><SingleReply reply={reply} props={props} index={index}/></div> 
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