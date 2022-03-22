module.exports = mongoose => {
    const matiere = mongoose.model("matiere",
        mongoose.Schema({   
                   
            nom_questionnaire: {type: String, require: 'true'},
            code: String,
            passe: Boolean
        })
    );
    return matiere;
  };