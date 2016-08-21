/**
 * Modules
 */
 /**
 * Modules
 */

/**
 * Setup
 */
var app = app || {};

/**
* MODELS
**/

/**
* VIEWS
**/
app.ContainerView = Backbone.View.extend({
    el: '#video',
    initialize: function() {
    },
    render: function(name) {
        // Show loading notice
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#444';
        ctx.fillText('Waiting...', canvas.width/2-30, canvas.height/3);

        // Setup the WebSocket connection and start the player
        var client = new WebSocket( 'wss://wot.city/video/' + name + '/viewer' );
        var player = new jsmpeg(client, {canvas: canvas, autoplay: true});
    },
    syncUp: function(name) {
        this.render(name);
    }
});

/*
 * ROUTES
 */
app.AppRoutes = Backbone.Router.extend({
    routes: {
        ":name": "appByName"
    },
    appByName: function(name) {
        app.containerView = new app.ContainerView();
        app.containerView.syncUp(name);
    }
});

/**
* BOOTUP
**/
// Use jQuery ready in browserify mode
// since require() in Node.js is async.
$(function() {
    app.appRoutes = new app.AppRoutes();
    Backbone.history.start();
});
