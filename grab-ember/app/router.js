import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('trucks');
  this.route('truck', { path: '/truck/:id' });
  this.route('orders');
  this.route('order', { path: '/order/:id' });
});

export default Router;
