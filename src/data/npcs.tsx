import { Npc, Factions } from "src/types/GlobalTypes";
import { v4 as uuid } from "uuid";
/* */
export const npcs: Npc[] = [
	{
		name: "Abbot",
		image: "abbot.webp",
		species: "Deva",
		age: "Unknown",
		voice: "heavenly, monotone, emotionless",
		alignment: "Lawful Neutral",
		location: "Abbey of Saint Markova",
		description: [
			<p id={uuid()}>The Abbot is a corruted deva of the Everlight (Morninglord), whose divine purpose is to relieve the people of Barovia from their strife. He believes that the King is immortal, and the prevailing tactic should be his appeasement.</p>,
			<p id={uuid()}>He offers his services in healing and resurrection in exchange for body parts that he uses to build a vessel for Tatyana's soul in an attempt to appease Strahd and save thousands in the maintime.</p>,
			<p id={uuid()}>He wants Ireena to regain Tatyana's lost memories as he believes it's a crucial part in embedding Tatyana's soul into Vasilka.</p>,
			<p id={uuid()}>He points the PCs in the direction of the Amber Temple and it's secrets and can offer the party vague information regarding Barovia if they agree to help his cause.</p>,
		],
		cr: 10,
		tags: [Factions.KREZK],
	},
	{
		name: "Adrian Martikov",
		image: "adrian_martikov.webp",
		species: "Human",
		age: "38 Years old",
		alignment: "Lawful Good",
		location: "Wizards of the Wines Winery",
		description: [
			<p id={uuid()}>Adrian is the eldest son of Davian Martikov, and the main protector of the Wizard of the Wines.</p>,
			<p id={uuid()}>Adrian is the de facto leader of the Keepers of the Feather. His father, while still holding the formal position, has passed on most of his work to Adrian.</p>,
			<p id={uuid()}>
				As such, Adrian is hooked into just about everything. He's got a collection of knowledge that would blow your party away if he tried to dump it all at once. Instead, provided the party proves friendly and helpful, Adrian will slowly filter information to them to help in the party's endeavors
				against Strahd. If there's something he doesn't know, Adrian will privately send some of his raven spies to try and glean some intel, which he'll then relay to the party via a letter.
			</p>,
			<p id={uuid()}>Adrian is also the only family member in contact with Urwin because of their mutual duties in the Keepers.</p>,
		],
		cr: 2,
		tags: [Factions.KREZK, Factions.MARTIKOVS],
	},
	{
		name: "Alenka",
		image: "alenka.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>Alenka is one of three owners of the Blood of the Vine tavern, and outcasts from the Tser Pool camp.</p>],
		cr: 1,
		tags: [Factions.BAROVIA, Factions.VISTANI],
	},
	{
		name: "Alexei",
		image: "alexei.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.VALLAKI, Factions.VISTANI],
	},
	{
		name: "Amalthia",
		image: "amalthia.webp",
		species: "Human",
		age: "Early-20s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>Amalthia is the junior maid at Wachterhaus and the discontented helper of Stella.</p>],
		cr: 0,
		tags: [Factions.VALLAKI],
	},
	{
		name: "Anastraya Karelova",
		image: "anastrasya_karelova.webp",
		species: "Human Vampire",
		age: "160 years old(Visually mid-20's)",
		alignment: "Neutral Evil",
		description: [<p id={uuid()}>Anastrasya is a former Vallakian noblewoman and consort of Strahd.</p>],
		cr: 6,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Anna Krezkova",
		image: "anna_krezkova.webp",
		species: "Human",
		age: "Late-40s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>Burgomistress Anna Krezkova is a mother who has endured the deaths of all of her children. She is proud to have managed to revive one through her plea to the Abbot of Markovia.</p>],
		cr: 0.125,
		tags: [Factions.KREZK],
	},
	{
		name: "Arabelle",
		image: "arabelle.png",
		species: "Human ",
		age: "10 Years old",
		alignment: "Neutral Good",
		description: [<p id={uuid()}>Arabelle is the only daughter of Luvash, and granddaughter of Madam Eva. She has the latter's gift of foresight.</p>],
		cr: 0,
		tags: [Factions.VALLAKI, Factions.VISTANI],
	},
	{
		name: "Argynvorst",
		image: "argynvorst.webp",
		species: "Silver Dragon",
		age: "Around 900(Died around 500)",
		alignment: "Lawful Good",
		description: [<p id={uuid()}>Lord Argynvost was the commanding founder of the Order of the Silver Dragon, and is widely considered to have been Strahd's greatest adversary during the latter's conquest.</p>],
		cr: 16,
		tags: [Factions.ORDER_OF_THE_SILVER_DRAGON],
	},
	{
		name: "Ariel Du Plumette",
		image: "ariel_du_plumette.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Arik Lorensk",
		image: "arik_lorensk.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.BAROVIA, Factions.SOULLESS],
	},
	{
		name: "Arrigal",
		image: "arrigal.webp",
		species: "Human",
		age: "Mid 30's",
		alignment: "True Neutral",
		description: [<p id={uuid()}>Arrigal is Luvash's roguish younger brother and second-in-command of the greater Vistani camp.</p>],
		cr: 8,
		tags: [Factions.VALLAKI, Factions.VISTANI],
	},
	{
		name: "Aziana",
		image: "aziana.webp",
		species: "Human Werewolf",
		age: "Late-20's",
		alignment: "Chaotic Neutral",
		description: [<p id={uuid()}>Aziana is a childhood friend of Zuleika, and a guard of the Werewolf Den.</p>],
		cr: 3,
		tags: [Factions.WOR_GOL],
	},
	{
		name: "Baba Lysaga",
		image: "baba_lysaga.webp",
		species: "Human",
		age: "Around 450",
		alignment: "Chaotic Evil",
		description: [<p id={uuid()}>Lysaga went by a different name in her youth as Strahd's nursemaid. She became obsessed with him, even following his deadly conquests into Barovia after she became estranged from him. She now immortally rules the swamp of Berez.</p>],
		cr: 11,
		tags: [Factions.BEREZ],
	},
	{
		name: "Bella Sunbane",
		image: "bella_sunbane.webp",
		species: "Human",
		age: "Early-50s",
		alignment: "Neutral Good",
		description: [<p id={uuid()}>Bella Sunbane is the daughter of Morgantha, and a baker in Old Bonegrinder.</p>],
		cr: 3,
		tags: [Factions.OLD_BONEGRINDER],
	},
	{
		name: "Beucephalus",
		image: "beucephalus.webp",
		species: "Nightmare",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Bianca Stoyanova",
		image: "bianca.webp",
		species: "Human Werewolf",
		age: "Mid-30s",
		alignment: "Chaotic Evil",
		description: [<p id={uuid()}>Bianca is the sadistic mate of Kiril, sharing much of his philosophy on what a werewolf should be.</p>],
		cr: 3,
		tags: [Factions.WOR_GOL],
	},
	{
		name: "Bildrath Cantemir",
		image: "bildrath_cantemir.webp",
		species: "Human",
		age: "Mid-50s",
		alignment: "Lawful Neutral",
		description: [<p id={uuid()}>Bildrath Cantemir has retained the most successful general store in Barovia village through his shrewd and diligent ways.</p>],
		cr: 0,
		tags: [Factions.BAROVIA],
	},
	{
		name: "Bluto Krogarov",
		image: "bluto_krogarov.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "Chaotic Evil",
		description: [<p id={uuid()}>Bluto is the town fisherman and drunk. A riot at night, but lonely by day. He is privately very religious and deluded.</p>],
		cr: 0,
		tags: [Factions.VALLAKI, Factions.SOULLESS],
	},

	{
		name: "Bray Martikov",
		image: "bray_martikov.webp",
		species: "Human",
		age: "7 years old",
		alignment: "True Neutral",
		location: "Blue Water Inn",
		description: [<p id={uuid()}>Youngest son of Urwin Martikov and Danika Darakova.</p>],
		cr: 0.25,
		tags: [Factions.VALLAKI, Factions.MARTIKOVS],
	},
	{
		name: "Brom Martikov",
		image: "brom_martikov.webp",
		species: "Human",
		age: "10 years old",
		alignment: "True Neutral",
		location: "Blue Water Inn",
		description: [<p id={uuid()}>Eldest son of Urwin Martikov and Danika Darakova.</p>],
		cr: 0.25,
		tags: [Factions.VALLAKI, Factions.MARTIKOVS],
	},
	{
		name: "Caecorum Domina",
		image: "caecorum_domina.webp",
		species: "Dark power",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.DARK_POWERS],
	},
	{
		name: "Claudiu Tomescu",
		image: "claudiu_tomescu.webp",
		species: "Human",
		age: "14 Years old",
		alignment: "True Neutral",
		location: "Wizards of the Wines Winery",
		description: [<p id={uuid()}>Firstborn son of Dag Tomescu and Stefania Martikov and second oldest child</p>, <p id={uuid()}>Dag and Stefania did their best to raise their children in the most normal way possible. They are blissfully unaware of the dark corners of Barovia.</p>],
		cr: 0.5,
		tags: [Factions.VALLAKI, Factions.MARTIKOVS],
	},
	{
		name: "Clovin Belview",
		image: "clovin_belview.webp",
		species: "Human Mongrelfolk",
		age: "Around 40",
		alignment: "Neutral Evil",
		description: [<p id={uuid()}>Clovin is the bell-ringer and cook for the residents of the Abbey of St. Markovia. He is also a drunk, and talented violinist.</p>],
		cr: 0.25,
		tags: [Factions.BELVIEWS],
	},
	{
		name: "Cyrus Belview",
		image: "cyrus_belview.webp",
		species: "Human Mongrelfolk",
		age: "Mid-50s",
		alignment: "Neutral Evil",
		description: [<p id={uuid()}>Cyrus is a fearful, mad servant of Strahd, having formerly been the head servant at the Abbey of St. Markovia.</p>],
		cr: 0.25,
		tags: [Factions.BELVIEWS, Factions.RAVENLOFT],
	},
	{
		name: "Dag Tomescu",
		image: "dag_tomescu.webp",
		species: "Human",
		age: "29 Years Old",
		alignment: "Lawful Good",
		location: "Wizards of the wines Winery",
		description: [
			<p id={uuid()}>Dag is the husband of Stefania and father of four at the Wizard of the Wines.</p>,
			<p id={uuid()}>
				Dag is extremely family oriented and absolutely loves the people of this household. Dag is definitely the homemaker here and is the main mediator of conflicts and primary shoulder to cry on. Dag has been trying (in vain) for years to get Davian to contact Urwin so the two may resolve their
				differences.
			</p>,
		],
		cr: 2,
		tags: [Factions.KEEPERS_OF_THE_FEATHER],
	},
	{
		name: "Danika Darakova",
		image: "danika_darakova.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "Lawful Good",
		description: [<p id={uuid()}>Danika is the tough but kind-hearted owner of the Blue Water Inn in Vallaki.</p>],
		cr: 2,
		tags: [Factions.VALLAKI],
	},
	{
		name: "Davanka ",
		image: "davanka.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.WOR_GOL],
	},
	{
		name: "Davian Martikov",
		image: "davian_martikov.webp",
		species: "Human",
		age: "Late-60s",
		alignment: "Lawful Good",
		location: "Wizards of the Wines Winery",
		description: [
			<p id={uuid()}>Davian is the widower patriarch of the Martikov family, and the owner of the Wizard of the Wines Winery.</p>,
			<p id={uuid()}>Davian is the family patriarch. He is a quirky grouch and takes everything very seriously. ref: Mr.Filch from Harry potter</p>,
			<p id={uuid()}>He is the former leader of the Keepers of the Feather, and has been training his son, Adrian, to take over the role.</p>,
			<p id={uuid()}>The Winery comes first to him to the point of his children feeling neglected. Play him like an overworked father that chooses business meetings over his family. Yes, he loves them but his work defines him quite a bit more than his kin.</p>,
		],
		cr: 2,
		tags: [Factions.MARTIKOVS],
	},
	{
		name: "Dhavit",
		image: "dhavit.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.VALLAKI],
	},
	{
		name: "Dimira Yolensky",
		image: "dimira_yolensky.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.KREZK],
	},
	{
		name: "Dmitri Kreskov",
		image: "dmitri_krezkov.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.KREZK],
	},
	{
		name: "Donavich",
		image: "donavich.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.BAROVIA],
	},
	{
		name: "Doru",
		image: "doru.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.BAROVIA],
	},
	{
		name: "Dread Titania",
		image: "dread_titania.webp",
		species: "Dark Power",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.DARK_POWERS],
	},
	{
		name: "Drusilla",
		image: "drusilla.webp",
		species: "Beast",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Elizabeth Garland",
		image: "elizabeth_garland.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Elvir Martikov",
		image: "elvir_martikov.webp",
		species: "Human",
		age: "31 years old",
		alignment: "True Neutral",
		location: "Wizards of the Wines Winery",
		description: [
			<p id={uuid()}>Fourth and youngest child of Davian Martikov.</p>,
			<p id={uuid()}>Elvir is the one most interested in running the vineyard. He's got a real understanding of nature and producing the best wine. While Stephania runs the books, Elvir runs the production side of things in the winery</p>,
		],
		cr: 1,
		tags: [Factions.MARTIKOVS],
	},
	{
		name: "Emil Toranescu",
		image: "emil_toranescu.webp",
		species: "Human Werewolf",
		age: "Early-30's",
		alignment: "Chaotic Neutral",
		description: [<p id={uuid()}>Emil is a former alpha of the werewolf pack and a prisoner of Strahd, after the vampire's interference in the civil struggle.</p>],
		cr: 3,
		tags: [Factions.RAVENLOFT, Factions.WOR_GOL],
	},
	{
		name: "Endorovich The Terrible",
		image: "endorovich_the_terrible.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Ernst Larnak",
		image: "ernst_larnak.webp",
		species: "Human",
		age: "Mid-40's",
		alignment: "Neutral Evil",
		description: [<p id={uuid()}>Larnak is the guileful spy and tactical advisor of Lady Wachter.</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Escher Belasco",
		image: "escher.png",
		species: "Half-Human Half-Dusk Elf, Vampire",
		age: "Around 120(Physically Early-20s)",
		alignment: "Chaotic Evil",
		description: [<p id={uuid()}>Escher is the only surviving male consort of Strahd, and fights viciously to remain as such.</p>],
		cr: 6,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Exethanter",
		image: "exethanter.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Ezmeralda D'Avenir",
		image: "ezmeralda_d_avenir.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Fiona Wachter",
		image: "fiona_wachter.webp",
		species: "Human",
		age: "57 Years old",
		alignment: "Neutral Evil",
		description: [<p id={uuid()}>Lady Fiona Wachter is the matriarch of the second most powerful family in Vallaki. She seeks to make them the very most.</p>],
		cr: 2,
		tags: [],
	},
	{
		name: "Franz Groza",
		image: "franz_groza.webp",
		species: "Human",
		age: "Late 20's",
		alignment: "True Neutral",
		description: [<p id={uuid()}>Franz is the artistic nephew of Skennis, former alpha of the werewolf pack.</p>],
		cr: 3,
		tags: [],
	},
	{
		name: "Gadof Blinsky",
		image: "gadof_blinsky.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Gertruda",
		image: "gertruda.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Godfrey Gwilym",
		image: "godfrey_gwilym.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Gunter & Yelena Arasek",
		image: "gunther_and_yelena_arasek.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Haliq",
		image: "haliq.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Helga Ruvak",
		image: "helga_ruvak.webp",
		species: "Human Vampire",
		age: "Around 60(Physically Mid-20s)",
		alignment: "Lawful Evil",
		description: [<p id={uuid()}>Helga is the melancholic and enigmatic maid at Ravenloft.</p>],
		cr: 5,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Helwa",
		image: "helwa.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Hendrik Van Der Voort",
		image: "henrik_van_der_voort.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Ireena Kolyana",
		image: "ireena_kolyana.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.BAROVIA],
	},
	{
		name: "Ismark Kolyanovich",
		image: "ismark_kolyanovich.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.BAROVIA],
	},
	{
		name: "Izek Stranzi",
		image: "izek_stranzi.webp",
		species: "Human Vampire",
		age: "20 Years Old",
		alignment: "Lawful Evil",
		description: [<p id={uuid()}>Izek is Baron Vargas' infamously brutal protégé and captain of the guard in Vallaki.</p>],
		cr: 5,
		tags: [],
	},
	{
		name: "Jeser",
		image: "jeser.webp",
		species: "Dark Power",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Karl Wachter",
		image: "karl_wachter.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Kasimir Velikov",
		image: "kasimir_velikov.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Kellen",
		image: "kellen.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Kiril Stoyanovich",
		image: "kiril_stoyanovich.webp",
		species: "Human Werewolf",
		age: "Mid-30s",
		alignment: "Chaotic Evil",
		description: [<p id={uuid()}>Kiril is the controversial leader of the werewolf pack in Barovia, having seized command after the mysterious death of his rival, Emil Toranescu.</p>],
		cr: 4,
		tags: [],
	},
	{
		name: "Klutz Tripalotsky",
		image: "klutz_tripalotsky.webp",
		species: "Undead",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Kolya",
		image: "Kolya.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Kretyana Dolvof",
		image: "kretyana_dolvof.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Kroval 'Mad Dog' Grislek",
		image: "kroval_grislek.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Lars Kjurls",
		image: "lars_kjurls.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Lazlo Ulrich",
		image: "lazlo_ulrich.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Lief Lipsiege",
		image: "lief_lipsiege.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Lord Goran",
		image: "lord_goran.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Lucian Petrovich",
		image: "lucian_petrovich.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Ludmilla Vilisevic",
		image: "ludmilla_vilisevic.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Luvash",
		image: "luvash.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "Chaotic Neutral",
		description: [<p id={uuid()}>Luvash is the son of Madam Eva, and the de-facto leader of the Vistani in Barovia.</p>],
		cr: 2,
		tags: [],
	},
	{
		name: "Lydia Petrovna",
		image: "lydia_petrovna.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Mad Mage of Mt. Baratok",
		image: "mad_mage_of_mt_baratok.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Mad Mary",
		image: "mad_mary.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.BAROVIA],
	},
	{
		name: "Madalena",
		image: "madalena.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Madam Eva",
		image: "madam_eva.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Majesto",
		image: "majesto.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Martin Martikov",
		image: "bray_martikov.webp",
		species: "Human",
		age: "8 years old",
		alignment: "True Neutral",
		location: "Wizards of the Wines Winery",
		description: [<p id={uuid()}>Second born son of Dag Tomescu and Stefania Martikov and third child</p>, <p id={uuid()}>Dag and Stefania did their best to raise their children in the most normal way possible. They are blissfully unaware of the dark corners of Barovia.</p>],
		cr: 0.25,
		tags: [Factions.MARTIKOVS],
	},
	{
		name: "Marzena Belview",
		image: "marzena_belview.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Milivoj",
		image: "milivoj.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Mirabel",
		image: "mirabel.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.BAROVIA],
	},
	{
		name: "Mishka Belview",
		image: "mishka_belview.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Morgantha",
		image: "morgantha.webp",
		species: "Human",
		age: "Early-70s",
		alignment: "Neutral Good",
		description: [<p id={uuid()}>Morgantha is the matriarch of the trio living in Old Bonegrinder, and frequents Barovia village to sell her Dream Pastries.</p>],
		cr: 5,
		tags: [Factions.BAROVIA],
	},
	{
		name: "Muriel Vinshaw",
		image: "muriel_vinshaw.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Neferon",
		image: "neferon.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Nikolai Wachter Jr.",
		image: "nikolai_wachter_jr.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Offalia Wormwiggle",
		image: "offalia_wormwiggle.webp",
		species: "Human",
		age: "Early-70s",
		alignment: "Neutral Good",
		description: [<p id={uuid()}>Morgantha is the matriarch of the trio living in Old Bonegrinder, and frequents Barovia village to sell her Dream Pastries.</p>],
		cr: 5,
		tags: [],
	},
	{
		name: "Otto Belview",
		image: "otto_belview.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Parrywimple",
		image: "parrywimple.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.BAROVIA],
	},
	{
		name: "Patrina Velikovna",
		image: "patrina_velikovna.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Piccolo",
		image: "piccolo.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Piddlewick II",
		image: "piddlewick_II.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Rahadin",
		image: "rahadin.webp",
		species: "Dusk Elf",
		age: "440 Years old(Physically Mid-40s)",
		alignment: "Lawful Evil",
		description: [<p id={uuid()}>Rahadin is Strahd's chamberlain, bodyguard, and only true friend.</p>],
		cr: 10,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Rictavio",
		image: "rictavio.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Rosevalda Durst",
		image: "rosevalda_durst.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Rowley Piersym",
		image: "rowley_piersym.png",
		species: "Human",
		age: "Late-60",
		alignment: "Lawful good",
		description: [<p id={uuid()}>Master weaponsmith and owner of Thimdul's Armaments in Vallaki</p>],
		cr: 2,
		tags: [Factions.VALLAKI],
	},
	{
		name: "Rudolph Von Richten",
		image: "rudolph_von_richten.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Sangzor",
		image: "sangzor.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Sasha Ivliskova",
		image: "sasha_ivliskova.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Savasha",
		image: "savasha.webp",
		species: "Dark Power",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Savid Ygorovich",
		image: "savid_ygorovich.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Skennis",
		image: "skennis.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Sorvia",
		image: "sorvia.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.BAROVIA],
	},
	{
		name: "Stefania Martikova",
		image: "stefania_martikova.webp",
		species: "Human",
		age: "36 years old",
		alignment: "True Neutral",
		location: "Wizards of the wines Winery",
		description: [
			<p id={uuid()}>
				Stephania is a very level headed woman with versatile talents and duties. She helps Adrian keep up with the Keepers of the Feather and she helps Elvir keep track of the winery's books. While not an expert in anything, Stephania instead is more of a jack-of-all-trades around the winery. Think
				of her as having a sort of "ambassador" role in the family.
			</p>,
		],
		cr: 1,
		tags: [Factions.MARTIKOVS],
	},
	{
		name: "Stella Wachter",
		image: "stella_wachter.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Strahd Von Zarovich",
		image: "strahd_von_zarovich_version_3.webp",
		species: "Human Vampire",
		age: "424 Years old (Physically 40-years-old)",
		alignment: "Lawful Evil",
		description: [<p id={uuid()}>Count Strahd von Zarovich is a vampire and the dark lord of the valley of Barovia.</p>],
		cr: 17,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Szoldar Szoldarovich",
		image: "szoldar_szoldarovich.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Tatyana Federovna",
		image: "tatyana_federovna.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Thornbolt Durst",
		image: "thornbolt_durst.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Udo Lukovich",
		image: "udo_lukovich.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Urwin Martikov",
		image: "urwin_martikov.webp",
		species: "Human",
		age: "33 years old",
		alignment: "True Neutral",
		description: [<p id={uuid()}>Third son of Davian Martikov and married to Danika Darakova.</p>, <p id={uuid()}>Third son of Davian Martikov and married to Danika Darakova.</p>, <p id={uuid()}>Currently estranged from the family and living in Vallaki where he owns the Blue Water Inn.</p>],
		cr: 1,
		tags: [Factions.VALLAKI, Factions.MARTIKOVS],
	},
	{
		name: "Vargas Vallakovich",
		image: "vargas_vallakovich.webp",
		species: "Human",
		age: "Mid-50s",
		alignment: "Lawful Evil",
		description: [<p id={uuid()}>Baron Vargas Vallakovich is the burgomaster of Vallaki, and credits his extreme ruling methods as keeping Strahd out of the territory.</p>],
		cr: 0.125,
		tags: [],
	},
	{
		name: "Vasilka",
		image: "vasilka.webp",
		species: "Flesh construct",
		age: "Around 10 years old",
		alignment: "Lawful Neutral",
		description: [<p id={uuid()}>Vasilka is the Abbot's secret weapon to freeing Barovia from Strahd.</p>],
		cr: 5,
		tags: [],
	},
	{
		name: "Victor Vallakovich",
		image: "victor_vallakovich.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Viggo Martikov",
		image: "viggo_martikov.webp",
		species: "Human",
		age: "5 years old",
		alignment: "True Neutral",
		location: "Wizards of the Wines Winery",
		description: [<p id={uuid()}>Third born son of Dag Tomescu and Stefania Martikov and youngest child.</p>, <p id={uuid()}>Dag and Stefania did their best to raise their children in the most normal way possible. They are blissfully unaware of the dark corners of Barovia.</p>],
		cr: 0.25,
		tags: [Factions.MARTIKOVS],
	},
	{
		name: "Vilnius",
		image: "vilnius.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Vladimir Horngaard",
		image: "vladimir_horngaard.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Volenta Popofsky",
		image: "volenta_popofsky.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [Factions.RAVENLOFT],
	},
	{
		name: "Wensencia",
		image: "wensencia.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Willemina",
		image: "willemina.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Wintersplinter",
		image: "wintersplinter.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Yaldabaoth",
		image: "yaldabaoth.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Yeska",
		image: "yeska.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Yevgeni Krushkin",
		image: "yevgeni_krushkin.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Yolanda Martikova",
		image: "yolanda_martikova.webp",
		species: "Human",
		age: "15 years old",
		alignment: "True Neutral",
		location: "Wizards of the Wines Winery",
		description: [<p id={uuid()}>First born daughter of Dag Tomescu and Stefania Martikov and eldest child.</p>, <p id={uuid()}>Dag and Stefania did their best to raise their children in the most normal way possible. They are blissfully unaware of the dark corners of Barovia.</p>],
		cr: 0.5,
		tags: [Factions.MARTIKOVS],
	},
	{
		name: "Zuleika Toranescu",
		image: "zuleika_toranescu.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
	{
		name: "Zygfrek Belview",
		image: "zygfrek_belview.webp",
		species: "Human",
		age: "Late-30s",
		alignment: "True Neutral",
		description: [<p id={uuid()}>placeholder</p>],
		cr: 1,
		tags: [],
	},
];
