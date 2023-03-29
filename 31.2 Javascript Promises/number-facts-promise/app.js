let URL = "http://numbersapi.com";
let favoriteNumber = 36;

// Making a single request
$.getJSON(`${URL}/${favoriteNumber}?json`).then((data) => {
  console.log(data);
});

// Multiple numbers in a single request
let favNumbers = [36, 45, 89];
$.getJSON(`${URL}/${favoriteNumber}?json`).then((data) => {
  console.log(data);
});

// Four facts for a single number
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${URL}/${favoriteNumber}?json`);
  })
).then((facts) => {
  facts.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});
