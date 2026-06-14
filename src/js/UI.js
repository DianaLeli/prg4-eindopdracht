import { ScreenElement, Label, Vector, FontUnit, Color } from "excalibur";
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
    }
}