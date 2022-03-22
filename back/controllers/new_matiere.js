const db = require('../models');

const Matiere = db.matiere;

exports.validateCode = (req, res, next) => {
  Matiere
    .findOne({ code: req.body.code })
    
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Survey with id " + req.body.surveyCode });
    });
}

// Create and Save a new Tutorial
exports.saveMatiere = (req, res) => {
  // Validation de la requête 
  var matieres = new Matiere(req.body);

  // Sauvegarde de l'objet dans la base de données
  matieres
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Erreur | Impossible de créer l'objet Tutorial"
      });
    });
};

// Retrieve all Tutorials from the database.
exports.getMatiere = (req, res) => {


  Matiere.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Erreur | Impossible de récupérer les objets Tutorial via bdd "
      });
    });
};


exports.find = (req, res) => {
        
  Matiere
      .find({"nom_questionnaire" : req.body.nom_questionnaire}).count()
      
      .then(data => {
          res.send(data);

      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Il y a un soucis."
          });
      });

}

exports.deleteMatiere = (req, res) => {
  const _id = req.body.id;

  Matiere.findByIdAndRemove(_id)
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
// Find a single Tutorial with an id

// Update a Tutorial by the id in the request
//exports.update = (req, res) => {
    //if (!req.body) {
      //  return res.status(400).send({
        //    message: "Data to update can not be empty!"
//        });
  //  }
//
  //  const id = req.params.id;
//
  //  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    //    .then(data => {
      //      if (!data) {
        //        res.status(404).send({
          //          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
            //    });
//            } else res.send({ message: "Tutorial was updated successfully." });
  //      })
    //    .catch(err => {
      //      res.status(500).send({
        //        message: "Error updating Tutorial with id=" + id
          //  });
//        });
//};


// Delete all Tutorials from the database.