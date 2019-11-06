// render list
var items = [
  {
    id: 1,
    name: 'Mi Basic Wired Headset with Mic',
    imagePath: 'images/accessories/mi_basic.jpeg',
    price: 5.99
  },
  {
    id: 2,
    name: 'boAt BassHeads 100 Wired Headset with Mic',
    imagePath: 'images/accessories/boat.jpeg',
    price: 3.99
  },
  {
    id: 3,
    name: 'Sony 310AP Wired Headset with Mic',
    imagePath: 'images/accessories/sony.jpeg',
    price: 20.49
  },
  {
    id: 4,
    name: 'JBL T450BT Extra Bass Bluetooth Headset with Mic',
    imagePath: 'images/accessories/jbl.jpeg',
    price: 49.39
  }
];

let outputHtml = '';

items.forEach(item => {
  outputHtml += `
    <li class="list-group-item d-flex justify-content-between">
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
