import { ScreenElement, Label, Vector, FontUnit, Color } from "excalibur";
import { Resources } from "./resources.js";

export class UI extends ScreenElement {
    scoreText
    score = 0

    onInitialize(engine) {
        this.scoreText = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(1050, 30),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 20,
                color: Color.Black
            })
        })
        this.addChild(this.scoreText)

        this.howToPlayText = new Label({
            text: "Press Space to Jump!",
            pos: new Vector(50, 30),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 20,
                color: Color.Black
            })
        });
        this.addChild(this.howToPlayText);
    }

    updateScore(points) {
        this.score += points
        this.scoreText.text = `Score: ${this.score}`
    }
}