module.exports.applyRouteConfig = function (app,routConfig,disposeAfter) {
    for(var i = 0 ; i < routConfig.methods.length;i++){
        var route = routConfig.methods[i];
        if(route.method.toLowerCase() == "get"){
            app.get(route.path,routConfig.middleWare,route.controller);
        }
        else if(route.method.toLowerCase() == "post"){
            app.post(route.path,routConfig.middleWare,route.controller);
        }
        else if(route.method.toLowerCase() == "delete"){
            app.delete(route.path,routConfig.middleWare,route.controller);
        }
    }


    if(disposeAfter) routConfig == null;
}