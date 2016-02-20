import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let api = 'http://grabit.eu-gb.mybluemix.net/orders';
    // return [{
    //   'customer': 'Rick',
    //   'order_id': 1,
    //   'status': 'Ordered',
    //   'order_complete': 'not yet',
    //   'items':[
    //     {
    //       'item': 'cheese quake',
    //       'qty': 2,
    //       'price': '$5',
    //       'comments': 'Make it not suck',
    //       'item_completed': 'not yet'
    //     },
    //     {
    //       'item': 'cats',
    //       'qty': 1,
    //       'price': '10',
    //       'comments': 'Make it not suck',
    //       'item_completed': 'not yet'
    //     },
    //   ]
    //   },
    //   {
    //     "customer":"morty",
    //     "order_id": 2,
    //     "status":" adfadf",
    //     "order_complete": 'timestamp',
    //     "items":[
    //       {
    //         "item":" adfadf",
    //         "qty":" adfadf",
    //         "price":" fff",
    //         "comments": "dddd",
    //         "item_completed": 'not yet'
    //       }
    //     ]
    //   }]



    return new Ember.RSVP.Promise( (resolve, reject) => {
      let orders = Ember.A();

      $.ajax({
        type: 'GET',
        url: `${api}/orders`,
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
