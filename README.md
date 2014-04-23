**browser-detection** is a Meteorite package for detecting the client browser and operating system.

------------------------
### General Notes

1.  You really shouldn't use browser-detection.  You should be using feature-detection instead.

2.  But you're going to use browser-detection anyhow, aren't you?  That's cool.  Let's just roll with it, and use the following library.
https://github.com/ded/bowser


------------------------
### Installation

First, install the bowser package from the command line, like so:

````js
mrt add bowser
````


Alternatively, if you'd like to bypass Atmosphere, and install directly from GitHub, you could update your application's smart.json file, like so:

````js
{
  "meteor": {
    "branch": "master"
  },
  "packages": {
    "browser-detection": {
      "git": "https://github.com/awatson1978/bowser.git"
    }
  }
}

````


------------------------
### Example using Iron Router

````js
// example using iron-router
Router.map(function() {
    this.route('specific_post', {
        path: '/post/:_id',
        data: function(){
            return Posts.findOne(this.params._id)
        },
        onBeforeAction: function () {
            // render the unsupported browser page if user isn't using Chrome
            if(!bowser.webkit){
                this.render('browserNotSupportedPage');
                this.stop();
            }
        }
    });
});
````


Pull requests totally accepted in helping keep this library up-to-date.

------------------------
### Licensing

MIT License on the Meteor package stuff. Otherwise, whatever the code at Bower.js
