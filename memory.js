// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

var usData = [];
var query = '';

// var _handleRequest = function(){
//   if(this.readyState === 4 && this.status === 200){ //Explain this in a bit.
//     var response = JSON.parse(request.responseText);
//     var arr = [];
//     // console.log(arr);
//     // console.log(response.results);
//     // return(<Image src={response.results[0].urls.thumb} />);
//     for (var i = 0; i < response.results.length; i++) {
//       arr.push(response.results[i]);

//       // console.log(arr[i]);
//       // console.log(arr[i].links.self);
//       // console.log(arr[i].user.name);
//       // console.log(arr[i].user.links.self);
//       // console.log(arr[i].id);
//       // console.log(arr);
      
//     }

//     // let mapImages = arr.map((item, i) => {
//     //   return (<Image src={ item.links.self } uName={ item.user.name } uLink={ item.user.links.self } key={ item.id }/>);
//     //   }
//     // );
//     console.log(mapImages);
//     return mapImages;
//     // return (<Image uName={ arr[i].user.name } uLink={ arr[i].user.links.self } key={arr[i].id}/>);
//   }
// }


function fetchdata(query) {
  let url = `https://api.unsplash.com/search/photos/?query=` + query;
  console.log('fetch works!');
  fetch(url, {
    method: "GET",
    headers: {
      "Authorization" :'Client-ID 70c38f7f44fea0275d6b98177a480c6e23d833cfcfb7672e8efb3f43b150c39a'
    },
  }).then(function(res) {
    if (res.ok) {
      console.log(res);
      // Convert response to Json
      res.json().then(function(data) {
        usData = data.results; 
        console.log(data)
        

        // duplicate items in array so each one has a match!
        var usData = usData.reduce(function (res, current, index, array) {
          return res.concat([current, current]);
        }, []);
        
        shuffle(usData);


        usData.forEach(function(item) {
    

          const markup = `
          <div class="square show>" <img src="`
                 + item.links.self +
             `"/>
             <p class="author"><a href="` + item.user.links.self +  `">`+ item.user.name + `</a></p>
          </div>
         `;
      
         console.log(markup);
      
         $('.container-2').append(markup);
        });
        
        console.log('line 22', usData);
        // monthlySnacks.snacksList = appData;
        // monthlySnacks.populateTable();
        // console.log('monthly snacks: ', monthlySnacks);
        // monthlySnacks.voteEntry();

      });
    } else if (res.status == 401) {
    alert("Oops! You are not authorized.");
    }
  }, function(e) {
    alert("Error submitting form!");
});

}


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
var doggos = [
  "<img src='https://images.unsplash.com/photo-1424709746721-b8fd0ff52499?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91e56be51d66e3d485f758a5643c3146&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1424709746721-b8fd0ff52499?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91e56be51d66e3d485f758a5643c3146&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1506242395783-cec2bda110e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b73810d74416ad71b7a67db0609e5f8c&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1506242395783-cec2bda110e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b73810d74416ad71b7a67db0609e5f8c&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-0.3.5&s=ddb5cf323c391132192a0522fb0a5667&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixlib=rb-0.3.5&s=ddb5cf323c391132192a0522fb0a5667&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1446231855385-1d4b0f025248?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b225b82aed59ec4163fffedc145f33d6&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1446231855385-1d4b0f025248?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b225b82aed59ec4163fffedc145f33d6&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1436658040953-a21ef6596481?ixlib=rb-0.3.5&s=30c7f4b8ffabb8e744eaefc4456e0de8&auto=format&fit=crop&w=1506&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1436658040953-a21ef6596481?ixlib=rb-0.3.5&s=30c7f4b8ffabb8e744eaefc4456e0de8&auto=format&fit=crop&w=1506&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1450096315186-13dc369ab43e?ixlib=rb-0.3.5&s=523e719652269f6638dcda3e8688d2f9&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1450096315186-13dc369ab43e?ixlib=rb-0.3.5&s=523e719652269f6638dcda3e8688d2f9&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=1502&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1455103493930-a116f655b6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1ddc1fc1799c2f28d379be5f38e33ad&auto=format&fit=crop&w=1502&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1453369569379-52cd4fc989af?ixlib=rb-0.3.5&s=3130ab5f137e960a619495d95fcc9987&auto=format&fit=crop&w=1502&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1453369569379-52cd4fc989af?ixlib=rb-0.3.5&s=3130ab5f137e960a619495d95fcc9987&auto=format&fit=crop&w=1502&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=32b62c3f1149e3b00c30c78357ab4918&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=32b62c3f1149e3b00c30c78357ab4918&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1422565096762-bdb997a56a84?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77cd76f9b6272c88063bfc41842e2f6e&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1422565096762-bdb997a56a84?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77cd76f9b6272c88063bfc41842e2f6e&auto=format&fit=crop&w=1500&q=80'/>"
];
var cities = [
  "<img src='https://images.unsplash.com/photo-1467989977606-1f97f7dc81fb?ixlib=rb-0.3.5&s=0139cc30e28ed76cdb19bf0205d2ca3c&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1467989977606-1f97f7dc81fb?ixlib=rb-0.3.5&s=0139cc30e28ed76cdb19bf0205d2ca3c&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1469321461812-afeb94496b27?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7831fb1ade383d6b175eb0d68e19bb5c&auto=format&fit=crop&w=1489&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1469321461812-afeb94496b27?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7831fb1ade383d6b175eb0d68e19bb5c&auto=format&fit=crop&w=1489&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1506970845246-18f21d533b20?ixlib=rb-0.3.5&s=3c5b2aece71fbec89b883aee467130c7&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1506970845246-18f21d533b20?ixlib=rb-0.3.5&s=3c5b2aece71fbec89b883aee467130c7&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1508742066636-3b9fb738ee0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=70f1b29b8f3084eeb265c026b502f7b2&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1508742066636-3b9fb738ee0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=70f1b29b8f3084eeb265c026b502f7b2&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1505273471770-de630b5d5c5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2745bcf1a765cddc7005657b22aa49a4&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1505273471770-de630b5d5c5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2745bcf1a765cddc7005657b22aa49a4&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1448317846460-907988886b33?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c29e88927cbae491482117b4dcee1e36&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1448317846460-907988886b33?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c29e88927cbae491482117b4dcee1e36&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1483153597167-15375b89a20e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4c58a71f3c71525ceea94ee24c7d899e&auto=format&fit=crop&w=1506&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1483153597167-15375b89a20e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4c58a71f3c71525ceea94ee24c7d899e&auto=format&fit=crop&w=1506&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=17fd453022d028a517fdbe7c463a700c&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=17fd453022d028a517fdbe7c463a700c&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1518599807935-37015b9cefcb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d9cc76dadfd670ab881033d31a2c22e&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1518599807935-37015b9cefcb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d9cc76dadfd670ab881033d31a2c22e&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1504121449080-76ab9eb5bd2b?ixlib=rb-0.3.5&s=6b7f1b76c4db1ff55920be54717c89ca&auto=format&fit=crop&w=1500&q=80'/>",
  "<img src='https://images.unsplash.com/photo-1504121449080-76ab9eb5bd2b?ixlib=rb-0.3.5&s=6b7f1b76c4db1ff55920be54717c89ca&auto=format&fit=crop&w=1500&q=80'/>"
];
var divs = document.getElementsByClassName('square');

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

