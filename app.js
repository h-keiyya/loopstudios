'use strict';

const hamburger =
	document.getElementById('hamburger');
const closeBtn = document.getElementById('close');
const mobileMenu = document.getElementById(
	'mobile-menu',
);

function toggleMenu() {
	mobileMenu.classList.toggle('hidden');
}

closeBtn.addEventListener('click', toggleMenu);

hamburger.addEventListener('click', toggleMenu);
