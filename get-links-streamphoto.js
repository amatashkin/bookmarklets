javascript:(function(){
	var q,h,i,z=open().document;z.write('<p>Images linked to by '+(location.href)+':</p><hr>');
	for(i=0;q=document.images[i];++i){
		h=q.src;
		if (h.indexOf(/photos.streamphoto.ru/) != -1)
			z.write('<p>'+q.innerHTML+' '+h.replace(/(w100_)/,"")+'<br><img src="'+h.replace(/(w100_)/,"")+'">');
	}
	z.close();
})();