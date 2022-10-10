import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisearchService } from '../apidata.service'
import { Autor, Music } from '../data';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  autor: Autor | any
  music: Music | any
  showWeather: boolean = false
  constructor(private  apiService: ApisearchService) { }

  ngOnInit(): void {
    this.showWeather = false
  }

  submitEvent(asearch:string,msearch:string) {
    if (asearch != "" && msearch != ""){
      this.getDataAutor(asearch)
      this.getDataMusic(msearch,asearch)
      this.showWeather = true
    }
    
  }

  async getDataAutor(autor:string): Promise<void>{
      await this.apiService.getAuthor(autor).subscribe(autor => {
      this.autor = autor
      console.log(this.autor)
    })
   
  }
  async getDataMusic(music:string,autor:string): Promise<void>{
      await this.apiService.getMusic(music,autor).subscribe(liric => {
      this.music = liric
    })
  }

}
