// function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var fightOrSkip = function () {
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt(
    'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
  );

  // Condition REcursive Function Call
  if (promptFight === "" || promptFight === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }
  // Pseudocode (if the `promptFight` is NOT a valid value, then execute the following statements.)
  // if (!promptFight) {
  //   window.alert("You need to provide a valid answer! Please try again.");
  //   return fightOrSkip();
  // }

  promptFight = promptFight.toLowerCase();
  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip") {
    // comfirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true). leave fight
    if (confirmSkip) {
      window.alert(
        playerInfo.name + " has decided to skip this fight. Goodbye!"
      );
      // subtract money from playerMoney for skipping, but don't let them go into the negative
      playerInfo.credit = Math.max(0, playerInfo.credit - 10);

      //return true if player wants to leave
      return true;
    }
  }
  return false;
};

// fight function ( noe with parameters for enemies name)
var fight = function (enemy) {
  // repeat and execture as long as the enemy-robot is alive
  while (playerInfo.health > 0 && enemy.health > 0) {
    if (fightOrSkip()) {
      // if true, leave fight by breaking loop
      break;
    }

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name +
        " attacked " +
        enemy.name +
        ". " +
        enemy.name +
        " now has " +
        enemy.health +
        " health remaining."
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has been defeated!");

      // award player money for winning
      playerInfo.credit = playerInfo.credit + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemy..attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);

    console.log(
      enemy.name +
        " attacked " +
        playerInfo.name +
        ". " +
        playerInfo.name +
        " now has " +
        playerInfo.health +
        " health remaining."
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has been defeated!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(
        playerInfo.name + " still has " + playerInfo.health + " health left."
      );
    }
  }
};

// fight function to start a new game
var startGame = function () {
  // reset player stats
  playerInfo.reset();

  //fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Insane Robo Gladiators! Round" + (i + 1));

      // pick a new enemy to fight based on the index of the enemy.Names array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy.Health before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);

      // pass the pickedenemy.Names variable's value into the fight function, where it will assume the value of the enemy.Names parameter
      fight(pickedEnemyObj);

      // if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    // If player is not alive, break out of the loop and let endGame function run
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  // after the loop ends, player is either out of health or enemies to fight, so run endGame function
  endGame();
};

// function to end the entire game
var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");

  // if the player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerInfo.credit +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if the'd like to play again
  var playAgainComfirm = window.confirm("Would you like to play again?");

  if (playAgainComfirm) {
    startGame();
  } else {
    window.alert(
      "Thank you for playing Insane Mech Gladiators! Battle again soon!"
    );
  }
};

// go to shop between battle function
var shop = function () {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
  );

  // use switch to carry out action
  shopOptionPrompt = parseInt(shopOptionPrompt);

  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again");
      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

// function to get a players name
var getPlayerName = function () {
  var name = "";
  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
};

var playerInfo = {
  name: getPlayerName(),
  health: randomNumber(95, 125),
  attack: randomNumber(9, 12),
  money: randomNumber(10, 20),
  reset: function () {
    this.health = randomNumber(95, 125);
    this.attack = randomNumber(9, 12);
    this.credit = randomNumber(10, 20);
  }, // comma!
  refillHealth: function () {
    if (this.credit >= 7) {
      window.alert("Refilling player's health by 24 for 8 credits.");
      this.health += 23;
      this.credit -= 8;
    } else {
      window.alert("You don't have enough credits!");
    }
  }, // comma!
  ugradeAttack: function() {
    if (this.credit >= 7) {
      window.alert("Upgrading player's attack by 6 for 8 credits.");
      this.attack += 6;
      this.credit -= 8;
    } else {
      window.alert("You don't have enough credits!");
    }
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(8, 11),
  },
  {
    name: "Amy Android",
    attack: randomNumber(9, 12),
  },
  {
    name: "Zyborg",
    attack: randomNumber(9, 13),
  },
  {
    name: "Terminus T-800",
    attack: randomNumber(10, 14),
  },
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]["attack"]);

// start first game when page loads
startGame();
