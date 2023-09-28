import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSelectComponent } from './dynamic-select.component';
import { MessageService } from '../../services';

describe('DynamicSelectComponent', () => {
  let component: DynamicSelectComponent;
  let fixture: ComponentFixture<DynamicSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSelectComponent],
      providers: [MessageService],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
