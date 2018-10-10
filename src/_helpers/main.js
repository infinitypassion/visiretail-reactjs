// TODO - Need to convert entire code to React
// *******************************************************************************************************************
/** Start CART related ********************************************************************************************** */
export function opbasket(event) {
  event.stopPropagation();
  var element = document.getElementById("basket");
  element.classList.toggle("open");

  document.getElementsByClassName('hamburger')[0].classList.remove('active');

  document.getElementsByClassName('notification')[0].classList.remove('active');

  document.getElementsByClassName('prfile_wrap')[0].classList.remove('open');
}
/** End CART related *********************************************************************************************** */

/** Start MENU related ******************************************************************************************* */
export function menu(event) {
  event.stopPropagation();
  var element = document.getElementById("hamburger");
  element.classList.toggle("active");

  document.getElementsByClassName('notification')[0].classList.remove('active');

  document.getElementsByClassName('basket_wrap')[0].classList.remove('open');

  document.getElementsByClassName('prfile_wrap')[0].classList.remove('open');
}
/** End MENU related ******************************************************************************************** */

/** Start Notification related ********************************************************************************* */
export function sidebar(event) {
  event.stopPropagation();
  var element = document.getElementById("notification");
  element.classList.toggle("active");

  document.getElementsByClassName('hamburger')[0].classList.remove('active');

  document.getElementsByClassName('basket_wrap')[0].classList.remove('open');

  document.getElementsByClassName('prfile_wrap')[0].classList.remove('open');
}
export function close_sidebar() {
  var element = document.getElementById("notification");
  element.classList.remove("active");
}
/** End Notification related ********************************************************************************** */

/** Start Profile related ************************************************************************************ */
export function oprofile(event) {
  event.stopPropagation();
  var element = document.getElementById("user_profile");
  element.classList.toggle("open");

  document.getElementsByClassName('hamburger')[0].classList.remove('active');

  document.getElementsByClassName('notification')[0].classList.remove('active');

  document.getElementsByClassName('basket_wrap')[0].classList.remove('open');
}
/** End Profile related ************************************************************************************* */

/** Start document handle events related ******************************************************************** */
export function closeElement(e) {
  if (document.getElementsByClassName('hamburger')[0].classList.contains('active')) {
    document.getElementsByClassName('hamburger')[0].classList.remove('active');
  }
}

document.onclick = function (e) {
  if (document.getElementsByClassName('hamburger')[0].classList.contains('active')) {
    var element = document.querySelector('.hamburger .container');

    if (!(e.target === element || element.contains(e.target))) {
      document.getElementsByClassName('hamburger')[0].classList.remove('active');
    }
  }

  if (document.getElementsByClassName('prfile_wrap')[0].classList.contains('open')) {
    if (!(e.target === document.getElementsByClassName('prfile_wrap')[0] || document.querySelector(".prfile_wrap").querySelectorAll(e.target.tagName).length)) {
      document.getElementsByClassName('prfile_wrap')[0].classList.remove('open');
    }
  }

  if (document.getElementsByClassName('basket_wrap')[0].classList.contains('open')) {
    var element = document.getElementsByClassName('basket_wrap')[0];

    if (!(e.target === document.getElementsByClassName('basket_wrap')[0] || element.contains(e.target))) {
      document.getElementsByClassName('basket_wrap')[0].classList.remove('open');
    }
  }

  if (document.getElementsByClassName('notification')[0].classList.contains('active')) {
    var element = document.getElementsByClassName('sidebar')[0];

    if (!(e.target === document.getElementsByClassName('sidebar')[0] || element.contains(e.target))) {
      document.getElementsByClassName('notification')[0].classList.remove('active');
    }
  }
}
/** End document handle events related ********************************************************************** */
