const db = require('../models');
const question = db.question;

exports.saveQuestion = (req, res, next) => {
    // Validation de la requête
    // Création de l'objet
    var questions = new question(req.body);
    // Sauvegarde de l'objet dans la base de données
    questions
        .save(req.body)
        //.populate("matieres")
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Erreur | Impossible de créer l'objet Tutorial"
            });
        });
}
exports.getQuestion = (req, res) => {


    question.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Erreur | Impossible de récupérer les objets Tutorial via bdd "
        });
      });
  };
  

exports.deleteQuestion= (req, res) => {
    const _id = req.body.id;
  
    question.findByIdAndRemove(_id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Tutorial with id=${_id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
  };
