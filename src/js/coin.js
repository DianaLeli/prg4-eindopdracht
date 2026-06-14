import { Actor, Vector, Animation, SpriteSheet, range } from "excalibur";
import { Resources } from "./resources";
import { Player } from "./player";

export class Coin extends Actor {

    sprite;

    constructor() {
        super({
            width: 20,
            height: 20
        });

        this.sprite = Resources.Coin.toSprite();
        this.graphics.use(this.sprite);

        this.pos = new Vector(0, 0);
        this.vel = new Vector(Math.random() * -150 - 50, 0);

        this.on("exitviewport", (e) => this.resetPosition(e));
    }

    onInitialize(engine) {
        const sheet = SpriteSheet.fromImageSource({
            image: Resources.Coin,
            grid: {
                rows: 1,
                columns: 9,
                spriteWidth: 30,
                spriteHeight: 30
            }
        });

        this.runAnim = Animation.fromSpriteSheet(sheet, range(0, 6), 100);
        this.runAnim.loop = true;

        this.graphics.use(this.runAnim);

    }

    resetPosition(e) {
        this.pos = new Vector(1300, 600);
        this.vel = new Vector(-380, 0);
    }
    

    onCollisionStart(engine, other) {
        if (other.owner instanceof Player) {
            this.resetPosition();
        }
    }
}    