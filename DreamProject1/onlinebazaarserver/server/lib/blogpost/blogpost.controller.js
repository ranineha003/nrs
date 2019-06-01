var UserAds = require('./blogpost.model');

function create(req, res) {

    console.log(req.body);

    var newuserads = new UserAds({
        title: req.body.title,
        tags: req.body.tags,
        post: req.body.post,
        created_by: req.user.id
    });

    newuserads.save(newuserads, function (err, data) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else
            res.send(JSON.stringify(data));
    });
}


function list(req, res) {
   console.log(req.user)
    UserAds.find({}, function (err, data) {
        if (!err) {
            res.send(data)
            // .render('userAds/userads.ejs',{supplies:data});
        } else {
            //  res.render('userAds/userads.ejs',{supplies:[]});
        }
    });
}
function Protectedlist(req, res) {
    console.log(req.user)
     UserAds.find({created_by: req.user.id}, function (err, data) {
         if (!err) {
             res.send(data)
             // .render('userAds/userads.ejs',{supplies:data});
         } else {
             //  res.render('userAds/userads.ejs',{supplies:[]});
         }
     });
 }
function deletepost(req, res) {
    var query = { _id: req.body._id }
    UserAds.deleteOne(query, function (err, data) {
        if (!err) {
            res.send(data)
        } else {

        }

    });
}

function updatepost(req, res) {
    var obj = {};
    if (typeof req.body.title != 'undefined') {
        obj.title = req.body.title;
    }
    if (typeof req.body.tags != 'undefined') {
        obj.tags = req.body.tags;
    }
  
    if (typeof req.body.title != 'undefined') {
        obj.post = req.body.post;
    }
  
    var postupdate = {
        $set: obj
    }

    var query = { _id: req.body._id }

    UserAds.updateOne(query, postupdate, function (err, data) {
        if (!err) {
            res.send(data);
        } else {

        }
    })
}

module.exports = {
    create: create,
    list: list,
    deletepost: deletepost,
    updatepost: updatepost,
    Protectedlist:Protectedlist
}