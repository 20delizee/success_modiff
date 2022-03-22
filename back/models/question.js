module.exports = mongoose => {
    const question = mongoose.model("question",
        mongoose.Schema({

            question: String,
            type_question: String,
            id_questions: String,
            passe:  Boolean,
            nom_questionnaire: {type: mongoose.Schema.Types.ObjectId, ref: 'matieres', require: 'true'},
            question_answer: Array,
            
        })
    );
    return question;
};