import { Component, OnInit } from '@angular/core';
import { IdentityService } from 'src/app/services/identity.service';
import { IUser } from 'src/app/models/user.model';
import { TranslatePipe } from 'src/app/pipes/translate-pipe';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: IUser;

  constructor(
    private identityService: IdentityService,
    private translatePipe: TranslatePipe
  ) { }

  ngOnInit() {
    this.identityService.onUserChange.subscribe(ans => {
      // console.log('onUserChange', ans);
      this.user = {...ans};
    });
  }

  isAuthenticated(): boolean {
    return this.identityService.isUthenticate();
  }

  isAdmin(): boolean {
    // console.log(':( isAdmin');
    return this.identityService.isAdmin();
  }

  logOut(): void {
    this.identityService.logOut();
  }
  idioma(): void{
    this.translatePipe.idioma();
  }
}
