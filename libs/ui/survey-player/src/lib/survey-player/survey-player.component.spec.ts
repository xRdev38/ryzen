import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyPlayerComponent } from './survey-player.component';

describe('SurveyPlayerComponent', () => {
  let component: SurveyPlayerComponent;
  let fixture: ComponentFixture<SurveyPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyPlayerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SurveyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
