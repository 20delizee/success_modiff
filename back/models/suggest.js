module.exports = mongoose => {
    const suggest = mongoose.model("suggest",
        mongoose.Schema({

            question: String,
            nom_questionnaire: {type: mongoose.Schema.Types.String, ref: 'matieres', require: 'true'},
            
        })
    );
    return suggest;
};