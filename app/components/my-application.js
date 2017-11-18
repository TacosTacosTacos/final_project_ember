import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  model () {
    const confettiHide = {enabled: false}
    return confettiHide
  },
  actions: {
    signOut () {
      this.sendAction('signOut');
    }
  },
});
