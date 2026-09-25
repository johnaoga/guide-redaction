# 7. Chapitre 3 : Résultats, Expérimentations et Discussion Critique

## 7.1. Protocole Expérimental et Environnement
Avant de présenter les courbes et chiffres, il est indispensable d'expliciter l'environnement de test pour garantir la reproductibilité :
* **Spécifications matérielles** : Processeur (CPU), Carte graphique (GPU), mémoire RAM.
* **Caractéristiques finales des bases de données** : Nombre d'échantillons, nombre de lignes/colonnes, répartition des classes.

## 7.2. Présentation des Résultats
* **Séquencement** :
  1. Résultats quantitatifs et performances des modèles (métriques, courbes d'apprentissage).
  2. Validation applicative à travers des **captures d'écran fonctionnelles** soigneusement commentées (ex. : expliquer le rôle des boutons et du flux utilisateur).

## 7.3. Discussion et Matrice Comparative
La discussion ne se contente pas de répéter les chiffres ; elle analyse la portée des résultats au regard de l'état de l'art présenté au Chapitre 1.

* **Pour les licences** : un tableau comparatif de ce genre peut être utile.

### Matrice Comparative (Tableau de Validation) :

| Critères / Fonctionnalités | Solution A (Existant) | Solution B (Existant) | Notre Approche |
| :--- | :---: | :---: | :---: |
| Traitement natif des tons | Non | Non | **Oui** |
| Détection automatique des failles CVE | Oui | Non | **Oui** |
| Exécutable en local (Faible ressource) | Non | Oui | **Oui** |
| Interface adaptée aux non-experts | Non | Non | **Oui** |

* **Pour les masters** : une discussion proprement dite.
* **Analyse des limites propres** : Analyser en toute honnêteté les cas d'échec ou les fonctionnalités non entièrement couvertes par votre solution. Cela démontre la maturité scientifique de l'auteur et fonde les perspectives.
