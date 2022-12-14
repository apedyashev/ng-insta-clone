import { Component, OnDestroy, ViewContainerRef, ViewChild } from '@angular/core';

import { ActivatedRoute, Router, Data } from '@angular/router';

import { ModalService } from '../modal/modal.service'

@Component({
  selector: 'app-modal-container',
  template: '<div #modalRoot></div>',
})
export class ModalContainerComponent implements OnDestroy {
  private routerDataSubscription: any
  private modal: any
  @ViewChild('modalRoot', { read: ViewContainerRef }) modalRoot!: ViewContainerRef;

  constructor(
    private modalService: ModalService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.routerDataSubscription = this.route.data.subscribe(data => this.openDialog(data));
  }

  ngOnDestroy() {
    this.routerDataSubscription.unsubscribe();
    if (this.modal) {
      this.modal.unsubscribe();
    }
  }

  openDialog(data: Data): void {
    this.modal = this.modalService
      .openModal(this.modalRoot, data['component'])
      .subscribe((action) => {
        if(action === 'close') {
          // navigate one level back (i.e to the parent route)
          this.router.navigate(['..'])
        }
      });
    // const dialogRef = this.dialog.open(data.component, {});
    // dialogRef.afterClosed().subscribe(_ => this.router.navigate(['..'], { relativeTo: this.route }));
  }
}
