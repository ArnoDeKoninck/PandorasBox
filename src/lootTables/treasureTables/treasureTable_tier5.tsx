
import { levelNineSpells } from "../../spells/9thLevelSpells";

export const treasureTable_tier5 = [
  {
    name: "Brass Horn of Valhalla",
    description: `You can use an action to blow this horn. In response, Warrior spirits from the Valhalla appear within 60 feet of you. They use the Statistics of a Berserker. They return to Valhalla after 1 hour or when they drop to 0 Hit Points. Once you use the horn, it can't be used again until 7 days have passed. Summons ${Math.floor(
      Math.random() * (15 - 6) + 6
    )} berzekers, requires proficiency with all simple weapons`,
  },
  {
    name: "Dwarven Plate GAMECHANGING",
    description: "While wearing this armor, you gain a +2 bonus to AC. In addition, if an effect moves you against your will along the ground, you can use your reaction to reduce the distance you are moved by up to 10 feet.",
  },
  {
    name: "Potion of Longevity GAMECHANGING",
    description:
      "When you drink this potion, your physical age is reduced by 1d6 + 6 years, to a minimum of 13 years. Each time you subsequently drink a potion of longevity, there is 10 percent cumulative chance that you instead age by 1d6 + 6 years. Suspended in this amber liquid are a scorpion's tail, an adder's fang, a dead spider, and a tiny heart that, against all reason, is still beating. These ingredients vanish when the potion is opened.",
    weight: "0.5kg",
  },
  {
    name: "Apparatus of Kwalish",
    description:
      "This item first appears to be a Large sealed iron barrel weighing 500 pounds. The barrel has a hidden catch, which can be found with a successful DC 20 Intelligence (Investigation) check. Releasing the catch unlocks a hatch at one end of the barrel, allowing two Medium or smaller creatures to crawl inside. Ten levers are set in a row at the far end. each in a neutral position, able to move either up or down. When certain levers are used, the apparatus transforms to resemble a giant lobster.",
    weight: "250kg",
  },
  {
    name: "Boots of the Winterlands",
    description:
      "These furred boots are snug and feel quite warm. While you wear them, you gain the following benefits:You have Resistance to cold damage. You ignore Difficult Terrain created by ice or snow. You can tolerate temperatures as low as -50 degrees Fahrenheit without any additional Protection. If you wear heavy clothes, you can tolerate temperatures as low as -100 degrees Fahrenheit.",
    weight: "1kg",
  },
  {
    name: "Belt of Hill Giant Strength",
    description: "While wearing this belt, your Strength score changes to 21. The item has no effect on you if your Strength without the belt is equal to or greater than 21.",
    weight: "1kg",
  },
  {
    name: "Folding Boat",
    description:
      "This object appears as a wooden box that measures 12 inches long, 6 inches wide, and 6 inches deep. It weighs 4 pounds and floats. It can be opened to store items inside. This item also has three Command words, each requiring you to use an action to speak it. One Command word causes the box to unfold into a boat 10 feet long, 4 feet wide, and 2 feet deep. The boat has one pair of oars, an anchor, a mast, and a lateen sail. The boat can hold up to four Medium Creatures comfortably. The second Command word causes the box to unfold into a ship 24 feet long, 8 feet wide; and 6 feet deep. The ship has a deck, rowing seats, five sets of oars, a steering oar, an anchor, a deck cabin, and a mast with a square sail. The ship can hold fifteen Medium Creatures comfortably. When the box becomes a vessel, its weight becomes that of a normal vessel its size, and anything that was stored in the box remains in the boat. The third Command word causes the folding boat to fold back into a box, provided that no Creatures are aboard. Any Objects in the vessel that can't fit inside the box remain outside the box as it folds. Any Objects in the vessel that can fit inside the box do so.",
    weight: "2kg",
  },
  {
    name: "Ring of Invisibility",
    description: "While wearing this ring, you can turn Invisible as an action. Anything you are wearing or carrying is Invisible with you. You remain Invisible until the ring is removed, until you Attack or Cast a Spell, or until you use a Bonus Action to become visible again.",
    weight: "0.1kg",
  },
  {
    name: "Manual of Bodily Health",
    description:
      "This book contains health and diet tips, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's Contents and practicing its guidelines, your Constitution score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
    weight: "2.5kg",
  },
  {
    name: "Manual of Gainful Exercise",
    description:
      "This book describes fitness exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's Contents and practicing its guidelines, your Strength score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
    weight: "2.5kg",
  },
  {
    name: "Manual of Quickness of Action GAMECHANGING",
    description:
      "This book contains coordination and balance exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's Contents and practicing its guidelines, your Dexterity score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
    weight: "2.5kg",
  },
  {
    name: "Tome of Leadership and Influence",
    description:
      "This book contains guidelines for influencing and charming others, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's Contents and practicing its guidelines, your Charisma score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
    weight: "2.5kg",
  },
  {
    name: "Tome of Understanding",
    description:
      "This book contains intuition and Insight exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's Contents and practicing its guidelines, your Wisdom score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
    weight: "2.5kg",
  },
  {
    name: "Tome of Clear Thought",
    description:
      "This book contains memory and logic exercises, and its words are charged with magic. If you spend 48 hours over a period of 6 days or fewer studying the book's Contents and practicing its guidelines, your Intelligence score increases by 2, as does your maximum for that score. The manual then loses its magic, but regains it in a century.",
    weight: "2.5kg",
  },
  {
    name: "Staff of Thunder and Lightning",
    description:
      "This staff can be wielded as a magic Quarterstaff that grants a +2 bonus to Attack and Damage Rolls made with it. It also has the following additional Properties. When one of these Properties is used, it can't be used again until the next dawn. Lightning: When you hit with a melee Attack using the staff, you can cause the target to take an extra 2d6 lightning damage. Thunder: When you hit with a melee Attack using the staff, you can cause the staff to emit a crack of thunder, audible out to 300 feet. The target you hit must succeed on a DC 17 Constitution saving throw or become Stunned until the end of your next turn. Lightning Strike: You can use an action to cause a bolt of lightning to leap from the staff's tip in a line that is 5 feet wide and 120 feet long. Each creature in that line must make a DC 17 Dexterity saving throw, taking 9d6 lightning damage on a failed save, or half as much damage on a successful one. Thunderclap: You can use an action to cause the staff to issue a deafening Thunderclap, audible out to 600 feet. Each creature within 60 feet of you (not including you) must make a DC 17 Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes Deafened for 1 minute. On a successful save, a creature takes half damage and isn't Deafened. Thunder and Lightning: You can use an action to use the Lightning Strike and Thunderclap Properties at the same time. Doing so doesn't expend the daily use of those Properties, only the use of this one.",
    weight: "2kg",
  },
  {
    name: "Wand of Binding",
    description:
      "This wand has 7 charges for the following properties. It regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed. Spells. While holding the wand, you can use an action to expend some of its charges to cast one of the following spells (save DC 17): hold monster (5 charges) or hold person (2 charges). Assisted Escape. While holding the wand, you can use your reaction to expend 1 charge and gain advantage on a saving throw you make to avoid being paralyzed or restrained, or you can expend 1 charge and gain advantage on any check you make to escape a grapple.",
    weight: "1.5kg",
  },
  {
    name: "Wand of Fear",
    description:
      "Requires Attunement. This wand has 7 Charges for the following Properties. It regains 1d6 + 1 expended Charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed. Command: While holding the wand, you can use an action to expend 1 charge and Command another creature to flee or grovel, as with the Command spell (save DC 15). Cone of Fear: While holding the wand, you can use an action to expend 2 Charges, causing the wand's tip to emit a 60-foot cone of amber light. Each creature in the cone must succeed on a DC 15 Wisdom saving throw or become Frightened of you for 1 minute. While it is Frightened in this way, a creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take Reactions. For its action, it can use only the Dash action or try to Escape from an Effect that prevent it from moving. If it has nowhere it can move, the creature can use the Dodge action. At the end of each of its turns, a creature can repeat the saving throw, Ending the Effect on itself on a success.",
    weight: "0.5kg",
  },
  {
    name: "9th Level Spell Scroll",
    spellScroll: true,
    variant: levelNineSpells,
  },
  {
    name: "Bronze Horn of Valhalla",
    description: `You can use an action to blow this horn. In response, Warrior spirits from the Valhalla appear within 60 feet of you. They use the Statistics of a Berserker. They return to Valhalla after 1 hour or when they drop to 0 Hit Points. Once you use the horn, it can't be used again until 7 days have passed. Summons ${Math.floor(
      Math.random() * (20 - 8) + 8
    )} berzekers, requires proficiency with all medium armor`,
  },
  {
    name: "Belt of Giant Strength",
    variant: [
      {
        name: "Giant belt of the frost giant",
        description: "While wearing this belt, your Strength score changes to a score granted by the belt. If your Strength is already equal to or greater than the belt's score, the item has no Effect on you.",
        weight: "3kg",
      },
      {
        name: "Giant belt of the stone giant",
        description: "While wearing this belt, your Strength score changes to a score granted by the belt. If your Strength is already equal to or greater than the belt's score, the item has no Effect on you.",
        weight: "3kg",
      },
    ],
  },
  {
    name: "Carpet of Flying GAMECHANGING",
    variant: [
      {
        name: "Carpet of flying (Small)",
        description: "You can speak the carpet's Command word as an action to make the carpet hover and fly. It moves according to your spoken Directions, provided that you are within 30 feet of it. Flying speed: 80ft, capacity: 100kg, size: 9Ocm x150cm",
        weight: "7kg",
      },
      {
        name: "Carpet of flying (Medium)",
        description: "You can speak the carpet's Command word as an action to make the carpet hover and fly. It moves according to your spoken Directions, provided that you are within 30 feet of it. Flying speed: 60ft, capacity: 200kg, size: 120cm x180cm",
        weight: "8kg",
      },
      {
        name: "Carpet of flying (Large)",
        description: "You can speak the carpet's Command word as an action to make the carpet hover and fly. It moves according to your spoken Directions, provided that you are within 30 feet of it. Flying speed: 40ft, capacity: 300kg, size: 150cm x210cm",
        weight: "9kg",
      },
      {
        name: "Carpet of flying (small)",
        description: "You can speak the carpet's Command word as an action to make the carpet hover and fly. It moves according to your spoken Directions, provided that you are within 30 feet of it. Flying speed: 30ft, capacity: 100kg, size: 180cm x270cm",
        weight: "10kg",
      },
    ],
  },
  {
    name: "Helm of Telepathy",
    description:
      "Requires Attunement. While wearing this helm, you can use an action to cast the Detect Thoughts spell (save DC 13) from it. As long as you maintain Concentration on the spell, you can use a Bonus Action to send a Telepathic Message to a creature you are focused on. It can reply — using a Bonus Action to do so — while your focus on it continues. While focusing on a creature with Detect Thoughts, you can use an action to cast the Suggestion spell (save DC 13) from The Helm on that creature. Once used, the Suggestion property can't be used again until the next dawn",
    weight: "1kg",
  },
  {
    name: "Ioun Stone Awareness",
    description: "You can’t be surprised while this dark blue rhomboid orbits your head.",
    weight: "0.5kg",
  },
  {
    name: "Ring of Regeneration GAMECHANGING",
    description: `While wearing this ring, you regain ${Math.floor(Math.random() * (6 - 1) + 1)} hit points every 10 minutes, provided that you have at least 1 hit point. If you lose a body part, the ring causes the missing part to regrow and return to full functionality after ${Math.floor(
      Math.random() * (7 - 2) + 2
    )}days if you have at least 1 hit point the whole time.`,
    weight: "0.2kg",
  },
  {
    name: "Rod of the Pact Keeper +1 GAMECHANGING",
    description: "While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your warlock spells. In addition, you can regain one warlock spell slot as an action while holding the rod. You can't use this property again until you finish a long rest.",
    weight: "2kg",
  },
  {
    name: "Staff of Charming",
    description: `Requires Attunement by a Bard, Cleric, Druid, Sorcerer, Warlock, or Wizard. While holding this staff, you can use an action to expend 1 of its 10 Charges to cast Charm Person, Command, or comprehend Languages from it using your spell save DC. The staff can also be used as a magic Quarterstaff. If you are holding the staff and fail a saving throw against an Enchantment spell that Targets only you, you can turn your failed save into a successful one. You can't use this property of the staff again until the next dawn. If you succeed on a save against an Enchantment spell that Targets only you, with or without the staff's intervention, you can use your Reaction to expend 1 charge from the staff and turn the spell back on its caster as if you had cast the spell. The staff regains ${Math.floor(
      Math.random() * (10 - 3) + 3
    )}expended Charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff becomes a nonmagical Quarterstaff.n atuning to it, you regain 15 Hit Points at the end of each hour this pearly white spindle orbits your head, provided that you have at least 1 hit point.`,
    weight: "2kg",
  },
  {
    name: "Sunblade",
    description:
      "This item appears to be a Longsword hilt. While grasping the hilt, you can use a Bonus Action to cause a blade of pure Radiance to spring into existence, or make the blade disappear. While the blade exists, this magic Longsword has the Finesse property. If you are proficient with shortswords or longswords, you are proficient with the sun blade. You gain a +2 bonus to Attack and Damage Rolls made with this weapon, which deals radiant damage instead of slashing damage. When you hit an Undead with it, that target takes an extra 1d8 radiant damage. The sword's luminous blade emits bright light in a 15-foot radius and dim light for an additional 15 feet. The light is sunlight. While the blade persists, you can use an action to expand or reduce its radius of bright and dim light by 5 feet each, to a maximum of 30 feet each or a minimum of 10 feet each.",
    weight: "1.5kg",
  },
  {
    name: "Staff of Healing",
    description:
      "Requires Attunement by a Bard, Cleric, or Druid. This staff has 10 Charges. While holding it, you can use an action to expend 1 or more of its Charges to cast one of the following Spells from it, using your spell save DC and Spellcasting ability modifier: Cure Wounds (1 charge per Spell Level, up to 4th), Lesser Restoration (2 charges). or mass Cure Wounds (5 charges). The staff regains 1d6 + 4 expended Charges daily at dawn. If you expend the last charge, roll a d20. On a 1. the staff vanishes in a flash of light, lost forever.",
    weight: "2kg",
  },
  {
    name: "Belt of Fire Giant Strength",
    description: "While wearing this belt, your Strength score changes to 25. If your Strength is already equal to or greater than the belt's score, the item has no Effect on you.",
    weight: "3kg",
  },
  {
    name: "Iron Horn of Valhalla",
    description: `You can use an action to blow this horn. In response, Warrior spirits from the Valhalla appear within 60 feet of you. They use the Statistics of a Berserker. They return to Valhalla after 1 hour or when they drop to 0 Hit Points. Once you use the horn, it can't be used again until 7 days have passed. Summons ${Math.floor(
      Math.random() * (25 - 10) + 10
    )} berzekers, requires proficiency with all martial weapons`,
    weight: "1.5kg",
  },
  {
    name: "Ring of Shooting Stars",
    description:
      "Requires Attunement Outdoors at Night. While wearing this ring in dim light or Darkness, you can cast Dancing lights and light from the ring at will. Casting either spell from the ring requires an action. The ring has 6 Charges for the following other Properties. The ring regains 1d6 expended Charges daily at dawn. Faerie Fire: You can expend 1 charge as an action to cast Faerie Fire from the ring. Ball Lightning: You can expend 2 Charges as an, action to create one to four 3-foot-diameter spheres of lightning. The more spheres you create, the less powerful each Sphere is individually. Each Sphere appears in an unoccupied space you can see within 120 feet of you. The spheres last as long as you concentrate (as if concentrating on a spell), up to 1 minute. Each Sphere sheds dim light in a 30-foot radius. As a Bonus Action, you can move each Sphere up to 30 feet, but no farther than 120 feet away from you. When a creature other than you comes within 5 feet of a Sphere, the Sphere discharges lightning at that creature and disappears. That creature must make a DC 15 Dexterity saving throw. On a failed save, the creature takes lightning damage based on the number of spheres you created. (4 spheres = 2d4, 3 spheres = 2d6, 2 spheres = 5d4, 1 Sphere = 4d12. Shooting Stars: You can expend 1 to 3 Charges as an action. For every charge you expend, you launch a glowing mote of light from the ring at a point you can see within 60 feet of you. Each creature within a 15-foot cube originating from that point is showered in sparks and must make a DC 15 Dexterity saving throw. taking 5d4 fire damage on a failed save, or half as much damage on a successful one.",
    weight: "0.2kg",
  },
  {
    name: "Ioun Stone Mastery",
    description: "Your Proficiency Bonus increases by 1 while this pale green prism orbits your head.",
    weight: "0.5kg",
  },
  {
    name: "Sphere of Annihilation GAMECHANGING",
    description:
      "This 2-foot-diameter black Sphere is a hole in the multiverse, hovering in space and stabilized by a magical field surrounding it. The Sphere obliterates all matter it passes through and all matter that passes through it. Artifacts are the exception. Unless an artifact is susceptible to damage from a Sphere of annihilation, it passes through the Sphere unscathed. Anything else that touches the Sphere but isn't wholly engulfed and obliterated by it takes 4d10 force damage. The Sphere is stationary until someone controls it. If you are within 60 feet of an uncontrolled Sphere, you can use an action to make a DC 25 Intelligence (Arcana) check. On a success, the Sphere levitates in one direction of your choice, up to a number of feet equal to 5 x your Intelligence modifier (minimum 5 feet). On a failure, the Sphere moves 10 feet toward you. A creature whose space the Sphere enters must succeed on a DC 13 Dexterity saving throw or be Touched by it, taking 4d10 force damage. If you attempt to control a Sphere that is under another creature's control, you make an Intelligence (Arcana) check contested by the other creature's Intelligence (Arcana) check. The winner of the contest gains control of the Sphere and can Levitate it as normal. If the Sphere comes into contact with a planar portal, such as that created by the gate spell, or an extradimensional space, such as that within a Portable Hole, the DM determines randomly what happens, using the following table.",
  },
  {
    name: "Weapon, +3",
    description: "You have a +3 bonus to attack and damage rolls made with this weapon-",
  },
  {
    name: "Belt of Cloud Giant Strength",
    description: "While wearing this belt, your Strength score changes to 27. If your Strength is already equal to or greater than the belt's score, the item has no Effect on you.",
    weight: "3kg",
  },
  {
    name: "Cube of Force",
    description:
      "This cube is about an inch across. Each face has a distinct marking on it that can be pressed. The cube starts with 36 Charges, and it regains 1d20 expended Charges daily at dawn. You can use an action to press one of the cube's faces, expending a number of Charges based on the chosen face, as shown in the Cube of Force Faces table. Each face has a different Effect. If the cube has insufficient Charges remaining, nothing happens. Otherwise, a barrier of Invisible force springs into existence, forming a cube 15 feet on a side. The barrier is centered on you, moves with you, and lasts for 1 minute, until you use an action to press the cube's sixth face, or the cube runs out of Charges. You can change the barrier's Effect by pressing a different face of the cube and expending the requisite number of Charges, resetting the Duration. If your Movement causes the barrier to come into contact with a solid object that can't pass through the cube, you can't move any closer to that object as long as the barrier remains.",
  },

  {
    name: "Hammer of Thunderbolts",
    description:
      "You gain a +1 bonus to Attack and Damage Rolls made with this Magic Weapon. Giant's Bane (Requires Attunement):  You must be wearing a belt of giant Strength (any variety) and Gauntlets of Ogre Power to attune to this weapon. The Attunement ends if you take off either of those items. While you are attuned to this weapon and holding it, your Strength score increases by 4 and can exceed 20, but not 30. When you roll a 20 on an Attack roll made with this weapon against a giant, the giant must succeed on a DC 17 Constitution saving throw or die. The Hammer also has 5 Charges. While attuned to it, you can expend 1 charge and make a ranged weapon Attack with the Hammer, hurling it as if it had the Thrown property with a normal range of 20 feet and a long range of 60 feet. If the Attack hits, the Hammer unleashes a Thunderclap audible out to 300 feet. The target and every creature within 30 feet of it must succeed on a DC 17 Constitution saving throw or be Stunned until the end of your next turn. The Hammer regains 1d4 + 1 expended Charges daily at dawn.",
    weight: "5kg",
  },
  {
    name: "Ring of Mind Shielding",
    description:
      "Requires Attunement. While wearing this ring, you are immune to magic that allows other Creatures to read your thoughts, determine whether you are lying, know your Alignment, or know your Creature Type. Creatures can telepathically communicate with you only if you allow it. You can use an action to cause the ring to become Invisible until you use another action to make it visible, until you remove the ring, or until you die. If you die while wearing the ring, your soul enters it, unless it already houses a soul. You can remain in the ring or depart for The Afterlife. As long as your soul is in the ring, you can telepathically communicate with any creature wearing it. A wearer can't prevent this Telepathic Communication.",
    weight: "0.2kg",
  },
  {
    name: "Rod of the Pact Keeper +2 GAMECHANGING",
    description:
      "While holding this rod, you gain a bonus to spell attack rolls and to the saving throw DCs of your warlock spells. This bonus is determined by the rod's rarity. In addition, you can regain one warlock spell slot as an action while holding the rod. You can't use this property again until you finish a long rest.",
    weight: "2kg",
  },
  {
    name: "Rod of Rulership",
    description:
      "Requires Attunement. You can use an action to present the rod and Command obedience from each creature of your choice that you can see within 120 feet of you. Each target must succeed on a DC 15 Wisdom saving throw or be Charmed by you for 8 hours. While Charmed in this way, the creature regards you as its trusted leader. If harmed by you or your Companions, or commanded to do something contrary to its Nature, a target ceases to be Charmed in this way. The rod can't be used again until the next dawn.",
    weight: "1kg",
  },
  {
    name: "Staff of Fire",
    description:
      "Requires Attunement by a Druid, Sorcerer, Warlock, or Wizard. You have Resistance to fire damage while you hold this staff. The staff has 10 Charges. While holding it, you can use an action to expend 1 or more of its Charges to cast one of the following Spells from it, using your spell save DC: Burning Hands (1 charge), Fireball (3 charges), or Wall of Fire (4 charges). The staff regains 1d6 + 4 expended Charges daily at dawn. If you expend the last charge, roll a d20. On a 1, the staff blackens, crumbles into cinders, and is destroyed.",
    weight: "2kg",
  },
  {
    name: "Staff of Swarming Insects",
    description:
      "This staff has 10 charges and regains 1d6 + 4 expended charges daily at dawn. If you expend the last charge, roll a d20. On a 1, a swarm of insects consumes and destroys the staff, then disperses. Spells: While holding the staff, you can use an action to expend some of its charges to cast one of the following spells from it, using your spell save DC: giant insect (4 charges) or insect plague (5 charges). Insect Cloud. While holding the staff, you can use an action and expend 1 charge to cause a swarm of harmless flying insects to spread out in a 30-foot radius from you. The insects remain for 10 minutes, making the area heavily obscured for creatures other than you. The swarm moves with you, remaining centered on you. A wind of at least 10 miles per hour disperses the swarm and ends the effect.",
    weight: "2kg",
  },
  {
    name: "Wand of Paralysis",
    description:
      "This wand has 7 charges. While holding it, you can use an action to expend 1 of its charges to cause a thin blue ray to streak from the tip toward a creature you can see within 60 feet of you. The target must succeed on a DC 15 Constitution saving throw or be paralyzed for 1 minute. At the end of each of the target's turns, it can repeat the saving throw, ending the effect on itself on a success. The wand regains 1d6 + 1 expended charges daily at dawn. If you expend the wand's last charge, roll a d20. On a 1, the wand crumbles into ashes and is destroyed.",
    weight: "1kg",
  },
  {
    name: "Ring of Fire Elemental Command",
    description:
      "You can expend 2 of the ring’s Charges to cast dominate monster on a Fire Elemental. In addition, you have Resistance to fire damage. You can also speak and understand Ignan. If you help slay a Fire Elemental while attuned to the ring, you gain access to the following additional properties: You are immune to fire damage. You can cast the following Spells from the ring, expending the necessary number of charges: Burning Hands (1 charge), Fireball (2 charges), and Wall of Fire (3 charges).",
    weight: "0.2kg",
  },
  {
    name: "Armor of Invulnerability GAMECHANGING",
    description:
      "You have resistance to nonmagical damage while you wear this armor. Additionally, you can use an action to make yourself immune to nonmagical damage for 10 minutes or until you are no longer wearing the armor. Once this special action is used, it can't be used again until the next dawn..",
    weight: "40kg",
  },
  {
    name: "Belt of Storm Giant Strength",
    description: "While wearing this belt, your Strength score changes to 29. If your Strength is already equal to or greater than the belt's score, the item has no Effect on you.",
    weight: "3kg",
  },
  {
    name: "Dwarven Thrower",
    description:
      "Requires Attunement by a Dwarf. You gain a +3 bonus to Attack and Damage Rolls made with this Magic Weapon. It has the Thrown property with a normal range of 20 feet and a long range of 60 feet. When you hit with a ranged Attack using this weapon, it deals an extra 1d8 damage or, if the target is a giant, 2d8 damage. Immediately after the Attack, the weapon flies back to your hand.",
    weight: "3kg",
  },
  {
    name: "Mirror of Life Trapping",
    description:
      "When this 4-foot-tall mirror is viewed indirectly, its surface shows faint images of Creatures. The mirror weighs 50 pounds, and it has AC 11, 10 Hit Points, and vulnerability to bludgeoning damage. It shatters and is destroyed when reduced to 0 Hit Points. If the mirror is hanging on a vertical surface and you are within 5 feet of it, you can use an action to speak its Command word and activate it. It remains activated until you use an action to speak the Command word again. Any creature other than you that sees its reflection in the activated mirror while within 30 feet of it must succeed on a DC 15 Charisma saving throw or be trapped, along with anything it is wearing or carrying, in one of the mirror's twelve extradimensional cells. This saving throw is made with advantage if the creature knows the mirror's Nature, and Constructs succeed on the saving throw automatically.",
    weight: "25kg",
  },
  {
    name: "Wand of Wonder",
    description:
      "Requires Attunement by a Spellcaster. This wand has 7 Charges. While holding it, you can use an action to expend 1 of its Charges and choose a target within 120 feet of you. The target can be a creature, an object, or a point in space. Roll d100 and consult the following table to discover what happens.",
    weight: "1kg",
  },
  {
    name: "Wand of the War Mage +3",
    description: "While holding this wand, you gain a +3 bonus to spell attack rolls. In addition, you ignore half cover when making a spell attack.",
    weight: "1kg",
  },
];
