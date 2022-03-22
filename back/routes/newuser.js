var router = require("express").Router();


module.exports = app => {
    const questionnaireController = require("../controllers/new_user.js")

    router.post("/saveUser", function (req, res, next) {
        questionnaireController.saveUser(req, res, next);
    });
    router.post("/login", function (req, res, next) {
        questionnaireController.login(req, res, next);
});

    router.get("/getUser", function (req, res, next) {
        questionnaireController.getUser(req, res, next);
    });
    router.post("/deleteUser", function (req, res, next) {
        questionnaireController.deleteUser(req, res, next)
    });


    app.use('/success', router);
}
//{
  //  id_user:"20courtot",
    //nom:"coutot",
    //prenom:"lukas",
    //type_account:"collaborateur"
//}