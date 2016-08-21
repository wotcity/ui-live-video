# .CITY Starter Kit

Live video API with [www.flowchain.co](http://www.flowchain.co).

## How to Use

Open ```index.html#<id>``` to watch live video. And use ```ffmpeg``` or other existing video streamer to invoke the live video API.

## Live Video API

### ffmpeg

Use ```http://v.wot.city:8100/video/<id>/send``` API to stream live video. For example, use ffmpeg on Mac OS. 

```
ffmpeg -f qtkit -r 30 -i "0" -f mpeg1video -b:v 1000k -s 640x480 http://v.wot.city:8100/video/555ada050757f8140300000/send
```

Please replace ```<id>``` with an unique ID string.

## License

The MIT License.
