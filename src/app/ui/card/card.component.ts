import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class UiCardComponent {
  @Input() padding: number = 2;
  @Input() classNames: string = '';
  @ViewChild('footer', { read: ElementRef, static: true }) footer!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  get paddingClass(): string {
    // dynamic values are not recommended https://v2.tailwindcss.com/docs/just-in-time-mode#arbitrary-value-support
    const paddings: Record<number, string> = {
      0: '',
      2: 'p-2',
      4: 'p-4',
      8: 'p-8'
    }
    return paddings[this.padding] || '';
  }

  get isFooterEmpty() {
    return !this.footer.nativeElement.innerHTML;
  }
}
