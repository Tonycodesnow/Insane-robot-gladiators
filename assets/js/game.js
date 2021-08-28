var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this

var enemyNames = ['Roborto', 'Amy Android', 'Zyborg'];
var enemyHealth = 50;
var enemyAttack = 12;


// fight function ( noe with parameters for enemies name)
var fight = function(enemyName) {
  while(playerHealth > 0 && enemyHealth > 0) {
    // ask the player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
    //if player choses to skip confirm and then stop the loop
    if (promptFight === 'skip' || promptFight === 'SKIP') {
      //confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
      // if yes (true), leave fight
      
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip the fight. Goodbye!');
        // subtract money from playerMoner for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerAttack - 3, playerAttack);
    
    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );  
      
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
        
        // award player money for winning
        playerMoney = playerMoney + 20;
        
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
      
      // remove player's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemyAttack - 3, enemyAttack);
      
      playerHealth = Math.max(0, playerHealth - damage);
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );
        
        // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + ' has died!');
          // leave while() loop if player is dead
          break; 
        } else {
          window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
      }
    };
    
    // function to generate a random numeric value
    var randomNumber = function(min, max) {
      var value = Math.floor(Math.random() * (max - min + 1) + min);
    
      return value;
    };
    
    // fight function to start a new game
    var startGame = function() {
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
          enemyHealth = randomNumber(40, 60);
          
          // pass the pickedenemyNames variable's value into the fight function, where it will assume the value of the enemyNames parameter
          fight(pickedEnemyName);
          
          // if player is still alive and we're not at the last enemy in the array
          if (playerHealth > 0 && i < enemyNames.length - 1) {
            // ask if player wants to use the store before next round
            var storeConfirm = window.confirm("The fight is over, visit the store the next round?")
            
            // if yes, take them to the store() function
            if (storeConfirm){
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
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
  
  // if the player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + '.');
  } else {
    window.alert("You've lost your robot in battle.");
  }
  
  // ask player if the'd like to play again
  var playAgainComfirm = window.comfirm('Would you like to play again?');
  
  if (playAgainComfirm) {
    startGame();
  } else {
    window.alert('Thank you for playing Robot Gladiators! Come back soon!');
  }
};

// go to shop between battle function
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', or 'UPGRADE', or 'LEAVE' to make a choice."
    );

  // use switch to carry out action
  switch (shopOptionPrompt) {
    case 'REFILL':
    case 'refill':
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        
        // increase halth and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      }
      else {
        window.alert("You don't have enough money!");
      }
      
        break;
      case 'UPGRADE':
      case 'upgrade':
        if (playerMoney >= 6) {
          window.alert("Upgrading player's attack by 5 for 6 dollars.");
          
          // increase attack and decrese money
          playerAttack = playerAttack + 5;
          playerMoney = playerMoney - 6;
      }
      else {
          window.alert("You don't have enough money!");
      }
        
        break;
      case 'LEAVE':
      case 'leave':
        window.alert('Leaving the store.');
          
        // do nothing, so function will end
        break;
      default:
        window.alert('You did not pick a valid option. Try again');
            
        // call shop() again to force player to pick a valid option
      shop();
        break;
    }
  };
  
// start first game when page loads
startGame();
          