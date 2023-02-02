
export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields:[
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'date'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'about',
            title: 'About',
            type: 'string'
        },
        {
            name: 'gitHubUrl',
            title: 'GitHubUrl',
            type: 'url'
        },
        {
            name: 'liveUrl',
            title: 'LiveUrl',
            type: 'url'
        },
        {
            name: 'completionTime',
            title: 'Completion Time',
            type: 'number',
        },
        {
            name: 'userId',
            title: 'UserID',
            type: 'string'
        },
        {
            name: 'postedBy',
            title: 'Posted by',
            type: 'reference',
            to: [{type: 'user'}]
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{
              type: 'string'
            }],
            
        },
        {
            name: 'likedBy',
            title: 'likedBy',
            type: 'array',
            of:[{type: 'like'}]
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of:[{type: 'comment'}]
        }
    ],
    preview:{
        select: {
            postedBy: 'user.0.userName' // if the user has a userName, follow the relation and get the userName
        },
    }
}