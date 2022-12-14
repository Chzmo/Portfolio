export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields:[
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
            title: 'PostedBy',
            type: 'postedBy'
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{
              type: 'string'
            }]
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
    ]
}