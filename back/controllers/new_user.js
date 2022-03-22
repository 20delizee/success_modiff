const db = require('../models');
const bcrypt = require('bcrypt');
const User = db.user;
const jwt = require('jsonwebtoken');
exports.login = (req, res, next) => {
  User.findOne({ id_user: req.body.id_user })
    .then(user => {
      if (!user) {
        console.log(req.body)
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          user.token = jwt.sign({ userId: user.password }, 'RANDOM_TOKEN_SECRET', { expiresIn: '4h' })
          res.send(user)
          // res.status(200).json({
          //   id_user: user.id_user,
          //   password: user.password,
          //   token: jwt.sign(
          //     { userId: user.password },
          //     'RANDOM_TOKEN_SECRET',
          //     { expiresIn: '4h' }
          //   )
          // });
        })
        
        .catch(error => res.status(500).json({ error }));

    })
    .catch(error => res.status(500).json({ error }));


};

// Create and Save a new Tutorial
exports.saveUser = (req, res, next) => {
  // Validation de la requête 
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        id_user: req.body.id_user,
        nom: req.body.nom,
        prenom: req.body.prenom,
        user_account: req.body.user_account,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

// Retrieve all Tutorials from the database.
exports.getUser = (req, res) => {
  User.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Erreur | Impossible de récupérer les objets Tutorial via bdd "
      });
    });
};

exports.deleteUser = (req, res) => {
  const _id = req.body.id;

  User.findByIdAndRemove(_id)
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