var maxHealth = 10;
var health = 10;

var attack = 1;

var defense = 0;

var enemyMaxHealth = 2;
var enemyHealth = 2;

var enemyAttack = 1;

var enemyDefense = 0;

function fight() {
    health -= (enemyAttack - defense);
    enemyHealth -= (attack - enemyDefense);
    updateStats()
    if (health <= 0){
        document.write("oh no your in die :((( so verry sad now refresh page to do the thing again");
    }
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
}
