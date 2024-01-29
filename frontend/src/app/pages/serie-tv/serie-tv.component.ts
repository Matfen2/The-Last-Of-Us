import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serie-tv',
  templateUrl: './serie-tv.component.html',
  styleUrl: './serie-tv.component.css',
})
export class SerieTvComponent implements OnInit {
  arcFirst = [
    {
      id: 1,
      episode: '/assets/pict/media/serieTV/theLastOfUsSerieS01E01.jpg',
      title: 'S01E01 - Quand tu es perdu dans les ténèbres',
    },
    {
      id: 2,
      episode: '/assets/pict/media/serieTV/theLastOfUsSerieS01E02.jpg',
      title: 'S01E02 - Infecté',
    },
    {
      id: 3,
      episode: '/assets/pict/media/serieTV/theLastOfUsSerieS01E03.jpg',
      title: 'S01E03 - Longtemps...',
    },
  ];

  arcSecond = [
    {
      id: 1,
      episode: '/assets/pict/media/serieTV/theLastOfUsSerieS01E04.jpg',
      title: "S01E04 - S'il te plaît, tiens ma main",
    },
    {
      id: 2,
      episode: '/assets/pict/media/serieTV/theLastOfUsSerieS01E05.jpg',
      title: 'S01E05 - La survie à tout prix',
    },
    {
      id: 3,
      episode: '/assets/pict/media/serieTV/theLastOfUsSerieS01E06.jpg',
      title: 'S01E06 - Proches',
    },
  ];

  arcThird = [
    {
      id: 1,
      episode: '/assets/pict/media/serieTV/theLastOfUsSerieS01E07.jpg',
      title: 'S01E07 - Abandonner',
    },
    {
      id: 2,
      episode: '/assets/pict/media/serieTV/theLastOfUsSerieS01E08.jpg',
      title: 'S01E08 - Quand on est dans le besoin',
    },
    {
      id: 3,
      episode: '/assets/pict/media/serieTV/theLastOfUsSerieS01E09.jpg',
      title: 'S01E09 - Cherchez la lumière',
    },
  ];

  ngOnInit(): void {}
}
