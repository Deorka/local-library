var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
    {
        first_name: {type: String, required: true, max: 100},
        family_name: {type: String, required: true, max: 100},
        date_of_birth: {type: Date},
        date_of_death: {type: Date},
    },
    {
        getters: true
    }
);

// Virtual for author's full name
AuthorSchema
    .virtual('fullname').get(function() {
    var fullname = '';

    if (this.first_name && this.family_name) {
        fullname = this.family_name + ' ' + this.first_name;
    }

    return fullname;
});

// Virtual for author's URL
AuthorSchema
    .virtual('url')
    .get(function () {
        return '/catalog/author/' + this._id;
    });

AuthorSchema.virtual('date_of_birth_yyyy_mm_dd').get(function() {
    return moment(this.date_of_birth).format('MMMM Do, YYYY');
});

AuthorSchema.virtual('date_of_death_yyyy_mm_dd').get(function() {
    if (this.date_of_death)
        return moment(this.date_of_death).format('MMMM Do, YYYY');
    else
        return 'Nowadays'
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);