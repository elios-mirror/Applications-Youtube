const Request = require('request');

const elios_sdk = require('elios-sdk');

const sdk = new elios_sdk.default();

export default class YoutubePlayer {
  name: string = '';
  installId: string = '';

  requireVersion: string = '0.0.1';
  showOnStart: boolean = true;

  widget: any;
  it: any;

  constructor() {
    console.log('Youtube-player constructor.');
  }

  render(url: string) {
        this.widget.html('<iframe id="ytplayer" type="text/html" width="480" height="270" src="http://www.youtube.com/embed/' + url + '?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&showinfo=0" frameborder="0"/>');
  }

  start() {
    console.log('Youtube-player started.');

    let url = "-FlxM_0S2lA";

    this.widget = sdk.createWidget();

    sdk.config().subscribe((config:any) => {
      if (config.url)
      url = config.url;
      this.render(url);
    });

    this.render(url);

    setInterval(() => {
      this.render(url);
    }, 600000);
  }
}

const youtubeplayer = new YoutubePlayer();

youtubeplayer.start();
