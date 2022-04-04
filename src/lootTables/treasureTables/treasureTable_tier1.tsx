import { cantrips } from "../../spells/cantrips";
import { levelOneSpells } from "../../spells/1stLevelSpells";
import { levelTwoSpells } from "../../spells/2ndLevelSpells";

export const treasureTable_tier1 = [
  {
    name: "Cantrip Spell Scroll",
    spellScroll: true,
    variant: cantrips,
  },
  {
    name: "Healing potion",
    description: "2D4+2 magical healing",
    weight: "0.25kg",
  },
  {
    name: "Quaal's Feather Token (Anchor)",
    description: "You can use an action to touch the token to a boat or ship. For the next 24 hours, the vessel can't be moved by any means. Touching the token to the vessel again ends the Effect. When the Effect ends, the token disappears.",
    weight: "0.1kg",
  },
  {
    name: "Quaal's Feather Token (Anchor)",
    description: "You can use an action to touch the token to a boat or ship. For the next 24 hours, the vessel can't be moved by any means. Touching the token to the vessel again ends the Effect. When the Effect ends, the token disappears.",
    weight: "0.1kg",
  },
  {
    name: "1st Level spell scroll",
    spellScroll: true,
    variant: levelOneSpells,
  },
  {
    name: "Philter of Love",
    description:
      "The next time you see a creature within 10 minutes after drinking this philter, you become charmed by that creature for 1 hour. If the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are charmed. This potion's rose-hued, effervescent liquid contains one easy-to-miss bubble shaped like a heart.",
    weight: "0.25kg",
  },
  {
    name: "Potions of Poison",
    description:
      "This concoction looks, smells, and tastes like a potion of Healing or other beneficial potion. However, it is actually poison masked by Illusion magic. An Identify spell reveals its true Nature.If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be Poisoned. At the start of each of your turns while you are Poisoned in this way, you take 3d6 poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0.",
    weight: "0.25kg",
  },
  {
    name: "Elixir of Health",
    description: "When you drink this potion, it cures any disease afflicting you, and it removes the blinded, deafened, paralyzed, and poisoned conditions. The clear red liquid has tiny bubbles of light in it.",
    weight: "0.25kg",
  },
  {
    name: "Keoghtom's Ointment (1 dose)",
    description:
      "This glass jar, 3 inches in diameter, contains 1 dose of a thick mixture that smells faintly of aloe. As an action, one dose of the ointment can be swallowed or applied to the skin. The creature that receives it regains 2d8 + 2 hit points, ceases to be poisoned, and is cured of any disease.",
    weight: "0.25kg",
  },
  {
    name: "2nd level Spell Scroll",
    spellScroll: true,
    variant: levelTwoSpells,
  },
  {
    name: "+1 ammunition",
    uses: Math.floor(Math.random() * (6 - 1) + 1),
    weight: "0.1kg each",
  },
  {
    name: "Potion of Fire Breath",
    description:
      "After drinking this potion, you can use a bonus action to exhale fire at a target within 30 feet of you. The target must make a DC 13 Dexterity saving throw, taking 4d6 fire damage on a failed save, or half as much damage on a successful one. The effect ends after you exhale the fire three times or when 1 hour has passed.This potion's orange liquid flickers, and smoke fills the top of the container and wafts out whenever it is opened.",
    weight: "0.25kg",
  },
  {
    name: "Potion of Greater healing",
    description: "You regain 4d4 + 4 hit points when you drink this potion. The potion's red liquid glimmers when agitated.",
    weight: "0.25kg",
  },
  {
    name: "Potion of Climbing",
    description:
      "When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength (Athletics) checks you make to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors.",
    weight: "0.25kg",
  },
  {
    name: "Potion of Heroism",
    description: "For 1 hour after drinking it, you gain 10 temporary Hit Points that last for 1 hour. For the same Duration, you are under the Effect of the bless spell (no Concentration required). This blue potion bubbles and steams as if boiling.",
    weight: "0.25kg",
  },
  {
    name: "Potion of invisibility",
    description: "This potion's container looks empty but feels as though it holds liquid. When you drink it, you become Invisible for 1 hour. Anything you wear or carry is Invisible with you. The Effect ends early if you Attack or Cast a Spell.",
    weight: "0.25kg",
  },
  {
    name: "Potion of Mind reading",
    description: "When you drink this potion, you gain the Effect of the Detect Thoughts spell (save DC 13). The potion's dense, purple liquid has an ovoid cloud of pink floating in it.",
    weight: "0.25kg",
  },
  {
    name: "Potion of Water Breathing",
    description: "You can breathe Underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of The Sea and has a jellyfish-like bubble floating in it.",
    weight: "0.25kg",
  },
  {
    name: "Scroll of Protection",
    description:
      "Each scroll of protection works against a specific type of creature. Using an action to read the scroll encloses you in a invisible barrier that extends from you to form a 5-foot-radius, 10-foot-high cylinder. For 5 minutes, this barrier prevents creatures of the specified type from entering or affecting anything within the cylinder. The cylinder moves with you and remains centered on you. However, if you move in such a way that a creature of the specified type would be inside the cylinder, the effect ends. A creature can attempt to overcome the barrier by using an action to make a DC 15 Charisma check. On a success, the creature ceases to be affected by the barrier.",
  },
  {
    name: "Potion of Animal Friendship",
    description: "When you drink this potion, you can cast the Animal Friendship spell (save DC 13) for 1 hour at will. Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair.",
    weight: "0.25kg",
  },
  {
    name: "Nolzur's Marvelous Pigments",
    description:
      "Typically found in 1d4 pots inside a fine wooden box with a brush (weighing 1 pound in total), these pigments allow you to create three-dimensional Objects by painting them in two dimensions. The paint flows from the brush to form the desired object as you concentrate on its image. Each pot of paint is sufficient to cover 1,000 square feet of a surface, which lets you create inanimate Objects or terrain features—such as a door, a pit, flowers, trees, cells, rooms, or weapons— that are up to 10,000 cubic feet. It takes 10 minutes to cover 100 square feet. When you complete the painting, the object or terrain feature depicted becomes a real, nonmagical object. Thus, painting a door on a wall creates an actual door that can be opened to whatever is beyond. Painting a pit on a floor creates a real pit, and its depth counts against the total area of Objects you create. Nothing created by the pigments can have a value greater than 25 gp. If you paint an object of greater value (such as a Diamond or a pile of gold), the object looks authentic, but close inspection reveals it is made from paste, bone, or some other worthless material. If you paint a form of energy such as fire or lightning, the energy appears but dissipates as soon as you complete the painting, doing no harm to anything.",
    weight: "0.25kg",
  },
];
