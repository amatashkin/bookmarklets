# 
# Switch
# http://username.livejournal.com/post-id.html
# http://m.livejournal.com/read/user/username/post-id
# 
if location.host.match('m.livejournal.com')
	# Mobile to Full
	u = location.href.split("/")[5]
	p = location.href.split("/")[6]
	l = 'http://'+u+'.livejournal.com/'+p+'.html'
	location.href = l
else if location.host.match('.livejournal.com') and location.pathname.match('.html')
		# Full to Mobile
		u = location.host.split(".")[0]
		p = location.pathname.split(".")[0]
		l = 'http://m.livejournal.com/read/user/'+u+p
		location.href = l