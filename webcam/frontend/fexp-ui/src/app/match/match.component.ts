import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, timeInterval, flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public imgbase64: string;
  public imageList = [];
  private listAllUrl = '/upload/';
  private imageLoadUrl = '/upload/';
  private matchLoadUrl = '/match/';
  private similar = [];
  private curIndex = 0;
  private nsim = 2;
  ngOnInit() {
    console.log("initlize"+ this.listAllUrl);
    this.http.get(this.listAllUrl).subscribe (res=>{
      //console.log(res);
      let data = res['files'];
      //console.log("data"+data);
      // tslint:disable-next-line: align
      for(let i = 0; i < data.length; i++){
        this.imageList.push(data[i]['file_name'] as string);
      }
      
    }, (err => {
      //console.log(err);
    }));
  }

  private loadImage(){
    const url = this.imageLoadUrl + this.imageList[this.curIndex];
    this.http.get(url).subscribe( (res => {
      this.imgbase64 = res.toString();
      //console.log("img:"+this.imgbase64);
    }));
  }

  private loadImage2( file){
    const url = this.imageLoadUrl + file;
    return this.http.get(url);
  }

  public next(): void {
    this.curIndex = (this.curIndex + 1 ) % this.imageList.length;
    this.loadImage();
    this.loadSim();
  }
  public prev(): void {
    this.curIndex =  ( this.curIndex + this.imageList.length - 1) % this.imageList.length;
    this.loadImage();
    this.loadSim();
  } 

  public loadSim(): void{
    const url = this.matchLoadUrl + this.imageList[this.curIndex];
    this.http.get(url).subscribe( (res => {
      let files  = res as Array<string>;
      const n = Math.min(this.nsim, files.length);
      files = files.slice(0, n);
      this.similar = new Array<string>(files.length);
      for(let i = 0; i < files.length; i++){
        this.loadImage2(files[i]).subscribe(
          ( res => {this.similar[i] = res.toString();} )
        );
      }
    }));
  }

}
