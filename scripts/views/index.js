export default Backbone.View.extend({
  template: JST.index,
  tagName: 'section',
  className: 'grid',

  events: {
    'click .compare': 'compareBeverage'
  },

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
  },

  compareBeverage: function(e) {
    var id = $(e.target).data('id');
    console.log(this.collection.get(id));
  }
});
