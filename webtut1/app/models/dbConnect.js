/**
 * Created by williampaulton on 13/05/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({email:String, name:String});


mongoose.model('contacts', contactSchema);
mongoose.connect('mongodb://localhost/webtut');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("I am connected !!!!!!!!!!!!");
});


