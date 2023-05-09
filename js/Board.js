class Board {
   constructor(scene) {
    this.scene = scene ;
     this.bubbles = this.scene.add.group();
    this.nextBubbles = [];
    this.generateNextBubbles();
    this.generateInitialBubbles();
   }
   generateInitialBubbles() {
    console.log(" Generate Initial Bubbles ")
   }
   generateNextBubbles() {
    console.log("Generate Next Bubbles")
   }
}
export default Board;