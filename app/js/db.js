module.exports = {

        hi: function() {
            console.log('hi!');
        },

    setup: function() {
    
        var mysql      = require('mysql');




        console.log ('Input password for mysql:');
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.once('data', function (someCode) {
            process.stdin.pause();
            console.log ('Code: ' + someCode);
            mysql_credential.password = someCode;
        })

            var mysql_credential = {
              host     : 'localhost',
              user     : 'sowa',
              password : 'd3_v8;',
              database : 'rk_db'
            };
            var connection = mysql.createConnection(mysql_credential);

            connection.connect();


            connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
              if (err) {
                throw err;
              }

              console.log('The solution is: ', rows[0].solution);
            });

            connection.end();
       

    }

    
}

