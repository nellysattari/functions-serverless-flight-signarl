const apiKey=process.env["ApiKey"];
module.exports= function (context,flightTimer) {
  const https = require('http');
   // Set up the request
   var url=`http://aviation-edge.com/v2/public/flights?key=${apiKey}&limit=1&status=landed`;
   var myReq = https.get(url, (myRes) => {
    var myBody = "";
    myRes.on("data", (chunk) => {
      myBody += chunk;
    });

    myRes.on("end", () => {
      var insertObj =  myBody;
       context.res = {
                  status: 200,
                  body:  insertObj
              };
      context.done(null, insertObj);
      
    });
  }).on("error", (error) => {
    context.log('error',error);
    context.res = {
      status: 500,
      body: error
    };
     context.done()
    
  });
  myReq.end();
};