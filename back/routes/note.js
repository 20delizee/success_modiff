var router = require("express").Router();
module.exports = app => {
    const noteController = require("../controllers/note.js")

    router.post("/Savenote", function (req, res, next) {
        noteController.Savenote(req, res, next);
    });

    router.get("/getnote", noteController.getnote);
    

    app.use('/success', router);
}