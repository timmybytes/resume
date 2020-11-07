// * FIXME: Add screen-size style adjustments
// Breakpoints: 700, 375
// function myFunction(x) {
//   console.log(window.matchMedia());
//   if (x.matches) {
//     // If media query matches
//     // document.body.style.backgroundColor = 'yellow';
//   } else {
//     // document.body.style.backgroundColor = 'pink';
//   }
// }
// var x = window.matchMedia('(max-width: 700px)');
// myFunction(x);

// const borders =

///////////////////////////////
// Shrink Header on Scroll
///////////////////////////////
const header = document.getElementById('header');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  //
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    // Header Container
    header.style.margin = '0';
    header.style.padding = '.5rem';
    // Header Avatar
    header.children[0].style.maxWidth = '50px';
    header.children[0].style.marginRight = '50px';
    // Header Text
    header.children[1].style.fontSize = '1.5rem';
    // Header Nav
    console.log(header.children[2]);
    header.children[2].style.display = 'inline';
  } else {
    // Reset styles if at top of page
    header.children[2].style.display = 'none';
    header.style.display = null;
    header.style.padding = '100px 0 20px 30px';
    header.children[0].style.maxWidth = null;
    header.children[1].style.fontSize = null;
  }
}

///////////////////////////////
// Strikethrough Dead-Links
///////////////////////////////

// const link = document.querySelectorAll('a');
// link.forEach((element) => {
//   console.log(element.href);
// });
