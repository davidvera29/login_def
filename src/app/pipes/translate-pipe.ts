import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class TranslatePipe {

  data: any;
  current_idioma = 'es';
  constructor(private http: HttpClient) {
  }
  idioma(){
    if (this.current_idioma === 'es')
    {this.current_idioma = 'en'}
    else
    {this.current_idioma = 'es'}
  }
  use(lang: string): Promise<{}> {
    return new Promise <{}> ((resolve, reject) => {
      try {
        const path = `./assets/i18n/lang.${ lang || 'current_idioma' }.json`;
        this.http.get<{}>(path).subscribe(
          translation => {
            this.data = Object.assign({}, translation || {});
            resolve(this.data);
          },
          error => {
            this.data = {};
            resolve(this.data);
          }
        );
      } catch (e) {
        this.data = {};
        resolve(this.data);
      }
    });
  }
}
