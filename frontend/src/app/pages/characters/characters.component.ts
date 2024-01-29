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
      modal: 'joel',
      pictOne: '/assets/pict/characters/Joel.jpg',
      pictTwo: '/assets/pict/characters/Joel(2).jpeg',
      story:
        "Joel Miller était un survivant de l'infection du Cordyceps. Après avoir perdu sa fille unique Sarah au début de l'épidémie, Joel opéra comme contrebandier au marché noir, acceptant au fil des années de nombreux emplois déshumanisants pour survivre dans ce monde post-pandémique. Il fut notamment chargé de faire passer et de protéger Ellie, une jeune fille qui était la clé de la survie de l'humanité, et avec qui il finit par nouer un lien fort au point de la considérer comme sa fille.",
    },
    {
      id: 2,
      name: 'ELLIE',
      modal: 'ellie',
      pictOne: '/assets/pict/characters/Ellie.jpeg',
      pictTwo: '/assets/pict/characters/Ellie(2).jpg',
      story:
        "Ellie est une jeune fille courageuse et téméraire ayant grandit depuis toujours dans le monde difficile ravagé par la pandémie d'Infection Cérébrale par Cordyceps. Son immunité rare face à la maladie l'a amenée à rencontrer Joel, un homme qu'elle considérera au fil du temps et des épreuves passées avec lui comme son père.",
    },
    {
      id: 3,
      name: 'ABBY',
      modal: 'abby',
      pictOne: '/assets/pict/characters/Abby.jpg',
      pictTwo: '/assets/pict/characters/Abby(2).jpg',
      story:
        'Abigail “Abby” Anderson est une ancienne Luciole aux côtés de son père et de son ami Owen, et membre du Front de Libération de Washington (WLF) depuis plusieurs années. Au sein de ce groupe, elle vit à Seattle dans un stade.',
    },
  ];

  secondarysPart1 = [
    {
      id: 1,
      name: 'TESS',
      modal: 'tess',
      pictOne: '/assets/pict/characters/Tess.jpg',
      pictTwo: '/assets/pict/characters/Tess(2).jpg',
      story:
        "Femme forte, habile et à bien des égards plus inflexible que son partenaire de contrebande Joel, Tess a su s'adapter au monde impitoyable qui l'entoure pour devenir une stratège et une négociatrice hors pair. Ses qualités de meneuse et sa force ont fait d'elle une figure respectée de la zone de quarantaine de Boston. Bien que la lutte permanente pour sa survie l'ait forcée à s'endurcir et à se montrer impitoyable, elle n'en reste pas moins une alliée loyale et courageuse prête à soutenir Joel et Ellie dans leur périple.",
    },
    {
      id: 2,
      name: 'BILL',
      modal: 'bill',
      pictOne: '/assets/pict/characters/Bill.jpg',
      pictTwo: '/assets/pict/characters/Bill(2).jpg',
      story:
        "Bill est le dernier survivant d'une ville dont la population a soit été évacuée, soit décimée par l'infection. Pragmatique, il s'est retranché derrière des fortifications complexes pour protéger son domaine des menaces extérieures, humains comme infectés. Bien qu'il ne le reconnaîtra jamais, son isolement a donné naissance à un profond sentiment de solitude et à une paranoïa aiguë.",
    },
    {
      id: 3,
      name: 'HENRY',
      modal: 'henry',
      pictOne: '/assets/pict/characters/Henry.jpg',
      pictTwo: '/assets/pict/characters/Henry(2).jpg',
      story:
        "Survivant athlétique et plein de ressources, Henry n'était encore qu'un enfant quand l'épidémie a frappé les États-Unis en 2013. En tant qu'aîné, la protection de son jeune frère, Sam, passe avant tout. Les années n'ont pas épargné les deux frères qui ont été forcés de s'endurcir et de prendre des décisions difficiles. Une épreuve de plus les attend lorsque leur zone de quarantaine est abandonnée, les forçant à partir à la recherche d'un nouveau foyer.",
    },
    {
      id: 4,
      name: 'SAM',
      modal: 'sam',
      pictOne: '/assets/pict/characters/Sam.jpg',
      pictTwo: '/assets/pict/characters/Sam(2).jpg',
      story:
        "Sam ne connait que le monde post-2013, un monde qui a forgé son pessimisme et son détachement. La vigilance et la protection constantes de son frère aîné Henry l'ont conduit à remettre en question sa propre capacité à survivre, et le poussent à apporter son aide dès qu'il le peut. Malgré le monde désolé qui l'entoure, Sam retrouve parfois l'innocence de son jeune âge et connait des moments de joie, tantôt face à un jouet qu'il convoite, tantôt en faisant le pitre.",
    },
    {
      id: 5,
      name: 'MARLENE',
      modal: 'marlene',
      pictOne: '/assets/pict/characters/Marlene.jpg',
      pictTwo: '/assets/pict/characters/Marlene(2).jpg',
      story:
        "Fervente membre des Lucioles, Marlene se battait en première ligne pour renverser la domination militaire dans les zones de quarantaine. Malgré son passé au service de la rébellion, elle reste une femme douce et à l'écoute des autres. Sa carrière dans le domaine médical a nourri sa conviction de l'importance de sauver l'humanité, une cause à laquelle elle se consacrera, quel qu'en soit le prix.",
    },
    {
      id: 6,
      name: 'DAVID',
      modal: 'david',
      pictOne: '/assets/pict/characters/David.jpg',
      pictTwo: '/assets/pict/characters/David(2).jpg',
      story:
        "Quand Ellie rencontre David pour la première fois, il se montre à la fois réservé et amical, malgré sa silhouette sombre et décharnée. C'est un meneur charismatique qui peut compter sur la loyauté de son groupe. Derrière sa philosophie d'apparence pacifiste, David cache une part d'ombre.",
    },
    {
      id: 7,
      name: 'TOMMY',
      modal: 'tommy',
      pictOne: '/assets/pict/characters/Tommy.jpg',
      pictTwo: '/assets/pict/characters/Tommy(2).jpg',
      story:
        "S'il partage la rudesse et le courage de son frère Joel, Tommy se démarque par sa personnalité impulsive, généreuse et optimiste. Après avoir combattu aux côtés des Lucioles, il rencontre sa future femme et sa communauté à Jackson, dans le Wyoming. Malgré les circonstances, cette nouvelle perspective le conduit à aspirer désormais à une vie riche et apaisée.",
    },
    {
      id: 8,
      name: 'RILEY',
      modal: 'riley',
      pictOne: '/assets/pict/characters/Riley.jpg',
      pictTwo: '/assets/pict/characters/Riley(2).jpg',
      story:
        "Nous faisons la connaissance de Riley, une adolescente âgée de 16 ans, dans The Last of Us: Left Behind. Riley est une jeune fille généreuse et résolument indépendante, mais la dure réalité du monde qui l'entoure lui a aussi appris à lutter par tous les moyens pour assurer sa survie. Si elle fait preuve de méfiance envers les personnes qu'elle ne connait pas, elle révèle un caractère bienveillant et sociable aux côtés de ceux en qui elle a confiance, et en particulier d'Ellie, sa meilleure amie.",
    },
  ];

  secondarysPart2 = [
    {
      id: 1,
      name: 'DINA',
      modal: 'dina',
      pictOne: '/assets/pict/characters/Dina.jpg',
      pictTwo: '/assets/pict/characters/Dina(2).jpg',
      story:
        "Dina est la meilleure amie et la confidente d'Ellie. C'est une jeune femme optimiste au caractère bien trempé. Tout comme Ellie, elle a perdu ses parents à un jeune âge et a été contrainte d'apprendre à survivre seule et à être autonome. Son sens moral inébranlable et sa nature enjouée font ressortir le meilleur d'Ellie.",
    },
    {
      id: 2,
      name: 'JESSE',
      modal: 'jesse',
      pictOne: '/assets/pict/characters/Jess.jpg',
      pictTwo: '/assets/pict/characters/Jess(2).jpg',
      story:
        'Jesse est un meneur naturel appartenant à la communauté de Jackson et possède un sens moral à toute épreuve. Il est animé par le désir de protéger les siens, dont Ellie et Dina. Son expérience au combat et sa nature de meneur en font un patrouilleur hors pair.',
    },
    {
      id: 3,
      name: 'LEV',
      modal: 'lev',
      pictOne: '/assets/pict/characters/Lev.jpg',
      pictTwo: '/assets/pict/characters/Lev(2).jpg',
      story:
        "Malgré les risques que comporte sa décision d'exprimer sa vraie nature au sein de sa communauté séraphite, Lev trace son propre son chemin et s'entraîne pour devenir un combattant aguerri. Il est loyal, rigoureux et fidèle à ses principes. Autrefois coupé de l'extérieur, sa vision du monde change considérablement suite à sa rencontre avec Abby.",
    },
    {
      id: 4,
      name: 'YARA',
      modal: 'yara',
      pictOne: '/assets/pict/characters/Yara.jpg',
      pictTwo: '/assets/pict/characters/Yara(2).jpg',
      story:
        "Fille aînée d'une fondamentaliste séraphite, Yara semble animée par une foi aveugle. Ce n'est qu'après sa rencontre avec Abby qu'elle trouve le courage de se battre pour ses propres croyances et de veiller sur son jeune frère, Lev.",
    },
  ];

  showCharacters(character: string) {
    this.present = character;
  }

  ngOnInit(): void {}
}
