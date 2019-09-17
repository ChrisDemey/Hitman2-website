# **Mon site Hitman**

Le lien du site : [https://chrisdemey.github.io/Hitman-site/](https://chrisdemey.github.io/Hitman-site/).

## **L'idée**
<p>Tout d'abord, je suis un grand fan des jeux Hitman, mais surtout de ceux qui sont sortis en 2016 (Hitman) et 2018 (Hitman 2). Et j'adore l'interface simpliste que les développeurs ont mis en place dans ces jeux.<br>
C'est-à-dire des couleurs vives (surtout dans Hitman 2) mais surout une interface et des menus minimalistes et très clairs pour la navigation.<br>
J'ai donc décidé de créer mon propre site qui référencera tout les jeux principaux de cette franchise qui existe depuis presque 20 ans!</p>
<p>Pour se faire j'ai décidé de faire la structure HTML avec Bootstrap, Avec dans l'idée de faire un One-page. Ce qui n'est pas sans rappeler le projet de groupe
<strong>Allezciné!</strong>.</p>

---

## **HTML (et le SASS)**
<p>Comme dis plus haut, je me suis mis dans l'idée de faire toute la structure avec Bootstrap.<br>
Alors voici comment je vais structurer tout ça:</p>

* Une menu hamburger fixe (dans un coin)
* Un background image fixe aussi.
* Plusieurs sections sur lesquelles les boutons du menu hamburger donneront accès directement:
    * Accueil (avec une phrase d'accroche)
    * Actualités (qui accueillera ue API)
    * Jeux (avec une sous-liste de la chronologie et des différents jeux)
    * Forums (qui renvoie sur les forums officiels des développeurs)
    * Social (qui renvoient sur les réseaux sociaux du jeu et des développeurs)

### **Accueil**
<p>Pour ce premier onglet, il suffit de se référer a la partie Javascript plus bas ;)</p>

### **Actualités**
<p>J'ai créé un slide avec 5 images, tout d'abord pour illustrer le slide, mais surtout pour voir ce que tout ça donne une fois animés.</p>
<p>Mon but ici sera d'utiliser une API afin d'afficher les 5 dernières actualités du site HITMAN2.<br>

_(En cours...)_</p>

### **Jeux**
<p>Le bouton <strong>Jeux</strong> en lui-même n'amène pas à une section du site mais affiche plutôt une sous-liste dans laquelle on peut accéder directement à une première section <em>chronologie</em>. Cette section affiche tout les jeux Hitman par ordre de sortie. J'ai fais à chaque fois une <em>card</em> par jeux, un <em>card-header</em> pour le nom, un <em>card-body</em> pour une image représentative, et enfin un <em>card-footer</em> pour l'année de sortie du jeu.<br>
L'idée était d'ajouter juste au-dessus des <em>card</em> 2 boutons afin de réorganiser l'ordre d'affichage des jeux: par dates de sorties et ordre chronologique suivant l'histoire. Mais en fait chaque jeux se situent à la même date que celle de leur sortie.</p>
<p>Ensuite viennnent les jeux en eux-mêmes et là aussi j'ai utilisé une card, mais de manière horizontale afin d'avoir l'affichage actuel, mais aussi pour gagner de l'espace!<br>
Sur chaque images j'ai ajouté un filtre avec un contraste au minimum. Et le `background-color` des titres en gris.<br>
Pourquoi? Tout simplement pour ajouter a chaque card un `filter: none` lorsqu'on les survole. De même pour les titres de jeux où j'ai ajouté un `background-color: rgb(255, 0, 98)`.</p>
<p>Et lorsqu'on clic sur une card d'un jeu, un modal apparaît et affiche uniquement le trailer du jeu correspondant.<br>

_(c'est en cours, mais je compte intégrer un affichage des fuseaux horaires de chaque destinations de chaque jeux correspondants)_</p>

### **Forums**
<p>Pas grand chose à expliquer ici... J'ai juste fais un <em>container-fluid</em> avec un background-color et centrer <strong>FORUMS</strong>.<br>
En cliquant dessus, on est amené sur les forums officiels du site <strong>Hitman 2</strong>.</p>

### **Social**
<p>Ici j'ai fais un <em>container</em> avec une image du jeu <strong>Hitman</strong> en guise de background. Puis j'y ai intégré les icônes de réseaux sociaux grâce a <strong>font-awesome</strong>.<br>
Et à ça j'ai ajouté un petit <em>hover</em> bien sympa avec une <em>transition (0.2s)</em> pour faire apparaitre chaque logo avec la couleur correspondante du site lorsqu'on les survole.<br>

_(À peaufiner point de vue du CSS)_</p>

## **Javascript**
<p>La partie (selon moi) la plus intéressante de tout mon site. Bon d'accord, la seule partie de back-end présente en fait...<br>
Mon idée de base a été de mettre un background-image fixe dans le body. Et lorsqu'on arrive sur le site, on voit très bien l'image en question avec marqués au milieu <strong>"MAKE THE WORLD YOUR WEAPON"</strong>, qui est le slogan de Hitman 2.<br>
Mais mon idée a évoluée pour qu'a chaque rafraîchissements de la page, l'image en question change. Et de là est venu une autre idée qui est d'ajouter (en-dessous du slogan) une phrase qui correspondrait au background affiché (dans la balise <strong>h3</strong> créé à cette effet).<br>
Bien mais maintenant il faut coder ces idées...</p>
<p>La partie aléatoire des images n'est pas si compliquée, en faisant un tableau et en y ajoutant du <em>math.floor</em>, le tour est joué! Mais maintenant place aux phrases rattachées a chaque images.<br>
Pour ça j'ai créé une variable vide <em>random_text</em> en y incorporant la même valeur que celle de chaque images. Ainsi pour l'image <em>bgblue1.jpg</em> qui a comme valeur <strong>0</strong> il y a la phrase <em>Don't get on fire</em> qui a aussi comme valeur <strong>0</strong>.<br>
Enfin avec un <em>innerHTML</em> et en utlisant le même principe que pour les images, le contenu de la balise <strong>h3</strong> change et affiche le texte correspodant à l'image d'arrière-plan. Et ce de manière totalemen aléatoire et propre!</p>
<p>Avec du travail et quelques conseils, je suis assez fier de cette partiede mon site. Ce n'est pas grand chose en terme de back-end mais au moins ça aura le mérite d'être propre. Même si il est encore possible d'optimiser mon code j'en suis sûr.</p>

