import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'
import { Autor,Music } from './data';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApisearchService {
  apiMusic:string = environment.apiMusic
  apiAuthor:string = environment.apiAuhtor
  constructor(private httpApi: HttpClient) { }

  getAuthor(author:string): Observable<Autor> {
    const paramsApi = new HttpParams().set('s',author)
    return this.httpApi.get<Autor>(this.apiAuthor,{params:paramsApi})
  }

  getMusic(music:string,auhtor:string): Observable<Music>{
    const url = `${this.apiMusic}${auhtor}/${music}`
    return this.httpApi.get<Music>(url)
  }
}
