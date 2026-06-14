import { Color, Label, Scene, Vector, Font, FontUnit } from "excalibur";
import { Game } from "../game";
import { levelOne } from "./levelOne";
import { Resources } from "../resources";

export class StartScene extends Scene {

    /**
     * 
     * @param {Game} engine 
     */

    onInitialize(engine) {
        const titleLabel = new Label({
            color: Color.White,
            pos: new Vector(460, 250),
            text: "N3KO RUN",
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 50,
                color: Color.White
            })
        });
        
        this.add(titleLabel);

        const playLabel = new Label({
            color: Color.White,
            pos: new Vector(320, 360),
            text: "Press to Play!",
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 50,
                color: Color.White
            })
        });

        this.add(playLabel);

        this.backgroundColor = Color.Black

        playLabel.on("pointerdown", () => this.handleClick());
    }

    handleClick() {
        this.engine.goToScene("levelone");
    }
}