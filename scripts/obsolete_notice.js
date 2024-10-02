document.addEventListener('DOMContentLoaded', function() {
    var popupOpen = false;

    function openPopup() {
        Swal.fire({
            title: "This Website is Obsolete",
            icon: "info",
            iconColor: "#FFC107",
            html: `<br>This website is outdated and has been archived. It no longer reflects the current status or updates and is no longer affiliated with the company.`,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `I Understand`,
            cancelButtonText: `Visit Facebook Page <i class="fa fa-external-link"></i>`,
            footer: '<a href="https://fitri.my" class="custom-footer-link">This website was designed by Mohd Fitri Zulkaffli in 2017 <i class="fa fa-external-link"></i></a>',
            confirmButtonColor: "#2A52BE",
            cancelButtonColor: "#24252B",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        }).then((result) => {
            if (result.isConfirmed) {
                popupOpen = false;
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                window.open("https://www.facebook.com/rinatechsdnbhd/", "noopener,noreferrer,nofollow");
            }
        });
        popupOpen = true;
    }
    window.addEventListener('blur', function() {
        if (popupOpen) {
            Swal.close();
        }
    });
    window.addEventListener('focus', function() {
        if (popupOpen) {
            openPopup();
        }
    });
    openPopup();
});
