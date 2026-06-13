import { Actor, Vector, Animation, SpriteSheet, range } from "excalibur";
import { Resources } from "./resources";
import { Player } from "./player";

export class Enemy extends Actor {

    sprite;

    constructor() {
        super({
            width: 110,
            height: 80,
        });

        this.sprite = Resources.Enemy.toSprite();
        this.graphics.use(this.sprite);

        this.pos = new Vector();
        this.vel = new Vector(Math.random() * -150 - 50, 0);

        this.on("exitviewport", (e) => this.resetPosition(e));
    }

    onInitialize(engine) {
        const sheet = SpriteSheet.fromImageSource({
            image: Resources.Enemy,
            grid: {
                rows: 1,
                columns: 7,
                spriteWidth: 147,
                spriteHeight: 100,
            }
        });

        this.runAnim = Animation.fromSpriteSheet(sheet, range(0, 6), 70);
        this.runAnim.loop = true;

        this.graphics.use(this.runAnim);

    }

    resetPosition(e) {
        this.pos = new Vector(1400, 600);
        this.vel = new Vector(-400, 0);
    }
}   