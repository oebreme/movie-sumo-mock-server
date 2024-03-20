const fs = require('fs');
const https = require('follow-redirects').https;

const GITHUB = 'raw.githubusercontent.com';
const BASE_PATH = '/oebreme/movie-sumo-contracts/main';
const VERSION = '/v3/';
const FILE_NAME = 'api.yaml';
const FILE_DESTINATION = './src/api/';

const PATH = BASE_PATH + VERSION + FILE_NAME;
const FS_TARGET = FILE_DESTINATION + FILE_NAME;


options = {
  host               : GITHUB,
  port               : 443,
  path               : PATH,
  method             : 'GET',
  rejectUnauthorized : false,
  requestCert        : true,
  agent              : false
};



fs.stat(FS_TARGET, (err) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.log('File does not exist.');
    }
  } else {
    // Delete File if already exists
    fs.unlink(FS_TARGET, (err) => {
      if (err) {
        console.error('Error occurred while deleting the file:', err);
      }
    });
  }

  // Always Create new File
  const file = fs.createWriteStream(FS_TARGET);

  const request = https.get(options, function(response){
    response.pipe(file);


    file.on("finish", function(){
      file.close();
    });
  });

  request.end();

  request.on('error', function(err){
    throw (err);
  });
});
