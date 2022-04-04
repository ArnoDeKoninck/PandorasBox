import { levelSixSpells } from "../../spells/6thLevelSpells";
import { levelSevenSpells } from "../../spells/7thLevelSpells";

export const treasureTable_tier3 = [
  {
    name: "+2 Ammunition",
    description: "You have a +2 bonus to attack and damage rolls made with this piece of magic ammunition. Once it hits a target, the ammunition is no longer magical.",
    uses: Math.floor(Math.random() * (12 - 2) + 2),
    weight: "0.1kg each",
  },
  {
    name: "Ioun Stone (Protection)",
    description: "Upon attuning to it, you gain a +1 bonus to AC while this dusty rose prism orbits your head.",
    weight: "0.5kg",
  },
  {
    name: "Wand of the War Mage +1",
    description: "While you are holding this wand, you gain a +1 bonus to spell Attack rolls. In addition, you ignore half cover when making a spell Attack.",
    weight: "0.5kg",
  },
  {
    name: "6th Level Spell Scroll",
    spellScroll: true,
    variant: levelSixSpells,
  },
  {
    name: "Potion of Supreme Healing",
    description: "You regain 10d4 + 20 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
    weight: "1kg",
  },
  {
    name: "+1 Armor GAMECHANGING",
    description: "You have a +1 bonus to AC while wearing this armor. (Choose an armorset)",
  },
  {
    name: "+1 Shield GAMECHANGING",
    description: "While holding this shield, you have a +1 bonus to AC. This bonus is in addition to the shield's normal bonus to AC.",
    weight: "5kg",
  },
  {
    name: "Bracers of Archery",
    description: "While wearing these bracers, you have proficiency with the Longbow and Shortbow, and you gain a +2 bonus to Damage Rolls on Ranged Attacks made with such Weapons.",
    weight: "0.5kg",
  },
  {
    name: "Circlet of Blasting",
    description: "While wearing this circlet, you can use an action to cast the Scorching Ray spell with it. When you make the spell's attacks, you do so with an Attack bonus of +5. The circlet can't be used this way again until the next dawn.",
    weight: "0.25kg",
  },
  {
    name: "Chime of Opening",
    description:
      "This hollow metal tube measures about 1 foot long and weighs 1 pound. You can strike it as an action, pointing it at an object within 120 feet of you that can be opened, such as a door, lid, or lock. The chime issues a clear tone, and one lock or latch on the object opens unless the sound can't reach the object. If no locks or latches remain, the object itself opens. The chime can be used ten times. After the tenth time it cracks and becomes useless.",
    weight: "0.5kg",
  },
  {
    name: "Goggles of Night",
    description: "While wearing these dark lenses, you have darkvision out to a range of 60 feet. If you already have darkvision, wearing the goggles increases its range by 60 feet.",
    weight: "0.25kg",
  },
  {
    name: "Horseshoes of the Zephyr",
    description:
      "These iron horseshoes come in a set of four. While all four shoes are affixed to the hooves of a horse or similar creature, they allow the creature to move normally while floating 4 inches above the ground. This Effect means the creature can cross or stand above nonsolid or unstable surfaces, such as water or lava. The creature leaves no tracks and ignores Difficult Terrain. In addition, the creature can move at normal speed for up to 12 hours a day without suffering Exhaustion from a forced march.",
    weight: "1kg",
  },
  {
    name: "Javelin of Lightning",
    description:
      "This Javelin is a Magic Weapon. When you hurl it and speak its Command word, it transforms into a bolt of lightning, forming a line 5 feet wide that extends out from you to a target within 120 feet. Each creature in the line excluding you and the target must make a DC 13 Dexterity saving throw, taking 4d6 lightning damage on a failed save, and half as much damage on a successful one. The Lightning Bolt turns back into a Javelin when it reaches the target. Make a ranged weapon Attack against the target. On a hit, the target takes damage from the Javelin plus 4d6 lightning damage. The javelin's property can't be used again until the next dawn. In the meantime, the Javelin can still be used as a Magic Weapon.",
    weight: "1kg",
  },
  {
    name: "Mariner's Armor",
    description:
      "While wearing this armor, you have a swimming speed equal to your walking speed. In addition, whenever you start your turn underwater with 0 hit points, the armor causes you to rise 60 feet toward the surface. The armor is decorated with fish and shell motifs. (Choose an armortype)",
  },
  {
    name: "Necklace of Adaptation",
    description: "While wearing this necklace, you can breathe normally in any Environment, and you have advantage on Saving Throws made against harmful gases and vapors (such as Cloudkill and Stinking Cloud Effects, inhaled Poisons, and the breath Weapons of some dragons).",
    weight: "0.5kg",
  },
  {
    name: "Prayer Bead - Smiting",
    description: "This bead contains the branding smite spell that you can cast from it as a Bonus Action (using your spell save DC if a save is necessary). Once a magic bead's spell is cast, that bead can't be used again until the next dawn.",
  },
  {
    name: "Ring of Water Walking",
    description: "While wearing this ring, you can stand on and move across any liquid surface as if it were solid ground.",
    weight: "0.1kg",
  },
  {
    name: "Wand of Magic Detection",
    description: "This wand has 3 Charges. While holding it, you can expend 1 charge as an action to cast the Detect Magic spell from it. The wand regains 1d3 expended Charges daily at dawn.",
    weight: "0.5kg",
  },
  {
    name: "Wand of Secrets",
    description: "The wand has 3 Charges. While holding it. you can use an action to expend 1 of its Charges, and if a Secret door or trap is within 30 feet of you, the wand pulses and points at the one nearest to you. The wand regains 1d3 expended Charges daily at dawn.",
    weight: "0.5kg",
  },
  {
    name: "Wind Fan",
    description:
      "While holding this fan, you can use an action to cast the Gust of Wind spell (save DC 13) from it. Once used, the fan shouldn't be used again until the next dawn. Each time it is used again before then, it has a cumulative 20 percent chance of not working and tearing into useless, nonmagical tatters.",
    weight: "0.5kg",
  },
  {
    name: "Sword of Sharpness",
    description:
      "When you Attack an object with this magic sword and hit, maximize your weapon damage dice against the target. When you Attack a creature with this weapon and roll a 20 on the Attack roll, that target takes an extra 4d6 slashing damage. Then roll another d20. If you roll a 20, you lop off one of the target’s limbs, with the Effect of such loss determined by the GM. If the creature has no limb to sever, you lop off a portion of its body instead. In addition, you can speak the sword’s Command word to cause the blade to shed bright light in a 10-foot radius and dim light for an additional 10 feet. Speaking the Command word again or sheathing the sword puts out the light.",
  },
  {
    name: "Demon Armor CURSED",
    description:
      "While wearing this armor, you gain a +1 bonus to AC, and you can understand and speak Abyssal. In addition, the armor's clawed gauntlets turn unarmed strikes with your hands into magic Weapons that deal slashing damage, with a +1 bonus to Attack rolls and Damage Rolls and a damage die of 1d8. CURSE: Once you don this Cursed armor, you can't doff it unless you are targeted by the Remove Curse spell or similar magic. While wearing the armor, you have disadvantage on Attack rolls against Demons and on Saving Throws against their Spells and Special Abilities.",
    weight: "35kg",
  },
  {
    name: "Staff of the Adder",
    description:
      "You can use a bonus action to speak this staff's command word and make the head of the staff become that of an animate poisonous snake for 1 minute. By using another bonus action to speak the command word again, you return the staff to its normal inanimate form. You can make a melee attack using the snake head, which has a reach of 5 feet. Your proficiency bonus applies to the attack roll. On a hit, the target takes 1d6 piercing damage and must succeed on a DC 15 Constitution saving throw or take 3d6 poison damage. The snake head can be attacked while it is animate. It has an Armor Class of 15 and 20 hit points. If the head drops to 0 hit points, the staff is destroyed. As long as it's not destroyed, the staff regains all lost hit points when it reverts to its inanimate form.",
    weight: "2kg",
  },
  {
    name: "Oil of Etherealness",
    description:
      "Beads of this cloudy gray oil form on the outside of its container and quickly evaporate. The oil can cover a Medium or smaller creature, along with the Equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the Effect of the Etherealness spell for 1 hour.",
    weight: "0.25kg",
  },
  {
    name: "Dancing Sword",
    description:
      "You can use a Bonus Action to toss this magic sword into the air and speak the Command word. When you do so, the sword begins to hover, flies up to 30 feet, and attacks one creature of your choice within 5 feet of it. The sword uses your Attack roll and ability score modifier to Damage Rolls. While the sword hovers, you can use a Bonus Action to cause it to fly up to 30 feet to another spot within 30 feet of you. As part of the same Bonus Action, you can cause the sword to Attack one creature within 5 feet of it. After the hovering sword attacks for the fourth time, it flies up to 30 feet and tries to return to your hand. If you have no hand free, it falls to the ground at your feet. If the sword has no unobstructed path to you, it moves as close to you as it can and then falls to the ground. It also ceases to hover if you grasp it or move more than 30 feet away from it. (Choose a sword)",
  },
  {
    name: "Glamoured Studded Leather",
    description:
      "While wearing this armor, you gain a +1 bonus to AC. You can also use a Bonus Action to speak the armor's Command word and cause the armor to assume the Appearance of a normal set of clothing or some other kind of armor. You decide what it looks like, including color, style, and accessories, but the armor retains its normal bulk and weight. The illusory Appearance last until you use this property again or remove the armor.",
    weight: "6kg",
  },
  {
    name: "Gloves of Swimming and Climbing",
    description: "While wearing these gloves, climbing and Swimming don't cost you extra Movement, and you gain a +5 bonus to Strength (Athletics) checks made to climb or swim.",
    weight: "0.5kg",
  },
  {
    name: "Heward's Handy Haversack",
    description:
      "This Backpack has a central pouch and two side pouches, each of which is an extradimensional space. Each side pouch can hold up to 20 pounds of material, not exceeding a volume of 2 cubic feet. The large central pouch can hold up to 8 cubic feet or 80 pounds of material. The Backpack always weighs 5 pounds regardless of its Contents.Placing an object in the haversack follows the normal rules for interacting with Objects. Retrieving an item from the haversack requires you to use an action. When you reach into the haversack for a specific item, the item is always magically on top.",
    weight: "2.5kg",
  },
  {
    name: "Pipes of the Sewers",
    description:
      "You must be proficient with wind Instruments to use these pipes. While you are attuned to the pipes, ordinary rats and giant rats are indifferent toward you and will not Attack you unless you threaten or harm them.The pipes have 3 Charges. If you play the pipes as an action, you can use a Bonus Action to expend 1 to 3 Charges, calling forth one Swarm of Rats (see the Monster Manual for statistics) with each expended charge, provided that enough rats are within half a mile of you to be called in this fashion (as determined by the DM). If there aren't enough rats to form a swarm, the charge is wasted. Called swarms move toward the music by the shortest available route but aren't under your control otherwise. The pipes regain 1d3 expended Charges daily at dawn. Whenever a Swarm of Rats that isn't under another creature's control comes within 30 feet of you while you are playing the pipes, you can make a Charisma check contested by the swarm's Wisdom check. If you lose the contest, the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours. If you win the contest, the swarm is swayed by the pipes' music and becomes friendly to you and your Companions for as long as you continue to play the pipes each round as an action. A friendly swarm obeys your commands. If you issue no commands to a friendly swarm, it defends itself but otherwise takes no Actions. If a friendly swarm starts its turn and can't hear the pipes' music, your control over that swarm ends, and the swarm behaves as it normally would and can't be swayed by the pipes' music for the next 24 hours.",
    weight: "1kg",
  },
  {
    name: "Prayer Bead - Bless",
    description: "This bead contains the bless spell that you can cast from it as a Bonus Action (using your spell save DC if a save is necessary). Once a magic bead's spell is cast, that bead can't be used again until the next dawn.",
  },
  {
    name: "Rope of Climbing",
    description:
      "This 60-foot length of Silk rope weighs 3 pounds and can hold up to 3,000 pounds. If you hold one end of the rope and use an action to speak the Command word, the rope animates. As a Bonus Action, you can Command the other end to move toward a destination you choose. That end moves 10 feet on Your Turn when you first Command it and 10 feet on each of your turns until reaching its destination, up to its maximum length away, or until you tell it to stop. You can also tell the rope to fasten itself securely to an object or to unfasten itself, to knot or unknot itself, or to coil itself for carrying. If you tell the rope to knot, large knots appear at 1-foot intervals along the rope. While knotted, the rope shortens to a 50-foot length and grants advantage on checks made to climb it.",
    weight: "1.5kg",
  },
  {
    name: "Ring of Feather Falling",
    description: "When you fall while wearing this ring, you descend 60 feet per round and take no damage from Falling.",
    weight: "0.1kg",
  },
  {
    name: "Saddle of the Cavalier",
    description: "While in this saddle on a mount, you can't be dismounted against your will if you're conscious, and attack rolls against the mount have disadvantage.",
    weight: "4kg",
  },
  {
    name: "Sending Stones GAMECHANGING",
    description:
      "Sending stones come in pairs, with each smooth stone carved to match the other so the pairing is easily recognized. While you touch one stone, you can use an action to cast the Sending spell from it. The target is the bearer of the other stone. If no creature bears the other stone, you know that fact as soon as you use the stone and don't cast the spell. Once Sending is cast through the stones, they can't be used again until the next dawn. If one of the stones in a pair is destroyed, the other one becomes nonmagical.",
    weight: "0.1kg",
  },
  {
    name: "Staff of the Python",
    description:
      "You can use an action to speak this staff's Command word and throw the staff on the ground within 10 feet of you. The staff becomes a giant Constrictor Snake (see the Monster Manual for statistics) under your control and acts on its own Initiative count. By using a Bonus Action to speak the Command word again, you return the staff to its normal form in a space formerly occupied by the snake. On Your Turn, you can mentally Command the snake if it is within 60 feet of you and you aren't Incapacitated. You decide what action the snake takes and where it moves during its next turn, or you can issue it a general Command, such as to Attack your enemies or guard a Location.",
    weight: "2kg",
  },
  {
    name: "Sword of Wounding",
    description:
      "Hit Points lost to this weapon’s damage can be regained only through a short or Long Rest, rather than by regeneration, magic, or any other means. Once per turn, when you hit a creature with an Attack using this Magic Weapon, you can wound the target. At the start of each of the wounded creature’s turns, it takes 1d4 necrotic damage for each time you’ve wounded it, and it can then make a DC 15 Constitution saving throw, Ending the Effect of all such wounds on itself on a success. Alternatively, the wounded creature, or a creature within 5 feet of it, can use an action to make a DC 15 Wisdom (Medicine) check, Ending the Effect of such wounds on it on a success. (choose a sword)",
  },
  {
    name: "Frost Brand",
    description:
      "When you hit with an Attack using this magic sword, the target takes an extra 1d6 cold damage. In addition, while you hold the sword, you have Resistance to fire damage. In freezing temperatures, the blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet. When you draw this weapon, you can extinguish all nonmagical flames within 30 feet of you. This property can be used no more than once per hour.",
  },
  {
    name: "Ioun Stone (Absorption)",
    description:
      "While this pale lavender ellipsoid orbits your head, you can use your Reaction to cancel a spell of 4th Level or lower cast by a creature you can see and targeting only you. Once the stone has canceled 20 levels of Spells, it burns out and turns dull gray, losing its magic. If you are targeted by a spell whose level is higher than the number of spell levels the stone has left, the stone can’t cancel it.",
    weight: "0.5kg",
  },
  {
    name: "Dagger of Venom",
    description:
      "You gain a +1 bonus to Attack and Damage Rolls made with this Magic Weapon. You can use an action to cause thick, black poison to coat the blade. The poison remains for 1 minute or until an Attack using this weapon hits a creature. That creature must succeed on a DC 15 Constitution saving throw or take 2d10 poison damage and become Poisoned for 1 minute. The Dagger can't be used this way again until the next dawn.",
    weight: "0.5kg",
  },
  {
    name: "Boots of Elvenkind",
    description: "While you wear these boots, your steps make no sound, regardless of the surface you are moving across. You also have advantage on Dexterity (Stealth) checks that rely on moving silently.",
    weight: "0.5kg",
  },
  {
    name: "Eyes of Minute Seeing",
    description: "These Crystal lenses fit over the eyes. While wearing them, you can see much better than normal out to a range of 1 foot. You have advantage on Intelligence (Investigation) checks that rely on sight while searching an area or studying an object within that range.",
    weight: "0.5kg",
  },
  {
    name: "Eyes of the Eagle",
    description: "These Crystal lenses fit over the eyes. While wearing them, you have advantage on Wisdom (Perception) checks that rely on sight. In Conditions of clear Visibility, you can make out details of even extremely distant Creatures and Objects as small as 2 feet across.",
    weight: "0.1kg",
  },
  {
    name: "Ring of Jumping",
    description: "While wearing this ring, you can cast the jump spell from it as a Bonus Action at will, but can target only yourself when you do so.",
    weight: "0.1kg",
  },
  {
    name: "Spell Scroll Level 7",
    spellScroll: true,
    variant: levelSevenSpells,
  },
  {
    name: "Dimensional Shackles",
    description:
      "You can use an action to place these shackles on an Incapacitated creature. The shackles adjust to fit a creature of Small to Large size. In addition to serving as mundane Manacles, the shackles prevent a creature bound by them from using any method of extradimensional Movement, including teleportation or Travel to a different plane of existence. They don't prevent the creature from passing-through an interdimensional portal. You and any creature you designate when you use the shackles can use an action to remove them. Once every 30 days, the bound creature can make a DC 30 Strength Athletics) check. On a success, the creature breaks free and destroys the shackles.",
    weight: "2kg",
  },
  {
    name: "Eyes of Charming",
    description:
      "These Crystal lenses fit over the eyes. They have 3 Charges. While wearing them, you can expend 1 charge as an action to cast the Charm Person spell (save DC 13) on a Humanoid within 30 feet of you, provided that you and the target can see each other. The lenses regain all expended Charges daily at dawn.",
  },
  {
    name: "Gloves of Missile Snaring",
    description:
      "These gloves seem to almost meld into your hands when you don them. When a ranged weapon Attack hits you while you're wearing them, you can use your Reaction to reduce the damage by 1d10 +your Dexterity modifier. provided that you have a free hand. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in that hand.",
    weight: "0.5kg",
  },
  {
    name: "Ioun Stone (Agility)",
    description: "Upon attuning to it, Your Dexterity score increases by 2, to a maximum of 20, while this deep red Sphere orbits your head.",
    weight: "0.5kg",
  },
  {
    name: "Ioun Stone (Fortitude)",
    description: "Upon attuning to it, your Constitution score increases by 2, to a maximum of 20, while this pink rhomboid orbits your head.",
    weight: "0.5kg",
  },
  {
    name: "Ioun Stone (Insight)",
    description: "Upon attuning to it, your Wisdom score increases by 2, to a maximum of 20, while this incandescent blue Sphere orbits your head.",
    weight: "0.5kg",
  },
];
