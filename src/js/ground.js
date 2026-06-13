import { Actor, Vector, CollisionType } from "excalibur";
import { Resources } from "./resources";

export class Ground extends Actor {
  speed = 400;

  constructor(x = 0) {
    super({
      width: Resources.Ground.width,
      height: Resources.Ground.height,
      pos: new Vector(x, 635),
      anchor: new Vector(0, 0)
    });

    this.graphics.use(Resources.Ground.toSprite());
  }

  onInitialize(engine) {
    this.body.useGravity = true
    this.body.collisionType = CollisionType.Fixed
  }

  onPreUpdate(engine, delta) {
    this.pos.x -= this.speed * (delta / 1000);

    const width = this.graphics.current.width;

    if (this.pos.x <= -width) {
      this.pos.x += width * 2;
    }
  }
}

