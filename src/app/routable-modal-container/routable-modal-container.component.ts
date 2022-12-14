import { Component, OnDestroy, ViewContainerRef, ViewChild } from '@angular/core';

import { ActivatedRoute, Router, Data } from '@angular/router';

import { ModalService } from '../modal/modal.service'

/**
 * Routable modal
 * https://zainzafar.medium.com/routable-modals-in-angular-64fb213199c7#:~:text=Routable%20Modal%20is%20technique%20that,having%20their%20scroll%20position%20lost.
 * https://zainzafar.medium.com/routable-modals-in-angular-64fb213199c7
 */
@Component({
  selector: 'app-modal-container',
  template: '<div #modalRoot></div>',
})
export class RoutableModalContainerComponent implements OnDestroy {
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
