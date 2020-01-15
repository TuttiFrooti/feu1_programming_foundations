var isAlive = true;
var name = "Bartek-9000";
var hasJetPack = true;
var suitColor = "gold";
var eyes = 4;
var eyeColor = "skyblue";
var hairColor = null;
var legs = 3;
var arms = 2;
var hands = 4;
var ears = 1;
var canWalk = true;
var canRun = true;
var canFly = true;
var hasWeapon = true;
var isInGoodMood = false;

console.log(".-.-. Booting .-.-.");
console.log(
  name,
  isAlive,
  hasJetPack,
  eyes,
  eyeColor,
  hairColor,
  legs,
  arms,
  hands,
  ears,
  canWalk,
  canFly,
  hasWeapon
);

/*
 2. BROKEN SATELLITE::::::
    You need to send the droid out on a space walk to fix the satellite, with out it you can't communicate with earth.
    a) write an if condition checking if the jet pack is enabled, if true the droid can go outside if false the droid
       cannot go outside, console log the correct log based on that condition.
*/

console.log("\u{1F6F0} BROKEN SATELLITE::::::");
/*
 uncomment these console logs and write your if else statement and use them to console log out the correct statement

 console.log("JetPack is enabled!!! off I go outside to fix the satellite");
 console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");

 */

hasJetPack
  ? console.log("JetPack is enabled!!! off I go outside to fix the satellite")
  : console.log(
      "JetPack NOT enabled, please enable jetPack before doing a space walk"
    );

/*
 3. METEOR SHOWER::::::
    On your way to Jupiter you encounter a massive meteor shower that could damage the ship, you need to redirect the ship to a new safe location.
    a) Using a for loop iterate through the responses array and choose the appropriate response to get out of danger.
      create an if condition in your loop to print only 1 response using a comparison operator.
*/
console.log("\u{1F327} METEOR SHOWER::::::");

var responses = [
  "Call basecamp and ask for assistance, but they are far away",
  "Do nothing, just push through",
  "initiate core thrusters, punch 180degrees into dash-nav and warp away from danger",
  "ask humanoid-9000 to fly out there and shield the ship from the debris, this action could harm the humanoid"
];

for (var i = 0; i < responses.length; i++) {
  if (responses[i].includes("away from danger")) {
    console.log("\u{1F6F8} Swoosh -> -> Ship is steered to safety!");
  }
}

// write your code here, use the console log beneath

/*
 4. ALIENS SPACE CRAFT ENCROACHING::::::
    Alien craft approaches its an enemy for sure...you need to shoot it down!!
    a) convert the pseudoscope to real code
       create the required variables below and fill in the correct values and dataTypes to make
       the if statements pass so that photonLaser fires pew pew pew.
    b)
*/
console.log("\u{1F47E} ALIENS SPACE CRAFT ENCROACHING::::::");

// a.
var enemyCraft = true;
var photonLaser = true;
var photonLaserEnabled = true;
var bullets = 100;

if (enemyCraft && photonLaser && photonLaserEnabled) {
  if (bullets >= 100) {
    for (let i = 0; i < 100; i++) {
      console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!");
    }
  } else {
    console.log("\u{1F9E8} DEAD \u{1F9E8} ");
  }
}
/*
  If its an enemyCraft && photonLaser && photonLaserEnabled
      IF bullets is greater than or equal to 100
          shoot 100 photon-lazers by printing this log 100 times:
          console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!"); (use a loop)
        ELSE
          console.log("\u{1F9E8} DEAD \u{1F9E8} ");
*/

