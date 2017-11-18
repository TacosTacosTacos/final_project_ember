import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['confetti'],
  confetti: Ember.computed.alias('model.enabled'),
  actions: {},
  didRender () {
    setTimeout(function () {
      this.$('#confetti').hide()
    }, 5000)
  }
});
