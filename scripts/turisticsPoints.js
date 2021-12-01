function handleExpandEventCards(showCardsButton, hideCardsButton) {
  showCardsButton.addClass("hide");
  hideCardsButton.removeClass("hide");
}

function handleHideEventCards(showCardsButton, hideCardsButton) {
  hideCardsButton.addClass("hide");
  showCardsButton.removeClass("hide");

  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $("#turistic_points_section").offset().top,
    },
    0
  );
}

$(document).ready(() => {
  const showCardsButton = $("#see_all_points_button_wrapper");
  const hideCardsButton = $("#hide_points_button_wrapper");

  showCardsButton.click(() =>
    handleExpandEventCards(showCardsButton, hideCardsButton)
  );
  hideCardsButton.click(() =>
    handleHideEventCards(showCardsButton, hideCardsButton)
  );
});
