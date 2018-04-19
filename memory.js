var imgSrc = [
  "<img src='https://images.unsplash.com/photo-1516730099373-6afd7bcc8135?ixlib=rb-0.3.5&s=2709ec36e0fd4712314880f4ace30cd0&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1508182390781-8dd476c3237c?ixlib=rb-0.3.5&s=8a4f3e212021b9077b540e03e9cd9a10&auto=format&fit=crop&w=1502&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1518451753910-9c0b6285d15a?ixlib=rb-0.3.5&s=fe62aae6067d2061792880ccffcdd6a2&auto=format&fit=crop&w=1950&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1512135479691-71087f6c117b?ixlib=rb-0.3.5&s=6301fe98cad7debacfba9dc3bff572c5&auto=format&fit=crop&w=1953&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1488711500009-f9111944b1ab?ixlib=rb-0.3.5&s=e8be6859f5178187660630304a94e4bd&auto=format&fit=crop&w=1952&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1495414849595-b61e06b08381?ixlib=rb-0.3.5&s=df118b6de697e63bbc5d266ff000b148&auto=format&fit=crop&w=1955&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1505168125601-4ddfdea4c7e7?ixlib=rb-0.3.5&s=856b3e47a019abc4aeb97d2cd56cb7f2&auto=format&fit=crop&w=1951&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1517875926585-feb5360f5073?ixlib=rb-0.3.5&s=75b7b7197cfc5d25171127a08dee4fcc&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1490365728022-deae76380607?ixlib=rb-0.3.5&s=cd0352c4c74192651e42f1949116e5fa&auto=format&fit=crop&w=1567&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1484256017452-47f3e80eae7c?ixlib=rb-0.3.5&s=f1af676eceb49746407f0f418349b962&auto=format&fit=crop&w=1650&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1516730099373-6afd7bcc8135?ixlib=rb-0.3.5&s=2709ec36e0fd4712314880f4ace30cd0&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1508182390781-8dd476c3237c?ixlib=rb-0.3.5&s=8a4f3e212021b9077b540e03e9cd9a10&auto=format&fit=crop&w=1502&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1518451753910-9c0b6285d15a?ixlib=rb-0.3.5&s=fe62aae6067d2061792880ccffcdd6a2&auto=format&fit=crop&w=1950&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1512135479691-71087f6c117b?ixlib=rb-0.3.5&s=6301fe98cad7debacfba9dc3bff572c5&auto=format&fit=crop&w=1953&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1488711500009-f9111944b1ab?ixlib=rb-0.3.5&s=e8be6859f5178187660630304a94e4bd&auto=format&fit=crop&w=1952&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1495414849595-b61e06b08381?ixlib=rb-0.3.5&s=df118b6de697e63bbc5d266ff000b148&auto=format&fit=crop&w=1955&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1505168125601-4ddfdea4c7e7?ixlib=rb-0.3.5&s=856b3e47a019abc4aeb97d2cd56cb7f2&auto=format&fit=crop&w=1951&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1517875926585-feb5360f5073?ixlib=rb-0.3.5&s=75b7b7197cfc5d25171127a08dee4fcc&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1490365728022-deae76380607?ixlib=rb-0.3.5&s=cd0352c4c74192651e42f1949116e5fa&auto=format&fit=crop&w=1567&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1484256017452-47f3e80eae7c?ixlib=rb-0.3.5&s=f1af676eceb49746407f0f418349b962&auto=format&fit=crop&w=1650&q=80'/>"
];

// on page load, assign an image and source to each box at random.

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

shuffle(imgSrc);

divs = document.getElementsByClassName('square');


function assignSrc() {
  for (i = 0; i < divs.length; i++) {
    divs[i].innerHTML = imgSrc[i];
  }
}

function findMatch() {
  var test = [];
  $('.square').on('click', function() {
    test.push(this.innerHTML);
    $(this).children().addClass('show');

    if (test.length == 2) {
      if (test[0] == test[1]) {
        $(document).find('div.square img.show').addClass('success');
        // cannot chain the add and remove functions together because (i think) they prevent the tests from matching the first time. 
        $(document).find('div.square img.show').removeClass('show');

        test.splice(0,2);
      }
      else {
        console.log("not a match");
        test.splice(0,2);
        noShow();
      }
    }
  });

  if (($(divs).children().hasClass('success').length) == ($(divs).length)){
    console.log($(divs).children.hasClass('success').length);
    alert('YOU DID IT!');
  }
  console.log($('img.success').length);

}

function noShow() {
  setTimeout(function()
  {
    $('.square').children().removeClass('show');
  }, 1000);
}


assignSrc();
findMatch();


// image is set to display none.

// once clicked, box displays an image.

// user can click another box. Display the image. If they match, disappear. If not, flip them both over.
