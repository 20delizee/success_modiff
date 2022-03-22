const db = require('../models');
const User = db.user;
const Note = db.note;


exports.Savenote = (req, res, next) => {
    // Validation de la requête
    // Création de l'objet
    const note = new Note({
    
      question: req.body.question,
      bonne_reponse: req.body.bonne_reponse,
      mauvaise_reponse: req.body.mauvaise_reponse,
  });
    // Sauvegarde de l'objet dans la base de données
    note
        .save()
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
exports.getnote = (req, res) => {

    Note.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Erreur | Impossible de récupérer les objets Tutorial via bdd "
        });
      });
  };
  