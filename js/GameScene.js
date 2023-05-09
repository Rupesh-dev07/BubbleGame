import Board from './Board.js'

export default class GameScene extends Phaser.Scene {

    constructor() {
        super("GameScene");
        console.log("Game scene");
        this.input;
        this.blackBall = false;
        this.blankBallx = [140, 230, 320, 410, 500, 590];
        this.blankBally = [1020, 1020, 1020, 1020, 1020, 1020];
        this.counter1 = 0;
        this.counter2 = 0;
        this.x_pos = 0;
        this.y_pos = 0;
        this.bubblesArray = []
        this.lastChildX = '';
        this.ballcounter0 = 0;
        this.ballcounter1 = 0;
        this.ballcounter2 = 0;
        this.ballcounter3 = 0;
        this.ballcounter4 = 0;
        this.ballcounter5 = 0;
        this.ballcounter6 = 0;
        this.firstballsArray = ['red', 'yellow', 'green', 'blue', 'cyan', 'orange', 'pink'];
        this.getfirstRandomBubble = '';
        this.printfirstBubble = '';
        this.newbubblesArray = []
        this.printnnexttBubble = '';
        this.getnextRandomBubble = '';
        this.row = '';
        this.col = '';
        this.getChild = '';
        this.getChildx = '';
        this.getChildy = '';
        this.currx = [];
        this.curry = [];
        this.pushlast = [];
        this.closestx = '';
        this.closesty = '';
        this.getclosestx = '';
        this.getclosesty = '';
        this.tangent = '';
        this.lastchildcolour = '';
        this.shootCount = 0;
         this.balls_Array = ['red', 'yellow', 'green', 'blue', 'cyan', 'orange', 'pink']
    }
    init() {
        
    }
    create() {
        this.LoadBg();
        this.GunShooter();
        this.CreateBlackball();
        this.UpdateShootingBall();
        this.UpdateNextShootingBall();
        this.CloudsAnims();
        this.SettingControls();
        this.CreateBubbles();
        this.Board = new Board();
    }
    CloudsAnims() {
        for (var i = 0; i < 7; i++) {
            var cloudsArray = ['cloud1', 'cloud2', 'cloud3', 'cloud4', 'cloud5', 'cloud6']
            var getValueduration = Math.floor(Math.random() * (10 - 4 + 1) + 4);
            var getValuedelay = Math.floor(Math.random() * (9 - 1 + 1) + 1);
            var getRandom = Math.floor(Math.random() * 6);
            var setClouds = cloudsArray[getRandom]
            var gety = Math.floor(Math.random() * (900 - 100 + 1) + 100);
            this.cloudImage = this.add.image(2000, gety, 'sheetassets', setClouds)
            this.tween = this.tweens.add({
                targets: this.cloudImage,
                x: -100,
                y: gety,
                duration: getValueduration * 2000,
                delay: getValuedelay * 400,
                loop: true,
                repeat: -1
            })
        }
    }

    LoadBg() {
        this.loadBg = this.add.image(960, 550, 'gamebg').setScale(0.98, 0.985).setInteractive({ cursor: 'pointer' })
    }

    GunShooter() {
        this.gunImage = this.add.image(720, 880, 'gunfire').setScale(0.7).setOrigin(0.5).setInteractive();
        // this.gunImage.angle = 90;
        this.gunImage.on('pointerover', function (pointer) {
            let angle = Phaser.Math.RadToDeg(Math.atan2(pointer.y - this.gunImage.y, pointer.x - this.gunImage.x));
            console.log(angle)
            if (angle < 90) {
                console.log("Angle0 :" + angle)
                angle += 450;
            }
            if (angle > 270) {
                console.log("Angle 180 :" + angle)
                angle = 270;
            }
            this.tweens.add({
                targets: this.gunImage,
                rotation: Phaser.Math.DegToRad(angle),
                duration: 100,
                ease: 'Linear'
            });
        }, this);
    }

    CreateBlackball() {
        for (var i = 0; i < 6; i++) {
            this.blankball = this.add.image(blankBallx[i], blankBally[i], 'sheetassets', 'grey');
        }
    }

