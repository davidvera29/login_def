import { Component } from '@angular/core';
import { TranslatePipe } from './pipes/translate-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  
  constructor(
    private translate: TranslatePipe
  ) {
    this.translate.use('en'); // .then(ans => console.log(ans));
  }
}
