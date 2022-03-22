module.exports = app => {
    const successController = require("../controllers/question.js");
    var router = require("express").Router();
    router.post("/getRandUs",  function(req, res, next) {
        successController.getRandUs(req, res, next);
    });

    router.get("/findAll", successController.findAll);
    
    router.post("/saveAnswer", function(req, res, next) {
        successController.saveAnswer(req, res, next);
    });
   

    
    
    app.use('/success', router);
}