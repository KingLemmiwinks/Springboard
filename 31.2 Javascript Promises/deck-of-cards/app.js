let URL = "https://deckofcardsapi.com/api/deck";

// Draw one card
$.getJSON(`${URL}/new/draw/`)
  .then((data) => {
    let {suit, value} = data.cards[0];
    console.log(`${value} of ${suit}`);
});

// Draw two cards from the same deck
let cardOne = null;
$.getJSON(`${URL}/new/draw/`)
  .then((data) => {
    cardOne = data.cards[0];
    let deck = data.deck_id;
    return $.getJSON(`${URL}/${deck}/draw/`);
  })
  .then((data) => {
    let cardTwo = data.cards[0];
    [cardOne, cardTwo].forEach(function (card) {
      console.log(`${card.value} of ${card.suit}`);
    });
  });

// Draw cards until the deck is empty
let deck = null;
let $btn = $("button");
let $cards = $("#cards");

$.getJSON(`${URL}/new/shuffle/`).then((data) => {
  deck = data.deck_id;
  $btn.show();
});

$btn.on("click", function () {
  $.getJSON(`${URL}/${deck}/draw/`)
    .then((data) => {
      console.log(data);
      let cardData = data;
      $("body").append(`<p>${cardData.cards[0].value.toLowerCase()} of ${cardData.cards[0].suit.toLowerCase()}</p>`);
      console.log(cardData);
      if (data.remaining === 0) $btn.remove();
  });
});