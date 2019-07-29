module.exports =  function (context, landedFlight) {
    // context.log('JavaScript queue trigger function processed work item', landedFlight);
    // context.log('expirationTime =', context.bindingData );
   var MostRecentFlight= [landedFlight].map(flight => ({
                target: 'landedFlight',
                arguments: [flight]
                }));
   console.log("recent Flight  :",MostRecentFlight[0]);
    // target property is the name of the function to be invoked on the client
    // arguments property is the array of objects to be passed to the client.
    context.bindings.signalRMessages =MostRecentFlight;
    context.done();
};

 