import { ScreenElement, Label, Vector, FontUnit, Color, Font } from "excalibur";
import { Resources } from "./resources.js";

export class UI extends ScreenElement {

    onInitialize(engine) {
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

        this.scoreLabel = new Label({
            text: "Score: 0",
            pos: new Vector(1050, 30),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 20,
                color: Color.Black
            })
        });
        this.addChild(this.scoreLabel);
    }

    updateScoreText(score) {
        if (this.scoreLabel) {
            this.scoreLabel.text = "Score: " + score;
        }
    }
}