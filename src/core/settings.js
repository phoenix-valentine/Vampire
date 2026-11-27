// Every tunable number in the game. Distances are world units (one unit is about one CSS pixel
// on an upright phone), times are seconds, speeds are units per second.

export const MODES = ["slaughter", "feed", "hunt"];

export const SETTINGS = {
  stepsPerSecond: 60,

  arena: {
    w: 900,
    h: 1200,
    gateWidth: 150,
  },

  view: {
    width: 360, // world units across an upright phone
    heightWide: 640, // world units down on a wide screen
    uprightAspect: 0.8,
    playerScreenY: 0.46, // the vampire sits a little above the middle, clear of the thumb
    dprCap: 2,
  },

  run: {
    seconds: 180,
    softStartSeconds: 45,
    softStartDamage: 0.6,
  },

  fair: {
    minWarning: 0.3,
  },

  player: {
    radius: 11,
    speed: 160,
    accel: 18, // how fast the vampire reaches the wanted speed; higher is snappier
    startBlood: 70,
    maxBlood: 100,
    hitInvuln: 0.5,
    hitCapShare: 0.3,
    levelDamage: 0.1, // claws grow this much per level
    levelDamageCap: 12,
    safeAfterCard: 0.6,
    lowBlood: 0.3,
  },

  claws: {
    reach: 44,
    arcDeg: 110,
    interval: 0.7,
    damage: 10,
    knock: 170,
  },

  blood: {
    healPerUnit: 2.5,
    dropLife: 14,
    collectRadius: 16,
    pullRadius: 34, // shorter than the claws: the vampire has to step toward the dead to drink
    pullSpeed: 110,
    pullAccel: 1300,
    popSpeed: 95,
    popTime: 0.14,
    dropKick: 12, // how far along the blow the blood lands
    drinkRadius: 115, // Feed: how far the vampire can draw blood from bodies
    drinkStillDelay: 0.12, // Feed: how long the vampire must be still before blood flows
    drinkRate: 7, // Feed: units per second out of each body
    poolLife: 14, // Feed: how long a body keeps its blood
    streamSpeed: 520,
  },

  xp: {
    first: 5,
    step: 6, // level n needs first + step * (n - 1) units of blood
  },

  scaling: {
    hpPer30s: 0.12,
    damagePerMin: 0.25,
  },

  humans: {
    peasant: {
      radius: 9,
      hp: 10,
      speed: 106,
      walk: 46,
      blood: 1,
      reach: 16,
      damage: 9,
      windup: 0.32,
      strikeSlack: 8,
      recover: 0.45,
      cooldown: 0.9,
      sight: 140, // Hunt: how close the vampire gets before a townsperson sees it
      hear: 150, // Hunt: how far a kill is noticed
      fleeSpeed: 108,
    },
    watchman: {
      radius: 11,
      hp: 32,
      speed: 92,
      walk: 60,
      blood: 1,
      reach: 20,
      damage: 12,
      windup: 0.4,
      strikeSlack: 10,
      recover: 0.5,
      cooldown: 1.1,
    },
    archer: {
      radius: 9,
      hp: 12,
      speed: 78,
      walk: 60,
      blood: 2,
      near: 150,
      far: 225,
      fireRange: 270,
      aim: 0.75,
      lockAt: 0.7, // the aim line stops following the vampire after this share of the aim time
      damage: 10,
      shotSpeed: 300,
      shotLife: 1.3,
      shotRadius: 4,
      cooldown: 2.6,
    },
  },

  limits: {
    corpses: 90,
    drops: 220,
    humans: 110,
  },

  modes: {
    slaughter: {
      label: "Slaughter",
      line: "Cut them down. Walk into the blood.",
      hint: "Drag to move. Walk into the blood.",
      bloodRule: "drops",
      healMul: 1,
      hunger: 0,
      hungerDelay: 0,
      stages: "mob",
    },
    feed: {
      label: "Feed",
      line: "Stand still to drink. Move to live.",
      hint: "Lift your thumb near the bodies to drink.",
      bloodRule: "pools",
      healMul: 1.6,
      hunger: 1.6,
      hungerDelay: 12,
      clawsOnlyMoving: true, // Feed: moving is for killing, standing is for drinking
      stages: "mob",
    },
    hunt: {
      label: "Hunt",
      line: "Let no one escape. Survivors bring the hunters.",
      hint: "Run them down before they reach a gate.",
      bloodRule: "bite",
      healMul: 1.6,
      hunger: 2.4,
      hungerDelay: 6,
      stages: "hunt",
      hunterDelay: 4.5, // seconds between an escape and the hunter it fetches
      archerShare: 0.3,
      archersFrom: 40,
      alarmSteps: [5, 12, 20],
      alarmSquads: [4, 6, 9],
      alarmNames: ["THE BELL RINGS", "THE WATCH TURNS OUT", "THE WHOLE TOWN IS AWAKE"],
    },
  },

  // Push, peak, breather. mix is the share of peasant, watchman, archer.
  stages: {
    mob: [
      { until: 20, rate: 1.4, cap: 18, gates: 2, mix: [1, 0, 0] },
      { until: 45, rate: 2.4, cap: 38, gates: 2, mix: [0.9, 0.1, 0] },
      { until: 62, rate: 3.8, cap: 58, gates: 3, mix: [0.7, 0.1, 0.2], banner: "THE WATCH ARRIVES" },
      { until: 74, rate: 0.7, cap: 58, gates: 1, mix: [1, 0, 0] },
      { until: 108, rate: 3.6, cap: 78, gates: 3, mix: [0.65, 0.2, 0.15] },
      { until: 128, rate: 5.4, cap: 100, gates: 4, mix: [0.7, 0.18, 0.12], banner: "THE MOB SURGES" },
      { until: 140, rate: 0.9, cap: 100, gates: 2, mix: [0.8, 0.2, 0] },
      { until: 180, rate: 6.4, cap: 110, gates: 4, mix: [0.6, 0.22, 0.18], banner: "THE WHOLE TOWN" },
    ],
    hunt: [
      { until: 30, groupEvery: 5.5, groupSize: 4, patrolEvery: 0, patrol: [0, 0], cap: 26 },
      { until: 70, groupEvery: 4.5, groupSize: 5, patrolEvery: 16, patrol: [1, 0], cap: 40, banner: "THE WATCH PATROLS" },
      { until: 120, groupEvery: 3.8, groupSize: 6, patrolEvery: 12, patrol: [1, 1], cap: 60 },
      { until: 180, groupEvery: 3.0, groupSize: 7, patrolEvery: 9, patrol: [2, 1], cap: 80, banner: "THE LAST HOUR BEFORE DAWN" },
    ],
  },

  // Each power has three levels. text[n] says what level n + 1 gives.
  powers: {
    long: {
      name: "Longer Claws",
      max: 3,
      reach: 0.3,
      arc: 0.15,
      text: ["Claws reach further and wider", "Claws reach further still", "Claws reach across a crowd"],
    },
    frenzy: {
      name: "Frenzy",
      max: 3,
      interval: 0.82,
      text: ["Claws swing faster", "Claws swing faster still", "Claws never rest"],
    },
    bats: {
      name: "Bat Swarm",
      max: 3,
      count: [2, 3, 4],
      radius: 58,
      spin: 3.2,
      damage: 6,
      knock: 70,
      gap: 0.45,
      text: ["Two bats circle you and cut", "A third bat joins", "A fourth bat joins"],
    },
    lance: {
      name: "Blood Lance",
      max: 3,
      interval: [1.4, 1.1, 0.85],
      pierce: [2, 3, 4],
      range: 240,
      speed: 430,
      damage: 12,
      life: 0.7,
      text: ["A shard of blood flies at the nearest human", "The shard flies more often", "The shard flies constantly"],
    },
    nova: {
      name: "Blood Nova",
      max: 3,
      interval: [8, 6, 4.5],
      radius: 92,
      damage: 14,
      knock: 260,
      text: ["A burst around you every 8 seconds", "The burst comes every 6 seconds", "The burst comes every 4.5 seconds"],
    },
    gaze: {
      name: "Hypnotic Gaze",
      max: 3,
      radius: [80, 105, 130],
      slow: [0.3, 0.4, 0.5],
      text: ["Humans near you move slower", "Your gaze reaches further", "Your gaze holds them"],
    },
    mist: {
      name: "Mist Form",
      max: 3,
      duration: [0.7, 1.0, 1.3],
      cooldown: [8, 7, 6],
      text: ["A hit turns you to mist for a moment", "The mist lasts longer", "The mist lasts longer still"],
    },
    swift: {
      name: "Swift",
      max: 3,
      speed: 0.09,
      text: ["You move faster", "You move faster still", "Nothing outruns you"],
    },
    thick: {
      name: "Thick Blood",
      max: 3,
      max_blood: 25,
      text: ["Hold more blood, and gain some now", "Hold more blood, and gain some now", "Hold more blood, and gain some now"],
    },
  },

  gorge: {
    name: "Gorge",
    text: "Hold a little more blood, and gain some now",
    max_blood: 10,
  },

  feel: {
    gibOverkill: 0.6, // a killing blow this far past the human's health tears the body apart
    hitStopHurt: 0.09,
    hitStopKillTough: 0.05,
    hitStopLevel: 0.18,
    shakeMax: 6,
    shakeDecay: 2.0,
    shakeHurt: 0.45,
    shakeNova: 0.25,
    particleCap: 300,
    stainCap: 150,
    stainLife: 22,
    hintSeconds: 5,
    bannerBase: 1.8,
    bannerPerChar: 0.05,
    cardLock: 0.4,
  },

  input: {
    deadZone: 7,
    maxRadius: 50,
    fullAt: 34,
    tapMs: 220,
    tapTravel: 12,
    flickSpeed: 900,
  },

  audio: {
    master: 0.55,
    maxVoices: 12,
  },
};
