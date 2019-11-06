// render list
var items = [
  {
    id: 1,
    name: 'Sorry',
    imagePath: 'images/pop_music/sorry.jpg',
    artist: 'Justin Bieber',
    price: 1.99
  },
  {
    id: 2,
    name: 'Thats what i like',
    imagePath: 'images/pop_music/whatilike.jpg',
    artist: 'Burno Mars',
    price: 2.99
  },
  {
    id: 3,
    name: 'The lazy song',
    imagePath: 'images/pop_music/lazysong.jpg',
    artist: 'Burno Mars',
    price: 2.99
  },
  {
    id: 4,
    name: 'Close to me',
    imagePath: 'images/pop_music/closetome.jpg',
    artist: 'Ellie Goulding',
    price: 49.39
  }
];

let outputHtml = '';

items.forEach(item => {
  outputHtml += `
    <li class="list-group-item d-flex justify-content-around">
      <div class="left">
        <img
          src=${item.imagePath}
          class="image_responsive"
        />
      </div>

      <div class="right">
        <h5>
          <a href="#" class="link">${item.name}</a>
        </h5>
        <h5>Price: <span class="text-sm">$${item.price}</span></h5>
        <h5>Artist: <span class="text-sm"> ${item.artist} </span></h5>
      </div>
    </li>
  `;
});

document.getElementById('search-list').innerHTML = outputHtml;

// handle filter event

var input = document.querySelector('#search');

input.addEventListener('keyup', function(ev) {
  var items = document.querySelector('.search-list').getElementsByTagName('li');

  var text = ev.target.value;
  var pat = new RegExp(text, 'i');
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (pat.test(item.innerText)) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  }
});
