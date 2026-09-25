# 6. Chapitre 2 : Méthodologie, Matériel et Architecture

La section méthodologique doit répondre à la question fondamentale : **« Comment répliquer exactement ce travail ? »** (Principe de reproductibilité).

## 6.1. Présentation des Outils et Matériels
* **Règle de sobriété** : Ne pas insérer de grands logos décoratifs ni de longues descriptions génériques sur des outils standards (Python, VS Code, Google Colab). Mentionner les outils standard et leur version utilisée est suffisant et laisse la place pour présenter les outils principaux du travail.
* **Format recommandé** : Utiliser un **tableau synthétique à 3 colonnes** :

| Outil / Framework | Version & Usage spécifique | Référence / Lien |
| :--- | :--- | :--- |
| `PyTorch` | v2.1.0 — Implémentation de la couche d'attention tonale | [PyTorch Docs](https://pytorch.org) |
| `Wav2Vec2` | facebook/wav2vec2-base — Encodage acoustique initial | [HuggingFace](https://huggingface.co) |
| `OpenStreetMaps` | API v0.6 — Extraction des tracés routiers | [OSM API](https://openstreetmap.org) |

* **Pour les masters** : Justifier le choix des outils est important et témoigne du fait que ce ne sont pas des choix arbitraires mais réfléchis. Là où en licence on peut relativement se passer de ce détail parce que les outils peuvent être imposés.

## 6.2. Subdivisions de la Méthodologie (3 Parties)
1. **Schéma Synoptique Général** : Un diagramme d'architecture global illustrant le flux complet des données.
2. **Conception Technique / Modélisation** :
   * *Pour les projets GL* : Mettre l'accent sur l'analyse et la conception à travers les divers diagrammes.
   * *Pour les projets IA* : Distinguer clairement la **conception/entraînement des modèles** de la **conception de l'application/interface**. Et si votre projet implique de mettre à disposition des interfaces, bien présenter aussi leur analyse.
   * Présentation des données, du prétraitement et de la répartition Train / Validation / Test.
3. **Métrique d'Évaluation** : Définition formelle des équations de mesure (ex. : *Précision, Rappel, F1-Score, Loss*) et interprétation des valeurs (ex. : explication de la signification physique d'un score de 0 vs 1, 1 étant le meilleur).
