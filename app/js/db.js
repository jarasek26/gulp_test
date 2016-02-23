var mysql      = require('mysql');
var mysql_credential = {};

module.exports = {

    
    
    hi: function() {
        return  console.log('hi!');
        },

    makeQuery: function() {
        
       
        var connection = mysql.createConnection(mysql_credential);

            connection.connect();


            connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
              if (err) {
                throw err;
              }

              console.log('The solution is: ', rows[0].solution);
            });

            connection.end();
       
    },
    getPassword: function() { 
               mysql_credential = {
                  host     : 'localhost',
                  user     : 'sowa',
                  password : 'd3_v8;',
                  database : 'rk_db'
                };
//        var p = new Promise(function(resolve, reject){
//
//            console.log ('Input password for mysql:');
//            //process.stdin.resume();
//            process.stdin.setEncoding('utf8');
//            process.stdin.once('data', function (someCode) {
//               // process.stdin.pause();
//                console.log ('Code: ' + someCode);
//                if(someCode) {
//                    resolve(someCode);
//                } else {
//                    reject('Failure!');
//                }
//            }); 
//            
//            p.then(function() { 
//                mysql_credential.password = someCode;
//                this.makeQuery();
//            }).catch(function() {
//                console.log('Error!');
//            });
//        });        
   },
    promiseTest: function() {
            var p = new Promise(function(resolve, reject) {

                // Do an async task async task and then...

                if(true) {
                    resolve('Success!');
                }
                else {
                    reject('Failure!');
                }
            });

            p.then(function() { 
                /* do something with the result */
            }).catch(function() {
                /* error :( */
            });
    }
    
};