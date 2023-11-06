import "./index.css";
import FormValidator from "../components/FormValidator";
import { configValidate, cardsData } from "../constants/constants";

// CODE FOR SYTLING DROPDOWN

const dropdownElement = document.getElementById("drop");

dropdownElement.addEventListener("change", function () {
  if (dropdownElement.value !== "Select One") {
    dropdownElement.classList.add("selected");
  } else {
    dropdownElement.classList.remove("selected");
  }
});

// CODE FOR DATA VALIDATION

const formElement = document.querySelector(".contact__form");

const formValidator = new FormValidator(configValidate, formElement);

formValidator.enableValidation();

// CODE FOR GOOGLE MAP

function initMap() {
  const mapOptions = {
    center: { lat: 38.98732865633846, lng: -94.66840803164911 },
    zoom: 15,
    mapId: "d4770bfb3e9cda45",
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const markerPosition = { lat: 38.98732865633846, lng: -94.66840803164911 };

  const marker = new google.maps.Marker({
    position: markerPosition,
    map: map,
    title: "Lifted Logic",
    label: {
      text: "Lifted Logic",
      color: "#000000",
      fontSize: "42px",
    },
  });
}

// CODE FOR CARD SLIDER

function createCard(imageSrc, title, content, content_2) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("div");
  image.classList.add("card__image");
  image.classList.add(`card__image_type_${imageSrc}`);

  const container = document.createElement("div");
  container.classList.add("card__info");

  const heading = document.createElement("h2");
  heading.classList.add("card__heading");
  heading.textContent = title;

  const paragraph1 = document.createElement("p");
  paragraph1.classList.add("card__content1");
  paragraph1.textContent = content;

  const paragraph2 = document.createElement("p");
  paragraph2.classList.add("card__content2");
  paragraph2.textContent = content_2;

  card.appendChild(image);
  card.appendChild(container);
  container.appendChild(heading);
  container.appendChild(paragraph1);
  container.appendChild(paragraph2);

  return card;
}

const cardContainer = document.querySelector(".card__container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const cardWidth = document.querySelector(".card").offsetWidth;
const cardMargin = parseInt(
  getComputedStyle(document.querySelector(".card")).marginRight
);

cardsData.forEach((data) => {
  const card = createCard(
    data.imageSrc,
    data.title,
    data.content,
    data.content_2
  );
  cardContainer.appendChild(card);
});

function duplicateFirstCard() {
  const firstCard = cardContainer.querySelector(".card");
  const clonedCard = firstCard.cloneNode(true);
  cardContainer.appendChild(clonedCard);
}

const maxPosition = cardContainer.childElementCount * (cardWidth + cardMargin);

let cardPosition = 0;

function updateCardContainerPosition() {
  cardContainer.style.transform = `translateX(-${cardPosition}px)`;
}

duplicateFirstCard();

// ADD EVENT LISTENERS

// google.maps.event.addDomListener(window, "load", initMap);

window.addEventListener("load", initMap);

prevButton.addEventListener("click", () => {
  cardPosition =
    (cardPosition - cardWidth - cardMargin + maxPosition) % maxPosition;
  updateCardContainerPosition();
});

nextButton.addEventListener("click", () => {
  cardPosition = (cardPosition + cardWidth + cardMargin) % maxPosition;
  updateCardContainerPosition();
});
