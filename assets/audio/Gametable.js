var input;
var blackBall = false;
blankBallx = [140, 230, 320, 410, 500, 590];
blankBally = [1020, 1020, 1020, 1020, 1020, 1020];
var counter1 = 0;
var counter2 = 0;
var x_pos = 0;
var y_pos = 0;
var bubblesArray = []
var lastChildX = '';
var ballcounter0 = 0;
var ballcounter1 = 0;
var ballcounter2 = 0;
var ballcounter3 = 0;
var ballcounter4 = 0;
var ballcounter5 = 0;
var ballcounter6 = 0;
var firstballsArray = ['red', 'yellow', 'green', 'blue', 'cyan', 'orange', 'pink'];
var getfirstRandomBubble = '';
var printfirstBubble = '';
var newbubblesArray = []
var printnnexttBubble = '';
var getnextRandomBubble = '';
var row = '';
var col = '';
var getChild = '';
var getChildx = '';
var getChildy = '';
var currx = [];
var curry = [];
var pushlast = [];
var closestx = '';
var closesty = '';
var getclosestx = '';
var getclosesty = '';
var tangent = '';
var lastchildcolour = '';
var shootCount = 0;
var balls_Array = ['red', 'yellow', 'green', 'blue', 'cyan', 'orange', 'pink']

