
export default class TitleScene extends Phaser.Scene {
    constructor() {
        super("TitleScene");
    }

    create() {
        this.cameras.main.setBackgroundColor(0xb0e0eb);

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
            this.scene.start("GameScene");
        }, this)
        this.duckImage = this.add.image(770, 865, 'sheetassets', 'char').setScale(0.85)
    }

    // PlayButtonPressed() {
    //     this.ButtonScaleDownTween(this.playButton);
    //     window.navigator.vibrate(200);
    // }
    // PlayButtonReleased() {
    //     this.ButtonScaleUpTween(this.playButton);
    //     setTimeout(() => {
    //         game.scene.stop('TitleScene');
    //         game.scene.start('GameScene');
    //     }, 100);
    // }

    // ButtonScaleDownTween(_refImage) {
    //     this.add.tween({
    //         targets: [_refImage],
    //         scaleX: scaleFactor * 0.9,
    //         scaleY: scaleFactor * 0.9,
    //         ease: 'Linear',
    //         duration: 50,
    //     });
    // };
    // ButtonScaleUpTween(_refImage) {
    //     this.add.tween({
    //         targets: [_refImage],
    //         scaleX: scaleFactor * 1,
    //         scaleY: scaleFactor * 1,
    //         ease: 'Linear',
    //         duration: 50,
    //     });
    // };

}