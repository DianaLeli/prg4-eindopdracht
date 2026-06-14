import { Scene, Engine } from "excalibur";
import { Resources } from "../resources";
import { Background } from "../background";
import { Ground } from "../ground";
import { Player } from "../player";
import { Heart } from "../heart";
import { Enemy } from "../enemy";
import { UI } from "../UI";

export class levelOne extends Scene {


    onInitialize() {

        const bgWidth = Resources.Background.width;

        this.add(new Background(0));
        this.add(new Background(bgWidth));

        const groundWidth = Resources.Ground.width;

        this.add(new Ground(0));
        this.add(new Ground(groundWidth));

        const ui = new UI();
        this.add(ui);

        const player = new Player();
        this.add(player);

        const heart = new Heart();
        this.add(heart);

        const enemy = new Enemy();
        this.add(enemy);

        this.player = player;
        this.scoreUI = ui;
    }

    onPreUpdate(engine) {
        if (this.player && this.scoreUI) {
            this.scoreUI.updateScoreText(this.player.score);
        }
    }

    onActivate() {
        if (this.player) {
            this.player.reset();
        }

        if (this.scoreUI && this.player) {
            this.scoreUI.updateScoreText(this.player.score);
        }
    }
}