import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return new Ember.RSVP.Promise( (resolve, reject) => {
      let orders = Ember.A();
      let api = 'http://144.118.96.149:5000/';

      $.ajax({
        type: 'GET',
        url: `${api}get/${params.id}`,
        success: data => {
          data.forEach(order => orders.pushObject());
          resolve(orders);
        },
        error: (request, status, msg)  => {
          console.error(msg);
          reject(msg);
        }
      });
    });
  }
});
