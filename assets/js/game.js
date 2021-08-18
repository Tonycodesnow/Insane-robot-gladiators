var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function () {
  //Alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  // ask the player if they'd like to fight or run
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );

  // if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the most amount set in the playerAttack variable

    //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know that it worked.
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    //if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip the fight. Goodbye!");
        // subtract money from playerMoner for skipping
        playerMoney = playerMoney - 2;
    }

    // if no (false), ask question again by runnnung fight() again
    else {
        fight();
    }
    // if player did not chose 1 or 2 in prompt
} else {
    window.alert("You need to choose a valid option. Try again!");

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has dies!");
      // leave while() loop if player is dead
      break; 
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

// fight function to start a new game
var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    //fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round' + (i + 1));

      // pick a new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);


    } else {
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
  if (playerHealth > 0) {
    window.alert("The game has now ended. Let's see how you did!");
  } else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if the'd like to play again
  var playAgainComfirm = window.playAgainComfirm("Would you like to play again?");

  if (playAgainComfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};
