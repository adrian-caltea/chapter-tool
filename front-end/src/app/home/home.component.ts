import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { SideNavComponent } from '../pages/side-nav/side-nav.component';
import { AccountService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(SideNavComponent, { static: true }) sideNav: SideNavComponent;

  user: User;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.user = this.accountService.userValue;
  }

  toggleSideNav() {}

  logout() {
    this.accountService.logout();
  }
}
