var user=require('./lib/user/user.routes');
var blogpost=require('./lib/blogpost/blogpost.routes');
var auth=require('./lib/auth/auth.routes');
var fs=require('fs')
module.exports=function(app)
{

app.use('/api/user',user);
app.use('/api/blogpost',blogpost);
app.use('/api/',auth);
app.post('/api/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  var ads_pic = req.files.ads_img;
 console.log(req.files.ads_pic);
 console.log(req.body);
  // Use the mv() method to place the file somewhere on your server 
  ads_pic.mv('../../public/uploads/'+req.files.ads_img.name, function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});

app.get('/readfile', function(req, res) {

	//console.log(__dirname+'\uploads\myfile.txt');

  fs.open('myfile.txt', 'wx', (err, fd) => {
		console.log(err);
		console.log(fd);
		if (err) {
			if (err.code === 'EEXIST') {
				console.error('myfile already exists');
				//return;
					res.send('File exits');
			}

			res.send(err)
		}else{
			fs.writeFile ('public/uploads/myfile.txt', 'this is my text data\\n', function(err) {
                if (err) 	res.send(err);
                console.log('complete');
								res.send('Write complete');
            });
		}
			
		 /*fs.readFile(__dirname+'/uploads/myfile.txt', 'utf8', function (err, data) {
            if (err) throw err;
            
        });
				fs.rename('/tmp/hello', '/tmp/world', (err) => {
				if (err) throw err;
						fs.stat('/tmp/world', (err, stats) => {
							if (err) throw err;
							console.log(`stats: ${JSON.stringify(stats)}`);
						});
				});

		fs.unlink('/tmp/hello', (err) => {
			if (err) throw err;
			console.log('successfully deleted /tmp/hello');
		});
				
				*/
	});
});

}
