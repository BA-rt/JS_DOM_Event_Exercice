// INCREMENTATION CLIQUE FOOTER

var footer = document.querySelector('footer');
var i = 1;

footer.addEventListener('click', function() {
  console.log('clique');
  console.log(i);
  i++;
});

// AFFICHAGE DE LA NavBAR

var navbar = document.getElementById('navbarHeader');
var hamburger = document.querySelector('span.navbar-toggler-icon');

function collapse() {
  navbar.classList.toggle('collapse');
}

hamburger.addEventListener('click', collapse);

// DEFILEMENT DES ICONS

var album = document.getElementsByClassName('container1');
// console.log(album);

var row = document.getElementsByClassName('row')[1];
// console.log(album);

var moveBeforeBtn = document.getElementsByClassName('btn-secondary')[0];
// console.log(moveBeforeBtn);

moveBeforeBtn.addEventListener('click', function() {
  row.insertBefore(album[album.length - 1], album[0]);
});

var moveAfterBtn = document.getElementsByClassName('btn-primary')[0];

moveAfterBtn.addEventListener(
  'click',
  function() {
    moveAfterBtn.setAttribute('href', '#');
    row.insertBefore(album[0], album.nextSibling);
  },
  true
);

// EVENT DES BOUTONS EDIT

var card = document.getElementsByClassName('card')[6];
// console.log(card);
var edit = card.getElementsByClassName('btn')[1];
// console.log(edit);

function Blue() {
  if (card.style.color === 'blue') {
    card.style.removeProperty('color');
  } else if (card.style.color !== 'blue') {
    card.style.color = 'blue';
  }
}

edit.addEventListener('click', Blue);

var card2 = document.getElementsByClassName('card')[7];
// console.log(card2);

var edit2 = card2.getElementsByClassName('btn')[1];
console.log(edit2);

var imgTop = card2.getElementsByTagName('img')[0];

// console.log(imgTop.src);

// console.log(card2.src);

function Green() {
  if ((imgTop.src = 'https://img.icons8.com/color/480/000000/javascript.png')) {
    imgTop.src = 'https://img.icons8.com/color/480/000000/html-5.png';
  }
}

edit2.addEventListener('click', Green);

// EVENT DES BOUTONS VIEW

var cards = document.querySelectorAll('.card-body p');
// console.log(cards[0]);

var viewBtn = document.getElementsByClassName('btn-success');
// console.log(viewBtn[0]);

var img = document.querySelectorAll('.container2 .card-img-top');
// console.log(img[0]);

for (let index = 0; index < cards.length; index++) {
  viewBtn[index].addEventListener('click', function() {
    if (img[index].style.width == '') img[index].style.width = 20 + '%';
    else {
      img[index].style.width = '';
    }
    cards[index].classList.toggle('collapse');
  });
}

// SUPPRESSION MISE EN PAGE (double click header)

var navbar2 = document.querySelector('div.navbar');
var link = document.querySelector('link');

function nucleaire() {
  if (link.disabled !== true) {
    link.disabled = true;
  } else {
    link.disabled = false;
  }
}

navbar2.addEventListener('dblclick', nucleaire);

// EVENT KEY PRESS (bouton edit derniere card)

var card3 = document.getElementsByClassName('card')[8];
// console.log(card2);

var edit3 = card3.getElementsByClassName('btn')[1];
// console.log(edit3);

var logo = document.getElementsByTagName('a')[3];
var body = document.querySelector('body');

card3.addEventListener('keypress', function(event) {
  console.log(
    "'a' pour décaler à gauche, 'y' pour décaler au milieu, 'p' pour décaler à gauche, 'b' retour à la normal"
  );
  switch (event.code) {
    case 'KeyQ':
      body.className = '';
      body.classList.add('col-4');
      body.classList.add('offset-md');
      break;

    case 'KeyY':
      body.className = '';
      body.classList.add('col-4');
      body.classList.add('offset-md-4');
      break;

    case 'KeyP':
      body.className = '';
      body.classList.add('col-4');
      body.classList.add('offset-md-8');
      break;

    case 'KeyB':
      body.className = '';
  }

  console.log('Tu as pressé la lettre: ' + event.key);
  console.log('Attribut du body: ');
  console.log(body);
  event.preventDefault();
});
