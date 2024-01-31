import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infectes',
  templateUrl: './infectes.component.html',
  styleUrl: './infectes.component.css',
})
export class InfectesComponent implements OnInit {
  listInfectes = [
    {
      id: 1,
      pict: '/assets/pict/infected/runner.jpeg',
      name: 'COUREUR',
    },
    {
      id: 2,
      pict: '/assets/pict/infected/prowler.png',
      name: 'RODEUR',
    },
    {
      id: 3,
      pict: '/assets/pict/infected/clicker.jpeg',
      name: 'CLAQUEUR',
    },
    {
      id: 4,
      pict: '/assets/pict/infected/shamber.png',
      name: 'PUANT',
    },
    {
      id: 5,
      pict: '/assets/pict/infected/bloater.jpeg',
      name: 'COLOSSE',
    },
    {
      id: 6,
      pict: '/assets/pict/infected/ratKing.jpeg',
      name: 'RAT KING',
    },
  ];

  ngOnInit(): void {}
}
