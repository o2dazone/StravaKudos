'use strict';

var path = chrome.extension.getURL('styles.css');
document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" href="' + path + '" />';

var kudosBox = null, kudosBtns;

function init() {
  kudosBtns = document.querySelectorAll('.activity .js-add-kudo, .group-activity .js-add-kudo');

  if ((kudosBox = document.getElementById('stravaKudos'))) {
    kudosBox.parentNode.removeChild(kudosBox);
  }

  if (kudosBtns.length) {
    var box = document.createElement('div');
    box.id = 'stravaKudos';

    var btn = document.createElement('span');
    btn.innerHTML = 'Yup!';
    btn.onclick = function() {
      box.parentNode.removeChild(box);

      for (var i = 0; i < kudosBtns.length; i++) {
        kudosBtns[i].click();
      }
    }
    box.innerHTML = 'There are ' + kudosBtns.length + ' activities that you havent Kudos\'d, would you like to?';
    box.appendChild(btn);

    document.body.appendChild(box);;
  }
}

setInterval(init, 2500);