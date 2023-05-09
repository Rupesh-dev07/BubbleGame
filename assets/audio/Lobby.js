class Lobby extends Phaser.Scene {
    constructor() {
        super("Lobby");
    }
    create() {
        this.loadbg = this.add.image(960, 540, 'lobbybg').setScale(1, 1);
        this.gamelogo = this.add.image(1000, 380, 'sheetassets', 'title')
        this.music = this.add.image(1818, 112, 'sheetassets', 'music').setInteractive({ cursor: 'pointer' });
        this.music.on('pointerdown', function() {
            counter++;
            if (counter % 2 == 1) {
                this.music = this.add.image(1818, 112, 'sheetassets', 'sound');
                musicState = false;
                console.log("check1" + musicState)
            }
            if (counter % 2 == 0) {
                this.music = this.add.image(1818, 112, 'sheetassets', 'music');
                musicState = true;
                console.log("check2" + musicState)

            }

        }, this)
        this.playButton = this.add.image(990, 740, 'sheetassets', 'play').setInteractive({ cursor: 'pointer' })
        this.playButton.on('pointerdown', function() {
            this.scene.start("Gametable");
        }, this)
        this.duckImage = this.add.image(770, 865, 'sheetassets', 'char').setScale(0.85)
    }
}