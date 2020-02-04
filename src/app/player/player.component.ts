import {Component, OnInit} from '@angular/core';
import { AudioService } from '../_services';
import { MusicService } from '../_services';
import { StreamState } from '../_interfaces/stream-state';
import { AuthenticationService } from '../_services';
import {Track} from "../_models";
import * as moment from "moment";

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit {
  music: Array<Track> = [];
  state: StreamState;
  currentTrack: any = {};
  musicService: MusicService;


  constructor(private audioService: AudioService, musicService: MusicService, public auth: AuthenticationService) {

    // listen to stream state
    this.audioService.getState()
    .subscribe(state => {
      this.state = state;
    });
    this.musicService = musicService;

    this.audioService.setAuth(this.auth);


  }
  ngOnInit() {
    this.musicService.loadMusic();
    this.music = this.musicService.getMusic();

  }
  formatTime(time: number, format: string = 'HH:mm:ss') {
    return moment.utc(time).format(format);
  }
  playStream(url) {
    this.audioService.playStream(url)
    .subscribe(events => {
      // listening for fun here
    });
  }

  openTrack(track:Track, index) {
    this.currentTrack = { index, track };
    this.audioService.stop();
    this.playStream(track.previewUrl);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentTrack.index + 1;
    const track = this.music[index];
    this.openTrack(track, index);
  }

  previous() {
    const index = this.currentTrack.index - 1;
    const file = this.music[index];
    this.openTrack(file, index);
  }

  isFirstPlaying() {
    return this.currentTrack.index === 0;
  }

  isLastPlaying() {
    return this.currentTrack.index === this.music.length - 1;
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }
  onVolumeChangeEnd(change) {
    this.audioService.setVolume(change.value);
  }
}
