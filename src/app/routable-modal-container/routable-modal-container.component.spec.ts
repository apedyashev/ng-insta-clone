import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutableModalContainerComponent } from './routable-modal-container.component';

describe('ModalContainerComponent', () => {
  let component: RoutableModalContainerComponent;
  let fixture: ComponentFixture<RoutableModalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutableModalContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutableModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
