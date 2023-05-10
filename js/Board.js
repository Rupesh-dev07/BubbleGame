class Board {
   constructor(scene) {
     this.scene = scene;
     this.bubbles = this.scene.add.group() ;

   }
   create(){
      this.nextBubbles = [];
      this.generateNextBubbles();
      this.generateInitialBubbles();
   }
   generateInitialBubbles() {
    console.log(" Generate Initial Bubbles ")
   }
   generateNextBubbles() {
      let firstballsArray = ['red', 'yellow', 'green', 'blue', 'cyan', 'orange', 'pink'];

    console.log("Generate Next Bubbles")
    for (var i = 0; i < 10; i++) {
       let column = Math.floor(Math.random() * 5) + 5;
       let xPos = Math.floor(Math.random() * (game.config.width/6 - game.config.width/4)) + game.config.width/4
       console.log(column)
      for (var j = 0; j < column; j++) {
         let  getRandomBubble = Math.floor(Math.random() * 7);
         let  printBubble = firstballsArray[getRandomBubble];
         this.addBubbles = this.scene.add.sprite(( xPos  ) + (j * 70), 100 + (i *  68), 'sheetassets', printBubble);
        this.bubbles.add(this.addBubbles);
      }
    }
   }
}
export default Board;
