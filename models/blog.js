const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, { timestamps: true });

/* 
- model - creates a model with the corresponding schema
- first parameter: the name string in the model function, is the singular
 format of the name of a collection we have in the db
 an s is automatically appended to the end of the name 
 we put in this function
 - second parameter: schemaType
*/

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
