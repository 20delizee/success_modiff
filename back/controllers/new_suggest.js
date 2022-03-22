const db = require('../models');
const Suggest = db.suggest;

exports.saveSuggest = (req, res, next) => {
    // Validation de la requête
    // Création de l'objet
    var suggests = new Suggest(req.body);
    // Sauvegarde de l'objet dans la base de données
    suggests
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
exports.getSuggest = (req, res) => {


    Suggest.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Erreur | Impossible de récupérer les objets Tutorial via bdd "
        });
      });
  };
  
