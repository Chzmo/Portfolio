import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci';
import { useParams } from 'react-router-dom';
import { BsReplyAll } from 'react-icons/bs';
import { formatDistanceToNow } from 'date-fns';

import { client } from '../../client';

import profileImg from '../../assets/media/zaliro_p.png';

function SingleComment({comment, props}){

  const [likeCount, setlikeCount] = useState(comment.likes.length)

  function updateLikeScore(id){
    if(1 in comment.likes){
      alert(1)
    }
  }

  function handleReplyComment(id){
    const textarea = document.querySelector('textarea');
    textarea.focus();

    const replyToComment = props.items.filter(comment => comment.id === id);
    props.setReplyTo(replyToComment[0].user.username);
    props.setCommentType('comment');
    props.setReplyToId(id);
  }

  return (
    <div className="comments__main" tabIndex="1">
      <div className="comments__main-profile">
        <img src={profileImg} alt="profile" />
      </div>
      <div className="comments__main-content">
        <div className="comments__main-content_top">
          <h3>{comment.user.username}</h3><p>{formatDistanceToNow(new Date(comment.createdAt))} ago</p>
        </div>
        <div tabIndex="0" id={comment.id}  className="comments__main-content_message">
          <p>{comment.content}</p>
        </div>
        <div className="comments__main-content_bottom">
          <div className="content_bottom-social">
            <button onClick={()=>updateLikeScore(comment.id)}><CiHeart className="social-icon"/><span>{likeCount}</span></button>
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

function SingleReply({reply, props}){
  
  const [likeCount, setlikeCount] = useState(reply.likes.length)

  function updateLikeScore(id){
    if(1 in reply.likes){
      alert(1)
    }
  }

  function handleReplyReply(id){
    const textarea = document.querySelector('textarea');
    textarea.focus();
    
    const replyToReply = props.items.reduce((acc, comment) => {
      return acc.concat(comment.replies.filter(reply => reply.id === id));
    }, []);
    
    props.setReplyTo(replyToReply[0].user.username);
    props.setCommentType('reply');
    props.setReplyToId(id);
  }

  return (
    <div className="comments__main">
      <div className="comments__main-profile">
        <img src={profileImg} alt="profile" />
      </div>
      <div className="comments__main-content">
        <div className="comments__main-content_top">
          <h3>{reply.user.username}</h3> <p>{formatDistanceToNow(new Date(reply.createdAt))} ago</p>
        </div>
        <div id={reply.id} tabIndex="0" className="comments__main-content_message">
          <p>{reply.content}</p>
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
  }

  return (
    <>
      {props.replyTo && (
        <div>Replying to <strong>{props.replyTo}</strong> <button onClick={setReplyToNull}>Cancel</button></div>
      )}
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
      {props?.items?.map((comment) => {
        return (
          <div key={comment.id}>
            <SingleComment comment={comment} props={props}/>
            {
              comment?.replies &&(
                comment.replies.map((reply) => {
                  //passing props with states
                  return <div className="reply" key={reply.id}><SingleReply reply={reply} props={props}/></div> 
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