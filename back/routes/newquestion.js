module.exports = app => {
    const questionController = require("../controllers/new_question.js")
    var router = require("express").Router();

    router.post("/saveQuestion", function (req, res, next) {
        questionController.saveQuestion(req, res, next);
    });
    router.get("/getQuestion", questionController.getQuestion);

    router.post("/deleteQuestion", function (req, res, next) {
        questionController.deleteQuestion(req, res, next);
    });


    app.use('/success', router);
}
