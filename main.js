document.addEventListener('DOMContentLoaded', function() {
  // TABLEAU "gamesTlou"
  const gamesTlou = [
    {
      src: "/assets/picts/theLastOfUsPart1.jpeg",
      wallpaper: "/assets/picts/theLastOfUsPart1Menu.jpg",
      background: "/assets/picts/theLastOfUsPart1.jpeg",
      firstPict: "/assets/picts/theLastOfUsPart1Pict1.jpeg",
      secondPict: "/assets/picts/theLastOfUsPart1Pict2.jpeg",
      thirdPict: "/assets/picts/theLastOfUsPart1Pict3.jpeg",
      fourPict: "/assets/picts/theLastOfUsPart1Pict4.jpeg",
      story: "Dans un monde dévasté où se mêlent infectés et survivants endurcis, Joel, un protagoniste désabusé, est engagé pour faire sortir Ellie, 14 ans, immunisé contre le cordyceps, issue d'une zone de quarantaine militaire. Mais ce qui devait être une simple mission de routine se transforme vite en un dangereux périple à travers le pays.",
      buy: "https://www.playstation.com/fr-fr/games/the-last-of-us-part-i/",
      site: "https://thelastofus.fandom.com/fr/wiki/The_Last_of_Us",

    },
    {
      src: "/assets/picts/theLastOfUsPart2.jpeg",
      wallpaper: "/assets/picts/theLastOfUsPart2Menu.jpg",
      background: "/assets/picts/theLastOfUsPart2.jpeg",
      firstPict: "/assets/picts/theLastOfUsPart2Pict1.jpg",
      secondPict: "/assets/picts/theLastOfUsPart2Pict2.jpg",
      thirdPict: "/assets/picts/theLastOfUsPart2Pict3.png",
      fourPict: "/assets/picts/theLastOfUsPart2Pict4.jpg",
      story: "Cinq ans après leur voyage périlleux à travers une Amérique ravagée par une pandémie, Ellie et Joel ont vécu tranquillement dans la ville de Jackson. Cependant, un événement violent vient perturber cette paix, incitant Ellie à se lancer dans une quête de justice pour enfin tourner la page.",
      buy: "https://www.playstation.com/fr-fr/games/the-last-of-us-part-ii-remastered/",
      site: "https://thelastofus.fandom.com/fr/wiki/The_Last_of_Us_Part_II",
    }
  ];

  // SELECT ELEMENT
  const body = document.getElementById('container');
  const listGames = document.querySelector('.listGames');
  const show = document.querySelector('.containGame');
  const logo = document.getElementById('logo');
  const info = document.querySelector('.infoGame');
  const btn = document.getElementById('btnShowGames');
  const pictPresent = document.getElementById('pictPresent');
  const firstPict = document.getElementById('first');
  const secondPict = document.getElementById('second');
  const thirdPict = document.getElementById('third');
  const fourPict = document.getElementById('four');


  btn.addEventListener('click', function () {
    // Pour chaque élément du tableau "gamesTlou" :
    gamesTlou.forEach(game => {
      const img = document.createElement('img');
      img.src = game.src;
      img.classList.add("img");
      listGames.appendChild(img);
      
      show.style.display = "block";
      btn.style.display = "none";
      logo.style.display = "none";
        
      // Écouteur d'événement pour les img (lorsque la souris clique sur l'une des images)
      img.addEventListener('click', function () {
        info.style.visibility = "visible";
        listGames.classList.add('positionListGames');
        img.classList.add('size')

        pictPresent.src = game.background;
        firstPict.src = game.firstPict;
        secondPict.src = game.secondPict;
        thirdPict.src = game.thirdPict;
        fourPict.src = game.fourPict;

        body.style.backgroundImage = `url('${game.wallpaper}')`;

        const story = document.querySelector('.story');
        const site = document.getElementById('site');
        const buy = document.getElementById('buy');

        story.textContent = game.story;
        site.href = game.site;
        buy.href = game.buy;
      });

      // Écouteur d'événement pour les img (lorsque la souris se dirige vers les images)
      img.addEventListener('mouseenter', function () {
        img.style.border = "2px solid azure";
        body.style.backgroundImage = `url('${game.wallpaper}')`;
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center";
      });

      // Écouteur d'événement pour les img (lorsque la souris ne se dirige pas vers les images)
      img.addEventListener('mouseleave', function () {
        img.style.border = "none";
      });
    });
  });

  // Écouteurs d'événements pour les images .listPict
  firstPict.addEventListener('click', function() {
    pictPresent.src = firstPict.src;
  });

  secondPict.addEventListener('click', function() {
    pictPresent.src = secondPict.src;
  });

  thirdPict.addEventListener('click', function() {
    pictPresent.src = thirdPict.src;
  });

  fourPict.addEventListener('click', function() {
    pictPresent.src = fourPict.src;
  });
});
