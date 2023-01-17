$(".header__burgir").click(function() {
    if($(".header__burgir").hasClass("active")) {
        $(".header__burgir").removeClass("rotate");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
        }, 300);
        $(".header").removeClass("open");
    } else {
        $(".header__burgir").addClass("active");
        setTimeout(function() {
            $(".header__burgir").addClass("rotate");
        }, 300);
        $(".header").addClass("open");
    };    
});

$(".modal-open").click(function() {
    $(".modal").addClass("active");
    setTimeout(function() {
        $(".modal").addClass("opacity");
    }, 300);
});
$(".modal .close").click(function() {
    $(".modal").removeClass("opacity");
    setTimeout(function() { 
        $(".modal").removeClass("active");
    }, 300);
});