import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";

export class Background extends Actor {
    speed = 80;

    constructor(x = 0) {
        super({
            pos: new Vector(x, 0),
            anchor: new Vector(0, 0)
        });

        this.graphics.use(Resources.Background.toSprite());
    }

    onPreUpdate(engine, delta) {
        this.pos.x -= this.speed * (delta / 1000);

        const width = this.graphics.current.width;

        if (this.pos.x <= -width) {
            this.pos.x += width * 2;
        }
    }
}
