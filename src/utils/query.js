export const postQuery = `*[_type == "post"] | order(_createdAt desc)
{
  thumbnail{
      asset->{
        url
      }
    },
    _id,
    title,
    about,
    liveUrl,
    gitHubUrl,
    completionTime,
    postedBy->{
          _id,
      userName,
      image
    },
  } 
`;


export const singleWorkQuery = (_id) =>{
  return `*[_type == "post" && _id == '${_id}']`;
}


export const relatedWorkQuery = (_id) =>{
  return `*[_type == "post" && _id != '${_id}']`;
}

export const singleBlogkQuery = (_id) => {
  return `*[_type == "post"]{
    title,
    thumbnail{
      asset->{
        url
      }
    },
    technologies,
    _id,
    _createdAt,
    title,
    about,
    liveUrl,
    gitHubUrl,
    completionTime,
    postedBy->{
      _id,
      userName,
      image
    },
    comments[]{
      _key,
      comment,
      postedBy -> {
        _id,
        userName,
        image,
      },
      replies,
      _createdAt,
      likedBy[]{
        likeId,
        postedBy -> {
          _id,
          userName,
          image,
        },
      }
    },
    likedBy,
    liveUrl,
  }`;
}

export const blogQuery = `*[_type == "post"] | order(_createdAt desc){
  thumbnail{
      asset->{
        url
      }
    },
    _id,
    title,
    about,
    liveUrl,
    gitHubUrl,
    completionTime,
    postedBy->{
      _id,
      userName,
      image
    },
  } 
`;


