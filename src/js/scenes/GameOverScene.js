import { Scene, Label, Vector, Font, FontUnit, Color } from "excalibur";
import { Resources } from "../resources";
import { StartScene } from "./startscene";

export class GameOverScene extends Scene {
    onInitialize(engine) {
        const gameOverLabel = new Label({
            text: "Game Over",
            pos: new Vector(460, 250),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 50,
                color: Color.White
            }),
            textAlign: "center",
            textBaseline: "middle"
        });

        this.backgroundColor = Color.Black
        this.add(gameOverLabel);

        const menuLabel = new Label({
            text: "Back to Menu",
            pos: new Vector(390, 360),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 50,
                color: Color.White
            }),
            textAlign: "center",
            textBaseline: "middle"
        });
        
        this.backgroundColor = Color.Black
        this.add(menuLabel);

        menuLabel.on("pointerdown", () => this.handleClick());
    }

    handleClick() {
        this.engine.goToScene("start");
    }
} 