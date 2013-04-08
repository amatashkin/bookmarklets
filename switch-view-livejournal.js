(function() {
  var l, p, u;
  if (location.host.match('m.livejournal.com')) {
    u = location.href.split("/")[5];
    p = location.href.split("/")[6];
    l = 'http://' + u + '.livejournal.com/' + p + '.html';
    location.href = l;
  } else if (location.host.match('.livejournal.com') && location.pathname.match('.html')) {
    u = location.host.split(".")[0];
    p = location.pathname.split(".")[0];
    l = 'http://m.livejournal.com/read/user/' + u + p;
    location.href = l;
  }
}).call(this);
