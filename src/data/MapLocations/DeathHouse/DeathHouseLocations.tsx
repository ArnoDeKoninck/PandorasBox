import { PointOfIntrest } from "../../../types/GlobalTypes";

export const DeathHouseLocations: PointOfIntrest[] = [
	{
		name: "Entrance",
		coordinates: { x: 9.5, y: 93.8 },
		type: "location",
		note: "A wrought-iron gate with hinges on one side and a lock on the other fills the archway of a stone portico. The gate is unlocked, and its rusty hinges shriek when the gate is opened. Oil lamps hang from the portico ceiling by chains, flanking a set of oaken doors that open into a grand foyer.",
	},
	{
		name: "Foyer",
		coordinates: { x: 9.5, y: 86.8 },
		type: "location",
		note: "Mahogany-framed double doors leading from the foyer to the main hall are set with panes of stained glass.",
	},
	{
		name: "Coat of arms",
		coordinates: { x: 11.5, y: 86.8 },
		type: "search",
		note: "Hanging on the south wall is a shield emblazoned with a coat-of-arms (a stylized golden windmill on a red field), flanked by framed portraits of stony-faced aristocrats (long-dead members of the Durst family).",
	},
	{
		name: "Main Hall",
		coordinates: { x: 14.1, y: 79.9 },
		type: "location",
		note: "The Main hall spans the width of the house",
	},
	{
		name: "Fireplace",
		coordinates: { x: 6.5, y: 80.3 },
		type: "search",
		note: "Mounted on the wall above the black marble fireplace is a longsword (nonmagical) with a windmill cameo worked into the hilt",
	},
	{
		name: "Staircase",
		coordinates: { x: 20.5, y: 80.3 },
		type: "search",
		note: "A sweeping, red marble staircase curving upward to the second floor. The wood-paneled walls in the main hall are ornately sculpted with images of vines, flowers, nymphs, and satyrs and follow the staircase upward.",
		events: [
			<p>
				Characters who search the walls for secret doors or otherwise inspect the paneling can, with a successful DC 12 Wisdom (Perception) check, see serpents and skulls inconspicuously woven into the wall designs. The decorative paneling follows the staircase as it circles upward to the second
				floor.
			</p>,
		],
	},
	{
		name: "Cloakroom",
		coordinates: { x: 14.1, y: 75.8 },
		type: "location",
		note: "A cloakroom has several black cloaks hanging from hooks on the walls. A top hat sits on a high shelf",
	},
	{
		name: "Hunter's Den",
		coordinates: { x: 18, y: 88 },
		type: "location",
		note: "This oak-paneled room looks like a hunter's den. Mounted above the fireplace is a stag's head, and positioned around the outskirts of the room are three stuffed wolves. Two padded chairs draped in animal furs face the hearth, with an oak table between them supporting a cask of wine, two carved wooden goblets, a pipe rack, and a candelabrum. A chandelier hangs above a cloth-covered table surrounded by four chairs. Two cabinets stand against the walls.",
	},
	{
		name: "Hunting Cabinet",
		coordinates: { x: 20.3, y: 85 },
		type: "search",
		note: "The east cabinet sports a lock that can be picked with thieves' tools and a successful DC 15 Dexterity check. ",
		events: [<p>If opened, it holds a heavy crossbow, a light crossbow, a hand crossbow, and 20 bolts for each weapon.</p>],
	},
	{
		name: "Wine Cabinet",
		coordinates: { x: 14.2, y: 86.4 },
		type: "search",
		note: "This cabinet is unlocked and holds a small box containing a deck of playing cards and an assortment of wine glasses.",
	},
	{
		name: "Kitchen",
		coordinates: { x: 21.3, y: 74 },
		type: "location",
		note: "The kitchen is tidy, with dishware, cookware, and utensils neatly placed on shelves. A worktable has a cutting board and rolling pin atop it. A stone, dome-shaped oven stands near the east wall, its bent iron stovepipe connecting to a hole in the ceiling. Behind the stove and to the left is a thin door.",
	},
	{
		name: "Pantry",
		coordinates: { x: 21.3, y: 69.1 },
		type: "location",
		note: "A well-stocked pantry. All the food in the pantry appears fresh but tastes bland.",
	},
	{
		name: "Dumbwaiter",
		coordinates: { x: 23.8, y: 77.8 },
		type: "search",
		note: "A dumbwaiter: a 2-foot-wide stone shaft containing a wooden elevator box attached to a simple rope-and-pulley mechanism that must be operated manually. (The shaft connects to the servants' quarters and the master bedroom). Hanging on the wall next to the dumbwaiter is a tiny brass bell attached by wires to buttons in those other areas.",
		events: [<p>A Small character can squeeze into the elevator box with a successful DC 10 Dexterity (Acrobatics) check. The dumbwaiter's rope-and-pulley mechanism can support 200 pounds of weight before breaking.</p>],
	},
	{
		name: "Dining Room",
		coordinates: { x: 13.3, y: 71.5 },
		type: "location",
		note: "The centerpiece of this wood-paneled dining room is a carved mahogany table surrounded by eight high-backed chairs with sculpted armrests and cushioned seats. A crystal chandelier hangs above the table, which is covered with resplendent silverware and crystalware polished to a dazzling shine. Mounted above the marble fireplace is a mahogany-framed painting of an alpine vale. Red silk drapes cover the windows, and a tapestry depicting hunting dogs and horse-mounted aristocrats chasing after a wolf hangs from an iron rod bolted to the south wall.",
		events: [
			<p>
				The wall paneling is carved with elegant images of deer among the trees. Characters who search the walls for secret doors or otherwise inspect the paneling can, with a successful DC 12 Wisdom (Perception) check, see twisted faces carved into the tree trunks and wolves lurking amid the carved
				foliage.
			</p>,
		],
	},
	{
		name: "Upper Hall",
		coordinates: { x: 36.7, y: 80.3 },
		type: "location",
		note: "You see that the second floor landing is just as elegant as the first, with wood paneling and a large, marble hearth on the back wall. Above the hearth is a family portrait of an aristocratic man and woman and their two smiling children, who you immediately recognize as Rose and Thorn. Cradled in the father's arms is a swaddled baby, which the mother regards with thinly veiled scorn. There are standing suits of decorative armor flanking two pairs of doors. One set of doors is wooden and cracked open. A quick glance within reveals a warm study. The other set of doors is set with stained glass and you can see the warm glow of lamplight coming from within. As you watch, you see the light flicker as someone moves behind the door.",
	},
	{
		name: "Standing Armor Displays",
		coordinates: { x: 38.5, y: 83.2 },
		type: "search",
		note: "Standing suits of armor flank wooden doors in the east and west walls. Each suit of armor clutches a spear and has a visored helm shaped like a wolf's head. The doors are carved with dancing youths, although close inspection and a successful DC 12 Wisdom (Perception) check reveals that the youths aren't really dancing but fighting off swarms of bats.",
	},
	{
		name: "Red Marble Staircase",
		coordinates: { x: 42.5, y: 80.3 },
		type: "search",
		note: "The red marble staircase that started on the first floor continues its upward spiral to the third floor. A cold draft can be felt coming down the steps.",
	},
	{
		name: "Servant's Room",
		coordinates: { x: 45.8, y: 74.5 },
		type: "location",
		note: "An undecorated bedroom contains a pair of beds with straw-stuffed mattresses. At the foot of each bed is an empty footlocker.",
	},
	{
		name: "Servant's Closet",
		coordinates: { x: 41.3, y: 75.8 },
		type: "search",
		note: "Tidy servants' uniforms hang from hooks in the adjoining closet",
	},
	{
		name: "Servant's Dumbwaiter",
		coordinates: { x: 48, y: 77.8 },
		type: "search",
		note: "A dumbwaiter in the corner of the west wall has a button on the wall next to it. Pressing the button rings the tiny bell in the kitchen downstairs.",
	},
	{
		name: "Library",
		coordinates: { x: 36.5, y: 73.5 },
		type: "location",
		note: "Red velvet drapes cover the windows of this room. An exquisite mahogany desk and a matching high-back chair face the entrance and the fireplace, above which hangs a framed picture of a windmill perched atop a rocky crag. Situated in corners of the room are two overstuffed chairs. Floor-to-ceiling bookshelves line the south wall. A rolling wooden ladder allows one to more easily reach the high shelves.",
	},
	{
		name: "Library Desk",
		coordinates: { x: 36.3, y: 71 },
		type: "search",
		note: "The desk has several items resting atop it: an oil lamp, a jar of ink, a quill pen, a tinderbox, and a letter kit containing a red wax candle, four blank sheets of parchment, and a wooden seal bearing the Durst family's insignia (a windmill).",
	},
	{
		name: "Library Bookshelves",
		coordinates: { x: 41, y: 72.7 },
		type: "search",
		note: "The bookshelves hold hundreds of tomes covering a range of topics including history, warfare, and alchemy. There are also several shelves containing first-edition collected works of poetry and fiction.",
		events: [
			<p>
				A secret door behind one bookshelf can be unlocked and swung open by pulling on a switch disguised to look like a red-covered book with a blank spine. A character inspecting the bookshelf spots the fake book with a successful DC 13 Wisdom (Perception) check. Unless the secret door is propped
				open, springs in the hinges cause it to close on its own. Beyond the secret door lies area 9.
			</p>,
		],
	},
	{
		name: "Library Secret Room Bookshelf",
		coordinates: { x: 44.6, y: 69.3 },
		type: "search",
		note: "This secret room contains bookshelves packed with tomes describing fiend-summoning rituals and the necromantic rituals of a cult called the Priests of Osybus. The rituals are bogus, which any character can ascertain after studying the books for 1 hour and succeeding on a DC 12 Intelligence (Arcana) check.",
	},
	{
		name: "Library Secret Room Treasure Chest",
		coordinates: { x: 47.6, y: 69.3 },
		type: "search",
		note: "A heavy wooden chest with clawed iron feet stands against the south wall, its lid half-closed. Sticking out of the chest is a skeleton in leather armor. Close inspection reveals that the skeleton belongs to a human who triggered a poisoned dart trap. Three darts are stuck in the dead adventurer's armor and ribcage. The dart-firing mechanism inside the chest no longer functions. Clutched in the skeleton's left hand is a letter bearing the seal of Strahd von Zarovich, which the adventurer tried to remove from the chest.",
		events: [
			<p>
				The chest contains three blank books with black leather covers (worth 25 gp each), three spell scrolls (bless, protection from poison, and spiritual weapon), the deed to the house, the deed to a windmill, and a signed will. The windmill referred to in the second deed is situated in the
				mountains east of Vallaki. The will is signed by Gustav and Elisabeth Durst and bequeathes the house, the windmill, and all other family property to Rosavalda and Thornboldt Durst in the event of their parents' deaths. The books, scrolls, deeds, and will age markedly if taken from the house
				but remain intact.
			</p>,
		],
	},
	{
		name: "Conservatory",
		coordinates: { x: 39.9, y: 88 },
		type: "location",
		note: "Gossamer drapes cover the windows of this elegantly appointed hall, which has a brass-plated chandelier hanging from the ceiling. Upholstered chairs line the walls, and stained-glass wall hangings depict beautiful men, women, and children singing and playing instruments. A harpsichord with a bench rests in the northwest corner. Near the fireplace is a large standing harp. Alabaster figurines of well-dressed dancers adorn the mantelpiece. Close inspection of them reveals that several are carvings of well-dressed skeletons.",
	},
	{
		name: "Conservatory Harpiscord",
		coordinates: { x: 34.8, y: 90.1 },
		type: "search",
		note: "A frightened old hound dog is hiding beneath the harpsichord. The dog wears an aged leather collar bearing the name, “Lancelot.”. Lancelot is rail thin and starving, terrified of any character who approaches him. However",
		events: [<p>He can be coaxed from his hiding place with a DC 10 Wisdom (Animal Handling) check, rolled with advantaged if offered food. Lancelot offers the players an alternative choice for the sacrifice in the "One Must Die" sequence later in the adventure.</p>],
	},
	{
		name: "Balcony",
		coordinates: { x: 16.5, y: 51.7 },
		type: "location",
		note: "There is no light on this floor and frigid cold air rushes past the characters climbing the red marble staircase to its full height. They come to a dusty balcony with two suits of black plate armor standing against one wall, draped in cobwebs. These suits of animated armor attack as soon as they takes damage or a character approaches within 5 feet of it. They fight until destroyed. Oil lamps are mounted on the oak-paneled walls, which are carved with woodland scenes of trees, falling leaves, and tiny critters. Characters who search the walls for secret doors or otherwise inspect the paneling can, with a successful DC 12 Wisdom (Perception) check, notice tiny corpses hanging from the trees and worms bursting up from the ground.",
	},
	{
		name: "Boarded-up Doors",
		coordinates: { x: 17.5, y: 55.1 },
		type: "search",
		note: "This door is heavily boarded-up with planks and nails. (The door cannot be broken into with sheer force but a PC with a crowbar or similar tools can attempt a DC 15 Strength (Athletics) check to slowly pry them off. Note that the door is also locked and can only be opened after the boards are removed and an additional DC 15 Dexterity(Thieves' tools) or DC 20 Strength(Athletics) check has succeeded.)",
	},
	{
		name: "Boarded-up Doors",
		coordinates: { x: 17.5, y: 57.5 },
		type: "search",
		note: "This door is heavily boarded-up with planks and nails. (The door cannot be broken into with sheer force but a PC with a crowbar or similar tools can attempt a DC 15 Strength (Athletics) check to slowly pry them off. Note that the door is also locked and can only be opened after the boards are removed and an additional DC 15 Dexterity(Thieves' tools) or DC 20 Strength(Athletics) check has succeeded.)",
	},
	{
		name: "Master Suite Doors",
		coordinates: { x: 12.7, y: 46.5 },
		type: "search",
		note: "The double doors to this room have dusty panes of stained glass set into them. Designs in the glass resemble windmills.",
	},
	{
		name: "Master Suite",
		coordinates: { x: 12.9, y: 43.3 },
		type: "location",
		note: "The dusty, cobweb-filled master bedroom has burgundy drapes covering the windows. Furnishings include a four-poster bed with embroidered curtains and tattered gossamer veils, a matching pair of empty wardrobes, a vanity with a wood-framed mirror and jewelry box, and a padded chair. A rotting tiger-skin rug lies on the floor in front of the fireplace, which has a dust-covered portrait of Gustav and Elisabeth Durst hanging above it. A web-filled parlor in the southeast corner contains a table and two chairs. Resting on the dusty tablecloth is an empty porcelain bowl and a matching jug.",
	},
	{
		name: "Master Suite Closet",
		coordinates: { x: 17.3, y: 47.5 },
		type: "search",
		note: "A door facing the foot of the bed has a full-length mirror mounted on it. The door opens to reveal an empty, dust-choked closet",
	},
	{
		name: "Master Suite Balcony Door",
		coordinates: { x: 23.5, y: 44.7 },
		type: "search",
		note: "A door in the parlor that leads to an outside balcony",
	},
	{
		name: "Master Suite Dumbwaiter",
		coordinates: { x: 23.9, y: 49.3 },
		type: "search",
		note: "A dumbwaiter in the corner of the west wall has a button on the wall next to it. Pressing the button rings the tiny bell in the kitchen on the first floor.",
	},
	{
		name: "Master Suite Jewelry Box",
		coordinates: { x: 21.8, y: 46.1 },
		type: "search",
		note: "The jewelry box on the vanity is made of silver with gold filigree (worth 75 gp). It contains three gold rings (worth 25 gp each) and a thin platinum necklace with a topaz pendant (worth 750 gp). It also has a letter inside of it.",
	},
	{
		name: "Bathroom",
		coordinates: { x: 9.3, y: 50.6 },
		type: "location",
		note: "This dark room contains a wooden tub with clawed feet, a small iron stove with a kettle resting atop it, and a barrel under a spigot in the east wall. A cistern on the roof used to collect rainwater, which was borne down a pipe to the spigot; however, the plumbing no longer works.",
	},
	{
		name: "Storage Room",
		coordinates: { x: 9.8, y: 53.7 },
		type: "location",
		note: "Dusty shelves line the walls of this room. A few of the shelves have folded sheets, blankets, and old bars of soap on them. A cobweb-covered broom leans against the far wall.",
	},
	{
		name: "Nursemaid's Room",
		coordinates: { x: 18.5, y: 60.3 },
		type: "location",
		note: "Dust and cobwebs shroud an elegantly appointed bedroom and an adjoining nursery. Double doors set with panes of stained glass pull open to reveal a balcony overlooking the front of the house. The bedroom contains a large bed, two end tables, and an empty wardrobe. Mounted on the wall next to the wardrobe is a full-length mirror with an ornate wooden frame carved to look like ivy and berries. Characters who search the wall for secret doors or otherwise inspect the mirror can, with a successful DC 12 Wisdom (Perception) check, notice eyeballs among the berries.",
	},
	{
		name: "Nursemaid's Room Nursery",
		coordinates: { x: 10, y: 57.3 },
		type: "location",
		note: "The nursery contains a crib covered with a hanging black shroud. When characters part the shroud, they see a tightly wrapped, baby-sized bundle lying in the crib. Characters who unwrap the blanket find nothing inside it.",
	},
	{
		name: "Nursemaid's Room Balcony",
		coordinates: { x: 9.6, y: 61.5 },
		type: "location",
		note: "You can enter this balcony by pulling open the double doors of stained glass. The balcony overlooks the front of the house.",
	},
	{
		name: "Attic Hall",
		coordinates: { x: 43, y: 50.8 },
		type: "location",
		note: "This bare hall is choked with dust and cobwebs.",
	},
	{
		name: "Spare Bedroom",
		coordinates: { x: 43.5, y: 61.3 },
		type: "location",
		note: "This dust-choked room contains a slender bed, a nightstand, a small iron stove, a writing desk with a stool, an empty wardrobe, and a rocking chair. A smiling doll in a lacy yellow dress sits in the northern window box, cobwebs draping it like a wedding veil.",
	},
	{
		name: "Storage Room",
		coordinates: { x: 35.4, y: 53.8 },
		type: "location",
		note: "This dusty chamber is packed with old furniture (chairs, coat racks, standing mirrors, dress mannequins, and the like), all draped in dusty white sheets. Near an iron stove, underneath one of the sheets, is an unlocked wooden trunk containing the skeletal remains of the family's nursemaid, wrapped in a tattered bedsheet stained with dry blood. A character inspecting the remains and succeeding on a DC 14 Wisdom (Medicine) check can verify that the woman was stabbed to death by multiple knife wounds.",
		events: [
			<p>Should the players find the nursemaid’s body, they can match the clothing on the corpse with Margaret’s ghostly clothes with a DC 10 Intelligence (History) check.</p>,
			<p>
				If the players somehow missed meeting Margaret, she appears now. Upon seeing her own corpse, Margaret dissolves into disbelieving tears. “No!” she cries. “What happened to me?!”. She then flies through the floor towards her rooms, where she remains should the players wish to confront her
				further. By the time the players reach Margaret in her suite, she has already forgotten seeing her body and proceeds with thenormal encounter in the Nursemaid’s Suite section.
			</p>,
		],
	},
	{
		name: "Spare Bedroom",
		coordinates: { x: 34, y: 43.8 },
		type: "location",
		note: "This web-filled room contains a slender bed, a nightstand, a rocking chair, an empty wardrobe, and a small iron stove.",
	},
	{
		name: "Children's Bedroom Door",
		coordinates: { x: 41.5, y: 46.5 },
		type: "search",
		note: "The door to this room is locked from the outside with a big iron padlock. (Can be opened with DC 15 (Thieves' tools) or the key in the library desk.)",
	},
	{
		name: "Children's Bedroom",
		coordinates: { x: 41.3, y: 42.8 },
		type: "location",
		note: "This room contains a bricked-up window flanked by two dusty, wood-framed beds sized for children. Closer to the door is a toy chest with windmills painted on its sides and a dollhouse that's a perfect replica of the dreary edifice in which you stand. These furnishings are draped in cobwebs. Lying in the middle of the floor are two small skeletons wearing tattered but familiar clothing. The smaller of the two cradles a stuffed doll that you also recognize.",
	},
	{
		name: "Dollhouse",
		coordinates: { x: 38.9, y: 44.6 },
		type: "search",
		note: "The toy chest contains an assortment of stuffed animals and toys. Characters who search the dollhouse and succeed on a DC 15 Wisdom (Perception) check find all of the house's secret doors, including one in the attic that leads to a spiral staircase.",
	},
	{
		name: "The kids find their corpses",
		coordinates: { x: 44.3, y: 44.6 },
		type: "event",
		note: "Once players discover their remains, Rose and Thorn reappear within this room. Though this time, they appear ghostly and transparent. Upon seeing their bodies, Rose and Thorn suddenly regain the lost memories of their deaths. Though saddened, they are surprisingly at ease with the revelation. If asked about their acceptance, Rose tells the players she thinks, deep down, she always knew she was dead. Rose also expresses honest remorse for unwittingly trapping the party within the house. She admits it was not her intention and if she had had her memories, she would have warned them away instead of bidding them inside.",
		events: [
			<ul>
				Rose gets new information:
				<li style={{ marginTop: "1rem" }}>The children's parents would lock them in their room to keep them safe while they dealt with the monster in the basement.</li>
				<li style={{ marginTop: "1rem" }}>The monster sounds like horrible screaming from the basement. It was their parents who told them it was monster after they inquired about the screams. Their parents told them nothing of its nature.</li>
				<li style={{ marginTop: "1rem" }}>Rose could hear Walter’s wailing the last time she and Thorn were locked away. She doesn’t know why he was taken or who could have done so, but she worries for the baby’s safety.</li>
				<li style={{ marginTop: "1rem" }}>Margaret never quit the family. Margaret was supposed to come check on Rose and Thorn if they were locked away for too long, but Margaret never came.</li>
				<li style={{ marginTop: "1rem" }}>Rose and Thorn starved to death. They were “so very hungry, but no one came when we cried. And then the hunger went away and we grew very cold and went to sleep.</li>
			</ul>,
			<p style={{ marginTop: "1rem" }}>She begs the players to find out what happened to Walter and their parents. And, if the monster still lives, she asks them to destroy the creature. She wishes no one else come to harm from the beast.</p>,
			<p>
				If the players didn't explore much and lack gear, Rose informs the party that her parents kept some hunting equipment in the den on the first floor. She encourages them to take what they need to slay the monster. Rose then reveals the secret staircase to basement by referring to her
				dollhouse.
			</p>,
		],
	},
	{
		name: "Secret Stairway",
		coordinates: { x: 32.5, y: 48.8 },
		type: "search",
		note: "A narrow spiral staircase made of creaky wood is contained within a 5-foot-wide shaft of mortared stone that starts in the attic and descends 50 feet to the dungeon level, passing through the lower levels of the house as it makes its descent. Thick cobwebs fill the shaft and reduce visibility in the staircase to 5 feet.",
		events: [<p>The door materializes and can be found when:</p>, <p>The characters find Strahd's letter in the secret room behind the library</p>, <p>The characters find the replica secret door in the attic of the dollhouse</p>],
	},
	{
		name: "Dungeon Level Access",
		coordinates: { x: 71.3, y: 16.5 },
		type: "location",
		note: "The wooden spiral staircase from the attic ends here. A narrow tunnel stretches southward before branching east and west. The dungeon level underneath Death House is carved out of earth, clay, and rock. The tunnels are 4 feet wide by 7 feet high with timber braces at 5-foot intervals. Rooms are 8 feet tall and supported by thick wooden posts with crossbeams. The only exception is area 38, which has a 16-foot-high ceiling supported by stone pillars. Characters without darkvision must provide their own light sources, as the dungeon is unlit. As the characters explore the dungeon, they see centuries-old human footprints in the earthen floor leading every which way.",
	},
	{
		name: "Family Crypts",
		coordinates: { x: 77.65, y: 18.8 },
		type: "location",
		note: "Several crypts have been hewn from the earth. Each crypt is sealed with a stone slab unless noted otherwise. Removing a slab from its fitting requires a successful DC 15 Strength (Athletics) check; using a crowbar or the like grants advantage on the check.",
	},
	{
		name: "Blank Crypt",
		coordinates: { x: 83.3, y: 12.2 },
		type: "search",
		note: "The blank stone slab meant to seal this crypt leans against a nearby wall. The crypt is empty.",
	},
	{
		name: "Walter's Crypt",
		coordinates: { x: 83.3, y: 16.6 },
		type: "search",
		note: "The stone slab meant to seal this crypt leans against a nearby wall. Etched into it is the name Walter Durst. The crypt is empty.",
	},
	{
		name: "Gustav's Crypt",
		coordinates: { x: 83.3, y: 21 },
		type: "search",
		note: "The stone slab is etched with the name Gustav Durst. The chamber beyond contains an empty coffin atop a stone bier.",
	},
	{
		name: "Elisabeth's Crypt",
		coordinates: { x: 83.3, y: 25.3 },
		type: "search",
		note: "The stone slab is etched with the name Elisabeth Durst. The crypt contains a stone bier with an empty coffin atop it. A swarm of insects (centipedes) boils out of the back wall and attacks if the coffin is disturbed.",
	},
	{
		name: "Swarm of insects",
		coordinates: { x: 86, y: 25.3 },
		type: "trap",
		note: "If the crypt is opened and entered, a swarm of insects, centipedes and other bugs crawl and rush out of the crypt and onto whoever opened it. Encounter with Swarm of insects.",
	},
	{
		name: "Elisabeth's Crypt",
		coordinates: { x: 68.7, y: 21 },
		type: "search",
		note: "The stone slab is etched with the name Rosavalda Durst. The chamber beyond contains an empty coffin on a stone bier. If Rose's skeletal remains (see area 20) are placed in the coffin, the child's ghost finds peace and disappears forever. A character possessed by Rose's ghost when this occurs is no longer possessed",
	},
	{
		name: "Elisabeth's Crypt",
		coordinates: { x: 68.7, y: 25.3 },
		type: "search",
		note: "The stone slab is etched with the name Thornboldt Durst. The chamber beyond contains an empty coffin on a stone bier. If Thorn's skeletal remains (see area 20) are placed in the coffin, the child's ghost finds peace and disappears forever. A character possessed by Thorn's ghost when this occurs is no longer possessed",
	},
	{
		name: "Cult Initiates' Quarters",
		coordinates: { x: 62.5, y: 12.1 },
		type: "location",
		note: "A wooden table and four chairs stand at the east end of this room. To the west are four alcoves containing moldy straw pallets.",
	},
	{
		name: "Well and Cultist Quarters",
		coordinates: { x: 45.6, y: 24 },
		type: "location",
		note: "A 4-foot-diameter well shaft with a 3-foot-high stone lip descends 30 feet to a water-filled cistern. A wooden bucket hangs from a rope-and-pulley mechanism bolted to the crossbeams above the well. Five side rooms once served as quarters for senior cultists. Each contains a wood-framed bed with a moldy straw mattress and a wooden chest to hold personal belongings. Each chest is secured with a rusty iron padlock that can be picked with thieves' tools and a successful DC 15 Dexterity check.",
	},
	{
		name: "Chest",
		coordinates: { x: 47.5, y: 16.3 },
		type: "search",
		note: "This room's chest contains 11 gp and 60 sp in a pouch made of human skin.",
	},
	{
		name: "Chest",
		coordinates: { x: 44.9, y: 18.7 },
		type: "search",
		note: "This room's chest contains three moss agates (worth 10 gp each) in a folded piece of black cloth.",
	},
	{
		name: "Chest",
		coordinates: { x: 38.2, y: 25.2 },
		type: "search",
		note: "This room's chest contains a black leather eyepatch with a carnelian (worth 50 gp) sewn into it.",
		flavorText: [
			<p>
				Cultist’s Logbook. Bound in grimy black leather, this journal maintains a list of names, physical descriptions, and the negative results of some event. One of the head cultists maintained this logbook as a record of the cult’s victims. The second column logs the physical description of each
				victim named in the first column, while the third column bears a single word for each entry: "Unsuccessful."
			</p>,
		],
	},
	{
		name: "Chest",
		coordinates: { x: 44.8, y: 29.8 },
		type: "search",
		note: "This room's chest contains an ivory hairbrush with silver bristles (worth 25 gp).",
	},
	{
		name: "Chest",
		coordinates: { x: 47.3, y: 32.2 },
		type: "search",
		note: "This room's chest contains a silvered shortsword (worth 110 gp).",
	},
	{
		name: "Hidden Pitfall",
		coordinates: { x: 62.35, y: 31.9 },
		type: "trap",
		note: "The occasional baby cries are getting louder the more you head south. A successful DC 15 Wisdom (Perception) check reveals an absence of footprints. Characters searching the floor for traps find a 5-foot-long, 10-foot-deep pit hidden under several rotted wooden planks, all hidden under a thin layer of dirt. The pit has sharpened wooden spikes at the bottom. The first character to step on the cover falls through, landing prone and taking 3 (1d6) bludgeoning damage from the fall plus 11 (2d10) piercing damage from the spikes.",
	},
	{
		name: "Dining Hall",
		coordinates: { x: 71.4, y: 29.7 },
		type: "location",
		note: "This room contains a plain wooden table flanked by long benches. Moldy humanoid bones lie strewn on the dirt floor—the remains of the cult's vile banquets",
	},
	{
		name: "Alcove",
		coordinates: { x: 83.35, y: 29.7 },
		type: "trap",
		note: "This alcove contains a grick that slithers out to attack the first character it sees within 5 feet of it. Any character with a passive Wisdom (Perception) score under 12 is surprised by it. The alcove is otherwise empty.",
	},
	{
		name: "Ghoul Encounter",
		coordinates: { x: 71.4, y: 36.3 },
		type: "trap",
		note: "The ghostly chanting heard throughout the dungeon is noticeably louder to the north. When one or more characters reach the midpoint of the four-way tunnel intersection, four ghouls (former cultists) rise up out of the ground.",
	},
	{
		name: "Stairs Down",
		coordinates: { x: 59.4, y: 40.6 },
		type: "location",
		note: "It's obvious to any character standing at the top of this 20-foot-long staircase that the ghostly chants originate from somewhere below. Characters who descend the stairs and follow the hall beyond arrive in the lowest part of the basement.",
	},
	{
		name: "Darklord's Shrine",
		coordinates: { x: 85, y: 42.85 },
		type: "location",
		flavorText: [
			<p style={{ fontStyle: "italic" }}>"This room is festooned with moldy skeletons that hang from rusty shackles against the walls.</p>,
			<p style={{ fontStyle: "italic" }}>
				A wide alcove in the south wall contains a painted wooden statue carved in the likeness of a gaunt, pale-faced man wearing a voluminous black cloak, his pale left hand resting on the head of a wolf that stands next to him. In his right hand, he holds a smoky-gray crystal orb.
			</p>,
			<p style={{ fontStyle: "italic" }}>The room has exits in the west and north walls. Chanting can be heard coming from the west."</p>,
		],
		note: "The statue depicts Strahd, to whom the cultists made sacrifices in the vain hope that he might reveal his darkest secrets to them. If the characters touch the statue or take the crystal orb from Strahd's hand, five shadows form around the statue and attack them. The shadows (the spirits of former cultists) pursue those who flee beyond the room's confines. The skeletons on the wall are harmless decor.",
	},
	{
		name: "Concealed Door and trapdoor",
		coordinates: { x: 83.5, y: 37.5 },
		type: "search",
		note: "Characters searching the room for secret doors find a concealed door in the middle of the east wall with a successful DC 10 Wisdom (Perception) check. It's basically an ordinary (albeit rotted) wooden door hidden under a layer of clay. The door pulls open to reveal a stone staircase that climbs 10 feet to a landing behind it.The staircase ends at a landing with a 6-foot-high ceiling of close-fitting planks with a wooden trapdoor set into it. The trapdoor is bolted shut from this side and can be pushed open to reveal the den above.",
	},
	{
		name: "Mimic Door",
		coordinates: { x: 79.45, y: 49.4 },
		type: "trap",
		note: "The door in the southwest corner is a mimic in disguise. Any creature that touches the door becomes adhered to the creature, whereupon the mimic attacks. The mimic also attacks if its takes any damage.",
	},
	{
		name: "Cult Leaders' Den",
		coordinates: { x: 74.3, y: 47.2 },
		type: "location",
		note: "A chandelier is suspended above a table in the middle of the room. Two high-backed chairs flank the table, which has an empty clay jug and two clay flagons atop it. Iron candlesticks stand in two corners, their candles long since melted away.",
	},
	{
		name: "Cult Leaders' Quarters",
		coordinates: { x: 62.4, y: 50.3 },
		type: "location",
		note: "This room contains a large wood-framed bed with a rotted feather mattress, a wardrobe containing several old robes, a pair of iron candlesticks, and an open crate containing thirty torches and a leather sack with fifteen candles inside it. At the foot of the bed is an unlocked wooden footlocker containing some gear and magic items",
	},
	{
		name: "Ghast encounter",
		coordinates: { x: 62.4, y: 45.1 },
		type: "trap",
		note: "Two ghasts (Gustav and Elisabeth Durst) are hidden in cavities behind the earthen walls. They burst forth and attack if someone removes one or more items from the footlocker. The ghasts wear tattered black robes.",
	},
	{
		name: "Ghast encounter",
		coordinates: { x: 56.5, y: 49.5 },
		type: "trap",
		note: "Two ghasts (Gustav and Elisabeth Durst) are hidden in cavities behind the earthen walls. They burst forth and attack if someone removes one or more items from the footlocker. The ghasts wear tattered black robes.",
	},
	{
		name: "Footlocker",
		coordinates: { x: 62.4, y: 48.3 },
		type: "search",
		note: "Characters searching the footlocker find a folded cloak of protection, a small wooden coffer (unlocked) containing four potions of healing, a chain shirt, a mess kit, a flask of alchemist's fire, a bullseye lantern, a set of thieves' tools, and a spellbook with a yellow leather cover containing the following wizard spells: 1st level: disguise self, identify, mage armor, magic missile, protection from evil and good, 2nd level: darkvision, hold person, invisibility, magic weapon",
	},
	{
		name: "Reliquary",
		coordinates: { x: 71.4, y: 60.5 },
		type: "location",
		note: "The ghostly chant emanating from area 38 fills this room. Characters can discern a dozen or so voices saying, over and over, 'He is the Ancient. He is the Land.' The cult amassed several relics that it used in its rituals. These worthless items are stored in thirteen niches along the walls.",
	},
	{
		name: "Wooden Sun",
		coordinates: { x: 65.45, y: 56.7 },
		type: "search",
		note: "A wooden symbol of a sun, splattered and stained with blood.",
	},
	{
		name: "Tarrokka Deck",
		coordinates: { x: 68.45, y: 56.7 },
		type: "search",
		note: "An aged Tarroka deck, in such foul conditon some cards are unreadable, rendering the deck useless",
	},
	{
		name: "A severed finger",
		coordinates: { x: 71.45, y: 56.7 },
		type: "search",
		note: "The finger is from a hag and feels almost calcified.",
	},
	{
		name: "A bone dagger",
		coordinates: { x: 74.45, y: 56.7 },
		type: "search",
		note: "A dagger carved from a human bone.",
	},
	{
		name: "A broken silvered bolt",
		coordinates: { x: 77.45, y: 56.7 },
		type: "search",
		note: "It shines brightly, tho broken and unusable",
	},
	{
		name: "A Jar",
		coordinates: { x: 79.45, y: 58.25 },
		type: "search",
		note: "In the jar float a bunch of severed raven talons, soaking in wine.",
	},
	{
		name: "A crown of vines",
		coordinates: { x: 79.45, y: 60.5 },
		type: "search",
		note: "Black intertwined vines form a crown of sorts.",
	},
	{
		name: "Frog on a stick",
		coordinates: { x: 79.45, y: 62.5 },
		type: "search",
		note: "A desiccated frog lashed to a stick.",
	},
	{
		name: "A big cracked egg",
		coordinates: { x: 77.6, y: 64.1 },
		type: "search",
		note: "Contains the skeletal remains of a dragon foetus.",
	},
	{
		name: "A pure white feather",
		coordinates: { x: 71.6, y: 64.1 },
		type: "search",
		note: "The feather is really big and shines a pure white brilliance.",
	},
	{
		name: "A chunk of amber",
		coordinates: { x: 65.6, y: 64.1 },
		type: "search",
		note: "You see a hand sized chunk of orange amber.",
	},
	{
		name: "A dagger",
		coordinates: { x: 63.8, y: 62.5 },
		type: "search",
		note: "The dagger has a bat's skull set into the pommel and gives of an auro of authority.",
	},
	{
		name: "Small wooden coffer",
		coordinates: { x: 63.8, y: 60.5 },
		type: "search",
		note: "A small wooden coffer containing a dire wolf's withered tongue",
	},
	{
		name: "Prison",
		coordinates: { x: 62.4, y: 75.7 },
		type: "location",
		note: "The cultists shackled prisoners to the back walls of alcoves here. The prisoners are long gone, but the rusty shackles remain.",
	},
	{
		name: "Secret Door",
		coordinates: { x: 66.8, y: 75.7 },
		type: "search",
		note: "A secret door in the east wall can be found with a successful DC 15 Wisdom (Perception) check and pulls open to reveal the area beyond.",
	},
	{
		name: "Hanging Skeleton",
		coordinates: { x: 59.5, y: 78.3 },
		type: "search",
		note: "Hanging on the back wall of the cell is a human skeleton clad in a tattered black robe. The skeleton belongs to a cult member who questioned the cult's blind devotion to Strahd. Characters who search the skeleton find a gold ring (worth 25 gp) on one of its bony fingers.",
	},
	{
		name: "Portculis",
		coordinates: { x: 74.5, y: 68 },
		type: "location",
		note: "This tunnel is blocked by a rusty iron portcullis that can be forcibly lifted with a successful DC 20 Strength (Athletics) check. Otherwise, the portcullis can be raised or lowered by turning a wooden wheel half-embedded in the east wall of the area beyond it. (The wheel is beyond the reach of someone north of the portcullis.) The floor around the portcullis is submerged under 2 feet of murky water",
	},
	{
		name: "Portculis",
		coordinates: { x: 78.8, y: 73 },
		type: "location",
		flavorText: [
			<p style={{ fontStyle: "italic" }}>
				The chanting stops as you peer into this forty-foot-square room. The smooth masonry walls provide excellent acoustics. Featureless stone pillars support the ceiling, and a breach in the west wall leads to a dark cave heaped with refuse. Murky water covers most of the floor.{" "}
			</p>,
			<p>
				Stairs lead up to dry stone ledges that hug the walls. In the middle of the room, more stairs rise to form an octagonal dais that also rises above the water. Rusty chains with shackles dangle from the ceiling directly above a stone altar mounted on the dais. The altar is carved with hideous
				depictions of grasping ghouls and is stained with dry blood.
			</p>,
		],
		note: "The water is 2 feet deep. The ledges and central dais are 5 feet high (3 feet higher than the water's surface), and the chamber's ceiling is 16 feet high (11 feet above the dais and ledges). The chains dangling from the ceiling are 8 feet long; the cultists would shackle prisoners to the chains, dangle them above the altar, cut them open with knives, and allow the altar to be bathed in blood.",
	},
	{
		name: "One Must Die!",
		coordinates: { x: 78.8, y: 76.8 },
		type: "event",
		flavorText: [
			<p style={{ fontStyle: "italic" }}>
				The chanting rises once more as thirteen dark apparitions appear on the ledges overlooking the room. Each one resembles a black-robed figure holding a torch, but the torch's fire is black and seems to draw light into it. Where you'd expect to see faces are voids. "One must die!" they chant,
				over and over. "One must die! One must die!"
			</p>,
		],
		note: "Characters on the dais when the cultists appear must sacrifice a creature on the altar or face the cult's wrath; characters can ascertain what must be done with a successful DC 11 Intelligence (Religion) or Wisdom (Insight) check. To count as a sacrifice, a creature must die on the altar. The apparitions don't care what kind of creature is sacrificed, and they aren't fooled by illusions.",
		events: [
			<p>If the characters make the sacrifice, the cultists fade away, but their tireless chant of "He is the Ancient. He is the Land," echoes again in the dungeon. Strahd is aware of the sacrifice, and Death House now does nothing to hinder the characters</p>,
			<p>
				If the characters leave the dais without making the sacrifice, the cultists' chant changes: "Lorghoth the Decayer, we awaken thee!" This chant rouses the shambling mound and prompts it to attack. It pursues prey beyond the room but won't leave the dungeon. It can move through tunnels without
				squeezing and completely fills its space. At the start of the shambling mound's first turn, the chant changes again: "The end comes! Death, be praised!" If the shambling mound dies, the chanting stops and the apparitions vanish forever.
			</p>,
		],
	},
	{
		name: "Walter",
		coordinates: { x: 76, y: 87.45 },
		type: "trap",
		note: "A Flesh mount lies sleeping in the corner. The baby walter has been fused to the core of the flesh mount and awakens when the cultists are not appeased or time runs out. He attacks the party if awakened.",
	},
];
