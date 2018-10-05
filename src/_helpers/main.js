/** Start CART related ********************************************************************************************** */
export function opbasket(event) {
  event.stopPropagation();
  var element = document.getElementById("basket");
  element.classList.toggle("open");

  document.getElementsByClassName('hamburger')[0].classList.remove('active');

  document.getElementsByClassName('notification')[0].classList.remove('active');

  document.getElementsByClassName('prfile_wrap')[0].classList.remove('open');
}

// Start increase / decrease qty ----------------------------------------
var value, quantity;
export function createBindings(quantityContainer) {
  var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
  var increase = quantityContainer.getElementsByClassName('increase')[0];
  var decrease = quantityContainer.getElementsByClassName('decrease')[0];
  increase.addEventListener('click', function () { increaseValue(quantityAmount); });
  decrease.addEventListener('click', function () { decreaseValue(quantityAmount); });
}
export function init() {
  quantity = document.getElementsByClassName('quantity_count')
  for (var i = 0; i < quantity.length; i++) {
    createBindings(quantity[i]);
  }
}

export function increaseValue(quantityAmount) {
  value = parseInt(quantityAmount.value, 10);

  console.log(quantityAmount, quantityAmount.value);

  value = isNaN(value) ? 0 : value;
  value++;
  quantityAmount.value = value;
}

export function decreaseValue(quantityAmount) {
  value = parseInt(quantityAmount.value, 10);

  value = isNaN(value) ? 0 : value;
  if (value > 0) value--;

  quantityAmount.value = value;
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