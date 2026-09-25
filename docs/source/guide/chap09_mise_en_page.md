# 9. Mise en Page des Figures, Tableaux, Équations et Code

Un document scientifique est jugé sur sa précision visuelle et textuelle. Aucune illustration ne doit être laissée sans explication.

## 9.1. Les Règles d'Or d'Illustration
1. **Référencement obligatoire** : Toute figure ou tableau doit être explicitement cité dans le texte **avant** ou **immédiatement après** son apparition (*« Comme le montre la Figure 3.2... »*).
2. **Légendes autonomes** : Les titres et légendes doivent être traduits en français (*« Figure 3.1 — Courbe d'apprentissage... »* et non *« Figure 3.1 — Training loss »*).
3. **Explicitation complète** :
   * *Pour un graphique* : Décrire la signification des axes X et Y, des unités, des couleurs et des inflexions de courbe.
   * *Pour une équation* : Définir chaque variable, indice et symbole grec immédiatement sous l'équation.
   * *Pour un extrait de code (`Listing`)* : Expliquer le rôle des lignes majeures (ex. : *« La ligne 4 charge le modèle pré-entraîné... »*).

### Exemple d'Explicitation d'Équation :

$$\mathcal{L}_{\text{total}} = \alpha \cdot \mathcal{L}_{\text{CE}} + (1 - \alpha) \cdot \mathcal{L}_{\text{tonal}}$$

> *« Où $\mathcal{L}_{\text{total}}$ représente la perte globale du modèle, $\mathcal{L}_{\text{CE}}$ la perte d'entropie croisée standard, $\mathcal{L}_{\text{tonal}}$ la pénalité sur les erreurs de ton, et $\alpha \in [0, 1]$ un hyperparamètre de pondération ajusté expérimentalement à 0,7. »*
