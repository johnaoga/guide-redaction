# 3. Le Résumé et l'Abstract : L'Architecture en 5 Piliers

Le résumé (et sa traduction *Abstract*) doit suivre une structure rigoureuse en **5 parties distinctes** combinées en un paragraphe fluide... Si vous savez ce que vous faites vous pouvez aller en impro.

## La Structure des 5 Piliers :
1. **Le Constat** : L'observation du terrain ou le contexte général.
2. **Le Problème** : L'écart, la limitation ou la vulnérabilité identifiée.
3. **L'Objectif** : La réponse directe apportée au problème énoncé.
4. **La Méthodologie** : L'approche, la modélisation et la démarche de réalisation.
5. **Les Résultats** : Les livrables concrets et les métriques quantifiées obtenues.

## 3.1. Exemple de Formulation — Niveau Licence (Projet Développement / Sécurité Web)

* **Structure** :
  * *Constat* : La multiplication des applications web s'accroît avec l'essor des LLMs mais elles sont très peu soignées d'un point de sécuritaire multipliant l'exposition aux vulnérabilités logicielles.
  * *Problème* : Les développeurs juniors et les novices générant juste du code manquent souvent de reculs nécessaire et d'outils automatisés simples pour détecter et corriger les failles avant la mise en production.
  * *Objectif* : Concevoir une plateforme d'analyse statique appuyée sur les bases de données CVE.
  * *Méthodologie* : Modélisation UML, intégration de règles de détection et développement d'un tableau de bord en Django.
  * *Résultats* : Une application fonctionnelle capable de détecter 85% des failles courantes avec un temps d'analyse inférieur à 10 secondes par fichier.

### Texte Rédigé (Licence) :
> *« Aujourd'hui, le développement rapide d'applications web expose de nombreuses structures à des risques majeurs de cybersécurité. L'absence d'outils d'analyse accessibles aux développeurs novices rend l'identification précoce des vulnérabilités complexe et coûteuse. Pour répondre à cette problématique, ce travail a pour objectif de concevoir et d'implémenter un outil d'analyse statique de code basé sur les référentiels CVE. Notre démarche méthodologique s'articule autour de la modélisation UML des règles d'audit, suivie du développement d'une plateforme web sous Django. À l'issue du projet, la plateforme développée permet de détecter avec précision les principales failles logicielles et de proposer des correctifs automatisés réduisant le temps d'audit de 40 %. »*

## 3.2. Exemple de Formulation — Niveau Master (Recherche IA / Langues Tonales)

* **Structure** :
  * *Constat* : Les modèles de langue actuels sont principalement optimisés pour les langues indo-européennes.
  * *Problème* : Ces architectures échouent à capturer la dimension sémantique des variations tonales dans les langues africaines telles que le Fongbé.
  * *Objectif* : Développer une architecture d'embedding intégrant explicitement les caractéristiques tonales pour améliorer le traitement automatique.
  * *Méthodologie* : Conception d'un module d'encodage tonal, intégration aux modèles Wav2Vec2/FastText, et protocole d'évaluation sur corpus annoté.
  * *Résultats* : Amélioration de 14,2 % du score de similarité sémantique et discrimination exacte des homographes tonaux.

### Texte Rédigé (Master) :
> *« Les modèles d'intelligence artificielle actuels, principalement conçus pour des langues non tonales comme l'anglais ou le français, peinent à transposer leurs performances aux langues africaines telles que le Fongbé. Cette limitation s'explique par le fait que les variations tonales portent une charge sémantique cruciale, absente des représentations vectorielles traditionnelles. Afin de combler cet écart, cette recherche vise à concevoir une architecture d'embedding spécialisée, capable de capturer conjointement les propriétés phonétiques et tonales du Fongbé. Notre méthodologie repose sur le développement d'un mécanisme de biais tonal intégré à un réseau neuronal, évalué à travers un protocole expérimental rigoureux sur un corpus contrôlé. Les résultats démontrent une augmentation de 14,2 % de la précision sur les tâches de discrimination sémantique par rapport aux modèles de base, tout en établissant un nouveau banc d'essai pour les langues à faibles ressources. »*
