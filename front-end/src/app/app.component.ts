import { Component } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './services/auth.service';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private roles: string = '';
  user: User;

  constructor(private tokenStorageService: TokenStorageService, private accountService: AccountService) {
    this.accountService.user.subscribe((x: User) => {
      this.user = x
      console.log(this.user)
    });
  }

  ngOnInit(): void {

  }

  logout() {
    this.accountService.logout();
  }
}
