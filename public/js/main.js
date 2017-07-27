// Проверка на работу

console.log('Hi! I`m working');

// Реaкция на нажатие кнопки I want

var element = document.getElementById('biography--info');

element.style.display = 'none';

function showBiography(id) {
  if (element.style.display == "none") {
    element.style.display = 'flex';
    document.getElementById('button').value = "Hide!";
  } else {
    element.style.display = "none";
    document.getElementById('button').value = "I want!";
  }
}

// Проверка валидации формы

// изменение вида меню навигации для малых размеров

// function my_func() {
//   var MinWidth = document.
//   offsetWidth,
//       browserMinWidth = parseInt($('head').offsetWidth('body'), 10);
//   console.log('It`s working');
//   console.log('MinWidth',MinWidth);
//   console.log('browserMinWidth',browserMinWidth);
//     if (browserMinWidth < 426) {
//       var menu = document.getElementById('header__nav--menu'),
//           item = document.getElementsByClassName('header__nav--item');
//           console.log('menu',menu);
//           console.log('item',item);
//       menu.click(function() {
//         for (let i=1; i< item.length; i++) {
//           item[i].addClass("header__nav--open");
//           item[i].toggleClass("header__nav--item");
//           console.log('after', menu);
//           console.log('after', item);
//         }
//       });
//     }
//   }

// $(document).ready(function() {
//   return my_func();
// });
