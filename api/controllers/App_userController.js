/**
 * App_userController
 *
 * @description :: Server-side logic for managing app_users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req,res){
		res.view();
        },
        'create': function(req,res,next){


                var params = req.params.all();
               delete(params.id);

                App_user.create(req.params.all(),function App_userCreated(err,app_user){

                        if(err){
                        console.log(err);
                        req.session.flash={
			err: err
			}
		       	
			return res.redirect('/app_user/new');
                        }

                        res.json(app_user);
                       	
		 });
        }
};	


