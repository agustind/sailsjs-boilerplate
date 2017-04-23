/**
 * Page.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'pages',
  	attributes: {
    	title: {
    		type: 'string'
    	},
    	content: {
    		type: 'string'
    	},
    	// association with the user model
    	// a page belongs to a user
    	user: {
    		model: 'user',
    		columnName: 'user_id'
    	}
  	}
};

