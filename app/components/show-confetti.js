import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

const hideConfetti = (creds) => {
  setTimeout(function () {
  creds.set('hideConfetti', true);
}, 5000);
};

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  credentials: storageFor('auth'),
  classNameBindings: ['confetti'],
  confetti: Ember.computed.alias('auth.credentials.hideConfetti'),
  actions: {},
  didRender () {
    if (!this.get('auth.credentials.hideConfetti')) {
      hideConfetti(this.get('auth.credentials'));
    }
  }
});
