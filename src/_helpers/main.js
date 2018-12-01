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
  var resNavigationMenu = document.getElementById("trigger-overlay");
  resNavigationMenu.classList.toggle("active");

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
  if (e.target.parentNode && (e.target.parentNode.id == 'menu-mes-point' || e.target.parentNode.id == 'menu-mes-campaign-point')) {
    return;
  }

  if (document.getElementsByClassName('basket_wrap')[0] && document.getElementsByClassName('basket_wrap')[0].classList.contains('open')) {
    var element = document.getElementsByClassName('basket_wrap_menu')[0];

    if (!(document.getElementsByClassName('basket_wrap')[0].contains(e.target) || element.contains(e.target))) {
      document.getElementsByClassName('basket_wrap')[0].classList.remove('open');
    }
  }

  if (document.getElementsByClassName('hamburger')[0] && document.getElementsByClassName('hamburger')[0].classList.contains('active')) {
    var element = document.getElementsByClassName('hamburger_menu')[0];

    if (!(e.target === document.getElementsByClassName('hamburger')[0] || element.contains(e.target))) {
      document.getElementsByClassName('hamburger')[0].classList.remove('active');
    }
  }

  if (document.getElementsByClassName('notification')[0] && document.getElementsByClassName('notification')[0].classList.contains('active')) {
    var element = document.getElementsByClassName('notification')[0];

    if (!(element.contains(e.target))) {
      document.getElementsByClassName('notification')[0].classList.remove('active');
    }
  }

  if (document.getElementsByClassName('prfile_wrap')[0] && document.getElementsByClassName('prfile_wrap')[0].classList.contains('open')) {
    var element = document.getElementsByClassName('profile')[0];

    if (!(element.contains(e.target))) {
      document.getElementsByClassName('prfile_wrap')[0].classList.remove('open');
    }
  }
}
/** End document handle events related ********************************************************************** */