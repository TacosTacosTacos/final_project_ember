import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

const hideConfetti = new Ember.RSVP.Promise(function (resolve, reject){
  setTimeout(function () {
    this.$('#confetti').hide();
    resolve('Resolved');
  }, 5000);
});


export default Ember.Component.extend({
  auth: Ember.inject.service(),
  credentials: storageFor('auth'),
  classNameBindings: ['confetti'],
  confetti: Ember.computed.alias('auth.credentials.hideConfetti'),
  actions: {},
  didRender () {
    // Need to figure out how to get the computed alias to work properly
    // It is always showing, and not depending on the users actions
    console.log(this.get('auth.credentials.hideConfetti'))
    if (this.get('auth.credentials.hideConfetti')) {
      hideConfetti.then(() => {
        this.get('auth.credentials').set('hideConfetti', true);
      });
    }

  }
});
