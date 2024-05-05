import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVideoAudioComponent } from './test-video-audio.component';

describe('TestVideoAudioComponent', () => {
  let component: TestVideoAudioComponent;
  let fixture: ComponentFixture<TestVideoAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestVideoAudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestVideoAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
