const db = require('../models');
const Answer = db.answers;


exports.Answerfind = (req, res) => {

  console.log(req.body)
  Answer
    .find(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Erreur | Impossible de récupérer les objets Tutorial via bdd "
      });
    });
};
