(function(){
  const clientIp = document.getElementById('clientIp');
  if (clientIp) {
    fetch('https://api.ipify.org?format=json')
      .then(function(response) {
        if (!response.ok) throw new Error('IP endpoint unavailable');
        return response.json();
      })
      .then(function(data) {
        clientIp.textContent = data.ip || 'UNKNOWN';
        clientIp.classList.add('is-ready');
      })
      .catch(function() {
        clientIp.textContent = 'UNAVAILABLE';
      });
  }

  const sid = document.getElementById('sid');
  if (sid) sid.textContent = 'sess-' + Math.random().toString(36).slice(2, 10);
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const err = document.getElementById('loginError');
      if (err) err.hidden = false;
    });
  }
})();
