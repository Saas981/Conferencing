import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-video-audio',
  standalone: true,
  imports: [],
  templateUrl: './test-video-audio.component.html',
  styleUrl: './test-video-audio.component.scss'
})
export class TestVideoAudioComponent implements OnInit {
  private jitsi: any;
  
  // Define the options object with the correct type
  options: { roomName: string; parentNode?: HTMLElement } = { roomName: 'JitsiTestRoom' };

  constructor() { }

  ngOnInit() {
    // Set parentNode option on init after the DOM has rendered
    this.options.parentNode = document.querySelector('#meet') as HTMLElement;
    
    // Initialize JitsiMeetExternalAPI
    this.jitsi = new (window as any).JitsiMeetExternalAPI('meet.jit.si', this.options);
  }
}

