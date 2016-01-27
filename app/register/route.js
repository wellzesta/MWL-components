import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		addNew: function() {
			var user = this.store.createRecord('user',{
				name: this.controller.get('name')
			});
			user.save().then(() => {
        this.controller.set('message','A new user with the name "' 
          + this.controller.get('name') + '" was added!');
        this.controller.set('name',null);
// Go ahead and go to https://mwl-components.firebaseio.com/ to verify that the user has been added
			}, function() {
				console.log('save failed');
			});
		}
	}
});
