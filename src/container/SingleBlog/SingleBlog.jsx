import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns';
import { useParams } from 'react-router-dom'

import {CiHeart } from 'react-icons/ci'
import {BsFillHeartFill} from 'react-icons/bs'
import {HiOutlineShare} from 'react-icons/hi'
import {BiMessageRoundedDetail} from 'react-icons/bi'

import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import Comment from './Comment'
import {CommentField} from './Comment'

import profileImg from '../../assets/media/zaliro_p.png';
import image1 from '../../assets/media/thumbs_freebie-gpt-3-landing-page.jpg';
import image2 from '../../assets/media/thumbs_freebie-website-landing-page-design.jpg';
import image3 from '../../assets/media/thumbs_freelancer-landing-page-minimal-design-figma-freebie.jpg';
import image4 from '../../assets/media/thumbs_real-estate-landing-page-ui-freebie.jpg';

import './SingleBlog.css'
import data from './data'
import { singleWorkQuery } from '../../utils/query'
import { client, urlFor } from '../../client'

const blogs = [{ image:image1 }, { image:image2,}, {image:image3}, {image:image4}];


function SingleBlog() {
  
  const [items, setItems] = useState(data.comments);
  const [comment, setComment] = useState('');
  const [replyTo, setReplyTo] = useState(null)
  const [replyToId, setReplyToId] = useState(null)
  const [commentType, setCommentType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [singleBlogData, setSingleBlogData] = useState(null)

  const {_id} = useParams()

  const addComment = () =>{
    const newItem = {
      "id": crypto.randomUUID(),
      "content": comment,
      "createdAt": new Date(),
      "likes": [],
      "user": {
        "image": { 
          "png": "./images/avatars/image-amyrobson.png",
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []
    };    

    if(comment){

      const updatedItems = [...items];

      if(commentType === 'comment' && replyToId){
        const replyToComment = items.filter(comment => comment.id === replyToId);
        replyToComment[0].replies.push(newItem); //reply to a comment
      }
      
      else if( commentType == 'reply' && replyToId){
        const replyToReply = items.filter(comment => {
          return comment.replies.some(reply => reply.id === replyToId);
        });

        replyToReply[0].replies.push(newItem); //reply to a reply
      }

      else{
        updatedItems.push(newItem); // just a comment
      }
      setItems(updatedItems);
      setComment('');
      setReplyTo(null);
      setReplyToId(null);
      document.querySelector('textarea').value = '';

      if(replyToId){
        const element = document.getElementById(replyToId);
        const currentScroll = window.scrollY;
        const newScroll = currentScroll + element.getBoundingClientRect().top;
        window.scrollTo(0, newScroll);

      }
    }else{
      const textarea = document.querySelector('textarea');
      textarea.style.border = "1px solid red";
      setTimeout(()=>{
        textarea.style.border = "1px solid grey";
      }, 1000)
    }
  }

  useEffect(() => {
    const textarea = document.querySelector('textarea');

    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    });

  }, [])

  useEffect(() => {
    const query = singleWorkQuery(_id);
    setLoading(true);
    client.fetch(query)
    .then((data)=> {
      setSingleBlogData(data[0]);
      setLoading(false);
      console.log(data[0]);
    }) 
  }, [_id])
  
  return (
    <>
      <NavBar />
      
      <div className='singleBlog'>
        <div className="singleBlog__header">
          <h2>{singleBlogData?.title}</h2>
          <div className="singleBlog__header-related">
            <button>LandingPage</button>
            <button>Shopify</button>
            <button>Wordpress</button>
          </div>
        </div>
        <p>Home {'/'} Blog {'/'} Post</p>
        <div className="singleBlog__main">
          <div className= "singleBlog__main-img">
            <img src={singleBlogData && urlFor(singleBlogData?.thumbnail)} alt="" />
          </div>
          <div className="singleBlog__blog">
            <div className="socials">
              <div className="socials__date"><p>{singleBlogData && formatDistanceToNow(new Date(singleBlogData?._createdAt))} ago</p></div>
              <div className="socials__links">
                <div className="socials__links-like"><a href="#"><CiHeart className="social-icon"/> <span>{singleBlogData?.likedBy?.length || 0}</span></a></div>
                <div className="socials__links-comment"><a href="#"><BiMessageRoundedDetail className="social-icon"/> <span>{singleBlogData?.comments?.length || 0}</span></a></div>
                <div className="socials__links-share"><a href="#"><HiOutlineShare className="social-icon"/> <span>Share</span></a></div>
              </div>
            </div>
            <div className="blog">
              <div className="blog__post">
                <div className="blog__post-profile">
                  <div className="blog__post-profile_img">
                    <a href="/"><img src={profileImg} height={45} alt="Chisomo-Zaliro-Moyo" /></a>
                  </div>
                  <div className="blog__post-profile_info">
                    <h2>Chisomo Zaliro Moyo</h2>
                    <Link to="/">Author</Link>
                  </div>
                </div>
                <div className="blog__post-content">
                  <summary>{singleBlogData?.about}</summary>
                  <div className="blog__post-content_technologies">
                    <h2>Technologies used</h2>
                    <div className="blog__post-content_technologies-items">
                      <ul>
                        {singleBlogData?.technologies && (
                          singleBlogData?.technologies.map((technology, key) => {
                            return <li key={key+ 376437643}>{technology}</li>;
                          })
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="blog__post-content_overview">
                    <h2>Overview</h2>
                    <hr />
                    <h3>Users should be able to</h3>
                    <div className="blog__post-content_overview-items">
                      <p>01. View the application on different devices.</p>
                      <p>02. Login using their Email.</p>
                      <p>03. View different pins/images posted by other users.</p>
                      <p>04. View specific pins selected by the user with related pins if exits.</p>
                      <p>05. comment on specific pins.</p>
                      <p>06. Create a Pin by clicking a on a plus icon on top right.</p>
                      <p>07. Delete a Pin by clicking a on delete icon.</p>
                      <p>08. Delete User profile</p>
                      <p>09. Logout from the system</p>
                    </div>
                    <h3>Continued development</h3>
                    <div>
                      <p>Still working on the design and adding more features!!!!</p>
                    </div>
                  </div>
                  <div className="comments">
                    <h2>Comments</h2>
                    <Comment 
                      items={items}
                      setReplyTo={setReplyTo} 
                      setCommentType={setCommentType} 
                      setReplyToId = {setReplyToId}
                    />
                    <CommentField 
                      addComment={addComment} // function
                      setComment = {setComment} // set comment
                      comment = {comment} // set comment
                      replyTo={replyTo} 
                      replyToId = {replyToId}
                      setReplyTo={setReplyTo} 
                    />
                  </div>
                </div>
              </div>
              <div className="related">
              <h2>Related Blog Posts</h2>
                { blogs.map((blog, key) =>{
                  return (
                    <div key={key} className="related__post">
                      <a  className="related__post-img" href="/Blog/Single">
                        <img src={blog.image} alt="" />
                      </a>
                      <div className="related__post-title"><h3>Shopify Website Design and Development for Organic Products</h3></div>
                      <div className="related__post-socials">
                        <div className="related__post-socials_date"><p>2 years ago</p></div>
                        <div className="related__post-socials_links">
                          <div className="socials__links-like"><a href="/"><BsFillHeartFill className="social-icon"/> <span> 30K</span></a></div>
                        </div>
                      </div>
                    </div>
                  );
                })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__wrapper">
        <Footer />
      </div>
    </>
  )
}

export default SingleBlog