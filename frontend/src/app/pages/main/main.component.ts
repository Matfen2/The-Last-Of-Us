import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  isSmallScreen: boolean = false;

  tlous = [
    {
      id: 1,
      background: '/assets/pict/main/theLastOfUsPart1.jpeg',
      portable: '/assets/pict/main/theLastOfUsPart1Portable.png',
    },
    {
      id: 2,
      background: '/assets/pict/main/theLastOfUsPart2.jpeg',
      portable: '/assets/pict/main/theLastOfUsPart2Portable.jpeg',
    },
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.isSmallScreen = window.innerWidth < 426;
  }

  ngOnInit(): void {}
}
