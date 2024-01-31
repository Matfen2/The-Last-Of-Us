import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tlou',
  templateUrl: './tlou.component.html',
  styleUrls: ['./tlou.component.css'],
})
export class TlouComponent implements OnInit {
  constructor(private routes: ActivatedRoute) {}

  tlouId!: number;
  tlouDetails: any;

  isSmallScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = window.innerWidth < 728;
  }

  players: string = '';
  expandedImage: any;

  showImage(info: string) {
    this.expandedImage = info;
  }

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.tlouId = +params['id'];
      this.tlouDetails = this.tlouData.find((tlou) => tlou.id === this.tlouId);
    });
  }

  tlouData = [
    {
      id: 1,
      wallpaper: '/assets/pict/part1/theLastOfUsPart1Page.jpg',
      portable: '/assets/pict/part1/theLastOfUsPart1Portable.jpg',
      pitch:
        "Dans un monde dévasté où se mêlent infectés et survivants endurcis, Joel, un protagoniste désabusé, est engagé pour faire sortir Ellie, 14 ans, d'une zone de quarantaine militaire. Mais ce qui devait être une simple mission de routine se transforme vite en un dangereux périple à travers le pays.",
      screenshots: '/assets/pict/part1/theLastOfUsPart1Experience.jpg',
      logo: '/assets/pict/part1/theLastOfUsPart1Logo.png',
      pictLiveOne: '/assets/pict/part1/theLastOfUsPart1Pict1.jpeg',
      pictLiveTwo: '/assets/pict/part1/theLastOfUsPart1Pict2.jpeg',
      pictLiveThree: '/assets/pict/part1/theLastOfUsPart1Pict3.jpeg',
      sentenceLiveOne:
        'Vivre une relation père-fille complexe entre Joel et Ellie',
      sentenceLiveTwo: 'Survivre à tout prix',
      sentenceLiveThree: 'Voyager aux quatre coins des États-Unis',
      menu: '/assets/pict/part1/theLastOfUsPart1Menu.jpg',
      firstMedia: '/assets/pict/part1/theLastOfUsPart1Pict4.jpeg',
      secondMedia: '/assets/pict/part1/theLastOfUsPart1Pict5.jpeg',
      thirdMedia: '/assets/pict/part1/theLastOfUsPart1Pict6.jpeg',
      fourMedia: '/assets/pict/part1/theLastOfUsPart1Pict7.jpeg',
      fiveMedia: '/assets/pict/part1/theLastOfUsPart1Pict8.jpeg',
      sixMedia: '/assets/pict/part1/theLastOfUsPart1Pict9.jpg',
    },
    {
      id: 2,
      wallpaper: '/assets/pict/part2/theLastOfUsPart2Page.jpeg',
      portable: '/assets/pict/part2/theLastOfUsPart2Portable.jpeg',
      pitch:
        "Cinq ans après leur voyage périlleux à travers une Amérique ravagée par une pandémie, Ellie et Joel ont trouvé refuge à Jackson, dans le Wyoming. Vivre dans une communauté florissante de survivants leur a permis de connaître la paix et la stabilité en dépit de la menace constante des infectés et des survivants désespérés. Lorsqu'un événement violent trouble cette paix, Ellie se lance dans une quête de justice pour enfin tourner la page.",
      logo: '/assets/pict/part2/theLastOfUsPart2Logo.png',
      screenshots: '/assets/pict/part2/theLastOfUsPart2Experience.jpg',
      pictLiveOne: '/assets/pict/part2/theLastOfUsPart2Pict1.jpg',
      pictLiveTwo: '/assets/pict/part2/theLastOfUsPart2Pict2.jpg',
      pictLiveThree: '/assets/pict/part2/theLastOfUsPart2Pict3.jpg',
      sentenceLiveOne: 'Vivre une histoire de vengeance d’Ellie',
      sentenceLiveTwo: 'Survivre à tout prix',
      sentenceLiveThree: 'Voyager à travers un monde magnifique mais dangereux',
      menu: '/assets/pict/part2/theLastOfUsPart2Menu.jpg',
      video: '/assets/pict/part2/The Last of Us Part II Menu.mp4',
      firstMedia: '/assets/pict/part2/theLastOfUsPart2Pict4.jpg',
      secondMedia: '/assets/pict/part2/theLastOfUsPart2Pict5.jpg',
      thirdMedia: '/assets/pict/part2/theLastOfUsPart2Pict6.jpg',
      fourMedia: '/assets/pict/part2/theLastOfUsPart2Pict7.jpg',
      fiveMedia: '/assets/pict/part2/theLastOfUsPart2Pict8.jpg',
      sixMedia: '/assets/pict/part2/theLastOfUsPart2Pict9.jpg',
    },
  ];
}
