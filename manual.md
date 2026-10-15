---
title: "Manual"
layout: layouts/default-page.vto
metas:
  description: Quick reference for how Destiny 2 works, including user interface, combat, gear, activities, and progression.
---

<p g="callout"><img g="icon" src="/assets/images/icons/item-ghost-reputation-rank.png"><strong>Author's Note</strong>: The introductory quest <b>A Guardian Rises</b> covers basics like controls and user interface, and this expands on that and acts as a quick reference for looking up key points about how a thing works as well as including a bit more technical details where needed.</p>

1. [User Interface](#user-interface)
2. [Combat](#combat)
3. [Gear](#gear)
4. [Locations and Activities](#locations-and-activities)
5. [Progression](#progression)

<h2 id="user-interface">User Interface</h2>

<details g-layout="prose" prose-space="compact" id="hud">
	<summary>HUD</summary>

<figure>
	<img src="/assets/images/screenshots/hud.webp" loading="lazy" width="1920" height="1080">
</figure>

<ol variant="steps">
	<li><strong>Weapons and Abilities</strong><br>Also shows active effects from weapon traits, and <a href="#ammo-generation">Ammo Generation</a> meters. Weapons show their corresponding <a href="#elemental-damage">Elemental type</a> and <a href="#champions">Champion counter</a></li>
	<li><strong>Buffs and Status Effects</strong><br>A maximum of 4 are shown at a time sorted by order of importance</li>
	<li><strong>Current Objective</strong></li>
	<li><strong>Radar</strong></li>
	<li><strong>Health/Shields</strong></li>
	<li><strong>Key Encounter Effects</strong><br>High priority effects that interact with mechanics in the current mission</li>
	<li><strong>Score Meter</strong><br>For activities that use total score and/or time bonus</li>
</ol>

---

<figure prose-float="end" style="max-width: 200px;">
	<img src="/assets/images/screenshots/crop/nameplate.webp" loading="lazy" width="482" height="482">
</figure>

Allied players' waypoint nameplates contain a circle that shows a variety of helpful information for working with your team:

- Their <b>Guardian Rank</b>
- A "!" on the circle means they are actively taking damage
- The white outline indicates their current health and shields
- A gold pulse animation means their <b>Super</b> is charged

</details>

<details g-layout="prose" prose-space="compact" id="character-menu">
	<summary>Character Menu</summary>

<figure>
	<img src="/assets/images/screenshots/character-annotated.webp" loading="lazy" width="1920" height="1080">
</figure>

<div role="tablist">
	<button
		id="character-menu-equipment-tab"
		role="tab"
		aria-controls="character-menu-equipment-tabpanel"
		aria-selected="true"
	>
		Character Equipment
	</button>
	<button
		id="character-menu-tabs-tab"
		role="tab"
		aria-controls="character-menu-tabs-tabpanel"
	>
		Other Tabs
	</button>
</div>

<div id="character-menu-equipment-tabpanel" aria-labelledby="character-menu-equipment-tab">
	<ol variant="steps">
		<li><strong><a href="#subclasses-and-abilities">Subclass</a></strong><br>Currently-equipped Subclass that determines your abilities and passives</li>
		<li><strong><a href="#power-level">Power Level</a></strong><br>Average level of all your equipped weapons and armor, enables access to higher difficulty activities and rewards</li>
		<li><strong><a href="#guardian-ranks">Guardian Rank</a></strong><br>Current rank that showcases your knowledge and proficiency of the game</li>
		<li><strong><a href="#armor-and-stats">Armor</a></strong><br>5 slots for armor that provides stat bonuses and additional mods</li>
		<li><strong>Character Stats</strong><br>Primarily provided via armor, stats improve your abilities or weapons</li>
		<li><strong>Armor Set Bonuses</strong><br>Additional passive bonuses for equipping 2 or 4 armor pieces from the same set</li>
		<li><strong><a href="#weapon-slots">Weapons</a></strong><br>3 slots that may contain Primary, Special, and Heavy weapons</li>
		<li><strong><a href="#champions">Champion Counters</a></strong><br>Summary of equipped weapons and subclass verbs that can counter and stun each of the 3 types of Champion enemies</li>
		<li><strong>Ghost Shell</strong><br>Can apply mods focused on customizing rewards while letting your Ghost show off its personality</li>
		<li><strong><a href="#artifacts">Artifact</a></strong><br>Special items that allow for even more mods to enhance your chosen playstyle</li>
		<li><strong><a href="#loadouts-and-buildcrafting">Loadouts</a></strong><br>Saved combinations of Subclass configurations and gear</li>
		<li><strong><a href="#mods">Mod Customization</a></strong><br>View and swap mods for all equipped Armor and Weapons in one convenient place</li>
	</ol>
</div>

<div id="character-menu-tabs-tabpanel" aria-labelledby="character-menu-tabs-tab" hidden="">
	<ol variant="steps" markers="upper-latin">
		<li><strong>Clan</strong><br>Review details like roster, banner, and level up rewards for your currently-joined clan</li>
		<li><strong>Collections</strong><br>Review all of the equipment, items, and lore entries that you have acquired, check progress of patterns used in <a href="#weapon-crafting">Weapon Crafting</a>, and reacquire items that are not randomly-rolled</li>
		<li><strong>Journey</strong><br>Inspect and track objectives for account-wide progression including <a href="#guardian-ranks">Guardian Ranks</a>, <a href="#triumphs-and-titles">Triumphs</a>, and Titles</li>
		<li><strong>Character</strong><br>Equip and manage gear and loadouts for your Guardian</li>
		<li><strong>Inventory</strong><br>Store important quest items, materials, currencies, and engrams. You can also manage <b>Attunement</b> here to increase the chance of a specific drop from certain activities</li>
	</ol>
</div>

</details>

<details g-layout="prose" prose-space="compact" id="director">
	<summary>Director</summary>

<figure>
	<img src="/assets/images/screenshots/director-annotated.webp" loading="lazy" width="1920" height="1080">
</figure>

The <b>Director</b> is your guide for navigating to whichever activity you want to do next.

<div role="tablist">
	<button
		id="director-map-tab"
		role="tab"
		aria-controls="director-map-tabpanel"
		aria-selected="true"
	>
		Destinations
	</button>
	<button
		id="director-tabs-tab"
		role="tab"
		aria-controls="director-tabs-tabpanel"
	>
		Other Tabs
	</button>
</div>

<div id="director-map-tabpanel" aria-labelledby="director-map-tab" g-layout="prose" prose-space="compact">
	<p>The Destinations menu is where you start activities in the game. It shows all of the available <a href="#patrol-destinations">Patrol</a> and <a href="#campaigns">Campiagn</a> locations, as well as a few additional special features:
	<ol variant="steps">
		<li g-layout="prose" prose-space="compact">
			<p><strong>Ops Playlists</strong><br>Core replayable activities broken down into the following sections:</p>
			<dl style="font-size: 0.9em;">
				<dt><a href="#vanguard-ops">Vanguard Ops</a></dt>
				<dd>Variety of different cooperative PvE missions for 1-6 players</dd>
				<dt><a href="#crucible">Crucible Ops</a></dt>
				<dd>PvP modes including traditional 6v6, 3v3, free-for-all, and even Sparrow Racing</dd>
				<dt><a href="#gambit">Gambit Ops</a></dt>
				<dd>Hybrid PvEvP where you battle targets and rival teams to collect motes and summon a boss</dd>
				<dt><a href="#raids-and-dungeons">Raids and Dungeons</a></dt>
				<dd>Advanced PvE encounters that feature intricate puzzles and the toughest enemies</dd>
			</dl>
		</li>
		<li><strong><a href="#seasonal-hub-and-orders">Seasonal Hub</a></strong><br>Houses daily and weekly challenges, Vanguard Alerts that offer additional weekly rewards, and special seasonal Conquest missions and their associated <i>Conquerer</i> title</li>
		<li><strong>Timeline</strong><br>In-game summary of past expansions and seasons, including a select few key playable missions. <a href="/story/">Story</a> has a similar timeline with expanded details</li>
		<li><strong>Active Distortion</strong><br>Enhanced <a href="#patrol-destinations">Patrol</a> mode added with the <cite>Monument of Triumph</cite> update that brings tougher enemies and events alongside higher-tier rewards. Rotates to a new location every hour</li>
	</ol>
</div>

<div id="director-tabs-tabpanel" aria-labelledby="director-tabs-tab" hidden="">
	<ol variant="steps" markers="upper-latin">
		<li><strong>Store</strong><br>The Eververse Store offers microtransaction cosmetic items for premium <b>Silver</b> currency. Some items may be earned through gameplay by obtaining <b>Eververse Engrams</b> and <b>Bright Dust</b> which may be used to acquire a selection of items directly that rotates daily</li>
		<li><strong><a href="#rewards-pass">Rewards Pass</a></strong><br>View your progress and claim rewards from the current seasonal Rewards Pass</li>
		<li><strong><a href="#rewards-pass">Quests</a></strong><br>Tracks all of your active quests, including story campaigns and other various missions. Note the different categories down the left side, especially the "All" option</li>
		<li><strong>Map</strong><br>Shows Activities, Points of Interest, and Landing Zones (used to fast-travel) for your current location</li>
		<li><strong>Destinations</strong><br>Map of the solar system used for nagivating and starting activities</li>
		<li><strong>Social</strong><br>View rosters of Guardians in your current activity, friends, and clanmates. Manage invites and access <a href="#fireteam-finder">Fireteam Finder</a></li>
	</ol>
</div>

</details>

<h2 id="combat">Combat</h2>

<details g-layout="prose" prose-space="compact" id="classes">
	<summary>Classes</summary>

Your <b>Class</b> is chosen during character creation and cannot be changed afterwards. Each class provides a minor passive bonus as well as a choice between two <b>Class Ability</b> variants:

<figure>
	<table variant="dividers">
		<thead>
			<tr>
				<th>Class</th>
				<th>Class Ability</th>
				<th>Passive</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th>Hunter</th>
				<td><b>Dodge</b> to reposition and either reload all weapons or recharge melee ability</td>
				<td>Slightly faster movement and weapon ready/stow speed</td>
			</tr>
			<tr>
				<th>Titan</th>
				<td>Create a <b>Barricade</b> to provide extra cover or increase weapon efficiency</td>
				<td>+20% basic melee damage</td>
			</tr>
			<tr>
				<th>Warlock</th>
				<td>Conjure a <b>Rift</b> that either buffs damage or heals allies</td>
				<td>1.1x regeneration rate and +5% damage for grenades</td>
			</tr>
		</tbody>
	</table>
</figure>

Weapons may be shared between classes but armor is class-specific and may only be equipped or used as infusion by that class. Armor drops will always match the class you play an activity with. As each account has 3 character slots, you have the option to create one of each class if desired.

</details>

<details g-layout="prose" prose-space="compact" id="subclasses-and-abilities">
	<summary>Subclasses and Abilities</summary>

<figure>
	<img src="/assets/images/screenshots/subclass-tooltip.webp" loading="lazy" width="1920" height="1080">
</figure>

Each class also has a number of unique <b>Subclasses</b> that correspond to each <b>Element</b>, which determine what the rest of your abilities and passives are. Subclasses are made up of the following components:

- **Super Ability** - Powerful signature move of the Subclass with a long cooldown, primarily charged through kills or collecting <b>Orbs of Power</b>
- **Grenade Ability** - Thrown projectiles with varied effects
- **Melee Ability** - Special ability that may be used in addition to a <b>Basic Melee</b>, typically close-range
- **Class Ability** - In addition to the 2 generic variants available for the entire class, some subclasses provide an option to replace this with a separate unique ability
- **Aspects** - Major passive effects or augments to abilities. Each subclass has 4 unique aspects and may equip 2 at once
- **Fragments** - Additional smaller passive bonuses. The amount that may be equipped depends on the slots of your 2 chosen aspects

Your current Subclass may be swapped freely in your Character menu. Additional abilities, aspects and fragments for base game subclasses may be purchased from <b>Ikora Rey</b> in the Tower. Stasis, Strand and Prismatic subclasses are unlocked by progressing expansion story campaigns.

Ability cooldowns and damage may be improved by investing in <b>Character Stats</b>, primarily through <a href="#armor-and-stats">Armor</a>.

</details>

<details g-layout="prose" prose-space="compact" id="elemental-damage">
	<summary>Elemental Damage</summary>

In addition to non-elemental <img g="icon" src="/assets/images/icons/damage-kinetic.png" alt="" /> <b>Kinetic </b> damage there are 5 types of elemental damage, aligned between <b>Light</b> and <b>Dark</b>:

<table style="width: 100%; text-align: center;">
	<thead>
		<tr>
			<th style="text-align: center;">Light</th>
			<th style="text-align: center;">Dark</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<b class="color-arc"><img g="icon" src="/assets/images/icons/damage-arc.png" alt="" /> Arc</b>
			</td>
			<td>
				<b class="color-stasis"><img g="icon" src="/assets/images/icons/damage-stasis.png" alt="" /> Stasis</b>
			</td>
		</tr>
		<tr>
			<td>
				<b class="color-solar"><img g="icon" src="/assets/images/icons/damage-solar.png" alt="" /> Solar</b>
			</td>
			<td>
				<b class="color-strand"><img g="icon" src="/assets/images/icons/damage-strand.png" alt="" /> Strand</b>
			</td>
		</tr>
		<tr>
			<td>
				<b class="color-void"><img g="icon" src="/assets/images/icons/damage-void.png" alt="" /> Void</b>
			</td>
			<td>
			</td>
		</tr>
	</tbody>
</table>

<figure prose-float="end" style="max-width: 200px;">
	<img src="/assets/images/screenshots/crop/elemental-shield.webp" loading="lazy" width="859" height="859">
</figure>

Enemy combatant <b>Elemental Shields</b> take 100% increased damage from any type of elemental damage, and 200% from matching elements, compared to <img g="icon" src="/assets/images/icons/damage-kinetic.png" alt="" /> <b>Kinetic</b> damage. Abilities from your chosen <b>Subclass</b> all do elemental damage, as well as a fair share of weapons.

<img g="icon" src="/assets/images/icons/damage-kinetic.png" alt="" /> <b>Kinetic</b> primary weapons have a 10% damage bonus and special weapons have a 15% damage bonus compared to an equivalent elemental damage weapon.

</details>

<details g-layout="prose" prose-space="compact" id="elemental-subclass-verbs">
	<summary>Elemental Subclass Verbs</summary>

In addition to damage types, each element has a set of related status effects called <b>Verbs</b>. They can be positive or negative effects applied directly, or a pick-up that appears on the ground and collected for beneficial effects. Generally Verbs are applied by <b>Subclass</b> abilities, aspects, or fragments, but some weapon perks may also generate them.

<div role="tablist">
	<button
		id="subclass-verbs-arc-tab"
		role="tab"
		aria-controls="subclass-verbs-arc-tabpanel"
		aria-selected="true"
	>
		<img g="icon" src="/assets/images/icons/damage-arc.png" alt="" /> Arc
	</button>
	<button
		id="subclass-verbs-solar-tab"
		role="tab"
		aria-controls="subclass-verbs-solar-tabpanel"
	>
		<img g="icon" src="/assets/images/icons/damage-solar.png" alt="" /> Solar
	</button>
	<button
		id="subclass-verbs-void-tab"
		role="tab"
		aria-controls="subclass-verbs-void-tabpanel"
	>
		<img g="icon" src="/assets/images/icons/damage-void.png" alt="" /> Void
	</button>
	<button
		id="subclass-verbs-stasis-tab"
		role="tab"
		aria-controls="subclass-verbs-stasis-tabpanel"
	>
		<img g="icon" src="/assets/images/icons/damage-stasis.png" alt="" /> Stasis
	</button>
	<button
		id="subclass-verbs-strand-tab"
		role="tab"
		aria-controls="subclass-verbs-strand-tabpanel"
	>
		<img g="icon" src="/assets/images/icons/damage-strand.png" alt="" /> Strand
	</button>
</div>

<div id="subclass-verbs-arc-tabpanel" aria-labelledby="subclass-verbs-arc-tab">
	<dl variant="icons">
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-amplified.png" alt="buff" /> Amplified</dt>
		<dd>Your movement speed and weapon handling are greatly increased, and gain a small amount of damage resistance against combatants. After sprinting for a short time gain <b>Speed Booster</b> which further increases your movement speed.</dd>
		<dd>Amplified may be gained from Aspects and Fragments, but also by rapidly defeating targets with <b class="color-arc">Arc</b> damage.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-bolt-charge.png" alt="buff" /> Bolt Charge</dt>
		<dd>Accumulate stacks of Arc Bolt Charge. While you have Bolt Charge, sustained weapon damage generates additional stacks of Bolt Charge up to 10. At maximum stacks, any ability damage generates a powerful bolt of <b class="color-arc">Arc</b> lightning at the target's location.</dd>
		<dd>Receiving a stack of Bolt Charge grants you melee energy.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-ionic-trace.png" alt="pickup buff" /> Ionic Trace</dt>
		<dd>A bolt of pure <b class="color-arc">Arc</b> energy that travels along the ground, seeking toward its creator. When picked up, Ionic Traces grant grenade, melee and class ability energy.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-blind.png" alt="debuff" /> Blind</dt>
		<dd>Combatants are disoriented and cannot fire their weapons. Opposing Guardians' HUD is removed and their vision is obscured.</dd>
		<dd><img g="icon" src="/assets/images/icons/perk-stagger-unstoppable.png" alt="" /> <b>Unstoppable Champions</b> are <b>stunned</b> when blinded.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-jolted.png" alt="debuff" /> Jolted</dt>
		<dd>The target is energized with destructive <b class="color-arc">Arc</b> Light. They take additional damage while jolted and chain lightning to nearby targets.</dd>
		<dd>Jolt damage causes <img g="icon" src="/assets/images/icons/perk-disruption-overload.png" alt="" /> <b>Overload Champions</b> to be <b>stunned</b>.</dd>
	</dl>
</div>

<div id="subclass-verbs-solar-tabpanel" aria-labelledby="subclass-verbs-solar-tab" hidden="">
	<dl variant="icons">
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-cure.png" alt="buff" /> Cure</dt>
		<dd>You are healed in a burst of mending <b class="color-solar">Solar</b> Light.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-firesprite.png" alt="pickup buff" /> Firesprite</dt>
		<dd>A luminous concentration of <b class="color-solar">Solar</b> energy. When picked up, Firesprites grant grenade energy.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-radiant.png" alt="buff" /> Radiant</dt>
		<dd>Your weapons are enhanced by the power of the Traveler and deal increased damage to combatants.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-restoration.png" alt="buff" /> Restoration</dt>
		<dd>You regenerate health and shields over time. Cannot be interrupted by taking damage.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-scorch.png" alt="debuff" /> Scorch</dt>
		<dd>The target is singed by destructive <b class="color-solar">Solar</b> Light, taking damage over time. Scorch damage increases as the target accumulates more Scorch stacks. After enough Scorch stacks are applied to the target, they <b>Ignite</b>.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-ignition.png" alt="debuff" /> Ignition</dt>
		<dd>A large <b class="color-solar">Solar</b> explosion which deals damage in an area around the target and <b>stuns</b> <img g="icon" src="/assets/images/icons/perk-stagger-unstoppable.png" alt="" /> <b>Unstoppable Champions</b>.</dd>
	</dl>
</div>

<div id="subclass-verbs-void-tabpanel" aria-labelledby="subclass-verbs-void-tab" hidden="">
	<dl variant="icons">
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-devour.png" alt="buff" /> Devour</dt>
		<dd>Feast on the energy of your defeated foes. Final blows restore health, grant grenade energy, and extend Devour.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-invisibility.png" alt="buff" /> Invisibility</dt>
		<dd>You vanish from sight and do not appear on radar. While invisible, your radar range is reduced. Performing offensive actions will end invisibility.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-overshield.png" alt="buff" /> Overshield</dt>
		<dd>You are armored with a protective barrier of <b class="color-void">Void</b> Light. Reduces damage taken from combatants.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-void-breach.png" alt="pickup buff" /> Void Breach</dt>
		<dd>A dimensional rupture teeming with <b class="color-void">Void</b> energy. When picked up, Void Breaches grant class ability energy.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-suppression.png" alt="debuff" /> Suppression</dt>
		<dd>The target is taken out of any active abilities and cannot activate any abilities or movement modes while suppression persists. Afflicted combatants cannot fire their weapons.</dd>
		<dd>When suppressed, <img g="icon" src="/assets/images/icons/perk-disruption-overload.png" alt="" /> <b>Overload Champions</b> are <b>stunned</b>.
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-volatile.png" alt="debuff" /> Volatile</dt>
		<dd>The target is afflicted with unstable <b class="color-void">Void</b> energy and will explode upon taking additional damage.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-weaken.png" alt="debuff" /> Weaken</dt>
		<dd>The target takes increased damage and has their movement speed slowed. Weakened combatants are less accurate.</dd>
	</dl>
</div>

<div id="subclass-verbs-stasis-tabpanel" aria-labelledby="subclass-verbs-stasis-tab" hidden="">
	<dl variant="icons">
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-stasis-shard.png" alt="pickup buff" /> Stasis Shard</dt>
		<dd>A small shard of <b class="color-stasis">Stasis</b> matter that can be collected to restore melee energy.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-stasis-crystal.png" alt="buff" /> Stasis Crystal</dt>
		<dd>A crystal of solidified <b class="color-stasis">Stasis</b> matter. Upon creation, <b>freezes</b> nearby combatants and <b>slows</b> nearby players.</dd>
		<dd>Crystals can be destroyed, dealing damage in an area.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-frost-armor.png" alt="buff" /> Frost Armor</dt>
		<dd>You are fortified by layers of durable <b class="color-stasis">Stasis</b> matter, reducing incoming damage. Frost Armor damage resistance grows stronger as you gain additional stacks.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-slow.png" alt="debuff" /> Slow</dt>
		<dd>The target has slowed movement and ability regeneration; their weapon performance is reduced. <img g="icon" src="/assets/images/icons/perk-disruption-overload.png" alt="" /> <b>Overload Champions</b> are <b>stunned</b>.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-freeze.png" alt="debuff" /> Freeze</dt>
		<dd>The target is trapped in <b class="color-stasis">Stasis</b> matter and is unable to move. After taking additional damage while frozen, the target <b>shatters</b>.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-shatter.png" alt="debuff" /> Shatter</dt>
		<dd>When a frozen target is shattered, they take damage and deal damage to nearby targets.</dd>
		<dd>Shatter damage causes <img g="icon" src="/assets/images/icons/perk-stagger-unstoppable.png" alt="" /> <b>Unstoppable Champions</b> to be <b>stunned</b>.
	</dl>
</div>

<div id="subclass-verbs-strand-tabpanel" aria-labelledby="subclass-verbs-strand-tab" hidden="">
	<dl variant="icons">
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-tangle.png" alt="pickup buff" /> Tangle</dt>
		<dd>A knot of <b class="color-strand">Strand</b> matter, swirling with potential. Tangles can be shot and destroyed, or picked up and thrown, dealing damage.</dd>
		<dd>Defeating targets afflicted by any <b class="color-strand">Strand</b> debuff will unwind them and create a Tangle. Creating a Tangle with this method has a cooldown of 12 seconds.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-threadling.png" alt="buff" /> Threadling</dt>
		<dd>A creature woven from pure <b class="color-strand">Strand</b> matter that seeks nearby targets and attacks, dealing damage.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-woven-mail.png" alt="buff" /> Woven Mail</dt>
		<dd>Your body is encased in a protective mesh of tightly woven <b class="color-strand">Strand</b> matter, greatly reducing any incoming non-precision damage.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-sever.png" alt="debuff" /> Sever</dt>
		<dd>The target's connections to the world around them are cut, and their outgoing damage is significantly reduced.</dd>
		<dd>Severed targets unwind into a <b>Tangle</b> when defeated.
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-suspend.png" alt="debuff" /> Suspend</dt>
		<dd>The target is immobilized by a web of <b class="color-strand">Strand</b> matter, lifting them into the air. While suspended, Guardians are unable to move or fire their weapon, and <img g="icon" src="/assets/images/icons/perk-stagger-unstoppable.png" alt="" /> <b>Unstoppable Champions</b> are <b>stunned</b>.</dd>
		<dt><img g="icon" src="/assets/images/icons/elemental-effect-unravel.png" alt="debuff" /> Unravel</dt>
		<dd>The target is permeated with destructive <b class="color-strand">Strand</b> matter. As they take additional damage, they create unraveled projectiles that seek out nearby targets.</dd>
	</dl>
</div>

</details>

<details g-layout="prose" prose-space="compact" id="orbs-of-power-armor-charge">
	<summary>Orbs of Power / Armor Charge</summary>

<figure prose-float="end" style="max-width: 200px; margin-block: 0 1.5rem;">
	<img src="/assets/images/screenshots/crop/orbs-of-power.webp" loading="lazy" width="393" height="393">
</figure>

Picking up <b>Orbs of Power</b> will give bonus energy for your <b>Super Ability</b>, allowing you to use it more frequently. Defeating enemies with your <b>Super</b> will spawn orbs for your allies, and some <b>Armor Mods</b> will generate orbs both for you and allies.

Each orb you collect will also grant a stack of <b>Armor Charge</b>, which certain <a href="#mods">Armor Mods</a> may consume to provide extra stats, bonus damage, faster ability regeneration, and more.

</details>

<details g-layout="prose" prose-space="compact" id="ammo-generation">
	<summary>Ammo Generation</summary>

<figure prose-float="end" style="max-width: 200px;">
	<img src="/assets/images/screenshots/crop/ammo-meters.webp" loading="lazy" width="460" height="460">
</figure>

<b><img g="icon" src="/assets/images/icons/ammo-special.png" alt="" /> Special</b> and <b><img g="icon" src="/assets/images/icons/ammo-heavy.png" alt="" /> Heavy</b> ammo may be generated in combat by defeating enemies. An ammo meter for each type lives below your equipped weapons in the bottom left corner of your HUD; kills contribute progress to them, and when one is full an ammo brick will drop on the next enemy kill.

Final blows fill the meters faster based on the ammo type a weapon uses and its <b>Ammo Gen</b> stat. Primary weapons generate the most progress. Heavy and Special weapons generate additional progress towards the ammo type that they do not use.

</details>

<details g-layout="prose" prose-space="compact" id="enemy-classification">
	<summary>Enemy Classification</summary>

Perk, ability, or other item descriptions use standard terms to indicate which enemies may trigger or be impacted by an effect:

- <strong>Target</strong> - any type of enemy
- <strong>Guardian</strong> - opposing guardians in PvP modes
- <strong>Combatant</strong> - PvE enemies of any kind. May be further divided into the following categories for the strength of certain perks and bonuses, indicated by the shape of the icon next to their health bar:
  - <strong>Rank-and-File</strong> (Square) - basic enemies
  - <strong>Elite</strong> (Shield) - tougher version of rank-and-file enemies
  - <strong>Miniboss & Champion</strong> (Downwards Triangle) - strong advanced enemy units with special abilities
  - <strong>Boss</strong> (Diamond and Skull) - the most powerful enemies, often with unique mechanics and attacks

<figure>
	<img src="/assets/images/screenshots/crop/enemy-tiers.webp" loading="lazy" width="1600" height="600" alt="collage of two dreg enemy combatants next to each other, one rank-and-file and one elite">
	<figcaption>Example of a Rank-and-File compared to an Elite Combatant</figcaption>
</figure>

</details>

<details g-layout="prose" prose-space="compact" id="champions">
	<summary>Champions</summary>

<figure prose-float="end" style="max-width: 200px;">
	<img src="/assets/images/screenshots/crop/champion-barrier.webp" loading="lazy" width="720" height="720">
</figure>

<b>Champions</b> are special advanced enemy units that appear at higher difficulties and will continue to attack until they are <b>stunned</b>, which leaves them unable to move and vulnerable to attack. There are 3 variants, each with their own behavior and methods to stun:

- <img g="icon" src="/assets/images/icons/perk-shield-piercing-barrier.png" alt="" /> <b>Barrier</b> - Upon reaching a certain health threshold, they create an invulnerable shield for 5 seconds and begin healing. Stunning them will break the shield and interrupt healing
- <img g="icon" src="/assets/images/icons/perk-disruption-overload.png" alt="" /> <b>Overload</b> - Continuously restore health over time, use weapons and abilities much more frequently, and move quickly until stunned
- <img g="icon" src="/assets/images/icons/perk-stagger-unstoppable.png" alt="" /> <b>Unstoppable</b> - Aggressively chase enemies and have 70% damage resistance until stunned

All weapons intrinsically stun one of the three champion types, determined by their <b>frame</b>. Certain <b>Subclass Verbs</b> can also stun some champion types. The panel next to the weapons in the Character screen shows the three champion type icons and indicates if you have a weapon currently equipped to stun them as well as which Verbs apply.

<figure>
	<img src="/assets/images/screenshots/champion-counters.webp" loading="lazy" width="1920" height="1080">
</figure>

When starting an activity, any champion types that are present will be shown in the list of modifiers in case you want to adjust your loadout accordingly.

</details>

<details g-layout="prose" prose-space="compact" id="banes">
	<summary>Banes</summary>

<figure prose-float="end" style="max-width: 230px;">
	<img src="/assets/images/screenshots/crop/bane.webp" loading="lazy" width="660" height="660">
</figure>

<b>Banes</b> are modifiers that may be applied to non-boss enemy combatants giving them special properties or abilities. By default enemies with a Bane have 60% damage resistance, though this may be changed by some individual Banes.

Different categories of Banes may be added when customizing activity modifiers. Higher difficulties will have Banes automatically selected, and may be seen in the list of modifiers when starting the activity.

</details>

<details g-layout="prose" prose-space="compact" id="finishers">
	<summary>Finishers</summary>

<figure prose-float="end" style="max-width: 200px;">
	<img src="/assets/images/screenshots/crop/finisher-indicator.webp" loading="lazy" width="500" height="500">
</figure>

When non-boss Combatants are low on health, Guardians can use a special attack called a <b>Finisher</b> to kill them in one hit. A golden glowing dot above the enemy indicates that they are low enough on health to be finished. By default the keybind to perform a Finisher is <kbd>G</kbd> on keyboard or <kbd>R3</kbd> (click right stick) on controller.

Performing a Finisher applies 60% damage resistance for the duration of the animation. They may be further enhanced through the use of armor mods, Exotic armor, and certain fragments and artifact mods.

</details>

<h2 id="gear">Gear</h2>

<details g-layout="prose" prose-space="compact" id="rarity-and-tiers">
	<summary>Rarity and Tiers</summary>

<table variant="dividers">
	<thead>
		<tr>
			<th>Rarity</th>
			<th>Description</th>
		</th>
	</thead>
	<tbody>
		<tr>
			<td><g-swatch aria-label="common white" style="--g-comp-swatch--bg: var(--g-color--rarity-common);"><b>Common</b></g-swatch></td>
			<td rowspan="3">Basic gear with minimal stats and upgrade capacity. These 3 used to be a bigger part of gear progression, but now the game introduces you to Legendary gear fairly quickly</td>
		</tr>
		<tr>
			<td><g-swatch aria-label="uncommon green" style="--g-comp-swatch--bg: var(--g-color--rarity-uncommon);"><b>Uncommon</b></g-swatch></td>
		</tr>
		<tr>
			<td><g-swatch aria-label="rare blue" style="--g-comp-swatch--bg: var(--g-color--rarity-rare);"><b>Rare</b></g-swatch></td>
		</tr>
		<tr>
			<td><g-swatch aria-label="legendary purple" style="--g-comp-swatch--bg: var(--g-color--rarity-legendary);"><b>Legendary</b></g-swatch></td>
			<td>Improved gear that offers additional customization options</td>
		</tr>
		<tr>
			<td><g-swatch aria-label=" gold" style="--g-comp-swatch--bg: var(--g-color--rarity-exotic);"><b>Exotic</b></g-swatch></td>
			<td>Unique pieces of gear with powerful effects. You may only equip 1 each of Exotic armor pieces and weapons at a time</td>
		</tr>
	</tbody>
</table>

Following the <cite>Edge of Fate</cite> expansion, <b>Tiers</b> have been introduced for <g-swatch aria-label="legendary purple" style="--g-comp-swatch--bg: var(--g-color--rarity-legendary);">Legendary</g-swatch> gear that provide additional benefits:

<div role="tablist">
	<button
		id="tiers-weapons-tab"
		role="tab"
		aria-controls="tiers-weapons-tabpanel"
		aria-selected="true"
	>
		Weapons
	</button>
	<button
		id="tiers-armor-tab"
		role="tab"
		aria-controls="tiers-armor-tabpanel"
	>
		Armor
	</button>
</div>

<div id="tiers-weapons-tabpanel" aria-labelledby="tiers-weapons-tab">
	<table variant="dividers">
		<thead>
			<tr>
				<th>Variant</th>
				<th>Feature</th>
				<th style="width: 20%;">Upgradeable</th>
			</th>
		</thead>
		<tbody>
			<tr>
				<th>Tier 1</th>
				<td>Base weapon</td>
				<td rowspan="4">Yes<br><span style="font-size: 0.9em;">Note: upgrading will not give extra trait options</span></td>
			</tr>
			<tr>
				<th>Tier 2</th>
				<td>+Enhanced Traits</td>
			</tr>
			<tr>
				<th>Tier 3</th>
				<td>+1 trait option per column<br>+Access to enhanced mods</td>
			</tr>
			<tr>
				<th>Tier 4</th>
				<td>+Enhanced components (Barrels/Mags/etc.)</td>
			</tr>
			<tr>
				<th>Tier 5</th>
				<td>+Enhanced Origin Traits<br>+1 extra trait per column<br>+Access to unique cosmetic ornament<br>+Combat flair</td>
				<td>-</td>
			</tr>
			<tr>
				<th>Crafted</th>
				<td>Swap and customize traits and components using materials</td>
				<td>Can be leveled up and upgraded to equivalent of Tier 5</td>
			</tr>
			<tr>
				<th>Legacy</th>
				<td colspan="2">Some vendors and activities offer older non-tiered weapons. Certain legacy weapons may be enhanced and leveled up to gain Enhanced Traits, equivalent to Tier 2</td>
			</tr>
		</tbody>
	</table>
</div>

<div id="tiers-armor-tabpanel" aria-labelledby="tiers-armor-tab" g-layout="prose" prose-space="compact" hidden="">
	<p>Unlike tiered weapons, armor cannot be upgraded to higher tiers once acquired.<p>
	<table variant="dividers">
		<thead>
			<tr>
				<th>Variant</th>
				<th>Base Stats</th>
				<th>Bonuses</th>
			</th>
		</thead>
		<tbody>
			<tr>
				<th>Tier 1</th>
				<td>52-57</td>
				<td></td>
			</tr>
			<tr>
				<th>Tier 2</th>
				<td>58-63</td>
				<td></td>
			</tr>
			<tr>
				<th>Tier 3</th>
				<td>64-69</td>
				<td></td>
			</tr>
			<tr>
				<th>Tier 4</th>
				<td>70-75</td>
				<td>+1 Extra Mod Energy</td>
			</tr>
			<tr>
				<th>Tier 5</th>
				<td>75</td>
				<td>+Tuning Mod Slot for +/-5 stat reallocation or +3 bonus</td>
			</tr>
		</tbody>
	</table>
</div>

</details>

<details g-layout="prose" prose-space="compact" id="power-level">
	<summary>Power Level</summary>

Your character's <b>Power</b> is the average of all of the attack and defense values of your equipped gear. In combat, if your Power is lower than your target <strong>you will deal reduced damage to them and take increased damage</strong>. Higher <a href="#difficulties">Difficulties</a> have a <b>Power Delta</b> that caps your maximum effective Power below the level of the combatants.

<p g="callout"><img g="icon" src="/assets/images/icons/activity-modifier-legendary.png" alt="note" />At a Power Level difference of -100, combatants are fully immune to your damage.</p>

The maximum Power level of gear has been changed over the years alongside major updates. With the <cite>Renegades</cite> expansion, all items drop at a minimum of <b>300</b> Power and continue all the way up to the cap of <b>550</b>.

#### Gaining Power Level

Drop rates have been pretty well balanced across all activities, so you'll make steady progress as you complete activities no matter what they are. Don't feel like you need to grind one specific thing to quickly level your Power.

- Power Level of new gear drops take into account your maximum possible Power based on <strong>all the gear you have (even in your vault)</strong>, you do not need to have it equipped
- The <a href="#rarity-and-tiers">Tier</a> of a drop is not dependent on your Power level, but instead the <b>Reward Rank</b> you earn which is determined by your chosen <a href="#difficulty">Difficulty</a> (Gambit and Crucible generally award high-tier gear by default).
- You can <b>Infuse</b> the Power level of one item into another in the same slot by using an <b>Enhancement Core</b>, consuming the item in the process.

#### Power Level Benefits

A higher Power level will let you access more difficult activities, which in turn helps you earn higher Reward Ranks for higher-tier loot. Additionally, vendors that offer tiered gear will offer higher tiers the more your Power increases, up to Tier 5 armor and Tier 4 weapons at 520 Power.

When you are in a fireteam with other players, <b>Fireteam Power</b> automatically raises everyone's Power up to a <strong>minimum of 5 below the highest level Guardian</strong> in combat (rewards will still be calculated using your personal Power level).

<p g="callout"><img g="icon" src="/assets/images/icons/item-ghost-reputation-rank.png">All Matchmade versions of activities have Power level disabled and instead only use the fixed Power Delta based on selected difficulty.</p>

</details>

<details g-layout="prose" prose-space="compact" id="weapon-and-ammo-types">
	<summary>Weapon and Ammo Types</summary>

<figure>
	<img src="/assets/images/screenshots/weapon-detail-tier-3.webp" loading="lazy" width="1920" height="1080">
</figure>

Weapons use one of 3 different ammo types, generally based on what type of weapon they are:

<dl variant="icons">
	<dt><img g="icon" class="size-up-2" src="/assets/images/icons/ammo-primary.png" alt="" /> Primary</dt>
	<dd>The most basic ammo, used for standard weapons. It is infinite and does not need to be collected</dd>
	<dd style="font-size: 0.9em;"><strong>Weapon Types</strong>: Auto Rifle, Combat Bow, Hand Cannon, Pulse Rifle, Scout Rifle, Sidearm, Submachine Gun</dd>
	<dt><img g="icon" class="size-up-2" src="/assets/images/icons/ammo-special.png" alt="" /> Special</dt>
	<dd>Available in limited quantities, used for potent weapons that can quickly take down stronger enemies</dd>
	<dd style="font-size: 0.9em;"><strong>Weapon Types</strong>: Fusion Rifle, Glaive, Grenade Launcher (single), Shotgun, Sniper Rifle, Trace Rifle</dd>
	<dt><img g="icon" class="size-up-2" src="/assets/images/icons/ammo-heavy.png" alt="" /> Heavy</dt>
	<dd>The rarest of the three, used for powerful weapons that excel at damaging bosses or larger groups</dd>
	<dd style="font-size: 0.9em;"><strong>Weapon Types</strong>: Grenade Launcher (heavy), Linear Fusion Rifle, Machine Gun, Rocket Launcher, Sword</dd>
</dl>

Weapons also have a subtype called a <b>Frame</b> that determines its fire rate/behavior and provides an intrinsic bonus. Certain frames as well as some unique <b>Exotic weapons</b> may use a different ammo type than is typical for a given weapon type. For example:

- Micro-Missile Sidearms use <b><img g="icon" src="/assets/images/icons/ammo-special.png" alt="" /> Special</b> ammo instead of <b><img g="icon" src="/assets/images/icons/ammo-primary.png" alt="" /> Primary</b>
- The Exotic Glaive Winterbite uses <b><img g="icon" src="/assets/images/icons/ammo-heavy.png" alt="" /> Heavy</b> ammo instead of <b><img g="icon" src="/assets/images/icons/ammo-special.png" alt="" /> Special</b>

</details>

<details g-layout="prose" prose-space="compact" id="weapon-slots">
	<summary>Weapon Slots</summary>

Guardians have 3 weapon slots available, with different <a href="#elemental-damage">damage</a> and <a href="#weapon-and-ammo-types">ammo types</a> available in each:

<table variant="dividers">
	<thead>
		<tr>
			<th>Slot</th>
			<th>Damage Types</th>
			<th>Ammo Types</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Kinetic</th>
			<td style="white-space: nowrap;">
				<b><img g="icon" src="/assets/images/icons/damage-kinetic.png" alt="" /> Kinetic</b><br>
				<b class="color-stasis"><img g="icon" src="/assets/images/icons/damage-stasis.png" alt="" /> Stasis</b><br>
				<b class="color-strand"><img g="icon" src="/assets/images/icons/damage-strand.png" alt="" /> Strand</b>
			</td>
			<td style="white-space: nowrap;">
				<b><img g="icon" src="/assets/images/icons/ammo-primary.png" alt="" /> Primary</b><br>
				<b><img g="icon" src="/assets/images/icons/ammo-special.png" alt="" /> Special</b>
			</td>
		</tr>
		<tr>
			<th>Energy</th>
			<td style="white-space: nowrap;">
				<b class="color-arc"><img g="icon" src="/assets/images/icons/damage-arc.png" alt="" /> Arc</b><br>
				<b class="color-solar"><img g="icon" src="/assets/images/icons/damage-solar.png" alt="" /> Solar</b><br>
				<b class="color-void"><img g="icon" src="/assets/images/icons/damage-void.png" alt="" /> Void</b>
			</td>
			<td style="white-space: nowrap;">
				<b><img g="icon" src="/assets/images/icons/ammo-primary.png" alt="" /> Primary</b><br>
				<b><img g="icon" src="/assets/images/icons/ammo-special.png" alt="" /> Special</b>
			</td>
		</tr>
		<tr>
			<th>Power</th>
			<td>
				All 5 elements
			</td>
			<td style="white-space: nowrap;">
				<b><img g="icon" src="/assets/images/icons/ammo-heavy.png" alt="" /> Heavy</b>
			</td>
		</tr>
	</tbody>
</table>

</details>

<details g-layout="prose" prose-space="compact" id="weapon-crafting">
	<summary>Weapon Crafting</summary>

Introduced with <cite>The Witch Queen</cite> expansion, <b>Weapon Crafting</b> allows you to build, level up, and customize specific weapons by visiting the <b>The Enclave</b> on Savathûn's Throne World.

<figure>
	<img src="/assets/images/screenshots/weapon-crafting.webp" loading="lazy" width="1920" height="1080">
</figure>

In order to craft a weapon you must first unlock its <b>Pattern</b> by extracting enough <b>Deepsight Resonance</b> from copies of the weapon. Craftable weapons have a chance to contain Resonance directly, but you can also use rare <b>Deepsight Harmonizers</b> to grant Resonance to any weapon that has not already had it.

Typically 3-5 Resonant weapons (commonly known as "red borders") are needed to unlock the Pattern and craft it. A list of available Patterns and how much Resonance each one requires is available under the "Collections > Patterns &amp; Catalysts" menu.

- Crafted weapons level up as you get kills and complete activities, though you may also use materials to increase the level artificially. At higher levels <b>Enhanced Traits</b> become available, as well as the ability to increase the weapon's <b>Tier</b> to provide additional cosmetic options
- You may return to the Enclave at any point and swap out Traits on your weapon as desired, though note that you will need additional crafting materials to do so
- <b>Mementos</b> are rare items earned from various activities that may be slotted into a crafted weapon to apply a special title, shader, and stat tracker

</details>

<details g-layout="prose" prose-space="compact" id="armor-and-stats">
	<summary>Armor and Stats</summary>

<figure>
	<img src="/assets/images/screenshots/armor-detail.webp" loading="lazy" width="1920" height="1080">
</figure>

Armor provides the bulk of your <b>Character Stats</b> for your Guardian. Each stat provides a primary benefit from 1-100, and a second additional <b>Enhanced</b> benefit that applies once it goes above 100. A full description of each stat may be found by hovering over the Stats panel on the right side of the Character screen.

Legendary and Exotic armor pieces always have a <b>Primary</b> (largest), <b>Secondary</b>, and <b>Tertiary</b> (smallest) stat. Primary and Secondary are determined by its <b>Archetype</b>, which is a named combination of two particular stats, and the Tertiary stat is randomly selected from the remaining 4 options.

<div g="callout"><img g="icon" src="/assets/images/icons/item-ghost-reputation-rank.png"><p>Your equipped <b>Ghost Shell</b> has a slot that can accept a mod to make it more likely (~50% chance) for armor drops to be a specific Archetype.</p></div>

Armor may not have its tier increased, but it can be <b>Masterworked</b> in the details view to provide a small stat increase to its 3 lowest stats.

See <a href="#rarity-and-tiers">Rarity and Tiers</a> for stat totals that a piece of armor at each tier may provide.

#### Set Bonus

Armor dropped from certain locations or activities has a <b>Set Bonus</b>, which provides extra benefits for equipping 2 or 4 pieces of a matching armor set. Overriding the appearance of an armor piece with an ornament does not affect the Set Bonus.

#### Mods

Armor may have <a href="#mods">Mods</a> inserted for additional stats or functionality. All armor pieces have 1 general slot (for minor stat boosts), and 3 slots that have their own distinct set of Mods based on the type of armor piece (Helmet, Gauntlets, Chest, Legs, Class).

</details>

<details g-layout="prose" prose-space="compact" id="artifacts">
	<summary>Artifacts</summary>

<figure>
	<img src="/assets/images/screenshots/artifact.webp" loading="lazy" width="1920" height="1080">
</figure>

<b>Artifacts</b> are special items that add another layer of custimization for your weapons and abilities. Each Artifact has 7 slots to equip a wide variety of perks, organized into 3 tiers. The set of perks in an Artifact are generally themed around a few different weapon types and elements, which are listed on each Artifact as a suggestion for how it might fit into your loadout.

<div g="callout"><img g="icon" src="/assets/images/icons/item-ghost-reputation-rank.png"><p>Previously only a single Artifact was made available each season but with the <cite>Monument of Triumph</cite> update, Artifacts have been reworked to allow you to choose from 7 reprised Artifacts from past seasons.</p></div>

</details>

<details g-layout="prose" prose-space="compact" id="mods">
	<summary>Mods</summary>

Most of your gear has slots to insert <b>Mods</b> to customize its behavior. Mods may be swapped freely at any time.

<h4>Weapons</h4>

All Weapons (except for Exotics) have a singular Mod slot that allow for choosing a minor stat boost on top of any other perks. <a href="#rarity-and-tiers">Tier</a> 3+ Weapons gain access to Enhanced Mods for a slightly improved stat increase.

<h4>Armor</h4>

Armor pieces have 4 Mod slots: 1 for a minor character stat boost and 3 for extra passive effects. Armor Mods require a certain amount of <b>energy</b> to slot in, with more powerful mods requiring more energy.

Each armor type has a unique set of Mods available to it. For example, Leg Armor has Mods for increased damage, bonuses for collecting up Orbs of Power, and extra ammo from pickups.

<div g="callout"><img g="icon" src="/assets/images/icons/item-ghost-reputation-rank.png"><p>Armor Mods are the primary method to make use of <a href="#orbs-of-power-armor-charge">Armor Charges</a> for character stat boosts, abiity cooldown reduction, damage bonuses, and more.</p></div>

<h4>Ghost</h4>

Your equipped Ghost Shell can slot in a variety of Mods that affect rewards such as: bonus Experience and Glimmer gain, detecting resources, or influencing which <a href="#armor-and-stats">Archetype</a> an armor piece rolls (~50% chance). Similar to Armor Mods, Ghost Mods require a certain amount of <b>energy</b> to slot in, with more powerful mods requiring more energy.

<h4>Artifacts</h4>

<a href="#artifacts">Artifacts</a> have 7 slots for a variety of mods. Rather than energy, each slot accepts certain tiers of Mods. A tier 1 Mod may be inserted in any slot, but a tier 2 Mod may only be inserted into a tier 2 or higher slot.

</details>

<details g-layout="prose" prose-space="compact" id="loadouts-and-buildcrafting">
	<summary>Loadouts and Buildcrafting</summary>

<b>Loadouts</b> are available on the far left side of the <a href="character-menu">Character Menu</a>. They allow for saving gear and Subclass combinations for your character that you can easily swap between all at once. A Loadout includes Subclass, Artifact, Armor, Weapons, and any applicable Mods for those items.

<figure>
	<img src="/assets/images/screenshots/loadout.webp" loading="lazy" width="1920" height="1080">
</figure>

<h4>Buildcrafting</h4>

Destiny 2 has many options for different builds and playstyles across the available Subclasses. For a quick recap of previous sections, these are all the different components you have at your disposal to create your perfect Guardian:

- [Subclass](#subclasses-and-abilities): Abilities, Aspects, Fragments
- [Armor](#armor-and-stats): Exotic Armor piece, Armor Stats, Set Bonuses, Armor Mods
- [Weapons](#weapon-and-ammo-types): Exotic Weapon, Weapon Types/Ammo/Frames, Perks, Weapon Mods
- [Artifact](#artifacts)

How you build your Guardian is up to you! There are many community resources out there for sharing builds, but if you want to explore buildcrafting on your own here are a few tips to get started:

- Consider whether you want to focus on damage above all else, balance damage with survivability and healing, or perhaps lean more into supporting your allies instead
- A good build fits the situation; a PvP-focused build probably has different priorities than a build meant for soloing Dungeons, or a build for maximizing DPS in a Raid squad with dedicated roles. Loadouts make it easy to create variations of your favorite setup or entirely different builds all on the same character
- Choosing an Exotic Weapon or Armor piece as a strong centerpiece for a build can be an easy place to start, followed by finding things to complement what makes it unique
- Look at how you might fit together Weapon and Armor perks with <a href="#combat">Combat</a> features like Subclass Verbs, Orbs of Power, and Ammo Generation
- The <a href="#shooting-range">Shooting Range</a> has a lot of great tools for testing out and tinkering with build ideas

</details>

<details g-layout="prose">
	<summary>Vault</summary>

<figure>
	<img src="/assets/images/screenshots/vault.webp" loading="lazy" width="1920" height="1080">
</figure>

Your <b>Vault</b> lets you store additional armor, weapons, and other items that won't fit in your Guardian's inventory. You can also use it to transfer items between characters. It can hold up to 1300 weapons and armor combined, along with 50 miscellanous items.

Traditionally your Vault can be accessed in the <a href="#tower">Tower</a>, but following the <cite>Edge of Fate</cite> expansion, you can now access your Vault from anywhere via the <b>Character Menu</b>.

</details>

<details g-layout="prose" prose-space="compact" id="appearance-customization">
	<summary>Appearance Customization</summary>

<figure>
	<img src="/assets/images/screenshots/appearance-a.webp" loading="lazy" width="1920" height="1080">
</figure>

Perhaps just as important as perfecting your build is making sure your Guardian looks their best. Individual items may be customized in their detail view, but you can also customize all your equipped armor in the <b>Appearance Customization</b> menu below the Character screen.

<b>Shaders</b> are unique color and material combinations that can be applied to most of your gear. They are unlimited use once you have acquired them. <b>Ornaments</b> provide alternate appearances for Weapons and Armor. Some key items for furthering your fashion journey include:

- <b>Bright Engrams</b> contain various cosmetic rewards from past seasons. They are primarily earned by progressing the <a href="#rewards-pass">Rewards Pass</a>
- <b>Bright Dust</b> is used in the <b>Eververse</b> store to buy daily rotating offers of various cosmetics, old Event Armor Ornaments, or to focus Bright Engrams and narrow which rewards you will get from them. Bright Dust can primarily be earned from gameplay via the <a href="#seasonal-hub-and-orders">Seasonal Hub</a> and Rewards Pass
- <b>Silver</b> is a premium currency used to buy items from Eververse, including a daily rotation of past cosmetics as well as some permanent selections
- <b>Synthweave</b> allows you to save the appearance of any Legendary Armor piece into a <b>Universal Ornament</b> that you can apply to any other Armor of the same type. You can acquire Synthweave by completing weekly bounties for <b>Ada-1</b> in the Tower, or by purchasing them from Eververse of the Monument to Seasons Past

<table variant="dividers">
	<thead>
		<tr>
			<th>Gear</th>
			<th>Shaders</th>
			<th>Other Customizations</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Legendary Armor</th>
			<td style="text-align: center;"><img g="icon" class="size-up-1" src="/assets/images/icons/extra/check.png" alt="yes" /></td>
			<td>Can apply Universal Armor ornaments</td>
		</tr>
		<tr>
			<th>Exotic Armor</th>
			<td style="text-align: center;"><img g="icon" class="size-up-1" src="/assets/images/icons/extra/check.png" alt="yes" /></td>
			<td>Can apply any Universal or Exotic Armor ornament<br><span style="font-size: 0.9em;">Note: in PvP matches any ornaments not matching the equipped Exotic will be hidden</span></td>
		</tr>
		<tr>
			<th>Legendary Weapons</th>
			<td style="text-align: center;"><img g="icon" class="size-up-1" src="/assets/images/icons/extra/check.png" alt="yes" /></td>
			<td>Tier 5 Weapons offer a special ornament and kill effect</td>
		</tr>
		<tr>
			<th>Exotic Weapons</th>
			<td style="text-align: center;">-</td>
			<td>Can apply Exotic Weapon ornaments matching the base Weapon</td>
		</tr>
		<tr>
			<th>Ghost Shell</th>
			<td style="text-align: center;"><img g="icon" class="size-up-1" src="/assets/images/icons/extra/check.png" alt="yes" /></td>
			<td>Holographic projection that is displayed above your Ghost</td>
		</tr>
		<tr>
			<th>Ship</th>
			<td style="text-align: center;"><img g="icon" class="size-up-1" src="/assets/images/icons/extra/check.png" alt="yes" /></td>
			<td>Transmat Effect that changes your spawn animation</td>
		</tr>
		<tr>
			<th>Vehicle</th>
			<td style="text-align: center;"><img g="icon" class="size-up-1" src="/assets/images/icons/extra/check.png" alt="yes" /></td>
			<td>Horn with custom souunds you can honk</td>
		</tr>
	</tbody>
</table>

</details>

<h2 id="locations-and-activities">Locations and Activities</h2>

<details g-layout="prose" prose-space="compact" id="tower">
	<summary>Tower</summary>

<figure>
	<img src="/assets/images/screenshots/tower.webp" loading="lazy" width="1920" height="1080">
</figure>

The <b>Tower</b> keeps watch over the Last City, and is the main social space in Destiny 2. It contains a lot of features you'll find useful in between missions:

<div role="tablist">
	<button
		id="tower-general-tab"
		role="tab"
		aria-controls="tower-general-tabpanel"
		aria-selected="true"
	>
		General
	</button>
	<button
		id="tower-vendors-tab"
		role="tab"
		aria-controls="tower-vendors-tabpanel"
	>
		Vendors
	</button>
</div>

<div id="tower-general-tabpanel" aria-labelledby="tower-general-tab">

- <strong>Postmaster</strong> - Items not picked up during a mission will be sent to the Postmaster to be collected later. Note that the Postmaster <strong>can only hold 20 items total, and older items will be pushed out and gone forever</strong> if more items end up there
- <strong>Vault</strong> - Safely stores additional items that won't fit in your Guardian's inventory. As of the <cite>Edge of Fate</cite> expansion your Vault is accessible from anywhere via the Character Menu and does not require visiting the Tower
- <strong>Quest Archive</strong> - Small terminal right next to the Postmaster that lets you recover any abandoned quests.
- <strong>Ironwood Tree</strong> - Monument that you return to as the final step of attaining each Guardian Rank
- <strong>Exotic Archive</strong> - Allows for purchase of <b>Exotic Weapons</b> from past seasons and expansions for rare <b>Exotic Ciphers</b>, which are mainly earned from a weekly quest from Xur
- <strong>Seasonal Archive</strong> - offers rewards from past Reward Passes in exchange for <b>Chronologs</b>, which can be earned from the current Reward Pass, purchasing an old Pass, or via Seasonal Hub ojectives
- <strong>Special Deliveries</strong> - Terminal used to collect special gifts and rewards from various sources

</div>

<div id="tower-vendors-tabpanel" aria-labelledby="tower-vendors-tab" hidden="" g-layout="prose" prose-space="compact">

<p g="callout"><img g="icon" src="/assets/images/icons/item-ghost-reputation-rank.png">Some vendors have a repeatable <b>Reputation Rank</b> that can be increased by completing certain actions for extra rewards at each rank. Claiming the final reward for maximum rank will reset it.</p>

<table variant="dividers">
	<thead>
		<tr>
			<th>Vendor</th>
			<th>Items and Services</th>
			<th>Reputation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>Ikora Rey</strong><br><i>Warlock Vanguard</i></td>
			<td>Provides training for additional Subclass Abilities, Aspects, and Fragments for the three base game elements: Arc, Solar, and Void</td>
			<td>-</td>
		</tr>
		<tr>
			<td><strong>Master Rahool</strong><br><i>Cryptarch</i></td>
			<td>Decrpyts engrams into Weapons and Armor, and offers the ability to target subsets or specific pieces of <b>Exotic Armor</b> for additional materials</td>
			<td>-</td>
		</tr>
		<tr>
			<td><strong>Ada-1</strong><br><i>Armor Sythesis</i></td>
			<td>Bounties that reward <a href="#appearance-customization">Synthweave</a> for turning armor into Universal Ornaments, legacy collectible armor sets, and shaders</td>
			<td>-</td>
		</tr>
		<tr>
			<td><strong>Commander Zavala</strong><br><i>Vanguard Titan</i></td>
			<td>Current and previous weapons and armor from Vanguard Ops activities</td>
			<td><img g="icon" src="/assets/images/icons/extra/check.png" alt="yes" /> Vanguard Ops</td>
		</tr>
		<tr>
			<td><strong>Lord Shaxx</strong><br><i>Crucible Handler</i></td>
			<td>Current and previous weapons and armor from Crucible Ops activities</td>
			<td><img g="icon" src="/assets/images/icons/extra/check.png" alt="yes" /> Crucible Ops</td>
		</tr>
		<tr>
			<td><strong>Drifter</strong><br><i>Rogue Lightbearer</i></td>
			<td>Current and previous weapons and armor from Gambit Ops activities</td>
			<td><img g="icon" src="/assets/images/icons/extra/check.png" alt="yes" /> Gambit Ops</td>
		</tr>
		<tr>
			<td><strong>Saint-14</strong><br><i>Legendary Titan</i></td>
			<td>Passages, current and previous weapons and armor for Trials of Osiris</td>
			<td><img g="icon" src="/assets/images/icons/extra/check.png" alt="yes" /> Trials of Osiris</td>
		</tr>
		<tr>
			<td><strong>Xur</strong><br><i>Agent of the Nine</i></td>
			<td>Rotating Exotics, legacy weapons and armor, and other materials. His will is not his own, only shows up from <b>Friday to Monday</b></td>
			<td><img g="icon" src="/assets/images/icons/extra/check.png" alt="yes" /> Spend Strange Coins</td>
		</tr>
		<tr>
			<td><strong>Banshee-44</strong><br><i>Gunsmith</i></td>
			<td>Selection of current and legacy weapons with random rolls</td>
			<td><img g="icon" src="/assets/images/icons/extra/check.png" alt="yes" /> Dismantle weapons and armor</td>
		</tr>
		<tr>
			<td><strong>Suraya Hawthorne</strong><br><i>Clan Steward</i></td>
			<td>Raid banners and legacy raid armor</td>
			<td><img g="icon" src="/assets/images/icons/extra/check.png" alt="yes" /> Complete activities in a clan</td>
		</tr>
	</tbody>
</table>

</div>

</details>

<details g-layout="prose" prose-space="compact" id="shooting-range">
	<summary>Shooting Range</summary>

<figure>
	<img src="/assets/images/screenshots/shooting-range.webp" loading="lazy" width="1920" height="1080">
</figure>

Found in the <b>Tower map</b>, this is a space that allows you to spawn in dummy enemies to test out weapons and builds. It contains helpful features like a permanent <b>Rally Banner</b> to recharge abilities and ammo, <b>Orb of Power</b> generator, distance to target, and <abbr title="damage per second">DPS</abbr> meters.

<figure>
	<img src="/assets/images/screenshots/shooting-range-wide.webp" loading="lazy" width="1920" height="1080">
</figure>

There are controls to change which enemy faction and tier are present, as well as whether they are static targets or actively fight back.

<p g="callout"><img g="icon" src="/assets/images/icons/item-ghost-reputation-rank.png"><strong>Note</strong> that when you choose the Shooting Range on the map to load in, you may also change the difficulty and modifiers like any other activity. This can simulate different power deltas and the damage modifiers those have when testing builds.</p>

</details>

<details g-layout="prose" prose-space="compact" id="patrol-destinations">
	<summary>Patrol Destinations</summary>

Patrol is a free-roam mode that allows you to to explore destinations at your own pace. All Patrol Destinations contain the following activities:

<dl variant="icons">
	<dt><img g="icon" class="size-up-2" src="/assets/images/icons/record-patrols.png" alt="" />Patrols</dt>
	<dd>Simple tasks such as scavenging resources, scanning terrain, or taking out a key target</dd>
	<dt><img g="icon" class="size-up-2" src="/assets/images/icons/record-public-events.png" alt="" />Public Events</dt>
	<dd>Randomly-spawning events with various objectives. Completing a secret objective in each type of event can turn it into a more challenging Heroic version for increased rewards</dd>
	<dt><img g="icon" class="size-up-2" src="/assets/images/icons/activity-mode-lost-sector.png" alt="" />Lost Sectors</dt>
	<dd>Hidden mini-dungeons that contain a boss guarding a treasure chest</dd>
	<dt><img g="icon" class="size-up-2" src="/assets/images/icons/record-region-chests.png" alt="" />Region Chests</dt>
	<dd>Golden treasure chests hidden away in secret spots</dd>
</dl>

---

Certain destinations have additional special types of activities:

<table variant="dividers">
	<thead>
		<tr>
			<th>Destination</th>
			<th>Description</th>
			<th style="text-align: center;">Distortions</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><strong>Cosmodrome</strong><br>(Earth)</td>
			<td>A derelict spaceflight complex in the ruins of Old Russia.</td>
			<td style="text-align: center;"><img g="icon" class="size-up-1" src="/assets/images/icons/extra/check.png" alt="yes" /></td>
		</tr>
		<tr>
			<td><strong>EDZ</strong><br>(Earth)</td>
			<td>The cradle of humanity - a world of ancient glory, waiting to be retaken.</td>
			<td style="text-align: center;"><img g="icon" class="size-up-1" src="/assets/images/icons/extra/check.png" alt="yes" /></td>
		</tr>
		<tr>
			<td><strong>Nessus</strong></td>
			<td>A planetoid with an irregular orbit, converted by the Vex for purposes unknown.</td>
			<td style="text-align: center;"><img g="icon" class="size-up-1" src="/assets/images/icons/extra/check.png" alt="yes" /></td>
		</tr>
		<tr>
			<td><strong>Dreaming City</strong></td>
			<td>A long-hidden stronghold sacred to the Awoken of the Reef.<br><i>Special Activities:</i> <b>Blind Well</b>, <b>Ascendant Challenges</b></td>
			<td style="text-align: center;"><img g="icon" class="size-up-1" src="/assets/images/icons/extra/check.png" alt="yes" /></td>
		</tr>
		<tr>
			<td><strong>The Moon</strong><br><cite>Shadowkeep</cite></td>
			<td>An ancient evil stirs beneath the shattered surface of our Moon.<br><i>Special Activities:</i> <b>Altars of Sorrow</b></td>
			<td style="text-align: center;"><img g="icon" class="size-up-1" src="/assets/images/icons/extra/check.png" alt="yes" /></td>
		</tr>
		<tr>
			<td><strong>Europa</strong><br><cite>Beyond Light</cite></td>
			<td>A desolate and frozen moon, testament to humanity's ambition and hubris.<br><i>Special Activities:</i> <b>Eclipsed Zone</b>, <b>Simluation Exo Challenges</b></td>
			<td style="text-align: center;"><img g="icon" class="size-up-1" src="/assets/images/icons/extra/check.png" alt="yes" /></td>
		</tr>
		<tr>
			<td><strong>Savathûn's Throne World</strong><br><cite>The Witch Queen</cite></td>
			<td>The inner workings of Savathûn's mind, brought to life within a mysterious throne world of her own making.<br><i>Special Activities:</i> <b>Wellspring</b></td>
			<td style="text-align: center;"><img g="icon" class="size-up-1" src="/assets/images/icons/extra/check.png" alt="yes" /></td>
		</tr>
		<tr>
			<td><strong>Neomuna</strong><br><cite>Lightfall</cite></td>
			<td>A hidden tech-metropolis, untouched by the Collapse. <br><i>Special Activities:</i> <b>Vex Incursion Zone</b>, <b>Terminal Overload</b></td>
			<td style="text-align: center;">-</td>
		</tr>
		<tr>
			<td><strong>The Pale Heart</strong><br><cite>The Final Shape</cite></td>
			<td>A surreal domain of memory within the Traveler, corrupted by the Witness.<br><i>Special Activities:</i> <b>Overthrow</b>, <b>Pathfinder</b>, <b>Cysts</b>, <b>Excision</b></td>
			<td style="text-align: center;">-</td>
		</tr>
		<tr>
			<td><strong>Kepler</strong><br><cite>The Edge of Fate</cite></td>
			<td>A lighthouse, beckoning from the sea of stars. A lost enclave, unmoored in time.<br><i>Special Activities:</i> <b>The Sieve</b>, <b>World Tiers</b></td>
			<td style="text-align: center;">-</td>
		</tr>
	</tbody>
</table>

<p g="callout"><img g="icon" src="/assets/images/icons/extra/distortion.png" alt="" /><b>Distortions</b> are an enhanced mode for a patrol space added with the <cite>Monument of Triumph</cite> update that brings tougher enemies and events alongside higher-tier rewards. The current patrol destination that features distortions rotates every hour and is marked on the Director with a red glow.<p>

</details>

<details g-layout="prose" prose-space="compact" id="campaigns">
	<summary>Campaigns</summary>

Each major release of Destiny 2 includes a <b>Campaign</b> for the story mode. They are each progressed through a main <a href="#quests-and-bounties">Quest</a>. Upon completing the introductory quest <cite>A Guardian Rises</cite> you should be given quests to begin all campaigns. If you are a returning player and don't see them in your Quests menu, try visiting the <b>Quest Archive</b> in the Tower next to the Postmaster.

<p g="callout">Starting with <cite>The Witch Queen</cite>, campaigns have a tougher <img g="icon" class="size-up-1" src="/assets/images/icons/activity-modifier-legendary.png" alt="" /><b>Legendary</b> difficulty version available with additional special rewards. Both Normal and Legendary can be completed in a team of 1-3 players.</p>

If you want to progress through them all in order, here are all the currently-available campaigns listed in release order:

<ol variant="centered-markers">
	<li>
		<g-quest-entry>
			<img src="/assets/images/icons/quest-shadowkeep.jpg" alt="" />
			<div>Legacy: Shadowkeep (2019) <span class="fmt-label">Free</span></div>
		</g-quest-entry>
	</li>
	<li>
		<g-quest-entry>
			<img src="/assets/images/icons/quest-beyond-light.jpg" alt="" />
			<div>
				Legacy: Beyond Light (2020) <span class="fmt-label">Free</span>
				<span part="subhead"><img g="icon" class="size-up-1" src="/assets/images/icons/damage-stasis.png" alt="" /> Unlocks <b>Stasis Subclass</b></span>
			</div>
		<g-quest-entry>
	</li>
	<li>
		<g-quest-entry>
			<img src="/assets/images/icons/quest-the-witch-queen.jpg" alt="" />
			<div>
				Legacy: The Witch Queen (2022) <img g="icon" class="size-up-1" src="/assets/images/icons/activity-modifier-legendary.png" alt="legendary difficulty available" />
				<span part="subhead"><img g="icon" class="size-up-1" src="/assets/images/icons/item-deepsight-resonance.jpg" alt="" /> Unlocks <b>Weapon Crafting</b></span>
			</div>
		</g-quest-entry>
	</li>
	<li>
		<g-quest-entry>
			<img src="/assets/images/icons/quest-lightfall.jpg" alt="" />
			<div>
				Legacy: Lightfall (2023) <img g="icon" class="size-up-1" src="/assets/images/icons/activity-modifier-legendary.png" alt="legendary difficulty available" />
				<span part="subhead"><img g="icon" class="size-up-1" src="/assets/images/icons/damage-strand.png" alt="" /> Unlocks <b>Strand Subclass</b></span>
			</div>
		</g-quest-entry>
	</li>
	<li>
		<g-quest-entry>
			<img src="/assets/images/icons/quest-the-final-shape.png" alt="" />
			<div>
				Legacy: The Final Shape (2024) <img g="icon" class="size-up-1" src="/assets/images/icons/activity-modifier-legendary.png" alt="legendary difficulty available" />
				<span part="subhead"><img g="icon" class="size-up-1" src="/assets/images/icons/damage-kinetic.png" alt="" /> Unlocks <b>Prismatic Subclass</b></span>
			</div>
		</g-quest-entry>
	</li>
	<li>
		<g-quest-entry>
			<img src="/assets/images/icons/quest-the-edge-of-fate.png" alt="" />
			<div>
				The Edge of Fate (2025) <img g="icon" class="size-up-1" src="/assets/images/icons/activity-modifier-legendary.png" alt="legendary difficulty available" />
			</div>
		</g-quest-entry>
	</li>
	<li>
		<g-quest-entry>
			<img src="/assets/images/icons/quest-renegades.png" alt="" />
			<div>
				Renegades (2025) <img g="icon" class="size-up-1" src="/assets/images/icons/activity-modifier-legendary.png" alt="legendary difficulty available" />
				<span part="subhead"><img g="icon" class="size-up-1" src="/assets/images/icons/activity-mode-lawless-frontier.png" alt="" /> Unlocks <b>Lawless Frontier</b> activity</span>
			</div>
		</g-quest-entry>
	</li>
</ol>

<cite>Shadowkeep</cite> and <cite>Beyond Light</cite> are included in the free base game, all others require purchasing <cite>The Collection</cite> or as individual expansions.

</details>

<details g-layout="prose" prose-space="compact" id="vanguard-ops">
	<summary>Vanguard Ops</summary>

Vanguard Ops encompass several different categories of replayable PvE cooperative missions. Each main category offers a different type of activity as well as a unique pool of weapons and armor.

All activities can be played at several <a href="#difficulties">Difficulties</a>.

<p g="callout"><img g="icon" src="/assets/images/icons/item-ghost-reputation-rank.png">Matchmaking is available for selected missions on a daily rotation in all categories except for Solo Ops.</p>

<table variant="dividers">
	<thead>
		<tr>
			<th>Category</th>
			<th>Players</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Fireteam</th>
			<td>1-3</td>
			<td>Includes traditional <b>Strike</b> missions and other similar reprised activities from seasons past. Team up with fellow Guardians to make short work of the enemies of Humanity</td>
		</tr>
		<tr>
			<th>Pinnacle</th>
			<td>1-3</td>
			<td g-layout="prose" prose-space="compact">
				<p>Lengthier and more involved than Fireteam Ops, you'll find 3 different activity types here:</p>
				<ul>
					<li><b>Exotic Mission</b> - Unique elaborate missions that reward a specific Exotic Weapon
					<li><b>Onslaught</b> - Protect the ADU against multiple waves of enemies that get stronger over time
					<li><b>Crawl</b> - Complete a range of objectives and advance to new sections, gaining modifiers over time
				</ul>
			</td>
		</tr>
		<tr>
			<th>Arena</th>
			<td>6</td>
			<td>Larger group operations with quick and simple objectives. Wreak havoc against the forces of Darkness on multiple fronts across the Solar System</td>
		</tr>
		<tr>
			<th>Solo</th>
			<td>1</td>
			<td>Quick, straightforward recon work for the Vanguard, perfect for a solo operative</td>
		</tr>
	</tbody>
</table>

</details>

<details g-layout="prose" prose-space="compact" id="crucible">
	<summary>Crucible</summary>

The <b>Crucible</b> is where Guardians go to hone their skills agains other Guardians. It contains a variety of PvP modes and formats, from 3v3 Competitive to larger 6v6 battles and even Sparrow Racing! Private matches are also available with customizable options and modifiers.

In addition to standard modes, there are two special limited time PvP modes available at certain times:

#### Iron Banner

Available every 4 weeks, <b>Iron Banner</b> features 6v6 modes with modified rules and unique gear drops. It opens on Tuesday at <a href="#daily-and-weekly-reset">weekly reset</a> and runs for an entire week until the next Tuesday.

A special Event track is accessible right next to the Ops categories along the bottom of the Director, with daily challenges and special rewards to earn. Additionally, <b>Lord Saladin</b> visits the Tower and can exchange Iron Banner engrams for specific weapons and armor.

#### Trials of Osiris

<b>Trials of Osiris</b> is a special 3v3 Elimination mode only available during weekends (except when Iron Banner is currently running).

<p g="callout"><img g="icon" src="/assets/images/icons/item-ghost-reputation-rank.png" alt="note" />In order to access Trials of Osiris, you must own the latest expansion.</p>

Purchase a <b>Passage</b> from <b>Saint-14</b> in the Tower Hangar and earn exclusive rewards while trying to achieve the ultimate reward of entry to the Lighthouse by completing 7 wins on a single Passage.

</details>

<details g-layout="prose" prose-space="compact" id="gambit">
	<summary>Gambit</summary>

<b>Gambit</b> is a hybrid PvEvP mode where the goal is to be the first team to summon and defeat your <b>Primeval</b> boss.

- Collect <b>Motes</b> from defeated enemies and deposit them in your <b>Bank</b> to make progress towards your Primeval
- Depositing 5/10/15 Motes at a time will summon <b>Blockers</b> to lock the opposing team's bank, but be careful trying to collect too many as you **lose any carried Motes on death**
- An <b>Invasion</b> portal will open as you deposit Motes, allowing one player from your team to enter the opposing team's arena and try to take them out to make them drop Motes or even **heal their Primeval**

---

In addition to the basic rules, here are a few tips to help succeed in this fast-paced game mode:

- Be on the lookout for the ammo crate that spawns after clearing each wave of Combatants. That extra ammo can be very helpful in clearing Blockers or defeating enemy Guardians
- The scoreboard shows how many total Motes your team is carrying. Don't wait around for Drifter to yell at you that you have enough Motes to summon, go deposit them! The sooner you summon your Primeval the sooner you can start damaging it
- Invading Guardians will not spawn in directly on top of players. Keep an eye on when the enemy invasion portal is ready so you can spread out and keep watch on the empty sections of the map to be ready and make it harder for the Invader to surprise your team

</details>

<details g-layout="prose" prose-space="compact" id="raids-and-dungeons">
	<summary>Raids and Dungeons</summary>

<b>Raids</b> are advanced activities designed for 6 Guardians that include intricate mechanics and the game's toughest bosses. <b>Dungeons</b> are smaller-scale versions of raids for 3 Guardians, though they may also be solo-able if you are skilled enough.

You'll want to have a good grasp of combat and have put together a solid <a href="#loadouts-and-buildcrafting">build</a> if you want to claim victory in these activities, but powerful weapons and armor await you if you succeed.

Raids and Dungeons may be found in a dedicated section of the <a href="#director">Director</a> next to the other Ops categories, or you can discover them on the map of various destinations.

<div role="tablist">
	<button
		id="rad-raids-tab"
		role="tab"
		aria-controls="rad-raids-tabpanel"
		aria-selected="true"
	>
		Raids
	</button>
	<button
		id="rad-dungeons-tab"
		role="tab"
		aria-controls="rad-dungeons-tabpanel"
	>
		Dungeons
	</button>
</div>

<div id="rad-raids-tabpanel" aria-labelledby="rad-raids-tab">

<table variant="dividers">
	<thead>
		<tr>
			<th>Name</th>
			<th>Expansion</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>Vault of Glass</th>
			<td>Base Game <span class="fmt-label">Free</span></td>
			<td>Beneath Venus, evil stirs...</td>
		</tr>
		<tr>
			<th>Crota's End</th>
			<td>Base Game <span class="fmt-label">Free</span></td>
			<td>He waits in the dark below.</td>
		</tr>
		<tr>
			<th>King's Fall</th>
			<td>Base Game <span class="fmt-label">Free</span></td>
			<td>Long live the King...</td>
		</tr>
		<tr>
			<th>Last Wish</th>
			<td><cite>Forsaken</cite></td>
			<td>"The opportunity of a lifetime."</td>
		</tr>
		<tr>
			<th>Garden of Salvation</th>
			<td><cite>Shadowkeep</cite></td>
			<td>"The Garden calls out to you."</td>
		</tr>
		<tr>
			<th>Deep Stone Crypt</th>
			<td><cite>Beyond Light</cite></td>
			<td>The chains of legacy must be broken.</td>
		</tr>
		<tr>
			<th>Vow of the Disciple</th>
			<td><cite>The Witch Queen</cite></td>
			<td>The disciple beckons...</td>
		</tr>
		<tr>
			<th>Root of Nightmares</th>
			<td><cite>Lightfall</cite></td>
			<td>A sinister threat has taken root.</td>
		</tr>
		<tr>
			<th>Salvation's Edge</th>
			<td><cite>The Final Shape</cite></td>
			<td>Step across the threshold of the infinite.</td>
		</tr>
		<tr>
			<th>The Desert Perpetual</th>
			<td><cite>The Edge of Fate</cite></td>
			<td>Step across the threshold of the infinite.</td>
		</tr>
	</tbody>
</table>

</div>

<div g-layout="prose" prose-space="compact" id="rad-dungeons-tabpanel" aria-labelledby="rad-dungeons-tab" hidden="">

<p g="callout"><img g="icon" src="/assets/images/icons/item-ghost-reputation-rank.png"><strong>Note!</strong> For <cite>The Witch Queen</cite>, <cite>Lightfall</cite>, and <cite>The Final Shape</cite> expansions Dungeon access requires a separate <b>Dungeon Key</b> purchase. <cite>The Collection</cite> bundle includes all Dungeon Keys alongside all expansions.</p>

<table variant="dividers">
	<thead>
		<tr>
			<th>Name</th>
			<th>Expansion</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>The Shattered Throne</th>
			<td><cite>Forsaken</cite></td>
			<td>Strike back at the curse that plauges the Dreaming City.</td>
		</tr>
		<tr>
			<th>Pit of Heresy</th>
			<td><cite>Shadowkeep</cite></td>
			<td>Deep beneath Sorrow's Harbor, the Hive keep their darkets secrets.</td>
		</tr>
		<tr>
			<th>Prophecy</th>
			<td>Base Game <span class="fmt-label">Free</span></td>
			<td>Enter the realm of the Nine and ask the question: "What is the nature of the Darkness?"</td>
		</tr>
		<tr>
			<th>Grasp of Avarice</th>
			<td><cite>30th Anniversary Pack</cite></td>
			<td>A cautionary tale for adventurers willing to trade their humanity for riches.</td>
		</tr>
		<tr>
			<th>Duality</th>
			<td><cite>The Witch Queen</cite></td>
			<td>Dive into the depths of the exiled emperor's mind in search of dark secrets.</td>
		</tr>
		<tr>
			<th>Spire of the Watcher</th>
			<td><cite>the Witch Queen</cite></td>
			<td>Machinations run wild in this dust-ridden ruin. Bring them to heel.</td>
		</tr>
		<tr>
			<th>Ghosts of the Deep</th>
			<td><cite>Lightfall</cite></td>
			<td>Drown in the deep, or rise from it.</td>
		</tr>
		<tr>
			<th>Warlord's Ruin</th>
			<td><cite>Lightfall</cite></td>
			<td>Nestled deep in the mountains of the EDZ, Scorn lay claim to a Dark Age castle containing dangerous relics, and a blighted vengeance festers in the dirt.</td>
		</tr>
		<tr>
			<th>Vesper's Host</th>
			<td><cite>The Final Shape</cite></td>
			<td>Defy the algorithm. Cut through its web.</td>
		</tr>
		<tr>
			<th>Sundered Doctrine</th>
			<td><cite>The Final Shape</cite></td>
			<td>Power lies in the deepest vault.</td>
		</tr>
		<tr>
			<th>Equilibrium</th>
			<td><cite>Renegades</cite></td>
			<td>Between fire and shadow, the path to balance.</td>
		</tr>
	</tbody>
</table>

</div>

</details>

<details g-layout="prose" prose-space="compact" id="fireteam-finder">
	<summary>Fireteam Finder</summary>

<figure>
	<img src="/assets/images/screenshots/fireteam-finder.webp" loading="lazy" width="1920" height="1080">
</figure>

<b>Fireteam Finder</b> is an in-game tool that can help you find other Guardians looking to do the same activities as you, even when there is no auto-matchmaking. It is found under the <b>Social</b> menu next to the Destinations in the Director.

See [Bungie's Support Guide on Fireteam Finder](https://help.bungie.net/hc/en-us/articles/25787853699220-Fireteam-Finder-Guide) for more information.

</details>

<h2 id="progression">Progression</h2>

<details g-layout="prose" prose-space="compact" id="quests-and-bounties">
	<summary>Quests and Bounties</summary>

<figure>
	<img src="/assets/images/screenshots/quests.webp" loading="lazy" width="1920" height="1080">
</figure>

The <i>Quests</i> menu next to the Destinations in the Director contains all active quests and bounties for your current character. Each of your characters may pick these up separately and progress them on their own; they are usually not shared across characters.

<img g="icon" src="/assets/images/icons/record-the-vanguard.png" alt="" /> <b>Quests</b> are the primary method to play through story <a href="#campaigns">campaigns</a> or other specific missions. Abandoned quests may be recovered at a kiosk in the <b>Tower</b> next to the Postmaster.

<img g="icon" src="/assets/images/icons/bounty-armor-synthesis-pve.png" alt="" /> <b>Bounties</b> are simpler single-step tasks that may be acquired from vendors for bonus reputation gain, XP, or other special rewards.

</details>

<details g-layout="prose" prose-space="compact" id="seasonal-hub-and-orders">
	<summary>Seasonal Hub and Orders</summary>

The <b>Seasonal Hub</b> can be found in the <a href="#director">Director</a> along the bottom next to the Ops sections. It's a central location to check weekly rewards from Challenges, Vanguard Alerts, and Orders.

<figure>
	<img src="/assets/images/screenshots/seasonal-hub.webp" loading="lazy" width="1920" height="1080">
</figure>

Daily and Weekly Objectives provide progress to a weekly <b>Reward Track</b> that contains useful materials including <b>Bright Dust</b> and <b>Chronologs</b> and lets you claim powerful gear from <b>Zavala</b> once per week. The track is <a href="#daily-and-weekly-reset">reset every Tuesday</a>, along with any unclaimed rewards.

#### Orders

<b>Orders</b> are simple objectives based on your current Subclass and weapons. Introduced with the <cite>Renegades</cite> expansion, they are a replacement for most old daily bounties. Extra progress is awarded for basic orders in Crucible matches and from teammates' activity.

- Completing Orders has a chance to upgrade into Legendary and even Exotic Orders which offer bonus rewards
- You can also replace any order for a small Glimmer fee
- Current Orders and unclaimed rewards reset at the end of a Season

#### Vanguard Alerts

<b>Vanguard Alerts</b> are featured playlists that provide extra rewards from <b>Challenges</b> by completing the activity a certain number of times. These Challenges can be completed once per week and are a helpful boost of higher Power gear.

#### Conquests

<b>Conquests</b> are challenging versions of specific missions with preset modifiers and restrictions that rotates each season. Each one requires a minimum Power level to begin, and a special <a href="#triumphs-and-titles">Title</a> is awarded for completing a certain amount each Season.

</details>

<details g-layout="prose" prose-space="compact" id="difficulties">
	<summary>Difficulties</summary>

<figure>
	<img src="/assets/images/screenshots/difficulty.webp" loading="lazy" width="1920" height="1080">
</figure>

Vanguard Ops have multiple standard difficulties to choose from. Each higher difficulty introduces a larger <a href="#power-level">Power Delta</a> which makes combatants stronger, as well as additional modifiers such as special enemy types via <a href="#banes">Banes</a> and <a href="#champions">Champions</a>, No Radar, Limited Revives, and more. In return, they also offer rewards at a higher <a href="#rarity-and-tiers">Tier</a>.

<table>
	<thead>
		<tr>
			<th>Difficulty</th>
			<th>Power Delta</th>
			<th>Reward Rank / Tier</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Normal</td>
			<td>0</td>
			<td><code>C&nbsp;</code> → Tier 1</td>
		</tr>
		<tr>
			<td>Advanced</td>
			<td>-10</td>
			<td><code>B&nbsp;</code> → Tier 2</td>
		</tr>
		<tr>
			<td>Expert</td>
			<td>-15</td>
			<td><code>A&nbsp;</code> → Tier 3</td>
		</tr>
		<tr>
			<td>Master</td>
			<td>-20</td>
			<td><code>A+</code> → Tier 4</td>
		</tr>
		<tr>
			<td>Grandmaster</td>
			<td>-25</td>
			<td><code>A&nbsp;</code> → Tier 5</td>
		</tr>
		<tr>
			<td>Ultimate</td>
			<td>-30</td>
			<td><code>S+</code> → Tier 5</td>
		</tr>
	</tbody>
</table>

In non-matchmade versions of an activity, you may stack additional modifiers to increase your Reward Rank up to the next Rank, giving you some flexibility in how you earn higher-tiered gear.

---

<figure prose-float="end" style="max-width: 250px; margin-block: 0 1rem;">
	<img src="/assets/images/screenshots/crop/difficulty-tooltip.webp" loading="lazy" width="900" height="900">
</figure>

Outside of Vanguard Ops, some other activities across the game have custom-tuned difficulty options with varying Power Deltas and modifiers, such as Legendary Story Campaigns or Master Raids. You can make sure sure you are well-prepared by examining any modifiers and Combatant Power right next to the start button when you have an activity selected and ready to go.

</details>

<details g-layout="prose" prose-space="compact" id="guardian-ranks">
	<summary>Guardian Ranks</summary>

<figure>
	<img src="/assets/images/screenshots/tower-tree.webp" loading="lazy" width="1920" height="1080">
</figure>

<b>Guardian Ranks</b> are a progression system that guides you through different features and areas of the game by having you complete objectives to demonstrate proficiency. You can find Guardian Ranks in the <i>Journey</i> menu.

<figure prose-float="end" style="max-width: 200px;">
	<img src="/assets/images/screenshots/crop/nameplate.webp" loading="lazy" width="482" height="482">
</figure>

Early Ranks unlock <a href="#mods">Armor mods</a>, <a href="#loadouts-and-buildcrafting">Loadouts</a>, <a href="#fireteam-finder">Fireteam Finder</a>. Once you have completed all objectives for a Rank, complete the Rank-up process by returning to the Ironwood Tree near Zavala in the Tower.

The waypoints of fellow Guardians shows their current Guardian Rank in the circle.

</details>

<details g-layout="prose" prose-space="compact" id="triumphs-and-titles">
	<summary>Triumphs and Titles</summary>

<b>Triumphs</b> are the achievement system in Destiny 2, found under the "Journey > Triumphs" menu. They range from simply getting a total amount of kills with a certain subclass to clearing a dungeon solo without dying. Progressing and completing triumphs contribute to your total triumph score, and certain triumphs may additionally award unique emblems or other special rewards.

<figure>
	<img src="/assets/images/screenshots/title.webp" loading="lazy" width="1920" height="1080">
</figure>

<b>Titles</b> are awarded for completing a particular set of Triumphs and are significant displays of accomplishment. You may swap out your current Title freely on each character separately, where it will be shown on the Character menu as well as in waypoint nameplate. Some Titles may be <b>Gilded</b> by repeating the Triumphs to "re-earn" the Title each season.

</details>

<details g-layout="prose" prose-space="compact" id="daily-and-weekly-reset">
	<summary>Daily and Weekly Reset</summary>

Any <b>Daily</b> activities and challenges are reset at:

- Standard: <strong>09:00 AM Pacific Standard Time (1700 UTC)</strong>
- Daylight Savings: <strong>10:00 AM Pacific Daylight Time (1700 UTC)</strong>

<b>Weekly</b> activities and challenges are reset at Daily Reset every <strong>Tuesday</strong>. Major weekly items that get reset include:

- Seasonal Hub Reward Track
- Vanguard Alerts
- Vendor Bounties
- Raid Encounters, Checkpoints, and Challenges
- Trials of Osiris Rewards
- Clan XP and Engrams

</details>

<details g-layout="prose" prose-space="compact" id="rewards-pass">
	<summary>Rewards Pass</summary>

<figure>
	<img src="/assets/images/screenshots/rewards-pass.webp" loading="lazy" width="1920" height="1080">
</figure>

The <b>Rewards Pass</b> offers extra rewards via two tracks: Free and Paid. The Paid track of the current Season may be purchased in <b>Eververse</b> or is included automatically in the latest expansion, and contains extra items and cosmetic rewards.

Ranks of the current Reward Pass are earned by gaining <b>XP</b> which comes from many sources across Destiny 2.

Archived Passes from previous seasons are available for purchase with <b>Silver</b> (premium currency) at the <b>Monument to Seasons Past</b> in the Tower. Once purchased, all unique cosmetic rewards from that Pass are unlocked with <b>Chronologs</b> instead of levelling up the Pass with XP. Chronologs are obtained from the current Rewards Pass or the weekly Reward Track in the <a href="#seasonal-hub-and-orders">Seasonal Hub</a>.

</details>

---

In addition to the condensed topics here, you may find it useful to check out Bungie's official <a href="https://help.bungie.net/hc/en-us/sections/44229895049108-New-Player-Guides">New Player Guides</a>. They cover similar topics with a fair amount of depth, although some of them are missing a few of the finer key details.
