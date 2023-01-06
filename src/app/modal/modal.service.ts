import { ComponentRef, Injectable, ElementRef, ViewContainerRef } from '@angular/core';

import { Subject } from 'rxjs';

import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalRef!: ComponentRef<ModalComponent>;
  private componentSubscriber!: Subject<string>;

  /**
   * opens modal and renders passed body component
   * Uses dynamic loading: https://angular.io/guide/dynamic-component-loader#dynamic-component-loading
   *
   * More info here https://dev.to/hssanbzlm/creating-custom-modal-224l
   *
   * @param modalContainerRef - where the modal will be inserted (see the ModalContainerComponent)
   * @param modalBodyType - component to be rendered as the  content (or body) of the modal
   * @returns
   */
  openModal(modalContainerRef: ViewContainerRef, modalBodyType: ElementRef) {
    this.modalRef = modalContainerRef.createComponent(ModalComponent);

    // this.modalRef.instance.title = 'title'

    const viewContainerRef = this.modalRef.instance.body.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent<ElementRef>(modalBodyType as any);

    this.modalRef.instance.closeMeEvent.subscribe(() => this.closeModal());
    this.modalRef.instance.confirmEvent.subscribe(() => this.confirm());

    this.componentSubscriber = new Subject<string>();
    return this.componentSubscriber.asObservable();
  }

  closeModal() {
    this.componentSubscriber.next('close');
    this.componentSubscriber.complete();
    this.modalRef.destroy();
  }

  confirm() {
    this.componentSubscriber.next('confirm');
    this.closeModal();
  }
}
