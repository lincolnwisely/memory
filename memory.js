var usData = [];
var query = '';


function fetchdata(query) {
  let url = `https://api.unsplash.com/search/photos/?query=` + query;
  console.log('fetch works!');
  console.log(url);
  fetch(url, {
    method: "GET",
    headers: {
      "Authorization" :'Client-ID 70c38f7f44fea0275d6b98177a480c6e23d833cfcfb7672e8efb3f43b150c39a'
    },
  }).then(function(res) {
    if (res.ok) {
      // Convert response to Json
      res.json().then(function(data) {
        usData = data.results; 
        

        // duplicate items in array so each one has a match!
        var usData = usData.reduce(function (res, current, index, array) {
          return res.concat([current, current]);
        }, []);
        
        shuffle(usData);
        console.log(usData);

        var markup = '';
        usData.forEach(function(item) {    

          markup += `
          <div class="square show"> <img src="`
                 + item.urls.small +
             `"/>
             <p class="credit"><a href="https://unsplash.com/" target="_blank">via Unsplash</a><br/>
             <a href="` + item.user.links.self +  `" target="_blank">`+ item.user.name + `</a></p>
          </div>
         `;
          
        });

        $('.container-2').html(markup);


                        
        $('.square').on('click', function() {
          console.log('this', this);
          test.push($(this).children('img').attr('src'));
          console.log(test);

          $(this).children().addClass('show');
          $(this).children().children().addClass('show');
          console.log(test.length);
          if (test.length == 2) {
            if (test[0] == test[1]) {
              $(document).find('div.square img.show').parent().addClass('success');
              test.splice(0,2);
            }
            else {
              noShow();
              test.splice(0,2);
            }
          }
        });

      });
    } else if (res.status == 401) {
    alert("Oops! You are not authorized.");
    }
  }, function(e) {
    alert("Error submitting form!");
});

}


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

// Populate the memory grid with the selected category.

function populateGrid() {
  var instructions = "<p>Click on a card, then try to find its match.</p><p>If you select the match, the cards will stay visible with a pink border.</p><p>If the cards don't match, they will flip back over after one second.</p>";
  $('div.topic').on('click', function() {

    // remove any active classes
    $('div.topic').removeClass('active');

    $(this).addClass('active');
    $('div.instructions').html(instructions);
    // $(divs).addClass('show');
    
    if ($(this).hasClass('dog')) {
      $(divs).addClass('show');
      query = 'dog';
      fetchdata(query);

    } else if ($(this).hasClass('city')) {
      $(divs).addClass('show');
      query = 'city';
      fetchdata(query);
    }
    
    else if ($(this).hasClass('coffee')) {
      $(divs).addClass('show');
      query = 'coffee';
      fetchdata(query);
    }
  });
  // Base query on input field
    $('button').on('click', function() {
      $('div.instructions').html(instructions);

      query = $('#search').val();
      fetchdata(query);
    });
}

function findMatch() {
  that = this;
  test.push($(this).children().attr('src'));
  $(this).children().addClass('show');
  if (test.length == 2) {
    if (test[0] == test[1]) {
      $(document).find('div.square img.show').addClass('success').removeClass('show');
      test.splice(0,2);

      var sqNum = $(".container-2 .square").length;
      var sucNum = $(".container-2 .success").length;
      if (sqNum == sucNum) {
        alert('you did it!');
      }
    }
    else {
      noShow();
      test.splice(0,2);
    }
  }

  // if (($(".container-2 .square").length) == ($(".container-2 .success").length)) {
  //   alert('you did it!');
  // }

}

function noShow() {
  setTimeout(function()
  {
    $('.square').children().removeClass('show');
  }, 1000);
}

var divs = $('.square');
var test = [];

populateGrid();
