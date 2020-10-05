// sidebar js
var sidebar = document.getElementById('sidebar')
var hamburger_icon = document.getElementById('open-sidebar')
var close_sidebar = document.getElementById('close-sidebar')

function openSidebar() {
    sidebar.style.height = '100%'
}

function closeSidebar() {
    sidebar.style.height = '0'
}

hamburger_icon.onclick = openSidebar
close_sidebar.onclick = closeSidebar

// end sidebar js

const init = function(){
	let items = document.querySelectorAll('section');
	for (let i = 0; i < items.length; i++){
		items[i].style.background = randomColor({luminosity: 'light'});
	}
	cssScrollSnapPolyfill()
}
init();