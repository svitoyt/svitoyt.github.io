"use strict";

const userInput = document.getElementById('select_user'),
      yearsInput = document.getElementById('select_years'),
      firstElem = document.getElementById('old-price'),
      discountElem = document.getElementById('sales-price'),
      usersAmount = document.getElementById('users_amount'),
      lineUsers = document.getElementById('license_users');

userInput.onchange = handleChange;
yearsInput.onchange = handleChange;

function handleChange() {
    const users = parseInt(userInput.value);
    const years = parseInt(yearsInput.value);
    const firstSum = users * years * 10000;
    const discountSum = firstSum - firstSum * 0.25;

    firstElem.textContent = firstSum.toLocaleString();
    discountElem.textContent = discountSum.toLocaleString();

    if (users >= 100) {
        lineUsers.textContent = `${users}`;
    } else {
        lineUsers.textContent = `0${users}`;
    }

    usersAmount.textContent = `х${users}`;
    
}

handleChange()