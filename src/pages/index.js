import "./index.css";
import FormValidator from "../components/FormValidator";
import { configValidate } from "../constants/constants";

function createCard(imageSrc, title, content, content_2) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("div");
  image.src = imageSrc;
  image.alt = title + " Image";

  const heading = document.createElement("h2");
  heading.textContent = title;

  const paragraph1 = document.createElement("p");
  paragraph1.textContent = content;

  const paragraph2 = document.createElement("p");
  paragraph2.textContent = content_2;

  card.appendChild(image);
  card.appendChild(heading);
  card.appendChild(paragraph1);
  card.appendChild(paragraph2);

  return card;
}

const cardContainer = document.querySelector(".card-container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Calculate the card width including margin
const cardWidth = document.querySelector(".card").offsetWidth;
const cardMargin = parseInt(
  getComputedStyle(document.querySelector(".card")).marginRight
);

// Initial card position
let cardPosition = 0;

const cardsData = [
  {
    imageSrc: "../images/Images/71RLkNIuZNL._SY355_.jpg",
    title: "Trapsoul",
    content: "Bryson Tiller",
    content_2:
      "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
  },
  {
    imageSrc: "card1.jpg",
    title: "Card 2",
    content: "Bryson Tiller.",
    content_2:
      "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
  },
  {
    imageSrc: "card1.jpg",
    title: "Card 3",
    content: "Card 1 content here.",
    content_2:
      "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
  },
  {
    imageSrc: "card1.jpg",
    title: "Card 4",
    content_2:
      "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
  },
  {
    imageSrc: "card1.jpg",
    title: "Card 5",
    content_2:
      "Bryson Djuan Tiller, is an American singer, songwriter and rapper. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.",
  },
];

cardsData.forEach((data) => {
  const card = createCard(
    data.imageSrc,
    data.title,
    data.content,
    data.content_2
  );
  cardContainer.appendChild(card);
});

const maxPosition =
  (cardContainer.childElementCount - 1) * (cardWidth + cardMargin);

prevButton.addEventListener("click", () => {
  cardPosition =
    (cardPosition - cardWidth - cardMargin + maxPosition) % maxPosition;
  updateCardContainerPosition();
});

nextButton.addEventListener("click", () => {
  cardPosition = (cardPosition + cardWidth + cardMargin) % maxPosition;
  updateCardContainerPosition();
});

function updateCardContainerPosition() {
  cardContainer.style.transform = `translateX(-${cardPosition}px)`;
}
