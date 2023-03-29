let URL = "https://deckofcardsapi.com/api/deck";

// Draw one card
async function drawOneCard(){
    let data = await $.getJSON(`${URL}/new/draw/`);
    let {suit, value} = data.cards[0];
    console.log(`${value} of ${suit}`);
}

// Draw two cards from the same deck
async function drawTwoCards() {
  let firstCard = await $.getJSON(`${URL}/new/draw/`);
  let deck = firstCard.deck;
  let secondCard = await $.getJSON(`${URL}/${deck}/new/draw/`);
  [firstCard, secondCard].forEach(card => {
    let {suit, value} = card.cards[0];
    console.log(`${value} of ${suit}`);
  });
}

// Draw cards until the deck is empty
async function drawCards() {
    let $btn = $('button');

    let deckData = await $.getJSON(`${URL}/new/shuffle/`);
    $btn.show().on("click", async function () {
        let cardData = await $.getJSON(`${URL}/${deckData.deck_id}/draw/`);
        $("body").append(`<p>${cardData.cards[0].value.toLowerCase()} of ${cardData.cards[0].suit.toLowerCase()}</p>`);
        console.log(cardData);
    if (cardData.remaining === 0) $btn.remove();
  });
}
drawCards();