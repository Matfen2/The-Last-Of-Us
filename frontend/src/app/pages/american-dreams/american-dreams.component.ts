import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-american-dreams',
  templateUrl: './american-dreams.component.html',
  styleUrl: './american-dreams.component.css',
})
export class AmericanDreamsComponent implements OnInit {
  selectedImage: string | null = null;

  pages = [
    {
      id: 1,
      pict: '/assets/pict/media/bd/theLastOfUsAmericanDreamsPage1.png',
    },
    {
      id: 2,
      pict: '/assets/pict/media/bd/theLastOfUsAmericanDreamsPage2.png',
    },
    {
      id: 3,
      pict: '/assets/pict/media/bd/theLastOfUsAmericanDreamsPage3.png',
    },
    {
      id: 4,
      pict: '/assets/pict/media/bd/theLastOfUsAmericanDreamsPage4.png',
    },
  ];

  onSelectImage(image: string) {
    this.selectedImage = image;
  }

  ngOnInit(): void {}
}
