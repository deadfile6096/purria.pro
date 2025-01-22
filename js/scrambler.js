/*=============== QUESTIONS ACCORDION ===============*/

let interval;
const randomInt = (max) => Math.floor(Math.random() * max);
const randomFromArray = (array) => array[randomInt(array.length)];

const scrambleText = (text) => {
  const chars = "rqkzvx}".split("");
  return text
    .split("")
    .map((x) => (randomInt(3) > 1 ? randomFromArray(chars) : x))
    .join("");
};

const scrambleItems = document.querySelectorAll(".scramble");

scrambleItems.forEach((item) => {
  let originalText = item.innerText;

  item.addEventListener("mouseover", () => {
    interval = setInterval(
      () => (item.innerText = scrambleText(originalText)),
      100
    );
  });

  item.addEventListener("mouseout", () => {
    clearInterval(interval);
    item.innerText = originalText;
  });
});
