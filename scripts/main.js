import IndexView from './views/index';

(function(){
  'use strict';

  $(document).ready(function(){

    var beverages = new Backbone.Collection([
      {id: 1, title: "Chryseia", price: 5590, image: '1.png'},
      {id: 2, title: "Meiomi Pinot Noir", price: 1990, image: '1.png'},
      {id: 3, title: "Antucura Cabernet Sauvignon", price: 1590, image: '1.png'},
    ]);

    var indexView = new IndexView({collection: beverages});
    $('.view').html(indexView.el);
  });
})();
