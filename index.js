(function() {
  let kudosBtns = []
    , KUDOS_INTERVAL = 1000 // in milliseconds
    , KUDOS_LOCKOUT = 100 // https://github.com/o2dazone/StravaKudos/issues/13#issuecomment-356319221
    , btn
    , els = '[data-testid=\'unfilled_kudos\']';

  const init =() => {
    const styles = document.createElement('style');
    styles.innerHTML = `
      #stravaKudos {
        display: flex;
        flex-direction: column;
        left: 5px;
        font-size: 20px;
        box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
        z-index: 49;
        position: fixed;
        top: 61px
      }

      #stravaKudos div {
        margin: 0 auto
      }

      #stravaKudos p {
        margin: 0;
        font-size: 14px
      }

      #stravaKudos.hidden,
      #stravaKudos.lockout p {
        display: none !important;
        visibility: hidden !important
      }

      #stravaKudosCount {
        margin: 0 3px;
        font-weight: bold
      }
    `;
    document.head.prepend(styles);

    btn = document.createElement('button');
    btn.id = 'stravaKudos';
    btn.innerHTML = `
      <div>Give <span id="skCount"></span> Kudos</div>
      <p>Strava may throttle too<br/>many Kudos in one session</p>
    `;
    btn.className = 'btn btn-sm btn-primary hidden';

    btn.addEventListener('click', giveKudos);
    document.body.prepend(btn);
    updateCountNum();
  };

  // give ALL the kudos
  const giveKudos = () => {
    setTimeout(() => {
      const kudoBtn = document.querySelector(els);
      if(kudoBtn) {
        kudoBtn.parentNode.click();
        giveKudos();
      }
    }, KUDOS_INTERVAL);
  };

  // toggle box styles
  const toggleKudosBox = () => {
    const num = kudosBtns.length;
    if (num) {
      btn.classList.remove('hidden');

      if (num < KUDOS_LOCKOUT) {
        btn.classList.add('lockout');
      } else {
        btn.classList.remove('lockout');
      }
    } else {
      btn.classList.add('hidden');
    }
  };

  // publish number of kudos
  const updateCountNum = () => {
    const count = document.getElementById('skCount');

    if (count) {
      setInterval(() => {
        kudosBtns = document.querySelectorAll(els);
        count.innerHTML = kudosBtns.length;
        toggleKudosBox();
      }, KUDOS_INTERVAL);
    }
  };

  init();
}());