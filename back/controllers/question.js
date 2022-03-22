const db = require('../models');
const question = db.question;
const Answer = db.answers;
const Matiere = db.matiere


exports.create = (req, res) => {
    question.save(question)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};



exports.getRandUs = (req, res) => {
    console.log(req.body)
    question
        .find(
            req.body
        )
        .populate()
        .then(data => {
            res.send(data);

        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Il y a un soucis."
            });
        });

}


exports.findAll = (req, res) => {

    question.find({
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Erreur | Impossible de récupérer les objets Tutorial via bdd "
            });
        });
};

exports.saveAnswer = (req, res, next) => {
    // Validation de la requête
    if (!req.body.answer_content) {
        res.status(400).send({ message: "Le contenu ne peux pas être vide" });
        return;
    }



    // Création de l'objet
    const ans = new Answer({
        id_questions: req.body.questions,
        question: req.body.question,
        answer_content: req.body.answer_content,
        answer_status: req.body.answer_status,
        id_user: req.body.id_user
    });

    // Sauvegarde de l'objet dans la base de données
    ans
        .save(ans)
        
        .then(data => {
            res.send(data);

        })

        .catch(err => {
            res.status(500).send({
                message: err.message || "Erreur | Impossible de créer l'objet Tutorial"
            });
        });
}

