// Write your JavaScript code here!
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

// We're going to solve this by breaking the problem into three parts.
// Programmers like automating things, we'll populate the HTML drop down options using code,
// instead of having to type out all the values.
// Create a function that does the some math and gives us the new weight.
// Then create a function that responds when the user clicks on the button.

// 1. Populate the dropdown element with the data found in the planets array.
// The value of each option should be the planet's name.
// Use the following built-in methods:
// `.forEach` `document.createElement` `document.getElementById` `.appendChild`

/*for (var i = 0; i < planets.length; i++) {
  planet.options[planet.options.length] = new Option(planets[i], planets[i][0]);
}*/


window.onload = function () {
  document.getElementById("planets").selectedIndex = -1;
}

planets.forEach(function (item) {
  var option = document.createElement('option');
  option.text = item[0];
  option.value = item[0];
  document.getElementById("planets").appendChild(option);
});

function calculateWeight(weight, planet) {
  // 2. Write the code to return the correct weight
  return weight *
    planets.find(function (item) {
      return item[0] == planet;
    })[1];
}


function handleClickEvent(e) {
  // 3. Create a variable called userWeight and assign the value of the user's weight.
  var userWeight = parseFloat(document.getElementById("user-weight").value);
  var message = document.getElementById("output");
  var getPlanetName = document.getElementById("planets");
  var planetName = getPlanetName.options[getPlanetName.selectedIndex].value;
  var result = calculateWeight(userWeight, planetName);
  // // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
  if ($('#planets').val() == 'Sun' || $('#planets').val() == 'Moon') {
    message.innerHTML = "If you were on the " + planetName + ", you would weigh " + result + "lbs!";
    imageShow();
  } else {
    // // 5. Create a variable called result and assign the value of the new calculated weight.
    // // 6. Write code to display the message shown in the screenshot.
    message.innerHTML = "If you were on " + planetName + ", you would weigh " + result + "lbs!";
    imageShow();
  }
}

// 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
document.getElementById("calculate-button").setAttribute("onClick", "handleClickEvent();")

// Bonus Challenges
// 8. Reverse the drop down order so that the sun is first.$ npm install bootstrap@3$ npm install bootstrap@3
// 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)




//Add and remove Pluto from the list
var checkbox = document.getElementById("checkbox");
function plutoAway() {
  $("#planets > option:first").hide();
}

function plutoComeBack() {
  $("#planets > option:first").show();
}

checkbox.onclick = function () {
  if (checkbox.checked) {
    plutoAway();
  } else {
    plutoComeBack();
  }
}

//Add a custom planet
$("#add-planet").click(function () {
  var emptyArray = [];
  var customPlanet = $("#input-newplanet").val();
  var customMultiplier = $("#input-multiplier").val();
  emptyArray.push(customPlanet, customMultiplier);
  planets.push(emptyArray);
  populateList(emptyArray);
})

function populateList(item) {
  var option = document.createElement('option');
  option.text = item[0];
  option.value = item[0];
  document.getElementById("planets").appendChild(option);
};

//Show images of planets when selected
function imageShow() {
  var imageID = $("#photo > img");
  for (var i = 0; i < imageID.length; i++) {
    if ($("#planets").val() == imageID.eq(i).attr("id")) {
      imageID.not(i).hide();
      imageID.eq(i).show();
    }
  }
}
