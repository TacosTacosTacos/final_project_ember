import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  credentials: storageFor('auth'),
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.bool('auth.credentials.token'),
  actions: {
    signOut () {
      this.sendAction('signOut');
    }
  },
});
