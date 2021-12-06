# Camera Color Match

The player is assigned a series of target colors for each instance of the game. The goal of the game is to take a photo whose
primary color matches closely to the target color.

<a href="https://pawooten.github.io/ng-camera-game-dist/" target="_blank">Take it for a spin</a>

## Types Overview

Color - Describes a Color, composed of r, g, b components.

Game - Composed of a set of picAssignments the player must match.

PicAssigmentResult - Describes the result of evaluating a PicAssignmentSubmission, including (color) Distance and Score.

PicAssignmentSubmission - Composed of a PicAssignment and the PicColor which will be compared to the assignment.

PicAssignment - Describes an assignment of a PicColor the player must attempt to match.

PicColor - Describes a labeled Color.

PicColorState -  Describes a PicColor that is Enabled or Disabled.

PicSet - A collection of data URL strings of images taken with the camera.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
