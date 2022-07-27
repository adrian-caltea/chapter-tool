import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  folders: any[] = [
    {
      image: 'person',
      name: 'Weekly One-on-one meeting',
    },
    {
      image: 'person',
      name: 'Remote One-on-one meeting',
    },
    {
      image: 'people',
      name: 'Leadership meeting',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
