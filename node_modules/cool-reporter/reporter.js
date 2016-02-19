'use strict';

var chalk = require('chalk');
var Table = require('cli-table');
var logSymbols = require('log-symbols');

function reporter(errors){

  var habla = '';

  if(! errors || (errors && ! (errors instanceof Array)) || (errors && errors instanceof Array && errors.length === 0)){

    habla = '\n'+logSymbols.success+' '+chalk.green('No problems')+'\n';

  }else{

    var total = errors.length;
    var errorCount = 0;
    var warningCount = 0;
    var infotype = '';

    var t = new Table({
      head: [ 'File', 'Line','Col','Reason','Type' ],
      style: { 'padding-left': 1 , 'padding-right': 1
          , head: ['gray'], border: ['gray']
      }
    });

    errors.forEach(function (el) {

      var err = el.error;
      var file = el.file;
      var infocell = {};

      var isError = err.code && err.code[0] === 'E';
      if (isError) {

        errorCount++;
        infotype = chalk.red;
        infocell.icon = logSymbols.error+' Error';


      } else {

        warningCount++;
        infotype = chalk.yellow;
        infocell.icon = logSymbols.warning+' Warning';


      }

      if(! err.line){ err.line = '(unknown line)'; }
      if(! err.character){ err.character = '(unknown column)'; }
      if(! err.reason){ err.reason = '(unknown error)'; }
      if(! err.evidence){ err.evidence = '(unknown problem)'; }
      if(! err.code){ err.code = '(unknown code)'; }

      t.push([
        infotype( file ),
        infotype(  err.line ),
        infotype( err.character ),
        infotype( err.reason ),
        infotype( infocell.icon )
      ]);

    });

    habla = '\n' + t.toString();
    habla += '\n' +(total > 1 ? ' Errors: ' : ' Error: ')+total+'\n';

  }

  console.log( habla );

}

module.exports = { reporter: reporter };
