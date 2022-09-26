function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// magnify pic




//initiate the plugin and pass the id of the div containing gallery images
$('#zoom_03').ezPlus({
    gallery: 'gallery_01',
    cursor: 'pointer',
    galleryActiveClass: 'active',
    imageCrossfade: true,

});

//pass the images to Fancybox
$('#zoom_03').bind('click', function(e) {
    var ez = $('#zoom_03').data('ezPlus');
    $.fancyboxPlus(ez.getGalleryList());
    return false;
});



//navtab

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    autoplay: true,
});

splide.mount();



/* js for range */