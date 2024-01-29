import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements OnInit {
  present: string = '';

  mains = [
    {
      id: 1,
      name: 'JOEL',
      pictOne: '/assets/pict/characters/Joel.jpg',
      pictTwo: '/assets/pict/characters/Joel(2).jpeg',
      story:
        "Joel Miller était un survivant de l'infection du Cordyceps. Après avoir perdu sa fille unique Sarah au début de l'épidémie, Joel opéra comme contrebandier au marché noir, acceptant au fil des années de nombreux emplois déshumanisants pour survivre dans ce monde post-pandémique. Il fut notamment chargé de faire passer et de protéger Ellie, une jeune fille qui était la clé de la survie de l'humanité, et avec qui il finit par nouer un lien fort au point de la considérer comme sa fille.",
    },
    {
      id: 2,
      name: 'ELLIE',
      pictOne: '/assets/pict/characters/Ellie.jpeg',
      pictTwo: '/assets/pict/characters/Ellie.jpeg',
      story:
        "Ellie est une jeune fille courageuse et téméraire ayant grandit depuis toujours dans le monde difficile ravagé par la pandémie d'Infection Cérébrale par Cordyceps. Son immunité rare face à la maladie l'a amenée à rencontrer Joel, un homme qu'elle considérera au fil du temps et des épreuves passées avec lui comme son père.",
    },
    {
      id: 3,
      name: 'ABBY',
      pictOne: '/assets/pict/characters/Abby.jpg',
      pictTwo: '/assets/pict/characters/Abby.jpg',
      story:
        'Abigail “Abby” Anderson est une ancienne Luciole aux côtés de son père et de son ami Owen, et membre du Front de Libération de Washington (WLF) depuis plusieurs années. Au sein de ce groupe, elle vit à Seattle dans un stade.',
    },
  ];

  secondarysPart1 = [
    {
      id: 1,
      name: 'TESS',
      pictOne: '/assets/pict/characters/Tess.jpg',
      pictTwo: '/assets/pict/characters/Tess(2).jpg',
      story:
        "Tess Servopoulos est une survivante et la partenaire de crime de Joel. Ils opèrent tous les deux dans le marché noir d'une ville passée sous la loi martiale et ont gagné une certaine réputation pour leurs actions. Tess et Joel ont une confiance aveugle l'un envers l'autre. C'est elle qui présente Ellie à Joel, pour lui confier une mission délicate pour les Lucioles, et parcourt un bout d'aventure avec eux.",
    },
    {
      id: 2,
      name: 'BILL',
      pictOne: '/assets/pict/characters/Bill.jpg',
      pictTwo: '/assets/pict/characters/Bill(2).jpg',
      story:
        "Bill est un survivant possédant sa propre ville. Il est prêt à tout pour protéger celle-ci, quitte à fabriquer ses propres pièges pour la défendre contre les Infectés et les étrangers, qu'il déteste. Bill a été modélisé à partir de W. Earl Brown.",
    },
    {
      id: 3,
      name: 'SAM',
      pictOne: '/assets/pict/characters/Abby.jpg',
      pictTwo: '/assets/pict/characters/Abby.jpg',
      story:
        'Abigail “Abby” Anderson est une ancienne Luciole aux côtés de son père et de son ami Owen, et membre du Front de Libération de Washington (WLF) depuis plusieurs années. Au sein de ce groupe, elle vit à Seattle dans un stade.',
    },
    {
      id: 4,
      name: 'HENRY',
      pictOne: '/assets/pict/characters/Abby.jpg',
      pictTwo: '/assets/pict/characters/Abby.jpg',
      story:
        'Abigail “Abby” Anderson est une ancienne Luciole aux côtés de son père et de son ami Owen, et membre du Front de Libération de Washington (WLF) depuis plusieurs années. Au sein de ce groupe, elle vit à Seattle dans un stade.',
    },
    {
      id: 5,
      name: 'MARLENE',
      pictOne: '/assets/pict/characters/Abby.jpg',
      pictTwo: '/assets/pict/characters/Abby.jpg',
      story:
        'Abigail “Abby” Anderson est une ancienne Luciole aux côtés de son père et de son ami Owen, et membre du Front de Libération de Washington (WLF) depuis plusieurs années. Au sein de ce groupe, elle vit à Seattle dans un stade.',
    },
    {
      id: 6,
      name: 'DAVID',
      pictOne: '/assets/pict/characters/Abby.jpg',
      pictTwo: '/assets/pict/characters/Abby.jpg',
      story:
        'Abigail “Abby” Anderson est une ancienne Luciole aux côtés de son père et de son ami Owen, et membre du Front de Libération de Washington (WLF) depuis plusieurs années. Au sein de ce groupe, elle vit à Seattle dans un stade.',
    },
    {
      id: 7,
      name: 'TOMMY',
      pictOne: '/assets/pict/characters/Abby.jpg',
      pictTwo: '/assets/pict/characters/Abby.jpg',
      story:
        'Abigail “Abby” Anderson est une ancienne Luciole aux côtés de son père et de son ami Owen, et membre du Front de Libération de Washington (WLF) depuis plusieurs années. Au sein de ce groupe, elle vit à Seattle dans un stade.',
    },
    {
      id: 8,
      name: 'RILEY',
      pictOne: '/assets/pict/characters/Abby.jpg',
      pictTwo: '/assets/pict/characters/Abby.jpg',
      story:
        'Abigail “Abby” Anderson est une ancienne Luciole aux côtés de son père et de son ami Owen, et membre du Front de Libération de Washington (WLF) depuis plusieurs années. Au sein de ce groupe, elle vit à Seattle dans un stade.',
    },
  ];

  showCharacters(character: string) {
    this.present = character;
  }

  ngOnInit(): void {}
}
