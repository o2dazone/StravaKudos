let kudosBtns;

function init() {
  const insertContainer = document.querySelector('#sidebar-footer') || document.querySelector('.club-members');
  if (!insertContainer) return;

  // create container
  const box = document.createElement('div');
  box.id = 'stravaKudos';
  box.className = 'section';
  box.innerHTML = '<h3>Give Kudos!</h3>There are <span id="stravaKudosCount"></span> activities that you havent Kudos\'d, would you like to?';

  // create button
  const btn = document.createElement('a');
  btn.innerHTML = 'Give Kudos';
  btn.href = '#';
  btn.onclick = function(e) {
    e.preventDefault();
    giveKudos();
  }

  box.appendChild(btn);

  insertContainer.parentNode.insertBefore(box, insertContainer.previousSibling);

  updateCountNum();
}

// give all the kudos
function giveKudos() {
  for (let i = 0; i < kudosBtns.length; i++) {
    kudosBtns[i].click();
  }
}

// publish number of kudos
function updateCountNum() {
  const count = document.getElementById('stravaKudosCount');
  if (count) {
    setInterval(() => {
      kudosBtns = document.querySelectorAll('.activity .js-add-kudo, .group-activity .js-add-kudo');
      count.innerHTML = kudosBtns.length;
    }, 1000);
  }
}

init();