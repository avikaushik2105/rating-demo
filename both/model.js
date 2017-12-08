Ratings = new Mongo.Collection('ratings');

Meteor.startup(function() {
    if (Ratings.find().count() === 0) {
        var data_ratings = [
            {"_id": "MLR38pMTWhiTvnone", name: "Ferrai", rating: 0},
            {"_id": "2rfaybPiTogKPFLjr", name: "Lamborigini", rating: 0},
            {"_id": "ncvDrskNZS8Lcwdc3", name: "Pagani", rating: 0},
            {"_id": "YrEewmSkmpQrwTKHm", name: "Lotus", rating: 0},
            {"_id": "czwvxQx6L8gGsT7RM", name: "Ford", rating: 0},
            {"_id": "dzwvxQx6L8gGsT7RM", name: "Toyota", rating: 0},
            {"_id": "ezwvxQx6L8gGsT7RM", name: "Nissan", rating: 0},
            {"_id": "fzwvxQx6L8gGsT7RM", name: "Honda", rating: 0},
            {"_id": "gzwvxQx6L8gGsT7RM", name: "Suzuki", rating: 0},
        ]
        _.each(data_ratings, function (rating) {
            Ratings.insert(rating);
        });
    }
});