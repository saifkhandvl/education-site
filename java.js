var burger=document.querySelector('.burger');
burger.addEventListener('click',function(){
	document.querySelector('.navbar').classList.toggle('h-nav');
	document.querySelector('.nav-list').classList.toggle('v-nav');
	document.querySelector('.nav-right').classList.toggle('v-nav');

})