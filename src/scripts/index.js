'use strict';

var path = chrome.extension.getURL('styles.css');
document.querySelector('head').innerHTML += '<link rel="stylesheet" type="text/css" href="' + path + '" />';

var kudosBox = null, kudosBtns, initInterval;

function init() {
  kudosBtns = document.querySelectorAll('.activity .js-add-kudo, .group-activity .js-add-kudo');

  if ((kudosBox = document.getElementById('stravaKudos'))) {
    kudosBox.parentNode.removeChild(kudosBox);
  }

  if (kudosBtns.length) {
    var box = document.createElement('div');
    box.id = 'stravaKudos';

    var yup = document.createElement('span');
    yup.innerHTML = 'Yup!';
    yup.onclick = function() {
      box.parentNode.removeChild(box);

      for (var i = 0; i < kudosBtns.length; i++) {
        kudosBtns[i].click();
      }
    }
    
    var cancel = document.createElement('span');
    cancel.innerHTML = 'Nah.';
    cancel.onclick = function() {
      box.parentNode.removeChild(box);
    }
    
    box.innerHTML = 'There are ' + kudosBtns.length + ' activities that you havent Kudos\'d, would you like to?';
    box.appendChild(yup);
    box.appendChild(cancel);

    document.body.appendChild(box);
    clearInterval(initInterval);
  }
}

initInterval = setInterval(init, 2500);