import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface IMedia {
  title: string;
  src: string;
  type: string;
}


@Component({
  selector: 'app-videomatch',
  templateUrl: './videomatch.component.html',
  styleUrls: ['./videomatch.component.scss']
})
export class VideomatchComponent implements OnInit {


  vidNames = [];
  playlist: Array<IMedia> = [
    {
      title: 'Pale Blue Dot',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4'
    }
  ];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // load file list
    this.loadList();
  }

  public getSimilarity(fileName){

    this.playlist = [];
    this.http.get('match_video/'+fileName).subscribe(
      (res => {
        const data = res['files'];
        for(let i = 0; i < data.length; i++){
          this.playlist.push(
            ({
              title: 'Match ' + i,
              src: 'video/' + data[i]['file_name'],
              type: 'video/mp4'
            }) as IMedia
          );
        }
      })
    );
  }

  public loadList() {
    this.vidNames = [];
    this.http.get('video').subscribe(
      (res => {
        let data = res['files'];
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          this.vidNames.push(data[i]['file_name'] as string);
        }
      }),
      (err => { console.log(err); })
    );
  }


  public select(fileName){
    this.getSimilarity(fileName);
  }
}
