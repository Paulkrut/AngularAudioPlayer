import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


import { Track } from './../_models';
import {map} from "rxjs/internal/operators/map";

@Injectable({ providedIn: 'root' })
export class MusicService {

    private music: Array<Track> = [];

    constructor(private http: HttpClient) {

    }
    loadMusic(){
        this.http.get<any>(`http://itunes.apple.com/search?term=incubus&enitity=album`)
            .subscribe((data: any) => {
                if(!data.results || data.results.length == 0){
                    return;
                }
                data.results.map((part)=>{
                    let track: Track = new Track(part);
                    this.music.push(track);
                })
            });
    }

    getMusic(){
        return this.music;
    };
}
