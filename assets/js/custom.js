function toggle_sidenav() {
    if ($('#sidenav').css('left') == '-250px') {
        $('#sidenav').css('left', '0');
        $('#content').css('margin-left', '250px');
    } else {
        $('#sidenav').css('left', '-250px');
        $('#content').css('margin-left', '0');
    }
}


$('.dropdown-btn').click(function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
    } else {
        dropdownContent.style.display = "none";
    }
});
