export interface Utilisateur 
{
    gender: String,

    name: 
    {
        title: String,
        first: String,
        last: String
    },

    location:
    {
        street: 
        {
            number: Number,
            name: String
        },
        city: String,
        state: String,
        country: String,
        postcode: Number,
    },
    
    email: String,

    login: 
    {
        uuid: String,
        username: String,
    },

    dob: 
    {
        date: Date,
        age: Number
    },
            
    registered: 
    {
        date: Date,
        age: Number
    },

    phone: String,
    cell: String,
            
    picture: 
    {
        large: String
        medium: String,
        thumbnail: String
    },
    
    nat: String

}