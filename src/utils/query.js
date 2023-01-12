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

export const blogQuery = `*[_type == "post"] | order(_createdAt desc)
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

export const singleBlogkQuery = (_id) => {
  return `*[_type == "post" && _id == '${_id}']{
    title,
    thumbnail{
      asset->{
        url
      }
    },
    technologies,
    comments,
    likedBy,
    liveUrl,
    _createdAt,
  }`;
}

export const relatedWorkQuery = (_id) =>{
  return `*[_type == "post" && _id != '${_id}']`;
}


