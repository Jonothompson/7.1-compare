import IndexView from './views/index';
import {BeverageCollection} from './models/beverage';

(function(){
  'use strict';

  $(document).ready(function(){
    var beverages = new BeverageCollection();
    beverages.fetch().then(function(){
      var indexView = new IndexView({collection: beverages});
      $('.view').html(indexView.el);
    });
  });
})();
