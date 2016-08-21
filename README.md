
Live video API with [www.flowchain.co](http://www.flowchain.co).

## Quickstart

You can use clone this repository, or use devify-cli to fetch this project.

```
$ sudo npm install devify-cli -g
$ devify ui ui-live-video
```

Open ```index.html#<id>``` to watch live video. Please replace ```<id>``` with the video ID string. For example ```index.html#55555```.


And use ```ffmpeg``` or other existing video streamer to invoke the live video API.

## Live Video API

### ffmpeg

Use ```http://v.wot.city:8100/video/<id>/send``` API to stream live video. For example, use ffmpeg on Mac OS. 

```
ffmpeg -f qtkit -r 30 -i "0" -f mpeg1video -b:v 1000k -s 640x480 http://v.wot.city:8100/video/55555/send
```

Please replace ```<id>``` with an unique ID string.

## License

The MIT License.
