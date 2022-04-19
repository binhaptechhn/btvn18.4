var msg = '<h2>broser window</h2><p>width: '+ window.innerWidth + '</p>';
msg += '<p>height: '+ window.innerHeight + '</p>';
msg += '<h2>hostory</h2><p>items: ' + window.history.length + '</p>';
msg += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p>height: ' + window.screen.height + '</p0>';
var el = document.getElementById('info');
el.innerHTML = msg;
alert('Current page: ' + window.location);
