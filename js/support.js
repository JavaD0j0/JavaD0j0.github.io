
$("#uci").hover(function () {
    $(this).css("background-color", "#00386c");
    $(this).css("color", "#f6aa0d");
}, function () {
    $(this).css("background-color", "#343a40");
    $(this).css("color", "whitesmoke");
});

$("#cs").hover(function () {
    $(this).css("background-color", "#333");
    $(this).css("color", "#00cc00")
}, function () {
    $(this).css("background-color", "#343a40");
    $(this).css("color", "whitesmoke");
});

$("#year").text(new Date().getFullYear());

$("body").scrollspy({
    target: "#navigation"
});

//Smooth scroll
$("#navigation a").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate({
                scrollTop: $(hash).offset().top
            },
            800,
            function () {
                window.location.hash = hash;
            }
        );
    }
});

//Allowing collapse to be dismissed when click outside of card-body
$("html body").click(function (e) {
    if (!$(e.target).is(".card-body"))
        $(".collapse").collapse("hide");
});