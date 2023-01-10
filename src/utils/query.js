export const postQuery = `*[_type == "post"] | order(_createdAt desc)`;

// {
//     image{
//       asset->{
//         url
//       }
//     },
//     _id,
//     about,
//     postedBy->{
//       _id,
//       userName,
//       image
//     },
//     save[]{
//       _key,
//       postedBy->{
//         _id,
//         userName,
//         image
//       },
//     },
//   } 