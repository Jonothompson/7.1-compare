import BeverageListView from './views/beverage-list';
import {BeverageCollection} from './models/beverage';

(function(){
  'use strict';

  $(document).ready(function(){
    var beverages = new BeverageCollection();
    beverages.fetch().then(function(){
      var beverageListView = new BeverageListView({collection: beverages});
      $('.view').html(beverageListView.el);
    });
  });
})();
