javascript:(function(){
	var v = new RegExp("PersonalDocuments");
	if (!v.test(document.URL)){ return false; }	{
		a=document.getElementsByClassName('rowBodyCollapsed');
		for(var i = 0; i<a.length; i++){
			Fion.deleteItem('deleteItem_'+a[i].getAttribute('asin'));
		};
		return;
		}
})();