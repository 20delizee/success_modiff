module.exports = mongoose => {
    const Answers = mongoose.model("answers",
        mongoose.Schema({
            id_questions: String,
            id_user: String,
            answer_content: String,
            answer_status: Boolean,
            nom_questionnaire: {type: mongoose.Schema.Types.ObjectId, ref: 'matieres', require: 'true'},
            question:String
        })
    );

    return Answers;
};