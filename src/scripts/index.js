let kudosBtns = [], btn, d = document;

function init() {
  // create button
  btn = d.createElement('button');
  btn.id = 'stravaKudos';
  btn.innerHTML = 'Give <span id="stravaKudosCount"></span> Auto-Kudos';
  btn.className = 'btn btn-sm btn-primary hidden';
  btn.onclick = function(e) {
    e.preventDefault();
    giveKudos();
  }

  d.body.appendChild(btn);
  updateCountNum();
}

// give all the kudos
function giveKudos() {
  for (let i = 0; i < kudosBtns.length; i++) {
    kudosBtns[i].click();
  }
}

function toggleKudosBox() {
  if (kudosBtns.length) {
    btn.classList.remove('hidden');
  } else {
    btn.classList.add('hidden');
  }
}

// publish number of kudos
function updateCountNum() {
  const count = d.getElementById('stravaKudosCount');

  if (count) {
    setInterval(() => {
      kudosBtns = d.querySelectorAll('.activity .js-add-kudo, .group-activity .js-add-kudo');
      count.innerHTML = kudosBtns.length;
      toggleKudosBox();
    }, 1000);
  }
}

init();