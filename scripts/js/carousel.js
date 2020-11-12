$(document).ready(()=>{
    $(".slider").slick({
        mobileFirst: true,
        responsive: [{
            breakpoint: 1020,
            setting:"unslick"
        }
        ]
    });
});
