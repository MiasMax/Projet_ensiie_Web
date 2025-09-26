export const silksongData = {
  characters: [
    {
      id: 1,
      name: "Hornet",
      title: "Protagoniste et Princesse Protectrice",
      image: "🕷️",
      description: "Héroïne jouable, princesse-protectrice de Hallownest, maîtrisant la soie et l'agilité.",
      abilities: ["Toile de soie", "Aiguilles", "Arts de la soie"],
      role: "Protagoniste"
    },
    {
      id: 2,
      name: "Shakra",
      title: "Reine des Tisseuses",
      image: "👑",
      description: "Souveraine mystérieuse du royaume de la soie.",
      abilities: ["Contrôle de la soie", "Commandement"],
      role: "PNJ important"
    },
    {
      id: 3,
      name: "Lace",
      title: "Chevalière Mystérieuse",
      image: "⚔️",
      description: "Chevalière énigmatique rencontrée dans les royaumes supérieurs.",
      abilities: ["Epée rapide", "Déplacements aériens"],
      role: "Boss/Potentiel allié"
    }
  ],

  locations: [
    {
      id: 1,
      name: "Cité de la Soie",
      image: "🏰",
      description: "Capitale brillante du royaume, centre du pouvoir de la soie.",
      enemies: ["Gardes de soie", "Tisseurs"],
      secrets: "Nombreux passages cachés dans les toiles"
    },
    {
      id: 2,
      name: "Forêt de Corail",
      image: "🌳",
      description: "Forêt étrange où le corail pousse comme des arbres.",
      enemies: ["Insectes coralliens", "Prédateurs camouflés"],
      secrets: "Arbres chantants mystérieux"
    },
    {
      id: 3,
      name: "Mines de Givre",
      image: "⛏️",
      description: "Mines abandonnées où la glace éternelle préserve d'anciens secrets.",
      enemies: ["Mineurs gelés", "Cristaux animés"],
      secrets: "Veines de cristal anciennes"
    }
  ],

  bosses: [
    {
      id: 1,
      name: "Le Tisseur d'Argent",
      image: "🕸️",
      description: "Garde ancien des secrets de la soie, maître des illusions.",
      difficulty: "Difficile",
      rewards: ["Art de la soie : Mur d'illusions", "Fragment de résonance"]
    },
    {
      id: 2,
      name: "Corail Vivant",
      image: "🐚",
      description: "Entité colossale faite de corail animé, gardienne de la forêt.",
      difficulty: "Moyen",
      rewards: ["Aiguille de corail", "Capacité : Marée montante"]
    }
  ],

  items: [
    {
      id: 1,
      name: "Aiguille de Hornet",
      type: "Arme",
      image: "🪡",
      description: "Arme signature de Hornet, rapide et précise.",
      effects: ["Dégats moyens", "Attaques rapides"]
    },
    {
      id: 2,
      name: "Bobine de Soie",
      type: "Consommable",
      image: "🧵",
      description: "Soie pure utilisée pour les arts mystiques.",
      effects: ["Soigne 3 points de vie", "Restaure de la soie"]
    }
  ]
};