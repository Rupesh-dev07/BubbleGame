import Board from './Board.js'

export default class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
    }
    init() {
        
    }
    create() {
        this.Board = new Board(this);
        this.CreateBubbles();

    }
  
    CreateBubbles() {
        console.log("CreateBubbles")
        this.Board.generateNextBubbles();
    }
    update(t, dt) {

    }

}
