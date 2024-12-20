console.log("This is connected");

let cookieCount = 0;
let cookiesPerSecond = 0;

let gameData = {
  cookieCount: 0,
  cookiesPerSecond: 0,
};

//=================================================================
//CODE TO INCREASE TOTAL COOKIE COUNT BY ONE WHEN BUTTON IS CLICKED:
const cookieButton = document.getElementById("cookie-increment-button");
const cookiesOwned = document.getElementById("total-cookies-owned");

console.log(cookieButton);
console.log(cookiesOwned);

function increaseCookies() {
  cookieCount++;
  cookiesOwned.textContent = `You own: ${cookieCount} cookies`;
}
cookieButton.addEventListener("click", increaseCookies);

//============================================================
//CODE TO INCREASE COOKIES AFTER EACH SECOND

function increaseCookiesPerSecond() {
  cookieCount++;
  cookiesOwned.textContent = `You own: ${cookieCount} cookies`;
}
console.log("This works5");

setInterval(function (increaseCookiesPerSecond) {
  cookiesOwned++;
}, 1000);

cookiesOwned.addEventListener(increaseCookiesPerSecond);

//============================================================
//The following is the way to retrieve and display the upgrades
const upgradesContainer = document.getElementById("upgrades-shop-container");
async function getShopUpgrades() {
  const result = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log("HTTP Response:", result);
  const json = await result.json();
  console.log("JSON Data:", json);

  json.forEach((upgrade) => {
    const { id, cost, name, increase } = upgrade;
    const upgradeElement = document.createElement("div");
    upgradeElement.classList.add("shop", "item");

    upgradeElement.innerHTML = `
    <div class="id" width = 100%>${id}</div>
    <div class="name">${name}</div>
    <div class="cost">$${cost}</div>
    <div class="increase">+${increase}</div>
    <button class="buy-button">Buy $100</button>
`;
    upgradesContainer.appendChild(upgradeElement);
  });
}
getShopUpgrades();

//=====================================================================
//THE FOLLOWING CODE IS FOR THE RESET BUTTON TO CHANGE THE AMOUNT OF COOKIES BACK TO ZERO EACH TIME:

const resetButton = document.getElementById("reset-button");

function resetCookies() {
  cookiesOwned.textContent = `You own 0 cookies`;
}

console.log("This is working");
resetButton.addEventListener("click", resetCookies);

console.log("This is also working");
//=====================================================================

//PUSH the upgrade data from the fetch into the empty shopUpgradesArray
//Remember that the upgrades that we fetched will be known by a variable name that you have set on line 33-35 (return)

// async function renderShopUpgrades() {
//   const getShopItems = await getShopUpgrades();
//   //Now that we have our upgrade items inside an array we can perform array method on them! Just like we did for images in the WK2 gallery submission!

//   getShopItems.forEach(function (upgrade) {
//     //This is where you should go back to Week 2 gallery loop and apply the same logic to this loop
//     //const upgradeName = [**************FINISH THIS CODE***************], like when we created the thumbnail value in week 2.
//     //const upgradeCost = [**************FINISH THIS CODE***************]
//     //const upgradeCPSIncrease = [**************FINISH THIS CODE***************]
//     //These elements should be ones that just display text ee.g. <p> or <h1>
//     //These are brand new elements that don't contain any content, so we need to assign content to them. Exactly the same strategy as when you assigned a src and alt to the thumbnail images in week 2.
//     // instead of giving these elements a src and alt, we want to give them some **TEXTCONTENT** <- a breadcrumb to follow.
//     //Append these elements into the relevant container, in the same way as you appended your images into the thumbnail container in week 2.
//     //This is a decent place to also create a button element and attach an event listener to it. You will then need to create a handler function for the button that you create.
//   });
// }

// renderShopUpgrades();

// //We want our upgrades to actually do something. We need to give each upgrade a button and attach an event listener to those buttons.

// function handleUpgradeClick() {
//   //The logic for the button to only deal with the values of the specific upgrade it was created for is the same logic as the event handler for the creation of the large image element in the week 2 assignment.
//   //Here is a great place to include some logic that checks a conditional to see if you have enough cookies in cookieCount to be able to afford the price of the upgrade. If you can't afford an upgrade, how can you give this feedback to your user? console log? render a new DOM element 'you don't have enough cookies'? trigger alert?
// }

// setInterval(function () {
//   //We want our timer to increase the value of cookieCount by the value of cookiesPerSecond every second.
//   //We want to update the cookieCount value on our page as it changes.
//   //I want to store this value in local storage so that my user can resume the game with their game data intact.
// }, 1000);

// //It is perfectly fine to perform all of the actions that we want our setInterval function to do with external functions, then you can callback those functions inside the setInterval function.
