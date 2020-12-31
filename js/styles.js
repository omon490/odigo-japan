// Function
{var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};}
// Function

var elMenu = $_(`.site-header__top`);
var elMenuOpen = $_(`.site-header__top--open`);
var elMenuToggler = $_(`.site-header__toggler`);

elMenuToggler.addEventListener(`click`, function() {
  elMenu.classList.toggle(`site-header__top--open`);
});

// var elCards = [
//   {
//     elImg: `img/nagoya.jpg`,
//     elImgRetina: `img/nagoya@2x.jpg`,
//     elTitle: `Nagoya`,
//     elLikes: `221`,
//     elMessage: `50`
//   },
//   {
//     elImg: `img/nigata.jpg`,
//     elImgRetina: `img/nigata@2x.jpg`,
//     elTitle: `Niigata`,
//     elLikes: `210`,
//     elMessage: `20`
//   },
//   {
//     elImg: `img/osaka.jpg`,
//     elImgRetina: `img/osaka@2x.jpg`,
//     elTitle: `Osaka`,
//     elLikes: `245`,
//     elMessage: `90`
//   },
//   {
//     elImg: `img/saitama.jpg`,
//     elImgRetina: `img/saitama@2x.jpg`,
//     elTitle: `Saitama`,
//     elLikes: `411`,
//     elMessage: `80`
//   },
//   {
//     elImg: `img/ueno.jpg`,
//     elImgRetina: `img/ueno@2x.jpg`,
//     elTitle: `Ueno`,
//     elLikes: `151`,
//     elMessage: `35`
//   },
//   {
//     elImg: `img/shibuya.jpg`,
//     elImgRetina: `img/shibuya@2x.jpg`,
//     elTitle: `Shibuya`,
//     elLikes: `154`,
//     elMessage: `75`
//   },
// ];

// var elCardsList = $_(`.js-visit__list`);

// var elCardsTemplate = $_(`.visit__list-template`).content;

// var elCardsFragment = document.createDocumentFragment();

// elCards.forEach(function (card) {
// var elCardsItem = elCardsTemplate.cloneNode(true);

// $_(`.js-visit__img`, elCardsItem).src = card.elImg;
// $_(`.js-visit__img`, elCardsItem).srcset = `${card.elImg}, ${card.elImgRetina} 2x`;
// $_(`.js-visit__info-text`, elCardsItem).textContent = card.elTitle;
// $_(`.js-visit__info-number`, elCardsItem).textContent = card.elLikes;
// $_(`.js-visit__info-comment`, elCardsItem).textContent = card.elMessage;

// elCardsFragment.appendChild(elCardsItem);
// });

// (elCardsList).appendChild(elCardsFragment);
