// page linking
$(document).ready(function() {
    $("#about-link").click(function(event)
    {
       $("body, html").animate({
            scrollTop: $(".about-section").offset().top
       }, 600);
    });
});


$(document).ready(function() {
    $("#project-link").click(function(event)
    {
       $("body, html").animate({
            scrollTop: $(".service-section").offset().top
       }, 600);
    });
});

$(document).ready(function() {
    $("#contact-link").click(function(event)
    {
       $("body, html").animate({
            scrollTop: $(".contact").offset().top
       }, 600);
    });
});




$(document).ready(function() {
    $(".hire-btn").click(function()
    {
        window.location.href = "mailto:fiifisapp4245@gmail.com";
    });
});

$(document).ready(function() {
    $(".talk-btn").click(function()
    {
        window.location.href = "mailto:fiifisapp4245@gmail.com";
    });
});

$(document).ready(function() {
    $("#alpha").click(function()
    {
        window.location.href = "https://www.behance.net/gallery/152340283/alpha-academea";
    });
});

$(document).ready(function() {
    $("#siel").click(function()
    {
        window.location.href = "https://www.behance.net/gallery/157195939/Redesign-of-Siel-website?tracking_source=project_owner_other_projects";
    });
});

$(document).ready(function() {
    $("#bond").click(function()
    {
        window.location.href = "https://www.behance.net/gallery/165778175/bond-healthcare?share=1";
    });
});

$(document).ready(function() {
    $("#doca").click(function()
    {
        window.location.href = "https://www.behance.net/gallery/155895005/Docamet-Case-study?tracking_source=project_owner_other_projects";
    });
});

$(document).ready(function() {
    $(".show-btn").click(function()
    {
        window.location.href = "https://www.behance.net/fiifiappiah";
    });
});