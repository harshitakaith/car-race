var ball;
var database;
var form;
var game;
var playerCount;
var player;
var gameState=0;
var gameStateRef;
var allPlayers;

function setup(){
    createCanvas(400,400);
    database= firebase.database()
    game = new Game();
    game.getState()
    game.start()
    
}

function draw(){

    background("white");
    if(playerCount === 4){
        game.update(1);

    }
    if(gameState === 1){
        clear();
        game.play();

    }
    
    drawSprites();
}
