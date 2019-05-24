import Sdk from 'elios-sdk'

export default class YoutubePlayer {
    name: string = '';
    installId: string = '';

    requireVersion: string = '0.0.1';
    showOnStart: boolean = true;
    selectedDisplay: string = '3';

    widget: any;
    it: any;
    sdk: Sdk;

    constructor() {
      console.log('Youtube player module constructor.');
      this.sdk = new Sdk();
    }

    start() {
      console.log('Youtube player module started.');

      this.widget = this.sdk.createWidget();

      this.widget.html("<iframe id=\"ytplayer\" type=\"text/html\" width=\"640\" height=\"360\" src=\"http://www.youtube.com/embed/DaYx4XmWEoI?autoplay=1&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0\" frameborder=\"0\"/>");
    }
}

new YoutubePlayer().start();