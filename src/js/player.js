import { Actor, Vector, Animation, SpriteSheet, range, Keys, CollisionType, Color, Side } from "excalibur";
import { Resources } from "./resources";
import { Enemy } from "./enemy";
import { Heart } from "./heart";
import { Coin } from "./coin";

export class Player extends Actor {

    healthbar
    health = 100
    grounded = false 

    constructor() {
        super({
            width: 80,
            height: 64,
            pos: new Vector(130, 550),
        });
    }

    onInitialize(engine) {

        this.body.useGravity = true
        this.body.collisionType = CollisionType.Active

        const sheet = SpriteSheet.fromImageSource({
            image: Resources.PlayerSheet,
            grid: {
                rows: 1,
                columns: 4,
                spriteWidth: 112,
                spriteHeight: 64
            }
        });

        this.runAnim = Animation.fromSpriteSheet(sheet, range(0, 3), 80);
        this.runAnim.loop = true;

        this.graphics.use(this.runAnim);

        this.healthbar = new Actor({ x: -75, y: -55, color: Color.Green, width: 150, height: 14, anchor: new Vector(0, 0) })
        this.addChild(this.healthbar)

    }

    onPreUpdate(engine, delta) {
        let xspeed = 0
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            if (this.grounded) {
                this.body.applyLinearImpulse(new Vector(0, -310 * delta))
            }
        }
    }

    onCollisionStart(engine, other, side) {
        if (other.owner instanceof Enemy) {
            this.health -= 33.5
            this.healthbar.scale = new Vector(this.health / 100, 1)
        }

        if (this.health <= 0) {
            this.kill();
            this.scene.engine.goToGameOver();
        }

        if (other.owner instanceof Heart) {
            this.health += 3.5
            this.healthbar.scale = new Vector(this.health / 100, 1)
        }

        if (side === Side.Bottom) {
            this.grounded = true
        }
    }

    onCollisionEnd(event, other, side) {
        if (side === Side.Bottom) {
            this.grounded = false
        }
    }

    onPostUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            if (this.vel.y === 0) {
                this.body.applyLinearImpulse(new Vector(0, -310 * delta))
            }
        }
    }

}