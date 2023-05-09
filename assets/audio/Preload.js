var counter = 0;
var musicState = true;
class Preload extends Phaser.Scene {
    constructor() {
        super("Preload");
    }
    preload() {
        console.log("ss")
        this.loadbg = this.add.image(960, 540, 'bg').setScale(1, 1);
        this.loaderlogo = this.add.image(1000, 380, 'loaderlogo')
        var shape = this.make.graphics();
        shape.fillStyle(0xE6E6E6, 0);

        shape.beginPath();

        shape.fillRoundedRect(800, 512, 505, 37, 15);

        var mask = shape.createGeometryMask();
        this.loadingbox = this.add.image(1010, 529, 'loadingbg')
        var loadingbar = this.add.image(800, 512, 'loader')
        loadingbar.setMask(mask);
        loadingbar.setOrigin(0);
        loadingbar.depth = 4;


        this.load.on('progress', function(value) {
            loadingbar.setScale(0.6 * value, 0.50);
            loadingbar.setOrigin(0);
        });


    
  
        this.load.image('lobbybg', './assets/images/bgmenu.png');
        this.load.atlas('sheetassets', './assets/sheet/sheet.png', './assets/sheet/sheet.json');
        this.load.image('lobbylogo', './assets/images/logo.png')
        this.load.image('gamebg', './assets/images/bg.png');
        this.load.image('bottomborderasset', './assets/images/bottomborder.png');
        this.load.image('leftborderasset', './assets/images/leftborder.png');
        this.load.image('loaderbarasset', './assets/images/loader-bar.png');
        this.load.image('loaderbgasset', './assets/images/loader-bg.png');
        this.load.image('logoasset', './assets/images/logo.png');
        this.load.image('overlayasset', './assets/images/overlay.png');
        this.load.image('rborderasset', './assets/images/rborder.png');
        this.load.image('topborderasset', './assets/images/topborder.png');
        this.load.image('gunfire', './assets/images/gun.png');
        this.load.bitmapFont('pinkfonts', './assets/fonts/font.png', './assets/fonts/font.fnt');
        this.load.bitmapFont('greenfonts', './assets/fonts/font1.png', './assets/fonts/font1.fnt');



        this.load.audio('bgmaudio', './assets/audio/bgm.mp3')
        this.load.audio('bubbleaudio', './assets/audio/bubble.mp3')
        this.load.audio('hitaudio', './assets/audio/hit.mp3')
        this.load.audio('throwaudio', './assets/audio/throw.mp3');




    }
    create() {
        this.scene.start("Lobby");
    }
}