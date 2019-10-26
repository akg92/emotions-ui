import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, AfterViewInit {

  
  cards = [
    {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
    {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
    {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
    {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
    {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
    {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
    {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
    {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
    {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
  ];
  
  slides: any = [[]];
  
  constructor(private renderer: Renderer2, private http: HttpClient) { }
  
  
  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  
  ngOnInit() {
   // this.cards = [];
   this.slides = this.chunk(this.cards, 5);
    
   this.http.get('/select/').subscribe(res => {
     
      let data = res['files'];
      for(let i = 0; i < data.length; i++){
        this.cards.push({'img':data[i]['file_name'] as string});
      }
      
      this.slides = this.chunk(this.cards, 5);
    }, err => {
      console.log(err);
    });
  }
  public select(card){
    const fileNames = card['img'].split('/');
    const fileName = fileNames[fileNames.length-1];
    console.log(fileName);
    this.http.post('/select/' + fileName, { }).subscribe( res =>{
      console.log("Success");
    });

  }
  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.btn-floating');
    buttons.forEach((el: any) => {
      this.renderer.removeClass(el, 'btn-floating');
      this.renderer.addClass(el, 'px-5');
      this.renderer.addClass(el.firstElementChild, 'fa-3x');
    });
  }

}
