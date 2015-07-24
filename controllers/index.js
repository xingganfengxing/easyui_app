/**
 * Created by Keen on 2015-07-24.
 */

exports.index = function(req, res,next) {
    var current_user = req.session.user&&req.session.user.username?req.session.user.username:"wcm_admin";
    console.log(current_user);
    res.render('index');
};