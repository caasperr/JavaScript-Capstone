import './style.css';
import fetchItems from './js/home/fetchitems.js';
import logo from './assets/logo.png';

const logoAttrDesk = document.getElementById('logo');
const logoAttrMob = document.getElementById('logoMob');
const closeNav = document.getElementById('closeNav');
const mySidenav = document.getElementById('mySidenav');
const main = document.getElementById('main');

logoAttrDesk.src = logo;
logoAttrMob.src = logo;

logoAttrMob.addEventListener('click', () => {
  mySidenav.style.width = '250px';
  main.style.marginLeft = '250px';
  logoAttrMob.style.marginLeft = '250px';
});

closeNav.addEventListener('click', () => {
  mySidenav.style.width = '0';
  main.style.marginLeft = '0';
  logoAttrMob.style.marginLeft = '0';
});

window.onload = fetchItems();
