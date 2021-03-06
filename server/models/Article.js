const mongoose = require('mongoose');
const {Schema}=mongoose;

const schema = new Schema({
    title:String,
    order:String,
    news:Boolean,
    fullContent:String
});

const Article = mongoose.model('article',schema);

module.exports= Article;