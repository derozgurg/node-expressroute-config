# express-routeconfig

ExpressJS rout config model for nodejs

**install**

npm install https://github.com/derozgurg/node-expressroute-config --save

**using**

    function webApiMiddleware(req, res, next) {
        if (typeof req.user == "undefined") {
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.statusCode = 401;
           return res.end('{"succeed":false}');
        } else {        
            next();
        }
    }



    var apiRouteConfig = {
        middleWare : webApiMiddleware,
        methods:[
            {method:"get",path:"/api/calendar/customeritems",controller:calendar.customerList},
            {method:"get",path:"/api/point/inround/:roundId",controller:point.inRound}
            {method:"post",path:"/api/point/save",controller:point.save}
        ]
    };
    
    routeConfig.applyRouteConfig(app,apiRouteConfig);


    /* insteadof
    app.get("/api/calendar/customeritems",calendar.customerList);
    app.get("/api/point/inround/:roundId",point.inRound);
    app.post("/api/point/save",point.save);*/
