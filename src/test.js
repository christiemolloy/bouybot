var mysql = require('mysql')
var fs = require('fs')

var con = mysql.createConnection({
  host: "srdes.cyyklmosrch1.us-east-2.rds.amazonaws.com",
  user: "root",
  password: "T1mb3rw0lf",
  database: "final_db"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM final_3", function(err, result, feilds) {
  	if(err) throw err;
  	fs.writeFileSync('data.json', JSON.stringify(result), err => {
  		if(err) throw (err);
  		console.log('saved file');
  	});
  });
});

con.destroy()