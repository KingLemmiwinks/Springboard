let favoriteNumber = 36;
let URL = "http://numbersapi.com";

//Making a single request
async function oneFact() {
  let data = await $.getJSON(`${URL}/${favoriteNumber}?json`);
  console.log(data);
}
oneFact();

//Multiple numbers in a single request
const favoriteNumbers = [1, 2, 3, 4, 5];
async function multipleNumbers() {
  let data = await $.getJSON(`${URL}/${favoriteNumbers}?json`);
  console.log(data);
}
multipleNumbers();

//Four facts for a single number
async function fourFacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${URL}/${favoriteNumber}?json`))
  );
  facts.forEach((data) => {
    $("body").append(`<p>${data.text}</p>`);
  });
}
fourFacts();