document.addEventListener('DOMContentLoaded', function() {
  var popupOpen = false;

  function openPopup() {
    Swal.fire({
      title: "Web Design Museum",
      icon: "info",
      iconColor: "#4169E1",
      html: `This website has been archived and is obsolete. It does not reflect the current status or updates and is no longer affiliated with the company.`,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `I Understand`,
      cancelButtonText: `Visit Facebook Page <i class="fa fa-external-link"></i>`,
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
