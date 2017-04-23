/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'users',
  	attributes: {
  		name: {
  			type: 'string'
  		},
  		email: {
  			type: 'string'
  		},
  		// association with the pages model
  		// a user has many pages
    	pages: {
    		collection: 'page',
    		via: 'user'
  		}
  	}
};

