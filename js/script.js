//waits until page is ready
$(document).ready(function() {
    //cardimage click event to display paragraph
    $("img").click(function() {

        $(this).next().children("p").slideDown('slow');
    });
    //Card click toggle event to change backgound-color to pink via new class
    $(".card").click(function() {
        $(this).toggleClass("highlight");
    });

    //select event will hide all cards except highlited cards
    $("#select_btn").click(function() {
        $(".card:not(.highlight)").hide();
    });

    //all event will show all cards
    $("#all_btn").click(function() {
        $(".card").show();
    });


});