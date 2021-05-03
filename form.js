class Form{
    constructor(){
         this.title =createElement('h2')
         this.input=createInput("name")
         this.button =createButton('play')
         this.greeting = createElement('h3')
       
    }

    display(){
       
        this.title.html("race")
        this.title.position(450,100)
       
         this.input.position(400,200)
         
         this.button.position(600,400)
    
         this.button.mousePressed(()=>{
             this.input.hide();
             this.button.hide();
             player.name = this.input.value();
             this.greeting.html("hello"+player.name);
            this.greeting.position(400,200);
             playerCount = playerCount+1;
             player.index = playerCount;
             player.update();
             player.updateCount(playerCount);
             
         })
    }
}