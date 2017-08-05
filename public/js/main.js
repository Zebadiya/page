// Проверка на работу

console.log('Hi! I`m working');

// Реaкция на нажатие кнопки I want

var elemBiogr = document.getElementById('biography--info'),
    elemBtn = document.getElementById('button');

elemBiogr.style.display = 'none';

function showBiography(id) {
  if (elemBiogr.style.display == "none" && document.body.clientWidth < 426) {
    elemBiogr.style.display = 'block';
    elemBtn.value = "Hide!";
  } else if (elemBiogr.style.display == "none") {
    elemBiogr.style.display = 'flex';
    elemBtn.value = "Hide!";
  } else {
    elemBiogr.style.display = "none";
    elemBtn.value = "I want!";
  }
}

// Проверка валидации формы

// изменение вида меню навигации для малых размеров



var navBtn = document.getElementById('nav-btn'),
    navContainer = document.getElementById('nav-container');

var navClosed = "header__nav closed",
    navOpen = "header__nav open";

function checkVersion() {
  if (document.body.clientWidth < 426) {
    console.log('???')
    navBtn.onclick = function() {
      console.log('openNav working')
      if (navContainer.className == navClosed) {
        console.log('Navigation opened');
        navContainer.className = navOpen;
        event.stopPropagation();
      } else if (navContainer.className == navOpen) {
        console.log('Navigation closed');
        navContainer.className = navClosed;
        event.stopPropagation();
      }
    }

  } else {}
}

checkVersion();
// function my_func() {
//   var minWidth = document.body.clientWidth;
//   console.log('It`s working');
//   console.log('MinWidth',minWidth);
//     if (minWidth < 426) {
//
//
//     }
//   }

// var menu = document.getElementById('header__nav--menu'),
//     item = document.getElementsByClassName('header__nav--item');
// console.log('menu',menu);
// console.log('item',item);
// function addMenu() {
//   for (let i=1; i < item.length + 1; i++) {
//     item[i].classList.add('header__nav--open');
//     item[i].classList.remove('header__nav--item');
//
//     console.log('after', menu);
//     console.log('after', item);
//   }
// };

// $(document).ready(function() {
//   return my_func();
// });
