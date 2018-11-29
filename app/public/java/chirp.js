// global moment

//When the user clicks add-btn
$("#chirp-submit").on("click", function (event) {
    event.preventDefault();

    //Make a newChirp object
    var newChirp = {
        author: $("#author").val().trim(),
        body: $("#chirp-box").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
})