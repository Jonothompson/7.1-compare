import IndexView from './views/index';

(function(){
  'use strict';

  $(document).ready(function(){

    var beverages = new Backbone.Collection([
      {id: 1, name: "Chryseia", price: 5590, image: "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg"},
      {id: 2, name: "Meiomi Pinot Noir", price: 1990, image: "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg"},
      {id: 3, name: "Antucura Cabernet Sauvignon", price: 1590, image: "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg"},
    ]);

    var indexView = new IndexView({collection: beverages});
    $('#app').html(indexView.el);
  });
})();
