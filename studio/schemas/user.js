export default  {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name:'userName',
            title: 'UserName',
            type: 'string'
        },
        {
            name:'name',
            title: 'Name',
            type: 'string'
        },
        {
            name:'image',
            title: 'Image',
            type: 'string'
        },
        {
            name:'email',
            title: 'Email',
            type: 'email'
        }
    ]
}