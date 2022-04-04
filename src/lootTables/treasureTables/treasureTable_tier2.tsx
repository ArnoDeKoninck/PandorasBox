import { levelThreeSpells } from "../../spells/3rdLevelSpells";
import { levelFourSpells } from "../../spells/4thLevelSpells";
import { levelFiveSpells } from "../../spells/5thLevelSpells";

export const treasureTable_tier2 = [
  {
    name: "3rd Level Spell Scroll",
    spellScroll: true,
    variant: levelThreeSpells,
  },
  {
    name: "Quaal's Feather Token(Fan)",
    description:
      "This tiny object looks like a feather. If you are on a boat or ship, you can use an action to toss the token up to 10 feet in the air. The token disappears, and a giant flapping fan takes its place. The fan floats and creates a wind strong enough to fill the sails of one ship, increasing its speed by 5 miles per hour for 8 hours. You can dismiss the fan as an action.",
    weight: "0.1kg",
  },
  {
    name: "Quaal's Feather Token (Whip)",
    description:
      "You can use an action to throw the token to a point within 10 feet of you. The token disappears, and a floating whip takes its place. You can then use a bonus action to make a melee spell attack against a creature within 10 feet of the whip, with an attack bonus of +9. On a hit, the target takes 1d6 + 5 force damage. As a bonus action on your turn, you can direct the whip to fly up to 20 feet and repeat the attack against a creature within 10 feet of it. The whip disappears after 1 hour, when you use an action to dismiss it, or when you are incapacitated or die.",
    weight: "0.1kg",
  },
  {
    name: "Potion of Diminution",
    description:
      "When you drink this potion, you gain the 'reduce' Effect of the enlarge/reduce spell for 1d4 hours (no Concentration required). The red in the potion's liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.",
    weight: "0.25kg",
  },
  {
    name: "Potion of Growth",
    description:
      "When you drink this potion, you gain the 'enlarge' effect of the enlarge/reduce spell for 1d4 hours (no concentration required). The red in the potion's liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.",
    weight: "0.25kg",
  },
  {
    name: "+1 Ammunition",
    description: "You have a +1 bonus to attack and damage rolls made with this piece of magic ammunition. Once it hits a target, the ammunition is no longer magical.",
    uses: Math.floor(Math.random() * (12 - 2) + 2),
    weight: "0.1kg each",
  },
  {
    name: "Dust of Disappearance",
    description:
      "Found in a small packet, this powder resembles very fine sand. There is enough of it for one use. When you use an action to throw the dust into the air, you and each creature and object within 10 feet of you become Invisible for 2d4 minutes. The Duration is the same for all subjects, and the dust is consumed when its magic takes Effect. If a creature affected by the dust attacks or casts a spell, the Invisibility ends for that creature.",
    weight: "0.1kg",
  },
  {
    name: "Necklace of Fireballs (One bead)",
    description: "This necklace has 1d6 + 3 beads hanging from it. You can use an action to detach a bead and throw it up to 60 feet away. When it reaches the end of its trajectory, the bead detonates as a 3rd-level fireball spell (save DC 15).",
    weight: "0.1kg",
  },
  {
    name: "Potion of Gaseous Form",
    description: "When you drink this potion, you gain the Effect of the Gaseous Form spell for 1 hour (no Concentration required) or until you end the Effect as a Bonus Action. This potion's container seems to hold fog that moves and pours like water.",
    weight: "0.25kg",
  },
  {
    name: "Potion of Resistance",
    description: "When you drink this potion, you gain resistance to one type of damage for 1 hour. The DM chooses the damage type (by rolling a D10)",
    weight: "0.25kg",
  },
  {
    name: "Universal Solvent",
    description: "This tube holds milky liquid with a strong alcohol smell. You can use an action to pour the Contents of the tube onto a surface within reach. The liquid instantly dissolves up to 1 square foot of adhesive it touches, including Sovereign Glue.",
    weight: "0.25kg",
  },
  {
    name: "4th Level Spell Scroll",
    spellScroll: true,
    variant: levelFourSpells,
  },
  {
    name: "Ivory Goat (Travail)",
    description:
      "This statuette becomes an enormous creature, larger than a bull, with the statistics of a nightmare except for the addition of a pair of wicked horns of exceptional size (damage 1d8+4 for each horn). If it is charging to attack, it may only use its horns (but add 6 points of damage to each successful attack in that round). It can be called to life just once per month for up to 12 hours at a time.",
    weight: "0.5kg",
  },
  {
    name: "Vicious Weapon",
    description: "When you roll a 20 on your attack roll with this magic weapon, the target takes an extra 7 damage of the weapon’s type. (choose a weapon)",
  },
  {
    name: "+3 Ammunition (1)",
    description: "You have a +3 bonus to attack and damage rolls made with this piece of magic ammunition. Once it hits a target, the ammunition is no longer magical.",
    weight: "0.25kg",
  },
  {
    name: "Potion of Speed",
    description: "When you drink this potion, you gain the Effect of the haste spell for 1 minute (no Concentration required). The potion’s yellow fluid is streaked with black and swirls on its own.",
    weight: "0.25kg",
  },
  {
    name: "Sovereign Glue",
    description:
      "This viscous, milky-white substance can form a permanent adhesive bond between any two Objects. It must be stored in a jar or flask that has been coated inside with Oil of Slipperiness. When found, a container contains 1d6 + 1 ounces. One ounce of the glue can cover a 1-foot square surface. The glue takes 1 minute to set. Once it has done so, the bond it creates can be broken only by the application of Universal Solvent or oil of Etherealness, or with a wish spell.",
    weight: "0.25kg",
  },
  {
    name: "Horn of Blasting",
    description:
      "You can use an action to speak the horn's Command word and then blow the horn, which emits a thunderous blast in a 30-foot cone that is audible 600 feet away. Each creature in the cone must make a DC 15 Constitution saving throw. On a failed save, a creature takes 5d6 thunder damage and is Deafened for 1 minute. On a successful save, a creature takes half as much damage and isn't Deafened. Creatures and Objects made of glass or Crystal have disadvantage on the saving throw and take 10d6 thunder damage instead of 5d6. Each use of the horn's magic has a 20 percent chance of causing the horn to explode. The explosion deals 10d6 fire damage to the blower and destroys the horn.",
    weight: "1kg",
  },
  {
    name: "Potion of Superior Healing",
    description: "You regain 8d4 + 8 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
    weight: "0.5kg",
  },
  {
    name: "Potion of Animal Friendship",
    description: "When you drink this potion, you can cast the Animal Friendship spell (save DC 13) for 1 hour at will. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair.",
    weight: "0.25kg",
  },
  {
    name: "Dust of Dryness",
    description:
      "This small packet contains 1d6 + 4 pinches of dust. You can use an action to sprinkle a pinch of it over water. The dust turns a cube of water 15 feet on a side into one marble-sized pellet, which floats or rests near where the dust was sprinkled. The pellet's weight is negligible. Someone can use an action to smash the pellet against a hard surface, causing the pellet to Shatter and release The Water the dust absorbed. Doing so ends that pellet's magic.",
    uses: Math.floor(Math.random() * (4 - 1) + 1),
    weight: "0.25kg",
  },
  {
    name: "Dust of Sneezing and Choking",
    description:
      "Found in a small container, this powder resembles very fine sand. It appears to be Dust of Disappearance, and an Identify spell reveals it to be such. There is enough of it for one use. When you use an action to throw a handful of the dust into the air, you and each creature that needs to breathe within 30 feet of you must succeed on a DC 15 Constitution saving throw or become unable to breathe while sneezing uncontrollably. A creature affected in this way is Incapacitated and Suffocating. As long as it is conscious, a creature can repeat the saving throw at the end of each of its turns, Ending the Effect on it on a success. The Lesser Restoration spell can also end the Effect on a creature",
    weight: "0.25kg",
  },
  {
    name: "Keoghtom's Ointment",
    description:
      "This glass jar, 3 inches in diameter, contains a thick mixture that smells faintly of aloe. As an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8 + 2 hit points, ceases to be poisoned, and is cured of any disease.",
    uses: Math.floor(Math.random() * (5 - 2) + 2),
    weight: "0.5kg",
  },
  {
    name: "Oil of Slipperiness",
    description:
      "This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. The oil can cover a Medium or smaller creature, along with the Equipment it's wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the Effect of a freedom of Movement spell for 8 hours. Alternatively, the oil can be poured on the ground as an action, where it covers a 10-foot square, duplicating the Effect of the Grease spell in that area for 8 hours.",
    weight: "0.25kg",
  },
  {
    name: "+2 Ammunition",
    description: "You have a +2 bonus to attack and damage rolls made with this piece of magic ammunition. Once it hits a target, the ammunition is no longer magical.",
    uses: Math.floor(Math.random() * (6 - 1) + 1),
    weight: "0.1kg each",
  },
  {
    name: "Adamantine Armor",
    description: "This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit. (choose a medium or heavy armor and add some weight",
  },
  {
    name: "Helm of Comprehend Languages",
    description: "While wearing this helm, you can use an action to cast the comprehend Languages spell from it at will.",
    weight: "3kg",
  },
  {
    name: "Potion of Flying GAMECHANGING",
    description:
      "When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. If you're in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion's clear liquid floats at the top of its container and has cloudy white impurities drifting in it.",
    weight: "0.25kg",
  },
  {
    name: "+3 Ammunition",
    description: "You have a +3 bonus to attack and damage rolls made with this piece of magic ammunition. Once it hits a target, the ammunition is no longer magical.",
    uses: Math.floor(Math.random() * (6 - 1) + 1),
    weight: "0.25kg each",
  },
  {
    name: "Arrow of Slaying",
    description:
      "An arrow of slaying is a Magic Weapon meant to slay a particular kind of creature. Some are more focused than others; for example, there are both Arrows of Dragon slaying and Arrows of blue Dragon slaying. If a creature belonging to the type, race, or group associated with an arrow of slaying takes damage from the arrow, the creature must make a DC 17 Constitution saving throw, taking an extra 6d10 piercing damage on a failed save, or half as much extra damage on a successful one.",
    weight: "0.25kg",
  },
  {
    name: "Golden Lion (1)",
    description:
      "If you use an action to speak the command word and throw the figurine to a point on the ground within 60 feet of you, the figurine becomes a living creature. If the space where the creature would appear is occupied by other creatures or objects, or if there isn't enough space for the creature, the figurine doesn't become a creature. The creature is friendly to you and your companions. It understands your languages and obeys your spoken commands. If you issue no commands, the creature defends itself but takes no other actions.",
    weight: "0.25kg",
  },
  {
    name: "4th Level Spell Scroll",
    spellScroll: true,
    variant: levelFiveSpells,
  },
  {
    name: "Dust of Dryness",
    description:
      "This small packet contains 1d6 + 4 pinches of dust. You can use an action to sprinkle a pinch of it over water. The dust turns a cube of water 15 feet on a side into one marble-sized pellet, which floats or rests near where the dust was sprinkled. The pellet's weight is negligible. Someone can use an action to smash the pellet against a hard surface, causing the pellet to Shatter and release The Water the dust absorbed. Doing so ends that pellet's magic.",
    uses: Math.floor(Math.random() * (6 - 1) + 1),
    weight: "0.25kg",
  },
  {
    name: "Driftglobe",
    description:
      "This small sphere of thick glass weighs 1 pound. If you are within 60 feet of it, you can speak its command word and cause it to emanate the light or daylight spell. Once used, the daylight effect can't be used again until the next dawn. You can speak another command word as an action to make the illuminated globe rise into the air and float no more than 5 feet off the ground. The globe hovers in this way until you or another creature grasps it. If you move more than 60 feet from the hovering globe, it follows you until it is within 60 feet of you. It takes the shortest route to do so. If prevented from moving, the globe sinks gently to the ground and becomes inactive, and its light winks out.",
    weight: "0.5kg",
  },
  {
    name: "Berserker Axe CURSED",
    description:
      "You gain a +1 bonus to Attack and Damage Rolls made with this Magic Weapon. In addition, while you are attuned to this weapon, your Hit Points maximum increases by 1 for each level you have attained. CURSE: This axe is Cursed, and becoming attuned to it extends the curse to you. As long as you remain Cursed, you are unwilling to part with the axe, keeping it within reach at all times. You also have disadvantage on Attack rolls with Weapons other than this one, unless no foe is within 60 feet of you that you can see or hear. Whenever a Hostile creature damages you while the axe is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action each round to Attack the creature nearest to you with the axe. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to Attack the next nearest creature after you fell your current target. If you have multiple possible Targets, you Attack one at random. You are berserk until you start Your Turn with no Creatures within 60 feet of you that you can see or hear.",
  },
  {
    name: "Mithral Armor",
    description:
      "Mithral is a light, flexible metal. A mithral Chain Shirt or Breastplate can be worn under normal clothes. If the armor normally imposes disadvantage on Dexterity (Stealth) checks or has a Strength requirement, the mithral version of the armor doesn’t. (choose an armortype that isn't hide)",
  },
  {
    name: "Armor of Vulnerability CURSED",
    description:
      "While wearing this armor, you have Resistance to one of the following damage types: bludgeoning, piercing, or slashing. The GM chooses the type or determines it randomly. CURSE: This armor is Cursed, a fact that is revealed only when an Identify spell is cast on the armor or you attune to it. Attuning to the armor Curses you until you are targeted by the Remove Curse spell or similar magic; removing the armor fails to end the curse. While Cursed, you have vulnerability to two of the three Damage Types associated with the armor (not the one to which it grants resistance).",
  },
  {
    name: "Trident of Fish Command",
    description: "This Trident is a Magic Weapon. It has 3 Charges. While you carry it, you can use an action and expend 1 charge to cast Dominate Beast (save DC 15) from it on a beast that has an innate Swimming speed. The Trident regains 1d3 expended Charges daily at dawn.",
    weight: "2kg",
  },
  {
    name: "Bead of Force (1)",
    description:
      "The bead explodes on impact and is destroyed. Each creature within a 10-foot radius of where the bead landed must succeed on a DC 15 Dexterity saving throw or take 5d4 force damage. A Sphere of transparent force then encloses the area for 1 minute. Any creature that failed the save and is completely within the area is trapped inside this Sphere. Creatures that succeeded on the save, or are partially within the area, are pushed away from the center of the Sphere until they are no longer inside it. Only breathable air can pass through the sphere's wall. No Attack or other Effect can. An enclosed creature can use its action to push against the sphere's wall, moving the Sphere up to half the creature's walking speed. The Sphere can be picked up, and its magic causes it to weigh only 1 pound, regardless of the weight of Creatures inside.",
    uses: 1,
  },
  {
    name: "Elemental Gem",
    variant: [
      {
        name: "Blue Sapphire Elemental Gem",
        description: "This gem contains a mote of elemental energy. When you use an action to break the gem, an air elemental is summoned as if you had cast the Conjure Elemental spell, and the gem's magic is lost.",
      },
      {
        name: "Yellow Diamond Elemental Gem",
        description: "This gem contains a mote of elemental energy. When you use an action to break the gem, an earth elemental is summoned as if you had cast the Conjure Elemental spell, and the gem's magic is lost.",
      },
      {
        name: "Red Corundum Elemental Gem",
        description: "This gem contains a mote of elemental energy. When you use an action to break the gem, an fire elemental is summoned as if you had cast the Conjure Elemental spell, and the gem's magic is lost.",
      },
      {
        name: "Emerald Elemental Gem",
        description: "This gem contains a mote of elemental energy. When you use an action to break the gem, a water elemental is summoned as if you had cast the Conjure Elemental spell, and the gem's magic is lost.",
      },
    ],
  },
  {
    name: "Potion of Clairvoyance",
    description: "When you drink this potion, you gain the effect of the clairvoyance spell. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.",
    weight: "0.25kg",
  },
  {
    name: "Potion of Vitality",
    description:
      "When you drink this potion, it removes any exhaustion you are suffering and cures any disease or poison affecting you. For the next 24 hours, you regain the maximum number of hit points for any Hit Die you spend. The potion's crimson liquid regularly pulses with dull light, calling to mind a heartbeat.",
    weight: "0.25kg",
  },
  {
    name: "Sword of Vengeance CURSED",
    description:
      "You gain a +1 bonus to attack and damage rolls made with this magic weapon. CURSE: This sword is cursed and possessed by a vengeful spirit. Becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the sword, keeping it on your person at all times. While attuned to this weapon, you have disadvantage on attack rolls made with weapons other than this one. In addition, while the sword is on your person, you must succeed on a DC 15 Wisdom saving throw whenever you take damage in combat. On a failed save, you must attack the creature that damaged you until you drop to 0 hit points or it does, or until you can't reach the creature to make a melee attack against it. You can break the curse in the usual ways. Alternatively, casting Banishment on the sword forces the vengeful spirit to leave it. The sword then becomes a +1 weapon with no other properties.",
  },
  {
    name: "Weapon +1",
    description: "You have a +1 bonus to attack and damage rolls made with this magic weapon.",
  },
  {
    name: "Cap of Water Breathing",
    description:
      "While wearing this cap underwater, you can speak its command word as an action to create a bubble of air around your head. It allows you to breathe normally underwater. This bubble stays with you until you speak the command word again, the cap is removed, or you are no longer underwater.",
    weight: "1kg",
  },
  {
    name: "Eversmoking Bottle",
    description:
      "Smoke leaks from the lead-stoppered mouth of this brass bottle, which weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke pours out in a 60-foot radius from the bottle. The cloud's area is heavily obscured. Each minute the bottle remains open and within the cloud, the radius increases by 10 feet until it reaches its maximum radius of 120 feet. The cloud persists as long as the bottle is open. Closing the bottle requires you to speak its Command word as an action. Once the bottle is closed, the cloud disperses after 10 minutes. A moderate wind (11 to 20 miles per hour) can also disperse the smoke after 1 minute, and a Strong Wind (21 or more miles per hour) can do so after 1 round.",
    weight: "0.5kg",
  },
  {
    name: "Quiver of Ehlonna",
    description:
      "Each of the quiver's three compartments connects to an extradimensional space that allows the quiver to hold numerous items while never weighing more than 2 pounds. The shortest compartment can hold up to sixty arrows, bolts, or similar objects. The midsize compartment holds up to eighteen javelins or similar objects. The longest compartment holds up to six long objects, such as bows, quarterstaffs, or spears. You can draw any item the quiver contains as if doing so from a regular quiver or scabbard.",
    weight: "2kg",
  },
  {
    name: "Ioun Stone Sustenance",
    description: "Upon attuning to it, you don’t need to eat or drink while this clear spindle orbits your head.",
    weight: "0.5kg",
  },
  {
    name: "Ivory Goat (Traveling)",
    description:
      "Can become a Large goat with the same statistics as a riding horse. It has 24 charges, and each hour or portion thereof it spends in beast form costs 1 charge. While it has charges, you can use it as often as you wish. When it runs out of charges, it reverts to a figurine and can't be used again until 7 days have passed, when it regains all its charges.",
    weight: "0.5kg",
  },
  {
    name: "Ring of Warmth",
    description: "While wearing this ring, you have Resistance to cold damage. In addition, you and everything you wear and carry are unharmed by temperatures as low as -50 degrees Fahrenheit.",
    weight: "0.1kg",
  },
  {
    name: "Sword of Life-Stealing",
    description: "When you Attack a creature with this Magic Weapon and roll a 20 on the Attack roll, that target takes an extra 3d6 necrotic damage, provided that the target isn’t a Construct or an Undead. You gain temporary Hit Points equal to the extra damage dealt.",
  },
];
