var maxHealth = 10;
var health = 10;

var attack = 1;

var defense = 0;

var enemyMaxHealth = 2;
var enemyHealth = 2;

var enemyAttack = 1;

var enemyDefense = 0;

var enemyNumber = 1;

var gold = 0;

var healPrice = 1;

function fight() {
    health -= (enemyAttack - defense);
    enemyHealth -= (attack - enemyDefense);
    if (health <= 0){
        document.write("oh no your in die :((( so verry sad now refresh page to do the thing again");
    }
    if (enemyHealth <= 0){
        enemyDeath();
    }
    updateStats();
}

function updateStats() {
    document.getElementById("health").innerHTML = health;
    document.getElementById("maxHealth").innerHTML = maxHealth;
    document.getElementById("attack").innerHTML = attack;
    document.getElementById("defense").innerHTML = defense;
    document.getElementById("enemyHealth").innerHTML = enemyHealth;
    document.getElementById("enemyMaxHealth").innerHTML = enemyMaxHealth;
    document.getElementById("enemyAttack").innerHTML = enemyAttack;
    document.getElementById("enemyDefense").innerHTML = enemyDefense;
    document.getElementById("gold").innerHTML = gold;
    document.getElementById("healPrice").innerHTML = healPrice;
    document.getElementById("enemyNumber").innerHTML = enemyNumber;
}

function enemyDeath() {
    gold += enemyNumber;
    enemyNumber += 1;
    enemyMaxHealth += 1;
    enemyHealth = enemyMaxHealth;
}

function heal() {
    if (gold >= healPrice){
    health = maxHealth;
    gold -= healPrice;
    healPrice *= 2;
    updateStats()
    }
}
