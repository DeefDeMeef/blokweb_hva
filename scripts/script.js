let root = document.documentElement

// start sidebar 
var sidebar = document.getElementById('sidebar')
var hamburger_icon = document.getElementById('open-sidebar')
var close_sidebar = document.getElementById('close-sidebar')

function openSidebar() {
	root.style.setProperty('--height_open', '100%')
	root.style.setProperty('--background', '#008aa4')
	root.style.setProperty('--hamburger', '#fff')
}

function closeSidebar() {
	root.style.setProperty('--height_open', '0')
	root.style.setProperty('--background', '#fff')
	root.style.setProperty('--hamburger', '#008aa4')
}

hamburger_icon.onclick = openSidebar
close_sidebar.onclick = closeSidebar
// end sidebar

// start loader
function hideLoader() {
	root.style.setProperty('--loader', 0)
	root.style.setProperty('--display', 'none');
	console.log('page loaded')
}

window.onload = (event) => {
	setTimeout(hideLoader, 500)
	console.log("page loading...")
}
// end loader

// start sticky navbar

window.onscroll = function() {stickyToggle()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function stickyToggle() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// end sticky navbar
