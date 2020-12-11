# Angular RSS Feed Reader

## A propos

Le projet consiste à créer une application permettant d'afficher, de rechercher et de consulter des flux RSS venant de différentes sources.
Pour ce faire, j'ai choisi d'utiliser principalement le framework Angular afin d'apprendre son fonctionnement par la même occasion.

## Technologies

- HTML / CSS
- Angular
- Bootstrap
- Git

## Capture d'écran

![exemple](https://image.noelshack.com/fichiers/2020/50/4/1607634564-app-img.png)


## Ressources Nécessaires

Afin que l'application fonctionne correctement, vous devez ajouter l'extension "Cross Domain - CORS" à votre navigateur Chrome.

## Déroulement du projet

### Par où commencer ?

Avant de débuter ce projet, je ne connaissais pas du tout les flux RSS. J'ai donc commencé par découvrir leur fonctionnement.
Ensuite, je me mis à étudier une solution en PHP.
Cependant, je finis par choisir de développer cette application en Angular.
En effet, j'ai fais ce choix afin de développer cette compétence qui me manquait et qui pourrait m'être bien utile dans le futur ...

### Angular 

J'ai donc commencé par apprendre Angular. Ce ne fut pas très compliqué, étant donné que je possédais déjà quelques connaissances en VueJS et React.
Une fois le framework installé et la structure de l'application mise en place, il m'a fallu trouver un moyen de lire des flux RSS.

### Les flux RSS

La première solution que j'ai trouvé me permettait de lire un seul flux.
En effet, dès que j'essayais de consulter un flux venant d'une autre origine, mon accès était automatiquement bloqué.
Néanmoins, après un long moment à implémenter de multiples solutions potentielles, je découvris qu'il était possible d'éviter ce bloquage à l'aide d'une extension Chrome.
Pour dire vrai, cette solution ne me convenait pas du tout, puisqu'elle demande à l'utilisateur davantage de manipulations pour fonctionner.
Cependant, par manque de temps, j'ai décidé de la conserver dans l'attente d'une meilleure solution.

### Fonctionalités

#### Ajouter un url

La première fonctionalité que j'ai ajouté était de pouvoir insérer un site à la liste déjà existante.
Pour ce faire, j'ai décidé de créer un formulaire afin que l'utilisateur puisse insérer dans la liste un nouvel URL et lui donner un nom.
Afin d'accéder à ce formulaire, j'ai mis en place une barre de navigation.

#### Supprimer un url

L'autre fonctionalité primordiale était de pouvoir supprimer un url déjà existant.
Pour cela, j'ai ajouté un bouton "Supprimer" à côté du nom donné à l'url une fois celui-ci affiché.

#### Alerter l'utilisateur

Une fois tout cela mis en place, il était nécessaire d'avertir l'utilisateur de l'aboutissement de ses requêtes.
Pour ce faire, j'ai rajouté divers messages d'alertes apparraissant à la suite des différentes actions de l'utilisateur.

### Idées d'amélioration

#### Mettre l'application en production

Evidemment, le fait de mettre l'application en production n'était pas une mauvaise idée.
Pour ce faire, je souhaitais utiliser Heroku comme à mon habitude. Etant sous Windows 10, j'utilise VirtualBox pour me faciliter la tâche.
Cependant, j'ai découvert que l'application ne voulait plus se lancer (problèmes de sécurité).
J'ai donc reessayé de faire fonctionner Heroku sous Windows 10, ce qui fut un échec avec le temps qu'il me restait.
Bref, mon envie d'acheter un Mac n'en fut que renforcé ...

#### Contourner l'autorisation CORS

Comme indiqué précédemment, pouvoir contourner l'autorisation CORS sans avoir d'extension Chrome améliorerait considérablement l'application.

#### Convertir l'url en fil RSS

Enfin, une autre amélioration utile serait de convertir les urls entrés par l'utilisaeur en fil RSS.
En effet, cela permettrait à l'utilisateur d'entrer directement l'url du site pour consulter son flux RSS au lieu de devoir trouver son fil RSS en amont.

![](https://img.shields.io/github/languages/count/kirito83/Stedy)
![](https://img.shields.io/github/languages/top/kirito83/Stedy)
![](https://img.shields.io/github/last-commit/kirito83/Stedy/master)
![](https://img.shields.io/github/followers/kirito83?label=follow&style=social)