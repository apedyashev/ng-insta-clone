import { Directive,ViewContainerRef, Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

// TODO: move to modal module's directive
@Directive({
  selector: '[appModalBody]',
})
export class ModalBodyDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() title: string = '';
  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();
  // defines where the modal's body will be rendered (using a directive)
  @ViewChild(ModalBodyDirective, {  static: true }) body!: ModalBodyDirective;

  closeMe() {
    this.closeMeEvent.emit();
  }
  confirm() {
    this.confirmEvent.emit();
  }

}
