import { PicColorState } from "./interfaces/PicColorState";
import { RGB } from "./interfaces/RGB";
import { NotificationService } from "./services/notification-service";
import { calculateRGBColorDistance, RGBFromString } from "./utils";

/*
 * A Game is composed of a set of picSets the player must match.
*/
export class Game {
    private picSetIndex = 2; // blue

    constructor(private readonly notificationService: NotificationService, private readonly picSets: PicColorState[]) {
    }

    examineColor(color: RGB) : void {
        console.log('color is ' + JSON.stringify(color));
        let picSet = this.picSets[this.picSetIndex];
        let picRGB = RGBFromString(picSet.Value);

        let distance = calculateRGBColorDistance(color, picRGB);
        this.notificationService.showNotificationMessage(`distance=${distance}`);
    }
}