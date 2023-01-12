import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  @Input() serverResponseError: string = '';
  constructor() {}

  ngOnInit(): void {}
}
