FrontEndBox-Less
===========
> FrontEndBox est une coquille HTML/CSS/JS servant de base au développement front des sites


## Prérequis
> Avant de commencer à travailler avec cette coquille, il est nécessaire d'avoir quelques outils et leurs dépendances installés sur votre ordinateur

* [LESS](http://lesscss.org/#)
* [Grunt](http://gruntjs.com/getting-started)
* [Bower](http://bower.io/)

## Installation
> Voici les différentes étapes à effectuer pour récupérer le projet et l'installer sur votre poste

1. Récupérer le dépot distant dans un de vos répertoires

   `git clone git@github.com:MaevaDbg/FrontEndBox-Less.git`
2. Définir les librairies à utiliser dans le fichier bower.json

3. Lancer un `bower install` en ligne de commande pour installer les différentes librairies dans le dossier librairies/

4. Ensuite il faut modifier le fichier Gruntfile.js dans le dossier _integration pour pouvoir compiler les fichiers des différentes librairies que vous avez importées.

   Ajouter les chemins relatifs vers les fichiers javascript dans la variable jsSrc

   ```
   //Liste des fichiers js importés
   var jsSrc = [
           'librairies/jquery/dist/jquery.min.js',
           'librairies/bootstrap/js/dropdown.js',
           'librairies/bootstrap/js/button.js',
           'librairies/bootstrap/js/collapse.js',
           'librairies/bootstrap/js/carousel.js',
           'scripts/scripts.js'
   ```
5. Lancer un `npm install` depuis le dossier _integration

6. Lancer `grunt`


## Librairies

* [Jquery](https://github.com/jquery/jquery)
* [Bootstrap](http://getbootstrap.com/)

## Ressources

* [http://www.alsacreations.com/tuto/lire/1609-bower-pour-les-nuls.html](http://www.alsacreations.com/tuto/lire/1609-bower-pour-les-nuls.html)
* [http://www.grafikart.fr/tutoriels/javascript/bower-474](http://www.grafikart.fr/tutoriels/javascript/bower-474)
* [http://www.k3z.fr/blog/post/5/automatisation-bower-grunt](http://www.k3z.fr/blog/post/5/automatisation-bower-grunt)
* [http://scotch.io/bar-talk/a-simple-guide-to-getting-started-with-grunt](http://scotch.io/bar-talk/a-simple-guide-to-getting-started-with-grunt)
