import { Template } from 'meteor/templating';

import './main.html';

Template.myRatings.helpers({
    items(){
        return Ratings.find();
    }
});

Template.myRatings.events({
    "click .rating"(event) {
        const value = $(event.target).val();
        const id = this.id;
        Ratings.update({_id: id}, {$set: {rating: Number(value)}});
    }
});
