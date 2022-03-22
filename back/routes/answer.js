module.exports = app => {
    const answerController = require("../controllers/answer.js");
    var router = require("express").Router();


    router.post("/Answerfind", function (req, res, next) {
        answerController.Answerfind(req, res, next);
    });



    app.use('/success', router);
}