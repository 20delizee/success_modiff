module.exports = mongoose => {
    const note = mongoose.model("note",
        mongoose.Schema({
            bonne_reponse:String,
            mauvaise_reponse:String,
            question:String,
        })
    );

    return note;
};