/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);