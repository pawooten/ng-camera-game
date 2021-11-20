https://stackoverflow.com/questions/9018016/how-to-compare-two-colors-for-similarity-difference
https://en.wikipedia.org/wiki/Color_difference
https://gist.github.com/ryancat/9972419b2a78f329ce3aebb7f1a09152

 ng build --deploy-url="ng-camera-game-dist/"
 404 for images

 both deploy-url and base-href double up ng-camera-game-dist in the path
 
 Building with either deploy-url or base-href specified seems to resolve the base href issue for javascript and css.
 I'm fairly confident that specifying just base-href doesn't fix the image URLs. Requests for https://pawooten.github.io/assets/... were logged rather than https://pawooten.github.io/ng-camera-game-dist/assets/...

 Specifying the baseHref as an environment variable fixes the image URLs.

Specifying the baseHref as an environment variable and at build time breaks the image URLs by doubling up the ng-camera-game-dist/

That makes no sense.

9:04pm confirmed. Not specifying baseHref in environment, build with base-href specified, https://pawooten.github.io/assets/camera-icon.png 404.

9:09pm Specifying both baseHref in environment, build with base-href specified
https://pawooten.github.io/ng-camera-game-dist/ng-camera-game-dist/assets/camera-icon.png

So I have to build with deploy-url instead of baseHref, because building with baseHref without environment-specified doesn't fix image links. Building with environment-specified with baseHref breaks images by doubling up the basehref in the url. Building with just environment-specified fixes images but breaks js and css links.

Building with environment-specified (for the sake of images) and deploy-url to fix the base-href problem seems like the best configuration so far.

User / Environment
User = Selfie View
Environment = Photographer View