import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, Label, Font, FontUnit, Color, Timer } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Ground } from './ground.js'
import { Player } from './player.js'
import { Coin } from './coin.js'
import { Enemy } from './enemy.js'
import { GameOverScene } from "./scenes/GameOverScene.js";
import { UI } from "./UI.js";
import { Heart } from './heart.js'
import { StartScene } from './scenes/startscene.js'
import { levelOne } from './scenes/levelone.js'

export class Game extends Engine {

    score
    mylabel

    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 800),
            }
        })

        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        this.gameOverScene = new GameOverScene();
        this.addScene("gameover", this.gameOverScene);

        this.addScene("start", new StartScene());
        this.addScene("levelone", new levelOne());

        this.goToScene("start");
    } 

    goToGameOver() {
        this.goToScene("gameover");
    }

    
}

new Game()