class Gametable extends Phaser.Scene {
    constructor() {
        super("Gametable");
    }
    create() {
        this.loadBg = this.add.image(960, 550, 'gamebg').setScale(0.98, 0.985).setInteractive({ cursor: 'pointer' })
        input = this.input;
        this.gunImage = this.add.image(720, 880, 'gunfire').setScale(0.7);
        this.gunImage.angle = 90
            // this.physics.world.setBounds(0, 0, 960, 550)
            // this.physics.world.setBoundsCollision(true, true, false, false)
            // this.loadBg.on('pointerdown', function () {
            //     this.destroyblankBall();
            // }, this)
        for (var i = 0; i < 6; i++) {
            this.blankball = this.add.image(blankBallx[i], blankBally[i], 'sheetassets', 'grey');
        }

        this.updatefirstbubblecontainer = this.add.container();
        // firstballsArray = ['red', 'yellow', 'green', 'blue', 'cyan', 'orange', 'pink']
        getfirstRandomBubble = Math.floor(Math.random() * 7);
        printfirstBubble = firstballsArray[getfirstRandomBubble];
        this.addfirstBubbles = this.add.image(720, 950, 'sheetassets', printfirstBubble);
        // this.addfirstBubbles.setCollideWorldBounds(true);
        // this.addfirstBubbles.setImmovable(true);
        // this.addfirstBubbles.body.allowGravity = false;
        this.updatefirstbubblecontainer.add(this.addfirstBubbles)

        this.updatenextbubblecontainer = this.add.container();
        getnextRandomBubble = Math.floor(Math.random() * 7);
        printnnexttBubble = firstballsArray[getnextRandomBubble];
        this.addnextBubbles = this.add.image(60, 1020, 'sheetassets', printnnexttBubble);
        this.updatenextbubblecontainer.add(this.addnextBubbles)

        this.cloudsanimation();
        this.rightborderscreen();
        this.createBubbles();
        // this.physics.add.collider(this.addfirstBubbles, this.addBubbles);

    }
    cloudsanimation() {
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
    rightborderscreen() {
        this.rightborder = this.add.image(1690, 540, 'rborderasset').setScale(1.10, 1);
        this.duckImage = this.add.image(930, 875, 'sheetassets', 'char').setScale(0.75);
        if (musicState == true) {
            this.musicButton = this.add.image(1580, 115, 'sheetassets', 'music').setInteractive({ cursor: 'pointer' });
            this.playMusic = this.sound.add('bgmaudio', { loop: true });
            this.playMusic.play();
            this.musicButton.on('pointerdown', function() {
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
            this.playMusic = this.sound.add('bgmaudio', );
            this.playMusic.stop()
            this.musicButton.on('pointerdown', function() {
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
        this.helpButton.on('pointerdown', function() {
            this.helpContainer = this.add.container();
            this.overlayblack = this.add.image(950, 560, 'overlayasset');
            this.helpContainer.add(this.overlayblack);
            this.helppopup = this.add.image(1000, 500, 'sheetassets', 'helppop').setAlpha(0);
            this.helpContainer.add(this.helppopup);
            this.playButton = this.add.image(990, 785, 'sheetassets', 'play').setScale(0.5).setInteractive({ cursor: 'pointer' })
            this.helpContainer.add(this.playButton)
            this.playButton.on('pointerdown', function() {
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
        this.restartbutton.on('pointerdown', function() {
            this.scene.restart();
        }, this);
        this.leaderboardButton = this.add.image(1730, 265, 'sheetassets', 'leaderboard').setInteractive({ cursor: 'pointer' });
        this.leaderboardButton.on('pointerdown', function() {
            window.open("https://www.bubbleshooter.net/", "_blank");
        })

        this.pointsButton = this.add.image(1660, 420, 'sheetassets', 'score');
        this.scorebutton = this.add.image(1660, 520, 'sheetassets', 'bubbles');

        this.bitmaptext1 = this.add.bitmapText(1660, 410, 'pinkfonts', '400', 56);
        this.bitmaptext2 = this.add.bitmapText(1660, 500, 'pinkfonts', '40', 56);
    }

    createBubbles() {
        console.log("Create Bbble ")

        var k = [];
        y_pos = 20;
        this.bubblesContainer = this.add.container();
        for (var i = 0; i < 5; i++) {

            y_pos += 70;
            // if (i == 1) {
            //     x_pos = 20;
            // }
            // if (i == 2) {
            //     x_pos = -15;
            // }
            // if (i == 3) {
            //     x_pos = 20;
            // }
            // if (i == 4) {
            //     x_pos = -15;
            // }
            for (var j = 0; j < 20; j++) {

                x_pos += 68;
                //  var ballsArray = ['red', 'yellow', 'green', 'blue', 'cyan', 'orange', 'pink']
                var getRandomBubble = Math.floor(Math.random() * 7);
                var printBubble = firstballsArray[getRandomBubble];

                this.addBubbles = this.add.image(x_pos, y_pos, 'sheetassets', printBubble);
                // this.addBubbles.setCollideWorldBounds(true);
                // this.addBubbles.setImmovable(true);
                // this.addBubbles.body.allowGravity = false;
                if (j == 19) {
                    x_pos = 0;
                }
                this.addBubbles.setDataEnabled();
                if (printBubble == firstballsArray[0]) {
                    this.addBubbles.setData({ value: 'r_' + ballcounter0 })
                    ballcounter0++;
                }
                if (printBubble == firstballsArray[1]) {
                    this.addBubbles.setData({ value: 'y_' + ballcounter1 })
                    ballcounter1++;
                }
                if (printBubble == firstballsArray[2]) {
                    this.addBubbles.setData({ value: 'g_' + ballcounter2 })
                    ballcounter2++;
                }
                if (printBubble == firstballsArray[3]) {
                    this.addBubbles.setData({ value: 'b_' + ballcounter3 })
                    ballcounter3++;
                }
                if (printBubble == firstballsArray[4]) {
                    this.addBubbles.setData({ value: 'c_' + ballcounter4 })
                    ballcounter4++;
                }
                if (printBubble == firstballsArray[5]) {
                    this.addBubbles.setData({ value: 'o_' + ballcounter5 })
                    ballcounter5++;
                }
                if (printBubble == firstballsArray[6]) {
                    this.addBubbles.setData({ value: 'p_' + ballcounter6 })
                    ballcounter6++;
                }

                k.push(this.addBubbles.data.list.value)
                this.bubblesContainer.add(this.addBubbles);

            }
            bubblesArray.push(k);
            k = []
        }
        // console.log(bubblesArray)
        this.loadBg.on('pointerdown', function() {
            row = "";
            col = "";
            currx = [];
            curry = [];
            this.bubblesContainer.each(function(child) {
                var childx_pos = '';
                var childy_pos = '';



                closestx = (child.x - input.x) * 2
                closesty = (child.y - input.y) * 2
                getclosestx = closestx
                getclosesty = closesty
                if (getclosestx < -1) {
                    getclosestx = getclosestx * -1;
                }
                if (getclosesty < -1) {
                    getclosesty = getclosesty * -1;
                }
                console.log(getclosestx)
                tangent = getclosestx + getclosesty
                currx.push(tangent)

                // console.log("Closest y =" + getclosesty);
            }, this);
            console.log(currx)
            console.log(input.x)
            console.log(input.y)
            while (currx.length) curry.push(currx.splice(0, 20))
            console.log(curry)
            var minRow = curry.map(function(row) {
                return Math.min.apply(Math, row);
            });
            var min = Math.min.apply(Math, minRow);
            row = curry.findIndex(row => row.includes(min));
            col = curry[row].indexOf(min);
            getChild = bubblesArray[row][col];
            this.bubblesContainer.each(function(child) {
                if (getChild == child.data.list.value) {
                    getChildx = child.x;
                    getChildy = child.y;
                }
            }, this)
            console.log(minRow)
            console.log(min)
            console.log("row" + row)
            console.log("col" + col)
            console.log(getChild)
            console.log("Childx = " + getChildx)
            console.log("Child y = " + getChildy)
            this.tween = this.tweens.add({
                    targets: this.addfirstBubbles,
                    x: getChildx,
                    y: getChildy + 70,
                    duration: 100,
                    yoyo: false,
                    repeat: 0,
                    onComplete: function() {
                        lastChildX = this.bubblesContainer.last.x;
                        this.getColourBubble();
                        this.updatefirstbubble();
                        // row = "";
                        // col = "";
                    },
                    onCompleteScope: this
                })
                // var collider = this.physics.add.overlap(this.addfirstBubbles, this.addBubbles, function(clownOnBlock) {
                //     clownOnBlock.body.stop();
                //     this.physics.world.removeCollider(collider);
                // }, null, this);
        }, this)
    }

    updatefirstbubble() {
        console.log("Update furst Bbble ")
        if (this.updatefirstbubblecontainer != undefined) {
            this.updatefirstbubblecontainer.destroy();
        }
        this.updatefirstbubblecontainer = this.add.container();
        this.addfirstBubbles = this.add.image(720, 950, 'sheetassets', printnnexttBubble);
        // this.addfirstBubbles.setCollideWorldBounds(true);
        console.log(printnnexttBubble)
            // this.addfirstBubbles.setImmovable(true);
            // this.addfirstBubbles.body.allowGravity = false;
        this.updatefirstbubblecontainer.add(this.addfirstBubbles);
        this.updatenextbubble();
    }

    updatenextbubble() {
        console.log("Update Next Bubble ")
        printnnexttBubble = '';
        if (this.updatenextbubblecontainer != undefined) {
            this.updatenextbubblecontainer.destroy();
        }
        this.updatenextbubblecontainer = this.add.container();
        getnextRandomBubble = Math.floor(Math.random() * 7);
        printnnexttBubble = firstballsArray[getnextRandomBubble];
        console.log(printnnexttBubble)
        this.addnextBubbles = this.add.image(60, 1020, 'sheetassets', printnnexttBubble);
        this.updatenextbubblecontainer.add(this.addnextBubbles);
    }

    getColourBubble() {
        lastchildcolour = "";
        console.log("Get Color Bubble ")
        var getchildColour = '';
        var abovechild = '';
        this.addfirstBubbles.setDataEnabled();
        if (printfirstBubble == firstballsArray[0]) {
            this.addfirstBubbles.setData({ value: 'r_' + ballcounter0 })
            ballcounter0++;
        }
        if (printfirstBubble == firstballsArray[1]) {
            this.addfirstBubbles.setData({ value: 'y_' + ballcounter1 })
            ballcounter1++;
        }
        if (printfirstBubble == firstballsArray[2]) {
            this.addfirstBubbles.setData({ value: 'g_' + ballcounter2 })
            ballcounter2++;
        }
        if (printfirstBubble == firstballsArray[3]) {
            this.addfirstBubbles.setData({ value: 'b_' + ballcounter3 })
            ballcounter3++;
        }
        if (printfirstBubble == firstballsArray[4]) {
            this.addfirstBubbles.setData({ value: 'c_' + ballcounter4 })
            ballcounter4++;
        }
        if (printfirstBubble == firstballsArray[5]) {
            this.addfirstBubbles.setData({ value: 'o_' + ballcounter5 })
            ballcounter5++;
        }
        if (printfirstBubble == firstballsArray[6]) {
            this.addfirstBubbles.setData({ value: 'p_' + ballcounter6 })
            ballcounter6++;
        }
        this.bubblesContainer.add(this.addfirstBubbles)
        lastchildcolour = this.bubblesContainer.last.data.list.value;
        console.log(this.bubblesContainer.length)
        console.log(this.bubblesContainer.last.x + "y " + this.bubblesContainer.last.y)
        console.log(getChildy)
        if (this.bubblesContainer.last.y === (getChildy + 70)) {
            shootCount++;
            this.updatenewarray();
        }
        if (this.bubblesContainer.last.data.list.value != -1 && this.bubblesContainer.length > 120) {
            this.createnewarray();
        }

        console.log(bubblesArray);

        // for (var i = 0; i < bubblesArray.length; i++) {
        //     for (let j = 0; j < 20; j++) {
        //         pushlast.push(0);
        //     }
        //     newbubblesArray.push(pushlast);
        //     pushlast = [];
        // }
        // console.log(newbubblesArray)
        // console.log(newbubblesArray.length)
        // var last_ball_colour = this.bubblesContainer.last.data.list.value.split("_");
        // console.log(last_ball_colour)
        // this.bubblesContainer.each(function(child) {
        //     var split_child_color = child.data.list.value.split("_");
        //     if (last_ball_colour[0] == split_child_color[0]) {
        //         for (var i = 0; i < bubblesArray.length; i++) {
        //             for (let j = 0; j < 20; j++) {
        //                 if (bubblesArray[i][j] === child.data.list.value) {
        //                     newbubblesArray[i][j] = 1;
        //                 }
        //             }
        //         }
        //     }
        // }, this);
        // this.bubblesContainer.each(function(child) {
        //     getchildColour = child.data.list.value;
        //     if (child.x === 660) {
        //         abovechild = child.data.list.value;
        //     }
        // }, this)
    }
    createnewarray() {
        console.log("Create New Array")
        for (var i = 0; i < 1; i++) {
            for (let j = 0; j < 20; j++) {
                pushlast.push(-1);
            }
            if (pushlast[col] == -1) {
                pushlast[col] = lastchildcolour;
            }
            bubblesArray.push(pushlast);
            pushlast = [];
        }
    }
    updatenewarray() {
        console.log("Update array")
        console.log(col)
        console.log(lastchildcolour)
        console.log(shootCount + "Shootcount")
        if (shootCount == 1) {
            for (let j = 0; j < 20; j++) {
                pushlast.push(-1);
                // currx.push(-1)
            }
            bubblesArray.push(pushlast);
        }
        if (pushlast[col] == -1) {
            pushlast[col] = lastchildcolour;
        }
        console.log(bubblesArray)
            // pushlast = [];
        row = "";
        col = "";
    }
    update() {
        var angle1 = Phaser.Math.Angle.Between(this.gunImage.x, this.gunImage.y, this.input.x, this.input.y);
        this.gunImage.setRotation(angle1 + Math.PI / 2);
        if (blackBall) {
            blackBall = false;
            this.createblankBall();
        }
    }
}