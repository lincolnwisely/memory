// Query value
var query = '';

// Array of image markup
var imgMarkups = [];

// Image div
var divs = document.getElementsByClassName('square');

// Array used for comparing images
var test = [];



// FUNCTIONS

// Fetch data from suggested keywords
function suggestedSearch() {
  $('div.topic').on('click', function() {
    // Clear any old images
    clearContainer();
    // Clear input form
    clearSearch();
    // Remove any active classes
    $('div.topic').removeClass('active');
    // Set active on this
    $(this).addClass('active');
    let query = $(this).attr('id');
    $(divs).addClass('show');
    fetchdata(query);
  });
}


// Fetch data from custom keywords
function customSearch() {
    // Base query on input field
    let searchInput = document.querySelector("#search");

    searchInput.addEventListener('click',function(e){
      $('.topic').removeClass('active');

      this.value = '';
      $('.instructions-oops').removeClass('show');
      $('.instructions').removeClass('show');
      clearContainer();
    });

    searchInput.addEventListener('keydown',function(e){
      if (e.keyCode === 13) {
        submitQuery(e);
      }
    });

    function submitQuery(e) {
      var query = e.target.value;
      fetchdata(query);
    }
}

// Populate the memory grid with the selected category.
function initiateSearch() {
  suggestedSearch();
  customSearch();
  document.querySelector("#search").addEventListener("click",function(e){
    $('.topic').removeClass('active');
  });
}


// Build the image markup for each item in the data array
// Runs inside Fetch Data function
function buildImg(imgLink, userLink, userName) {
  let markup;
  markup = `<div class="square show"> <img src="`
         + imgLink +
     `"/>
     <p class="credit"><a href="https://unsplash.com/" target="_blank">via Unsplash</a><br/>
     <a href="` + userLink +  `" target="_blank">`+ userName + `</a></p>
  </div>
 `;
 imgMarkups.push(markup);
}

// Populate the squares in the container
// Runs inside Fetch Data function
function populateSquares(destination, markups) {
  document.querySelector(destination).innerHTML = markups.map(function(markup) {
    return markup}).join('');
}

// Fetch the data from Unspash when input is submitted
function fetchdata(query) {
  let url = `https://api.unsplash.com/search/photos/?query=` + query;
  fetch(url, {
    method: "GET",
    headers: {
      "Authorization" :'Client-ID 70c38f7f44fea0275d6b98177a480c6e23d833cfcfb7672e8efb3f43b150c39a'
    },
  }).then(function(res) {
    if (res.ok) {
      // Convert response to Json
      res.json().then(function(data) {
        // Array of objects
        usData = [];
        // Array of markup
        imgMarkups = [];
        usData = data.results;
        removeItems(usData, 2);

        if (usData.length < 8) {
          document.querySelector('.instructions-oops').classList.add('show');
          clearContainer();
        }

        else {
          $('.instructions-oops').removeClass('show');
        // Duplicate items in array so each one has a match!
        var usData = usData.reduce(function (res, current, index, array) {
          return res.concat([current, current]);
        }, []);

        // Now shuffle the array using helper function
        shuffle(usData);

        // And then build the array of image markup
        usData.forEach(function(item) {
        buildImg(item.urls.small, item.user.links.self, item.user.name);
        });

        // Show the instructions
        document.querySelector('.instructions').classList.add('show');

        // Then populate
        memoryGame();
        }
      });
    } else if (res.status == 401) {
    alert("Oops! You are not authorized.");
    }
  }, function(e) {
    alert("Error submitting form!");
});
}


// Test if all images are matched
function findMatch() {
  that = this;
  test.push($(this).children().attr('src'));
  $(this).children().addClass('show');
  if (test.length == 2) {
    if (test[0] == test[1]) {
      $(document).find('div.square img.show').addClass('success').removeClass('show');
      test.splice(0,2);
    }
    else {
      noShow();
      test.splice(0,2);
    }
  }
}


// Function to remove Show class
function noShow() {
  setTimeout(function()
  {
    $('.square').children().removeClass('show');
  }, 1000);
}


// Reveal image and test for comparison if it's the second pick
function selectImage(array) {
  $(divs).on('click', function(e){
    array.push($(this).children('img').attr('src'));
    $(this).children().addClass('show');
    $(this).children().children().addClass('show');

    if (array.length >= 2) {
      compareImages(array);
    }
  })
}


// Test for a match if there are two active images
function compareImages(array) {
  if(array.length == 2 ) {
    if (array[0] == array[1]) {
      $(document).find('div.square img.show').parent().addClass('success');
      var sqNum = $(".container-2 .square").length;
      var sucNum = $(".container-2 .success").length;

      if (sqNum == sucNum) {
        setTimeout(function()
        {
          $('.congrats').show();
        }, 300);
      }
      array.splice(0,2);
    }
    else {
      noShow();
      array.splice(0,2);
    }
  }
}


// ------------ HELPER FUNCTIONS ------------
// Assign an image and source to each box at random.
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

function clearSearch() {
  document.querySelector('#search').value = "";
}

function clearContainer() {
  document.querySelector('.container-2').innerHTML = '';
}

function removeItems(arr, item) {
  for ( var i = 0; i < item; i++ ) {
      arr.pop();
  }
  return arr;
}



// This runs in the fetch function.
function memoryGame() {
  populateSquares('.container-2', imgMarkups);
  selectImage(test);
}


// Kick off the app by fetching Unsplash data when search is submitted
initiateSearch();
