import { Scene, Label, Vector, Font, FontUnit, Color } from "excalibur";
import { Resources } from "../resources";

export class GameOverScene extends Scene {
    onInitialize(engine) {
        const gameOverLabel = new Label({
            text: "Game Over",
            pos: new Vector(450, 360),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 50,
                color: Color.White
            }),
            textAlign: "center",
            textBaseline: "middle",
        });
        this.backgroundColor = Color.Black
        this.add(gameOverLabel);
    }
} 