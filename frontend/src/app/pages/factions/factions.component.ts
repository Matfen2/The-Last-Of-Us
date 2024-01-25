import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrl: './factions.component.css',
})
export class FactionsComponent implements OnInit {
  listFactions = [
    {
      id: 1,
      pict: '/assets/pict/factions/Fedra.png',
      name: 'FEDRA',
      modal: 'fedra',
      group: '/assets/pict/factions/FedraGroup.jpeg',
      what: "L'Agence Fédérale de Gestion des Catastrophes aussi appellée FEDRA, est une faction de fond antagoniste dans The Last of Us. La FEDRA semble être plus ou moins amalgamé avec l'armée américaine en tant qu'autorité au pouvoir des zones de quarantaine. Les officiels FEDRA réels ne sont pas rencontrés pendant le jeu, mais on voit diverses personnes travaillant sous leurs auspices, tels que des soldats et des travailleurs civils repêchés. FEDRA est l'un des derniers vestiges du gouvernement des Etats-Unis avant l'épidémie, aux côtés du Département de la Défense et du Centre de Contrôle des Maladies..",
    },
    {
      id: 2,
      pict: '/assets/pict/factions/Firefly.png',
      name: 'Luciole',
      modal: 'firefly',
      group: '/assets/pict/factions/FireflyGroup.jpeg',
      what: "Les Lucioles sont une organisation de survivants de l'épidemie de Cordyceps. Leur motivation principale est leur croyance en l'existence d'un traitement contre le virus. En tant que milice populaire, elles se rebellent contre la loi martiale, et ce faisant, luttent contre l'armée par des attentats et embuscades. Leur emblème représente une luciole, au même titre que le nom de leur faction.",
    },
    {
      id: 3,
      pict: '/assets/pict/factions/Hunters.jpeg',
      name: 'Chasseurs',
      modal: 'hunters',
      group: '/assets/pict/factions/HuntersGroup.jpeg',
      what: 'Les Chasseurs sont des survivants hostiles dans The Last of Us ainsi nommé en raison de leur tendance à tuer brutalement toute personne entrant sur leur territoire (qualifié par les chasseurs de «touristes») afin de voler leurs vêtements, leurs provisions et leur nourriture. Joel et Ellie les rencontrent à Pittsburgh.',
    },
    {
      id: 4,
      pict: '/assets/pict/factions/Seraphites.jpeg',
      name: 'Séraphites',
      modal: 'seraphites',
      group: '/assets/pict/factions/SeraphitesGroup.jpeg',
      what: "Les Séraphites, aussi appelés les Scars, sont une faction religieuse dans The Last of Us Part II. Leur objectif commun est d'instaurer un monde meilleur que celui d'avant l'épidémie, croyant que celle-ci est un châtiment divin",
    },
    {
      id: 5,
      pict: '/assets/pict/factions/WLF.jpeg',
      name: 'WOLF',
      modal: 'wolf',
      group: '/assets/pict/factions/WLFGroup.jpeg',
      what: 'Le Front de Libération de Washington (en anglais : Washington Liberation Front ou WLF) ou Wolfs est une faction militarisée située principalement dans la ville de Seattle. Ce groupe armé est pour la première fois rencontré dans The Last of Us Part II.',
    },
  ];

  ngOnInit(): void {}
}
