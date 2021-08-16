var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var playerMoney = 10;

// You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.alert("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the most amount set in the playerAttack variable
    
        //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
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
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );
                
                    // check player's health
                    if (playerHealth <= 0) {
                        window.alert(playerName + " has dies!");
                    } else {
                        window.alert(playerName + " still has " + playerHealth + " health left.");
                    }
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
                } else {
                    window.alert("You need to choose a valid option. Try again!");
                }
            };
            fight();