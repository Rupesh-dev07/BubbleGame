window.addEventListener('load', function() {

    var config = {
        type: Phaser.CANVAS,
        width: 1920,
        height: 1080,
        backgroundColor: "#05ccf2",
        parent: 'GameContainer',
        physics: {
            default: 'arcade',
            arcade: {
                debug: true,
                gravity: {
                    y: 150
                }
            }
        },
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        dom: {
            createContainer: true
        }

    };

    var game = new Phaser.Game(config);
    checkforIos = game.device.os.iOS;
    checkforIphone = game.device.os.iPhone;
    game.scene.add("Boot", Boot, true);
    game.scene.add("Preload", Preload);
    game.scene.add("Lobby", Lobby);
    game.scene.add("Gametable", Gametable);
    game.scale.fullscreenTarget = document.getElementById(config.parent);
});
class Boot extends Phaser.Scene {

    preload() {
        console.log("s")
        this.load.image('bg', './assets/images/bgmenu.png')
        this.load.image('loaderlogo', './assets/images/logo.png')
        this.load.image('loadingbg', './assets/images/loader-bg.png');
        this.load.image('loader', './assets/images/loader-bar.png')
    }

    update() {
        this.scene.start("Preload");
    }
}