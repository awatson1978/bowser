# awatson1978:bowser

A Meteorite package for detecting the client browser and operating system. Pull
requests totally accepted in helping keep this library up-to-date.


## General Notes

    1. You really shouldn't use browser-detection. You should be using
       feature-detection instead.

    2.  But you're going to use browser-detection anyhow, aren't you?  That's
        cool.  Let's just roll with it, and use the following library.
        https://github.com/ded/bowser


## Installation

Install from the command line;

    ```sh
    $ meteor add awatson1978:bowser
    ```


## Usage

Initialize the Browser

    ```js
    Meteor.startup(function () {
      bowser = BrowserObserver.init();
    });
    ```

## Example using Iron Router

    ```js
    Router.map(function () {
      this.route('specific_post', {
        path: '/post/:_id',
        data: function () {
          return Posts.findOne(this.params._id);
        },
        onBeforeAction: function () {
          // Render the unsupported browser page if user isn't using Chrome.
          if (!bowser.webkit) {
            this.render('browserNotSupportedPage');
            this.stop();
          }
        }
      });
    });
    ```


## Licensing

See Meteor and Bowser

