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

2021-11-25

https://stackoverflow.com/questions/46085758/cannot-match-any-routes-base-href-suffix
 - this guy was specifying his server's origin in addition to just his base href suffix: https://my-machine:8111/my-app/ rather than my-app/
 - I've set both the base tag (in the index.html page) and the APP_BASE_HREF mentioned in linked post
 - links to next

https://stackoverflow.com/questions/34535163/angular-2-router-no-base-href-set/34535256#34535256

Currently building with --deploy-url="ng-camera-game-dist/" specified.
environment.prod.ts appBaseHref: 'ng-camera-game-dist" (no trailing backslash)

- temp version 0.0.0-base-href-router
- build w/ deploy-url

This fixes the unhandled javascript exception logged in the console, and resolves to the title component, but the url the browser address bar shows is wrong:
https://pawooten.github.io/ng-camera-game-dist/ng-camera-game-dist

https://stackoverflow.com/questions/53757931/angular-5-dynamic-base-reference-is-causing-duplicate-loading-of-bundleschunk
 - this guy's problem was fixed by appending a trailing backslash to his --base-href argument, which I'm not specifying.

Now specifying trailing backslash in environment.prod.ts. appBaseHref

This fixes the browser address bar but rebreaks the angular router!

Now specifying environment.appBaseHref + '*' for the path of angular router.

Still broken

Commented out environment.appBaseHref path of route table entirely, added another asterisk to wildcard path.

I think relying on the default route ** is probably not what I want, because I don't think I can force the browser address to resemble valid URLs. That is, .../ng-camera-game-dist/bogus/path shouldn't work, I'd rather that request redirect to /ng-camera-game-dist/



Dead end?
https://stackoverflow.com/questions/66535497/angular-app-base-href-appends-multiple-times

