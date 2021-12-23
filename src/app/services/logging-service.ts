import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Color } from "../interfaces/color";

@Injectable({
    providedIn: 'root',
  })
  export class LoggingService {
      log(message: string) : void {
          if (!environment.production || environment.enableConsoleLogging) {
              console.log(message);
          }
      }
      logColor(color: Color) : void {
        if (!environment.production || environment.enableConsoleLogging) {
            color.debug();
        }          
      }
  }