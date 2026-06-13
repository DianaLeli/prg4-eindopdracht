import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, Label, Font, FontUnit, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Ground } from './ground.js'
import { Player } from './player.js'
import { Coin } from './coin.js'
import { Enemy } from './enemy.js'
import { GameOverScene } from "./scenes/GameOverScene.js";
import { UI } from "./UI.js";
import { Heart } from './heart.js'

export class Game extends Engine {
    ui

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

        const bgWidth = Resources.Background.width;

        this.add(new Background(0));
        this.add(new Background(bgWidth));

        const groundWidth = Resources.Ground.width;

        this.add(new Ground(0));
        this.add(new Ground(groundWidth));

        this.ui = new UI();
        this.add(this.ui);

        const player = new Player();
        this.add(player);

        for (let i = 0; i < 10; i++) {
            const coin = new Coin();
            this.add(coin);
        }

        for (let i = 0; i < 10; i++) {
            const heart = new Heart();
            this.add(heart);
        }

        const enemy = new Enemy();
        this.add(enemy);
        
    }

    goToGameOver() {
        this.goToScene("gameover");
    }
}

new Game()