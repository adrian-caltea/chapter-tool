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
      name: 'One-on-one meeting',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
