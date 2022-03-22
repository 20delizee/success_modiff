module.exports = app => {
    const suggestController = require("../controllers/new_suggest.js")
    var router = require("express").Router();

    router.post("/saveSuggest", function (req, res, next) {
        suggestController.saveSuggest(req, res, next);
    });
    router.get("/getSuggest", suggestController.getSuggest);



    app.use('/success', router);
}
