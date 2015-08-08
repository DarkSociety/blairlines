/**
* Pilot.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: 'string',
  	raiting: 'float',
  	status: 'integer',
  	clubs:{
  		collection: "club",
  		via: 'pilots'
  	},
  	events: {
  		collection: 'event',
  		via: 'pilots'
  	}
  }
};

