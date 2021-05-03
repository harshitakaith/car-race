class Game{
    constructor(){

    }
    getState(){
        gameStateRef = database.ref('gamestate')
        gameStateRef.on("value",function(data){
            gameState =data.val()
        })

    }
    update(state){
        database.ref('gameState').update({
            gameState:state
        })

    }
    async start(){
        if(gameState===0){
            player = new Player()
            //when we wait for something to happen
            var playerCountRef =await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount= playerCountRef.val()
                player.getCount()


            }
            
            form = new Form()
            form.display()

        }

    }
    play(){
        form.hide();
        text("gameStart",120,100);
        //infromation about the player
        // it is a function which calls the class
        Player.getPlayerInfo();
        //player is undifined
        if(allPlayers!==undefined){
            //position
            var display_Position = 140;
            for(var plr in allPlayers){
                if(plr === "player"+player.index){
                    fill("red")

                }
                else{
                    fill("black")
                    
                }
                display_Position=display_Position+20;
            text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_Position)
            }
            
            
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+50
            player.update()

        }


    }
}