module.exports = function(app) {
   "use strict";
    return {
        applyRouteConfig:(routeConfig, disposeAfter) => {
            if (app && routeConfig) {
                for (var i = 0; i < routeConfig.methods.length; i++) {
                    var route = routeConfig.methods[i];
                    if (route.method.toLowerCase() == "get") {
                        app.get(route.path, routeConfig.middleWare, route.controller);
                    }
                    else if (route.method.toLowerCase() == "post") {
                        app.post(route.path, routeConfig.middleWare, route.controller);
                    }
                    else if (route.method.toLowerCase() == "delete") {
                        app.delete(route.path, routeConfig.middleWare, route.controller);
                    }
                }


                if (disposeAfter) {
                    for(var item in routeConfig ) delete routeConfig[item];
                    routeConfig = null;
                }
            }
        }
    }
}
