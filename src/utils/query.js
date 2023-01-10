export const postQuery = `*[_type == "post"] | order(_createdAt desc)
{
  thumbnail{
      asset->{
        url
      }
    },
    _id,
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
  console.log(_id)
  return `*[_type == "post" && _id == '${_id}']`;
}