function assignSrc(array) {
  console.log(divs + 'line 91');
  for (i = 0; i < divs.length; i++) {
    divs[i].innerHTML = array[i];
  }
}

// create function that takes in user input (which icon is clicked or which selector in a form is chosen - and based on that value, populates the divs with the selected category.

function populateGrid() {
  var instructions = "<p>Click on a card, then try to find its match.</p><p>If you select the match, the cards will stay visible with a pink border.</p><p>If the cards don't match, they will flip back over after one second.</p>";
  $('div.topic').on('click', function() {
    $(this).css({"backgroundColor": "hotpink", "color": "black"});
    $('div.instructions').html(instructions);
    $(divs).addClass('show');
    
    if ($(this).hasClass('dog')) {
      query = 'dog';

      console.log(query);
      fetchdata(query);
      console.log('usData', usData)
      shuffle(doggos);
      // assignSrc(doggos);
    } else if ($(this).hasClass('city')) {
      query = 'city';
      fetchdata();

      shuffle(cities);
      assignSrc(cities);
    } 
    // else if ($(this).hasClass('everything')) {
      
    //   shuffle(imgSrc);
    //   assignSrc(imgSrc);
    // }
    // else if user submits a query, show that...
  });
}

function mapImage() {
  console.log('ughhhhh us data', usData);
  usData.forEach(function(item) {
    

    const markup = `
    <div class="square show>" <img src="`
           + item.links.self +
       `"/>
       <p class="author"><a href="` + item.user.links.self +  `">`+ item.user.name + `</a></p>
    </div>
   `;

   console.log(markup);

   $('.container-2').append(markup);
  });
  
}

function findMatch() {
  var test = [];
  $(divs).click(function() {
    console.log('success');
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
    // if ($('img.success').length >= $(divs).length) {
    //   alert('YOU DID IT!')
    // } else {
    //     console.log('keep going');
    //   }
  });

  // console.log($('.square').find('img.success'));
}

function noShow() {
  setTimeout(function()
  {
    $('.square').children().removeClass('show');
  }, 1000);
}

// if (user selects array 'birds') {
//   assignSrc(birbs);
// } else if (user selects array 'birds') {
//   assignSrc(doggos);
// }
//
// else if (user selects array 'landscapes') {
//   assignSrc(cities);
// }
//
// else if (user selects array 'foods') {
//   assignSrc(foods);
// }




const photo = {
  src: '',
  author: '',
  url: '',
  category: ''
}


var Photo = function (src, author, authorUrl) {
  this.src = src;
  this.author = author;
  this.authorUrl = authorUrl;
}
// var usImg = new Photo();

populateGrid();
// fetchdata();

findMatch();


// image url = [i].links.self
//Unsplash = unsplash

//the Unsplash photographer name = [i].user.name
// link to Unsplash profile =  [i].user.links.self
