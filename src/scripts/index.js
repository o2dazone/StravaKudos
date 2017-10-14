let kudosBtns = [], box, d = document;

function init() {
  // create container
  box = d.createElement('div');
  box.id = 'stravaKudos';
  box.className = 'section';
  box.innerHTML = '<h3>Give Kudos!</h3>There are <span id="stravaKudosCount"></span> activities that you havent Kudos\'d, would you like to?';

  // create button
  const btn = d.createElement('a');
  btn.innerHTML = 'Give Kudos';
  btn.href = '#';
  btn.onclick = function(e) {
    e.preventDefault();
    giveKudos();
  }

  box.appendChild(btn);
  d.body.appendChild(box);

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
    box.classList.remove('hidden');
  } else {
    box.classList.add('hidden');
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