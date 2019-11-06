var starContainer = document.getElementById('stars');
var stars = Array.prototype.slice.call(starContainer.children);
var totalStars = stars.length;
var rated = document.getElementById('rated');

starContainer.addEventListener('click', function(e) {
  var index = stars.indexOf(e.target);
  var count = (count = totalStars - index);
  stars.forEach(el => el.classList.remove('is-selected'));
  e.target.classList.add('is-selected');

  rated.textContent = 'You have rated ' + count + ' stars';
});
