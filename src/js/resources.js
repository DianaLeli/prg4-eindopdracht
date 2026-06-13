import { ImageSource, Sound, Resource, Loader, FontSource } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Background: new ImageSource('images/background.png'),
    PlayerSheet: new ImageSource('images/cat-spritesheet.png'),
    Ground: new ImageSource('images/ground.png'),
    Coin: new ImageSource('images/coin.png'),
    Enemy: new ImageSource('images/enemy-spritesheet.png'),
    PixelFont: new FontSource('fonts/PressStart2P-Regular.ttf', 'PressStart'),
    Heart: new ImageSource('images/heart.png')
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }