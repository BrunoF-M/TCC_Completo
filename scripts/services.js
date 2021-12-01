function handleExpandEventCards(expandServicesButton, hideServicesButton) {
  expandServicesButton.addClass("hide");
  hideServicesButton.removeClass("hide");
}

function handleHideEventCards(expandServicesButton, hideServicesButton) {
  hideServicesButton.addClass("hide");
  expandServicesButton.removeClass("hide");

  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#services_section").offset().top,
    },
    0
  );
}

$(document).ready(() => {
  const expandServicesButton = $("#expand_services_button");
  const hideServicesButton = $("#hide_services_button");

  expandServicesButton.click(() =>
    handleExpandEventCards(expandServicesButton, hideServicesButton)
  );
  hideServicesButton.click(() =>
    handleHideEventCards(expandServicesButton, hideServicesButton)
  );
});