    UpdateShootingBall() {
        this.updatefirstbubblecontainer = this.add.container();
        // firstballsArray = ['red', 'yellow', 'green', 'blue', 'cyan', 'orange', 'pink']
        getfirstRandomBubble = Math.floor(Math.random() * 7);
        printfirstBubble = firstballsArray[getfirstRandomBubble];
        this.addfirstBubbles = this.add.image(720, 950, 'sheetassets', printfirstBubble);
    }

    UpdateNextShootingBall() {
        this.updatefirstbubblecontainer.add(this.addfirstBubbles)
        this.updatenextbubblecontainer = this.add.container();
        getnextRandomBubble = Math.floor(Math.random() * 7);
        printnnexttBubble = firstballsArray[getnextRandomBubble];
        this.addnextBubbles = this.add.image(60, 1020, 'sheetassets', printnnexttBubble);
        this.updatenextbubblecontainer.add(this.addnextBubbles)
    }

    SettingControls() {
        this.rightborder = this.add.image(1690, 540, 'rborderasset').setScale(1.10, 1);
        this.duckImage = this.add.image(930, 875, 'sheetassets', 'char').setScale(0.75);
        if (musicState == true) {
            this.musicButton = this.add.image(1580, 115, 'sheetassets', 'music').setInteractive({ cursor: 'pointer' });
            this.playMusic = this.sound.add('bgmaudio', { loop: true });
            this.playMusic.play();
            this.musicButton.on('pointerdown', function () {
                counter1++;
                if (counter1 % 2 == 1) {
                    this.musicButton = this.add.image(1580, 115, 'sheetassets', 'sound');
                    this.playMusic.stop();
                }
                if (counter1 % 2 == 0) {
                    this.musicButton = this.add.image(1580, 115, 'sheetassets', 'music');
                    musicState = true;
                    this.playMusic.play();
                }

            }, this)
        }
        if (musicState == false) {
            this.musicButton = this.add.image(1580, 115, 'sheetassets', 'sound').setInteractive({ cursor: 'pointer' });
            this.playMusic = this.sound.add('bgmaudio',);
            this.playMusic.stop()
            this.musicButton.on('pointerdown', function () {
                counter2++;
                if (counter2 % 2 == 1) {
                    this.musicButton = this.add.image(1580, 115, 'sheetassets', 'music');
                    this.playMusic.play();
                }
                if (counter2 % 2 == 0) {
                    this.musicButton = this.add.image(1580, 115, 'sheetassets', 'sound');
                    musicState = true;
                    this.playMusic.stop();
                }

            }, this)
        }

        this.helpButton = this.add.image(1730, 115, 'sheetassets', 'help').setInteractive({ cursor: 'pointer' });
        this.helpButton.on('pointerdown', function () {
            this.helpContainer = this.add.container();
            this.overlayblack = this.add.image(950, 560, 'overlayasset');
            this.helpContainer.add(this.overlayblack);
            this.helppopup = this.add.image(1000, 500, 'sheetassets', 'helppop').setAlpha(0);
            this.helpContainer.add(this.helppopup);
            this.playButton = this.add.image(990, 785, 'sheetassets', 'play').setScale(0.5).setInteractive({ cursor: 'pointer' })
            this.helpContainer.add(this.playButton)
            this.playButton.on('pointerdown', function () {
                if (this.helpContainer != undefined) {
                    this.helpContainer.destroy();
                }
            }, this)
            this.tween = this.tweens.add({
                targets: this.helppopup,
                alpha: { value: 1, duration: 5000, ease: 'Power1' },
                yoyo: true,
            });
        }, this);
        this.restartbutton = this.add.image(1580, 265, 'sheetassets', 'reload').setInteractive({ cursor: 'pointer' });
        this.restartbutton.on('pointerdown', function () {
            this.scene.restart();
        }, this);
        this.leaderboardButton = this.add.image(1730, 265, 'sheetassets', 'leaderboard').setInteractive({ cursor: 'pointer' });
        this.leaderboardButton.on('pointerdown', function () {
            window.open("https://www.bubbleshooter.net/", "_blank");
        })

        this.pointsButton = this.add.image(1660, 420, 'sheetassets', 'score');
        this.scorebutton = this.add.image(1660, 520, 'sheetassets', 'bubbles');

        this.bitmaptext1 = this.add.bitmapText(1660, 410, 'pinkfonts', '400', 56);
        this.bitmaptext2 = this.add.bitmapText(1660, 500, 'pinkfonts', '40', 56);
    }
    update(t, dt) {

    }

}