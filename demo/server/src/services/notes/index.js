'use strict';

const service = require('feathers-memory');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  let options = {
    paginate: false
  };

  // Initialize our service with any options it requires
  app.use('/notes', service(options));

  // Get our initialize service to that we can bind hooks
  const notesService = app.service('/notes');

  // Set up our before hooks
  notesService.before(hooks.before);

  // Set up our after hooks
  notesService.after(hooks.after);
};
