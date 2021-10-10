export default {
    name:"project",
    title:"Project",
    type:"document",
    fields:[
        {
            name:"id",
            type:"number"
        },
        {
            name:"title",
            type:"string"
        },
        {
            name:"date",
            type:"datetime"
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:"description",
            type:"text"
        },
        {
            name:"projectType",
            title:"Project Type",
            type:"string",
            options:{
                list:[
                    {value:"personal", title:"Personal"},
                    {value:"business", title:"Business"},
                    {value:"client", title:"Client"}
                ]
            }
        },
        {
            name:"link",
            type:"url" 
        }
    ],
};