/*
 5. LUNAR LANDING:::::
    We got word of an extra terrestrial sighting on the moon... we have been tasked to land on the moon
    to investigate it, we have aboard a NASA lunar module https://en.wikipedia.org/wiki/Apollo_Lunar_Module
    This module will allow to land safely on the moon with the aid of the landing radar which takes inputs.

    Ensure the correct co-ordinates and approach speed are entered into the landing radar.
    It's all automated we just have to ensure that the correct values are input ie. not undefined.

    The lunar radar accepts approach speeds in increments of hundreds only, starting at 0 and maxing out at 700.

    You cannot edit the lunarRadar object directly you have to pass your values in via an interface called variables.

    tip: varName.keyName (this is how to extract a value from an object)
*/
console.log("\u{1F311} LUNAR LANDING:::::");

// start coding here

var lunarRadar = {
  isEnabled: undefined,
  long: undefined,
  lat: undefined,
  approachSpeed: undefined // "ft per minute"
};

lunarRadar.isEnabled = true;
lunarRadar.long = 25;
lunarRadar.lat = 10;

lunarRadar.approachSpeed = 100;
// Level 1 convert this psuedocode to functioning code.

if (
  lunarRadar.isEnabled &&
  lunarRadar.lat !== undefined &&
  lunarRadar.long !== undefined
) {
  console.log(
    "\u{1F91F} looking good " +
      name +
      " we are making our descent, now entering approach speed"
  );
  if (lunarRadar.approachSpeed >= 200 && lunarRadar.approachSpeed < 299) {
    console.log(
      "\u{269B} well done " +
        name +
        " we have touched down safely. Lets get some samples and get heck outta here!"
    );
  } else if (lunarRadar.approachSpeed >= 300) {
    console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed >= 400) {
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed >= 500) {
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed >= 600) {
    console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
  } else if (lunarRadar.approachSpeed <= 100) {
    console.log(
      "\u{1F47D} hmmm need a bit more heat " +
        name +
        " lets increase pitch and we should have a smooth landing"
    );
  } else {
    console.log("Please enter an approach speed");
  }
} else {
  console.log(
    "\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " +
      name +
      " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance."
  );
}

if (lunarRadar.isEnabled && lunarRadar.lat && lunarRadar.long) {
  console.log(
    "\u{1F91F} looking good " +
      name +
      " we are making our descent, now entering approach speed"
  );
  switch (true) {
    case lunarRadar.approachSpeed <= 100:
      console.log(
        "\u{1F47D} hmmm need a bit more heat " +
          name +
          " lets increase pitch and we should have a smooth landing"
      );
      break;
    case lunarRadar.approachSpeed >= 200 && lunarRadar.approachSpeed < 299:
      console.log(
        "\u{269B} well done " +
          name +
          " we have touched down safely. Lets get some samples and get heck outta here!"
      );
      break;
    case lunarRadar.approachSpeed >= 300:
      console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
      break;

    case lunarRadar.approachSpeed >= 400:
      console.log(
        "\u{1F627} coming in way too hot " + name + " decrease pitch!"
      );
      break;
    case lunarRadar.approachSpeed === undefined:
      console.log("Please enter an approach speed");
      break;
  }
} else {
  console.log(
    "\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " +
      name +
      " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance."
  );
}
/*
IF lunar radar is enabled && lat is defined and long is defined
    console.log("\u{1F91F} looking good " + name + " we are making our descent, now entering approach speed");
    IF approach speed is greater than or equal to 200ft per minute and approach speed is less than 299ft per minute
      console.log("\u{269B} well done " + name + " we have touched down safely. Lets get some samples and get heck outta here!");
    ELSE IF approach speed is greater than or equal to 300ft per minute
      console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
    ELSE IF approach speed is greater than or equal to 400ft per minute
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    ELSE IF approach speed is greater than or equal to 500ft per minute
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    ELSE IF approach speed is greater than or equal to 600ft per minute
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    ELSE IF approach speed is less than or equal to 100ft per minute
      console.log("\u{1F47D} hmmm need a bit more heat " + name + " lets increase pitch and we should have a smooth landing");
    ELSE
      console.log('Please enter an approach speed');
ELSE
  console.log("\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " + name + " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance.");
*/

// Level 2 convert it to a switch statement.
