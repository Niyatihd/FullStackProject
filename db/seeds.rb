# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all
Comment.destroy_all
Follow.destroy_all

# -----------------------
# ******* users *********
# -----------------------
user1 = User.create!(username: 'Fred Weasley', email: 'fred@fred.com', password: 'passwordfred')
user2 = User.create!(username: 'George Weasley', email: 'george@george.com', password: 'passwordgeorge')
user3 = User.create!(username: 'HouseElf Kreacher', email: 'kreacher@kreacher.com', password: 'passwordkreacher')
user4 = User.create!(username: 'FreeElf Dobby', email: 'professor_dobby@hogwarts.com', password: 'dobbyisafreeelf')
user5 = User.create!(username: 'Harry Potter', email: 'harry@harry.com', password: 'passwordharry')
user6 = User.create!(username: 'Ronald Weasley', email: 'ron@ron.com', password: 'passwordron')
user7 = User.create!(username: 'Severus Snape', email: 'severus@severus.com', password: 'passwordseverus')
user8 = User.create!(username: 'Albus Dumbledore', email: 'albus@albus.com', password: 'passwordalbus')
user9 = User.create!(username: 'Hermoine Granger', email: 'hermoine@hermoine.com', password: 'passwordhermoine')
user10 = User.create!(username: 'Neville Longbottom', email: 'neville@neville.com', password: 'passwordneville')
user11 = User.create!(username: 'Parvati Patil', email: 'parvati@parvati.com', password: 'passwordparvati')
user12 = User.create!(username: 'Dean Thomas', email: 'dean@dean.com', password: 'passworddean')
user13 = User.create!(username: 'Luna Lovegood', email: 'luna@luna.com', password: 'passwordluna')
user14 = User.create!(username: 'Draco Malfoy', email: 'draco@draco.com', password: 'passworddraco')
user15 = User.create!(username: 'Tom Riddle', email: 'tom@tom.com', password: 'passwordtom')
user16 = User.create!(username: 'Abeforth Dumbledore', email: 'abe@abe.com', password: 'passwordabe')
user17 = User.create!(username: 'Remus Lupin', email: 'remus@remus.com', password: 'passwordremus')
user18 = User.create!(username: 'Sirius Black', email: 'black@black.com', password: 'passwordblack')
user19 = User.create!(username: 'Ginny Weasley', email: 'ginny@ginny.com', password: 'passwordginny')
user20 = User.create!(username: 'Rubeus Hagrid', email: 'hagrid@hagrid.com', password: 'passwordhagrid')
user21 = User.create!(username: 'Sorting Hat', email: 'hat@hat.com', password: 'passwordhat')
user22 = User.create!(username: 'Newt Scamander', email: 'newt@newt.com', password: 'passwordnewt')
user23 = User.create!(username: 'Dolores Umbridge', email: 'umbridge@umbridge.com', password: 'passwordumbridge')
user24 = User.create!(username: 'Cho Chang', email: 'cho@cho.com', password: 'passwordcho')
user25 = User.create!(username: 'Alastor Moody', email: 'moody@moody.com', password: 'passwordmoddy')
user26 = User.create!(username: 'Horace Slughorn', email: 'slughorn@slughorn.com', password: 'passwordslughorn')
user27= User.create!(username: 'Albus Severus Potter', email: 'albusseveruspotter@albusseveruspotter.com', password: 'passwordalbusseveruspotter')
user28 = User.create!(username: 'James Potter', email: 'james@james.com', password: 'passwordjames')
user29 = User.create!(username: 'Lily Potter', email: 'lily@lily.com', password: 'passwordlily')
user30 = User.create!(username: 'Argus Filch', email: 'filch@filch.com', password: 'passwordfilch')


# -----------------------
# ***** project #1 ******
# -----------------------
project1 = Project.create!(title: 'Poly-Juice Potion Recipe', description: "The Polyjuice Potion, which is a complex and time-consuming concoction, is best left to highly skilled witches and wizards. It enables the consumer to assume the physical appearance of another person, as long as they have first procured part of that individual's body to add to the brew (this may be anything — toenail clippings, dandruff or worse — but it is most usual to use hair)", author_id: user4.id, category: 'Potion')


proj1_photo1 = open("https://s3-us-west-1.amazonaws.com/wizardables-dev/splash1.jpg")
project1.photos.attach(io: proj1_photo1, filename: 'll1.jpeg')
proj1_photo2 = open("https://s3-us-west-1.amazonaws.com/wizardables-dev/saemus_potions.gif")
project1.photos.attach(io: proj1_photo2, filename: 'saemus_potions.gif')
proj1_photo3 = open("https://s3-us-west-1.amazonaws.com/wizardables-dev/pj2.gif")
project1.photos.attach(io: proj1_photo3, filename: 'saemus_potions.gif')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Ingredients', description: 'Fluxweed, Knotgrass, Lacewing flies, Leeches, Horn of Bicorn, BoomSlang skin, Hair of person you are turning into', project_id: project1.id)
step2 = Step.create!(title: 'Step2: Directions-Part1', description: 'Add 3 measures of fluxweed to the cauldron (must have been picked on a full moon)., Add 2 bundles of knotgrass to the cauldron., Stir 4 times clockwise., Wave your wand then let potion brew for 80 minutes (for a Pewter Cauldron. A Brass Cauldron will only require 68 and a copper one only 60.)', project_id: project1.id)
step3 = Step.create!(title: 'Step3: Directions-Part2', description: 'Add 3 measures of boomslang skin to the cauldron., Add 1 measure of bicorn horn to the mortar, crush to a fine powder, then add one measure of the crushed horn to the cauldron., Heat for 20 seconds at a high temperature., Wave your wand then let potion brew for 24 hours (for a Pewter Cauldron. A Brass Cauldron will only require 1224 minutes, and a copper one only 18 hours).', project_id: project1.id)
step4 = Step.create!(title: 'Step4: Directions-Part3', description: 'Add 1 additional scoop of lacewings to the cauldron., Stir 3 times, counter-clockwise., Split potion into multiple doses, if desired, then add the pieces of the person you wish to become., Wave your wand to complete the potion.', project_id: project1.id)
step5 = Step.create!(title: 'Step5: Directions-Part4', description: "Before this final ingredient is added, Polyjuice looks like thick, dark mud that bubbles slowly. When the piece of the person to be imitated is added, however, the potion changes colour; it seems to react according to the nature of the person to be imitated, once even described as the 'essence' of the person. Good-hearted people result in more attractive colours and tastes, while mean people cause the opposite effect. Harry Potter's was a pure golden colour, whereas Gregory Goyle's tasted like overcooked cabbage and ‘looked like bogies’, Bellatrix Lestrange's tasted disgusting, worse than Gurdyroots and Mafalda Hopkirk's was a pleasant heliotrope colour. It is likely that the taste differs from potion to potion.", project_id: project1.id)
step6 = Step.create!(title: 'Step6: Effects', description: "The effects of a single dose last anywhere from ten minutes to twelve hours depending on how well the potion has been brewed., Continued drinking prior to the transformation wearing off extends the form's duration until the next dosage is required.", project_id: project1.id)
step7 = Step.create!(title: 'Step7: Known Uses', description: "Some of the known uses are:", project_id: project1.id)

# # step1_photo = open("https://s3-us-west-2.amazonaws.com/wizardseeds/ll1.jpeg")
# # step1.photo.attach(io: step1_photo, filename: "ll1.jpeg")

# -----------------------
# ***** project #2 ******
# -----------------------
project2 = Project.create!(title: 'Love Potion Recipe', description: "Amortentia is the world's most powerful love potion, it's name comes from the Latin 'Amor Tentia' which means 'love held'. Not only is the potion very powerful, it's also considered to be highly dangerous.", author_id: user1.id, category: 'Potion')

proj2_photo = open("https://s3-us-west-1.amazonaws.com/wizardables-dev/lp1.jpg")
project2.photos.attach(io: proj2_photo, filename: 'lp1.jpeg')


# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Ingredients', description: 'Ashwinder Eggs, Rose Thorns, Peppermint, Powdered Moonstone and Pearl Dust', project_id: project2.id)
step2 = Step.create!(title: 'Step2: Directions-Part1', description: 'First drop one ashwinder egg into your cauldron. These serpent eggs are a common ingredient in most love potions. You can buy these buy the dozen in any magic store.', project_id: project2.id)
step3 = Step.create!(title: 'Step3: Directions-Part2', description: 'Next add in a handful of rose thorns. Be careful as these sometimes have sharp edges. Then add the peppermint, powedered moonstone and pearl dust. Stir your mixture well until steam rises from the cauldron.', project_id: project2.id)
step4 = Step.create!(title: 'Step4: Directions-Part3', description: 'Once your potion is ready, steam will rise from your cauldron in spirals and you will begin to smell a strong aroma. Amortentia has a different aroma for everyone who smells it, reminding each person of the things that they find most attractive. Amortentia is recognised by its distinctive for its mother of pearl sheen.', project_id: project2.id)
step5 = Step.create!(title: 'Step5: Effects', description: 'Once prepared, you will need to get your crush to drink one drop of the potion, a single dose usually lasts up to 24 hours, the drinker will only hold an obsession for the person who administered the potion. However, this is not really love, its impossible to manufacture or imitate love but the drinker will become instantly infatuated with the person who administered it. Amortentia must be drunk continuously in order to maintain the false love. As stated its dangerous to underestimate a powerful infatuation. Despite its power, Amortentia doesnt create actual love; its impossible to manufacture or imitate love.', project_id: project2.id)

# -----------------------
# ***** project #3 ******
# -----------------------
project3 = Project.create!(title: 'Liquid luck Recipe', description: "Felix Felicis is liquid luck, which makes the person who drinks it lucky for a certain period of time.", author_id: user3.id, category: 'Potion')

proj3_photo = open("https://s3-us-west-1.amazonaws.com/wizardables-dev/ll1.jpeg")
project3.photos.attach(io: proj3_photo, filename: 'lp1.jpeg')
# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Ingredients', description: 'Ashwinder egg, Squill bulb, Murtlap tentacle, Tincture of thyme, Occamy eggshell, Powdered common rue', project_id: project3.id)
step2 = Step.create!(title: 'Step2: Directions-Part1', description: 'Add Ashwinder egg to a cauldron, then add horseradish and heat. Juice a squill bulb, add to the cauldron and stir vigorously. Chop up anemone-like growth on the back of Murtlap, add to mixture and heat.', project_id: project3.id)
step3 = Step.create!(title: 'Step3: Directions-Part2', description: 'Add a dash of tincture of thyme and stir slowly. Grind up Occamy eggshell and add to mixture. Stir slowly then heat the cauldron.', project_id: project3.id)
step4 = Step.create!(title: 'Step4: Directions-Part3', description: 'Add a sprinkle of powdered common rue. Stir vigorously then heat the cauldron one last time. Wave wand over potion in a figure of eight and say incantation Felixempra!', project_id: project3.id)
step5 = Step.create!(title: 'Step5: Effects', description: 'Felix Felicis causes the drinker to have a limited period of good luck, during which they are likely to to succeed in all endeavours in which success is possible. They have a strong perception of this effect, including a high level of confidence and a "sensation of infinite opportunity."', project_id: project3.id)

# -----------------------
# ***** project #4 ******
# -----------------------
project4 = Project.create!(title: 'Skele Gro Potion Recipe', description: 'Skele-Gro (alternately spelled Skelegro) is a dreadful-tasting potion which restores bones. It is able to mend broken bones and even regrow entire bones that have vanished or been otherwise lost. For regrowing entire bones, the process is a notably slow and painful process, that can take over a full day.', author_id: user2.id, category: 'Potion')

proj4_photo = open("https://s3-us-west-1.amazonaws.com/wizardables-dev/sk1.jpg")
project4.photos.attach(io: proj4_photo, filename: 'lp1.jpeg')
# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Ingredients', description: 'scarab beetles, rose water, dried seahorses, doxy eggs, powdered sulfur, Chinese chomping cabbage, essence of dittany, chamomile flower petals, pufferfish, jellyfish, honeywater, griffin claws, Velnamēle Pepper', project_id: project4.id)
step2 = Step.create!(title: 'Step2: Directions-Part1', description: 'Crush 3 scarab beetles and 2 dried seahorses with mortar and pestle. Add 2.5 tablespoons of the crushed mixture to the cauldron. Add 3 milliliters of rose water to the cauldron. Leave the potion to brew in your cauldron for 60 minutes.', project_id: project4.id)
step3 = Step.create!(title: 'Step3: Directions-Part2', description: 'Add 2 doxy eggs to the cauldron. Add 2 tablespoons of powdered sulfur. Carefully cut the Chinese chomping cabbage width-wise. Add the last 2 scarab beetles and 1 dried seahorse.', project_id: project4.id)
step4 = Step.create!(title: 'Step4: Directions-Part3', description: 'Add 4 milliliters of rose water to the cauldron and let simmer. Add 2 milliliters of essence of dittany to the cauldron. Add 2 chamomile flower petals, 1 jellyfish, and 1 pufferfish to the cauldron. Add 2 chamomile flower petals to the cauldron.', project_id: project4.id)
step5 = Step.create!(title: 'Step5: Effects', description: 'Once consumed, the potion will slowly work to repair bone damage and even rebuild bones that have been removed through magical or non-magical means. This potion typically takes at least twelve hours to repair and regrow bones. Depending on the severity of the injury, it may take far longer. It should be noted, however, that the potion cannot rebuild limbs or parts of the body as a whole, only the skeletal structure. It also cannot repair bodies born with deformities, such as those born with missing bones.', project_id: project4.id)

# -----------------------
# ***** project #5 ******
# -----------------------
project5 = Project.create!(title: 'Wingardium Leviosa charm', description: "The Levitation Charm is one of the first spells learnt by any young witch or wizard. With the charm a witch or wizard can make things fly with the flick of a wand. The charm is an excellent test of your magical skills, wand control and above all, patience.", author_id: user2.id, category: 'Charm')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Incantation', description: 'Wingardium Leviosa (win-GAR-dee-um levi-O-sa)', project_id: project5.id)
step2 = Step.create!(title: 'Step2: Wand Movement', description: 'Swish and flick', project_id: project5.id)
step3 = Step.create!(title: 'Step3: Willpower', description: 'Low; Visualize your energy coming from your body and lifting the object.', project_id: project5.id)
step4 = Step.create!(title: 'Step4: Concentration', description: 'Moderate; on the thing you want to levitate', project_id: project5.id)
step5 = Step.create!(title: 'Step5: Directions', description: "As you say Wingardium start the 'Swish' motion. Time the swish so that it ends just after you begin saying Leviosa. Then, as you finish saying Leviosa, do the 'Flick.' And remember, keep your mind focused on the target of your spell and visualize drawing energy from your body as we practiced before. I know it may take some time for you to get used to doing all of these things at once, but with practice, casting this spell and many others will become easier.", project_id: project5.id)

# -----------------------
# ***** project #6 ******
# -----------------------
project6 = Project.create!(title: 'Alohomora charm', description: "The Unlocking Charm, also known as the Thief's Friend (Alohomora) is a charm that unlocks the target, including doors, windows or other objects. It is also able to open doors locked by the Locking Spell (Colloportus), and as such, is its Counter-charm. There also exists a spell to prevent this charm from being used on a locked target.", author_id: user1.id, category: 'Charm')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Incantation', description: 'Alohomora (‘al-LOH-ha-MOR-ah’)', project_id: project6.id)
step2 = Step.create!(title: 'Step2: Wand Movement', description: 'Backward S curving up at the end', project_id: project6.id)
step3 = Step.create!(title: 'Step3: Willpower', description: 'None for simple mechanical locks; minimal to very high for locks ranging from complex mechanical to complex magical.', project_id: project6.id)
step4 = Step.create!(title: 'Step4: Concentration', description: 'Visualization of yourself unlocking the locks', project_id: project6.id)
step5 = Step.create!(title: 'Step5: Directions', description: "The charm’s wand movement is a backward S that curves back upward at the end. The caster must focus upon the lock to be undone, whether it is just a physical lock or of magical design. It's important to begin the wand movement as you begin saying the spell and end it as you finish saying the spell, regardless of how quickly you say the spell or perform the movement. Depending upon the particular spell used to create the lock, the Unlocking Charm may prove ineffective.", project_id: project6.id)


# -----------------------
# ***** project #7 ******
# -----------------------
project7 = Project.create!(title: 'Finite charm', description: "The General Counter-Spell (Finite or Finite Incantatem) is a counter-spell for general use. It may be used in duels to counter or reverse minor damage, such as the effects of minor jinxes and curses.", author_id: user1.id, category: 'Charm')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Incantation', description: 'Finite (fi-NEE-tay)', project_id: project7.id)
step2 = Step.create!(title: 'Step2: Wand Movement', description: 'A swish to the right, followed by a bend down to the left and back up (in the shape of a shield).', project_id: project7.id)
step3 = Step.create!(title: 'Step3: Willpower', description: 'Moderate to strong; depending on the charm(s) to be countered.', project_id: project7.id)
step4 = Step.create!(title: 'Step4: Concentration', description: 'Moderate to strong depending on what you are cancelling; Focus on the target object.', project_id: project7.id)
step5 = Step.create!(title: 'Step5: Directions', description: "The Effect-Cancelling Charm is a very interesting spell because, rather than give a person or object a quality or property it did not have before, it removes the effects placed on something by a spell. The spell is ineffective against Deep Charmed Objects, but it does remove the effects of any Shallow Object Charms that have been applied. It is also able to remove some negative effects, such as those from jinxes or hexes, from a living creature (humans included), though it is not as good at this task.", project_id: project7.id)

# -----------------------
# ***** project #8 ******
# -----------------------
project8 = Project.create!(title: 'Arresto Momentum charm', description: "he Slowing Charm (Arresto Momentum) is a charm that can be used by a witch or wizard to slow the velocity of an object.", author_id: user1.id, category: 'Charm')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Incantation', description: 'Arresto Momentum (ah-REST-oh mo-MEN-tum)', project_id: project8.id)
step2 = Step.create!(title: 'Step2: Wand Movement', description: 'Wave wand.', project_id: project8.id)
step3 = Step.create!(title: 'Step3: Willpower', description: 'Very high; depending on the target’s speed and height.', project_id: project8.id)
step4 = Step.create!(title: 'Step4: Concentration', description: 'Medium to high; direct the magic to the target object or person.', project_id: project8.id)
step5 = Step.create!(title: 'Step5: Directions', description: "How does this spell work? I am sure that all of you know that objects fall at different speeds when you drop them in a liquid. Yet to make sure that we are all on the same page, I have brought you four different jars filled with water, corn syrup, oil, and honey. If you watch the speed in which a regular marble falls in these fluids, you will certainly notice a difference.", project_id: project8.id)

# -----------------------
# ***** project #9 ******
# -----------------------
project9 = Project.create!(title: 'Veritaserum Potion Recipe', description: "One of the most powerful potions ever seen, Veritaserum is a truth potion. It’s odourless and transparent liquid which forces the speaker tell the truth. Even it’s the most powerful truth serum, it is possible to use some techniques to resist its effects.", author_id: user9.id, category: 'Potion')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Ingredients', description: 'Wand, 1/2 a cauldron full of water, Powdered Griffin Claw, Shredded Boomslang Skin, Knotgrass, Snake Fangs, Powdered Snake Weed picked 21 days before a full moon, Stargrass picked on the summer solcest, Wormwood', project_id: project9.id)
step2 = Step.create!(title: 'Step2: Directions-Part1', description: 'Add 8 measures of powdered griffin claws, add 3 pieces of shredded boomslang skin, add 2 measures of knotgrass', project_id: project9.id)
step3 = Step.create!(title: 'Step3: Directions-Part2', description: 'Wave wand over cauldron and let stew for 30 minutes with peweter cauldron ( 28 minutes with silver and 22 minutes with copper). Add 5 easures of snake fangs, add 8 meausures of powdered snakeweed', project_id: project9.id)
step4 = Step.create!(title: 'Step4: Directions-Part3', description: 'Add  measures of stargrass. Add 6 pieces of cut up wormwood. Wave wand over cauldron again and let stew for 78 minutes if pewter ( 75 minutes with silver and 70 minutes with copper)', project_id: project9.id)
step5 = Step.create!(title: 'Step5: Effects', description: "Another potion whose use has been debated among ethicists for centuries is Veritaserum. While individual views on the subject vary, the two most popular in the literature are those who think it should be banned and those who think its use is permissible under certain circumstances.", project_id: project9.id)

# -----------------------
# ***** project #10 ******
# -----------------------
project10 = Project.create!(title: 'Draught of Living Death Potion Recipe', description: "The Draught of Living Death brings upon its drinker a very powerful sleep that can last indefinitely. This draught is very dangerous if not used with caution. This is an extremely dangerous potion. Execute with maximum caution.", author_id: user10.id, category: 'Potion')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Ingredients', description: 'Water, Powdered root of asphodel, Infusion of Wormwood, Valerian root, A Sopophorous Bean,A Sloth brain', project_id: project10.id)
step2 = Step.create!(title: 'Step2: Directions-Part1', description: 'Add the Infusion of Wormwood. Add the powdered root of asphodel. Stir twice clockwise.', project_id: project10.id)
step3 = Step.create!(title: 'Step3: Directions-Part2', description: 'Add the sloth brain. Add the Sopophorous bean juice. Stir seven times anti-clockwise.', project_id: project10.id)
step4 = Step.create!(title: 'Step4: Directions-Part3', description: 'Half-Blood Prince \'s Notes: The Sopophorous bean should be crushed with a silver dagger, not cut, releases juices more efficiently. The juice from 13 Sopophorous beans should be used, rather than 12. Stir anticlockwise seven times and clockwise once instead.', project_id: project10.id)
step5 = Step.create!(title: 'Step5: Effects', description: "The potion is difficult to concoct, since Hermione Granger, a very talented potion-maker, who managed to concoct Polyjuice Potion in her second year, had trouble doing it. Indeed, Horace Slughorn states that only once before in his career was a student (presumably Severus Snape, the Half-Blood Prince whose bookmarked instructions deviated from the potion-making process made a far more effective draught than any other student, though this was never confirmed) able to brew a mostly finished draught in only a single hour.", project_id: project10.id)

# -----------------------
# ***** project #11 ******
# -----------------------
project11 = Project.create!(title: 'Obliviate charm', description: "The Forgetfulness Charm is a popular memory-affecting charm frequently used by Ministry obliviators (whose name comes from this spell) to remove memories of the wizarding world from Muggle minds.", author_id: user11.id, category: 'Charm')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Incantation', description: 'Obliviate (oh-BLI-vee-ate)', project_id: project11.id)
step2 = Step.create!(title: 'Step2: Wand Movement', description: 'Point your wand at the forehead of your target and move it in slow, clockwise circles, as if erasing a chalk board.', project_id: project11.id)
step3 = Step.create!(title: 'Step3: Willpower', description: 'Willpower: Moderate.', project_id: project11.id)
step4 = Step.create!(title: 'Step4: Concentration', description: 'Concentration: Very high; Concentration should be maintained on the memories to be removed. Keep in mind the spell\'s designated target.', project_id: project11.id)
step5 = Step.create!(title: 'Step5: Directions', description: "To cast the spell, the user needs to understand the memories that are to be erased and concentrate on those. The more precise the caster’s concentration, the fewer unintended side effects will result. Casting many Forgetfulness Charms on one target in a short time will likely cause severe confusion in the target. Note that this spell does not truly erase memories but merely encapsulates an existing one within white filler, preventing the target from accessing or extracting the memory within the whitewash.", project_id: project11.id)


# -----------------------
# ***** project #12 ******
# -----------------------
project12 = Project.create!(title: 'Stupefy charm', description: "The Stunning Spell is an interesting spell because its effect has no known cause. We know for sure that the Stunning Spell causes the victim to fall instantly unconscious, but there are a plethora of reasons that can cause unconsciousness.", author_id: user12.id, category: 'Charm')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Incantation', description: 'Stupefy (STEW-puh-fye)', project_id: project12.id)
step2 = Step.create!(title: 'Step2: Wand Movement', description: 'A downward vertical slash', project_id: project12.id)
step3 = Step.create!(title: 'Step3: Willpower', description: 'Moderate', project_id: project12.id)
step4 = Step.create!(title: 'Step4: Concentration', description: 'Moderate to high', project_id: project12.id)
step5 = Step.create!(title: 'Step5: Directions', description: "Once the target is hit, the effect will be immediate and they will drop to the ground in a state of unconsciousness. At this point, they are considered unable to continue combat (if in a dueling situation) and are in danger. The individual is incapable of defending themselves, which now puts you, the caster, in a position of moral responsibility.", project_id: project12.id)

# -----------------------
# ***** project #13 ******
# -----------------------
project13 = Project.create!(title: 'Tom Riddle\'s Diary', description: "T. M. Riddle's Diary was a simple blank diary, which Tom Riddle transformed into a Horcrux. The diary was made into a Horcrux in 1943, during Riddle's sixth year at Hogwarts School of Witchcraft and Wizardry. It was the first Horcrux he ever made and was used as a weapon.", author_id: 13, category: 'Horcrux')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Hiding place', description: 'In the possession of Lucius Malfoy, later given to Ginny Weasley (without her knowing it), and eventually found by Harry Potter in the girls lavatory on the 2nd floor.', project_id: 13)
step2 = Step.create!(title: 'Step2: Created with the murder of', description: 'Myrtle Warren by the Serpent of Slytherin', project_id: 13)
step3 = Step.create!(title: 'Step3: Location of murder', description: 'First-floor girls\' lavatory, Hogwarts Castle', project_id: 13)
step4 = Step.create!(title: 'Step4: Date created', description: '13 June, 1943', project_id: 13)
step5 = Step.create!(title: 'Step5: Destroyed by', description: 'Harry Potter', project_id: 13)
step6 = Step.create!(title: 'Step6: Destruction method', description: 'Stabbed with one of the Basilisk\'s fangs', project_id: 13)
step7 = Step.create!(title: 'Step7: Destruction site', description: 'Chamber of Secrets, Hogwarts Castle', project_id: 13)
step8 = Step.create!(title: 'Step8: Date destroyed', description: '29 May, 1993', project_id: 13)

# -----------------------
# ***** project #14 ******
# -----------------------
project14 = Project.create!(title: 'Marvolo Gaunt\'s Ring', description: "The ring's story begins (and ends) with its black stone. The stone happened to be the Resurrection Stone, one of the Deathly Hallows of legend, and had the symbol of the Deathly Hallows engraved on its surface. It was a horcrux.", author_id: 14, category: 'Horcrux')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Hiding place', description: 'In the Gaunt Shack', project_id: 14)
step2 = Step.create!(title: 'Step2: Created with the murder of', description: 'Tom Riddle Senior with Morfin Gaunt\'s wand', project_id: 14)
step3 = Step.create!(title: 'Step3: Location of murder', description: 'Riddle House, Little Hangleton', project_id: 14)
step4 = Step.create!(title: 'Step4: Date created', description: 'August 1943', project_id: 14)
step5 = Step.create!(title: 'Step5: Destroyed by', description: 'Albus Dumbledore', project_id: 14)
step6 = Step.create!(title: 'Step6: Destruction method', description: 'Cut with Godric Gryffindor\'s Sword', project_id: 14)
step7 = Step.create!(title: 'Step7: Destruction site', description: 'Headmaster\'s office, Hogwarts Castle', project_id: 14)
step8 = Step.create!(title: 'Step8: Date destroyed', description: 'July 1996', project_id: 14)

# -----------------------
# ***** project #15 ******
# -----------------------
project15 = Project.create!(title: 'Salazar Slytherin\'s Locket', description: "The locket was a creation of Salazar Slytherin, the celebrated Founder of Slytherin House at Hogwarts School of Witchcraft and Wizardry. When Slytherin created the locket, he enchanted it so that only a Parselmouth, like himself, could open it.[3] When Slytherin left Hogwarts, he took the locket with him. It was a horcrux.", author_id: 15, category: 'Horcrux')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Hiding place', description: 'The Crystal Cave, later moved to 12 Grimmauld Place, later stolen by Mundungus Fletcher, who gave it to Dolores Umbridge as a bribe.', project_id: 15)
step2 = Step.create!(title: 'Step2: Created with the murder of', description: 'A Muggle tramp', project_id: 15)
step3 = Step.create!(title: 'Step3: Location of murder', description: 'Unknown', project_id: 15)
step4 = Step.create!(title: 'Step4: Date created', description: 'c. 1946 or later, but before 1979', project_id: 15)
step5 = Step.create!(title: 'Step5: Destroyed by', description: 'Ron Weasley', project_id: 15)
step6 = Step.create!(title: 'Step6: Destruction method', description: 'Stabbed with Godric Gryffindor\'s Sword', project_id: 15)
step7 = Step.create!(title: 'Step7: Destruction site', description: 'Forest of Dean, Gloucestershire', project_id: 15)
step8 = Step.create!(title: 'Step8: Date destroyed', description: '28 December, 1997', project_id: 15)

# -----------------------
# ***** project #16 ******
# -----------------------
project16 = Project.create!(title: 'Helga Hufflepuff\'s Cup', description: "Helga Hufflepuff's Cup was a magical item created by Helga Hufflepuff, one of the founders of Hogwarts School of Witchcraft and Wizardry. It was a small golden cup with two finely-wrought handles with a badger engraved on the side and a few jewels. It was a horcrux.", author_id: 16, category: 'Horcrux')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Hiding place', description: 'The Lestrange family vault at Gringotts Wizarding Bank.', project_id: 16)
step2 = Step.create!(title: 'Step2: Created with the murder of', description: 'Hepzibah Smith', project_id: 16)
step3 = Step.create!(title: 'Step3: Location of murder', description: 'Hepzibah Smith\'s home', project_id: 16)
step4 = Step.create!(title: 'Step4: Date created', description: 'c. 1946 or later', project_id: 16)
step5 = Step.create!(title: 'Step5: Destroyed by', description: 'Hermione Granger', project_id: 16)
step6 = Step.create!(title: 'Step6: Destruction method', description: 'Stabbed with a Basilisk fang', project_id: 16)
step7 = Step.create!(title: 'Step7: Destruction site', description: 'Chamber of Secrets, Hogwarts Castle', project_id: 16)
step8 = Step.create!(title: 'Step8: Date destroyed', description: 'Battle of Hogwarts, 2 May, 1998', project_id: 16)

# -----------------------
# ***** project #17 ******
# -----------------------
project17 = Project.create!(title: 'Rowena Ravenclaw\'s Diadem', description: "Ravenclaw's Diadem[1] (also known as the Lost Diadem of Ravenclaw) was the only known relic once belonging to Rowena Ravenclaw, the founder of Ravenclaw House at Hogwarts School of Witchcraft and Wizardry. Etched upon its surface was Ravenclaw's famous quote: Wit beyond measure is man's greatest treasure. It was a horcrux.", author_id: 17, category: 'Horcrux')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Hiding place', description: 'In the Room of Requirement at Hogwarts Castle', project_id: 17)
step2 = Step.create!(title: 'Step2: Created with the murder of', description: 'An Albanian peasant', project_id: 17)
step3 = Step.create!(title: 'Step3: Location of murder', description: 'Albania', project_id: 17)
step4 = Step.create!(title: 'Step4: Date created', description: 'c. 1946 or later', project_id: 17)
step5 = Step.create!(title: 'Step5: Destroyed by', description: 'Vincent Crabbe. Stabbed with a Basilisk fang and then kicked into Vincent Crabbe\'s unintentional Fiendfyre', project_id: 17)
step6 = Step.create!(title: 'Step6: Destruction method', description: 'Fiendfyre', project_id: 17)
step7 = Step.create!(title: 'Step7: Destruction site', description: 'Room of Requirement, Hogwarts Castle', project_id: 17)
step8 = Step.create!(title: 'Step8: Date destroyed', description: 'Battle of Hogwarts, 2 May 1998', project_id: 17)

# -----------------------
# ***** project #18 ******
# -----------------------
project18 = Project.create!(title: 'Nagini', description: "Nagini (d. 2 May, 1998) was a Maledictus cursed to transform into a snake. Originating possibly in Indonesia,[2] by 1927 she was a performer at the Circus Arcanus where she met Credence Barebone and had the ability then to transform at will. By 1994, Nagini was seemingly trapped in snake form and belonged to Lord Voldemort, with whom she had a special bond largely due to becoming a Horcrux, after her master had killed Bertha Jorkins in 1994.", author_id: 18, category: 'Horcrux')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Hiding place', description: 'Always by Lord Voldemort\'s side after the cup was stolen', project_id: 18)
step2 = Step.create!(title: 'Step2: Created with the murder of', description: 'Bertha Jorkins', project_id: 18)
step3 = Step.create!(title: 'Step3: Location of murder', description: 'Albania', project_id: 18)
step4 = Step.create!(title: 'Step4: Date created', description: 'Summer 1994', project_id: 18)
step5 = Step.create!(title: 'Step5: Destroyed by', description: 'Neville Longbottom', project_id: 18)
step6 = Step.create!(title: 'Step6: Destruction method', description: 'Beheaded with Godric Gryffindor\'s Sword', project_id: 18)
step7 = Step.create!(title: 'Step7: Destruction site', description: 'Front steps of Hogwarts', project_id: 18)
step8 = Step.create!(title: 'Step8: Date destroyed', description: 'Battle of Hogwarts, 2 May 1998', project_id: 18)

# -----------------------
# ***** project #19 ******
# -----------------------
project19 = Project.create!(title: 'Quirinus Quirrell', description: "As a boy, Quirinus was gifted but also delicate, teased for his timidity and nerves during his school life. Feeling inadequate and wishing to prove himself, he developed an (initially theoretical) interest in the Dark Arts. The feelings of insignificance and worthlessness that this bullying fostered embittered the boy, forging a latent desire to make the world sit up and notice him. He was a pseudo horcrux.", author_id: 19, category: 'Horcrux')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Hiding place', description: 'Hogwarts School of Witchcraft and Wizardry', project_id: 19)
step2 = Step.create!(title: 'Step2: Created with the murder of', description: 'None (soul very unstable at the time; possession)', project_id: 19)
step3 = Step.create!(title: 'Step3: Location of murder', description: 'NA', project_id: 19)
step4 = Step.create!(title: 'Step4: Date created', description: '1990-1991', project_id: 19)
step5 = Step.create!(title: 'Step5: Destroyed by', description: 'Harry Potter', project_id: 19)
step6 = Step.create!(title: 'Step6: Destruction method', description: 'Burnt to death under Harry\'s touch', project_id: 19)
step7 = Step.create!(title: 'Step7: Destruction site', description: 'Underground Chambers, Hogwarts Castle', project_id: 19)
step8 = Step.create!(title: 'Step8: Date destroyed', description: '4 June, 1992', project_id: 19)

# -----------------------
# ***** project #20 ******
# -----------------------
project20 = Project.create!(title: 'Harry Potter', description: "Harry James Potter (b. 31 July, 1980) was an English half-blood wizard, one of the most famous wizards of modern times. He was the only child and son of James and Lily Potter (née Evans), both members of the original Order of the Phoenix. Harry's birth was overshadowed by a prophecy, naming either himself or Neville Longbottom as the one with the power to vanquish Lord Voldemort. He was a pseudo horcrux.", author_id: 20, category: 'Horcrux')

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Hiding place', description: 'Harry Potter', project_id: 20)
step2 = Step.create!(title: 'Step2: Created with the murder of', description: 'Voldemort had rendered his soul so unstable that it broke apart when he committed those acts of unspeakable evil, the murder of Harry\'s parents, the attempted murder of an infant Harry.', project_id: 20)
step3 = Step.create!(title: 'Step3: Location of murder', description: 'Godric\'s Hollow, West Country', project_id: 20)
step4 = Step.create!(title: 'Step4: Date created', description: '31 October, 1981', project_id: 20)
step5 = Step.create!(title: 'Step5: Destroyed by', description: 'Lord Voldemort', project_id: 20)
step6 = Step.create!(title: 'Step6: Destruction method', description: 'Destroyed with a Killing Curse from The Elder Wand', project_id: 20)
step7 = Step.create!(title: 'Step7: Destruction site', description: 'Forbidden Forest, Hogwarts School of Witchcraft and Wizardry', project_id: 20)
step8 = Step.create!(title: 'Step8: Date destroyed', description: '2 May, 1998', project_id: 20)



# -----------------------
# ******* comments ******
# -----------------------

comment1 = Comment.create!(body: 'great!', author_id: user1.id, project_id: project1.id)
comment2 = Comment.create!(body: 'another great one', author_id: user2.id, project_id: project2.id)
comment3 = Comment.create!(body: 'great work!', author_id: user3.id, project_id: project3.id)
comment4 = Comment.create!(body: 'Yay! another great one', author_id: user4.id, project_id: project4.id)
comment5 = Comment.create!(body: 'Awesome!', author_id: user1.id, project_id: project5.id)
comment6 = Comment.create!(body: 'Keep up the great work', author_id: user2.id, project_id: project6.id)
comment7 = Comment.create!(body: 'Fantastic!', author_id: user3.id, project_id: project7.id)
comment8 = Comment.create!(body: 'Fab!', author_id: user4.id, project_id: project8.id)


# -----------------------
# ***** follows    ******
# -----------------------

Follow.create!(user_id: user1.id, project_id: project1.id)
Follow.create!(user_id: user1.id, project_id: project2.id)
Follow.create!(user_id: user1.id, project_id: project3.id)
Follow.create!(user_id: user1.id, project_id: project4.id)
Follow.create!(user_id: user1.id, project_id: project5.id)
Follow.create!(user_id: user1.id, project_id: project6.id)
Follow.create!(user_id: user1.id, project_id: project7.id)
Follow.create!(user_id: user1.id, project_id: project8.id)
Follow.create!(user_id: user1.id, project_id: project9.id)
Follow.create!(user_id: user1.id, project_id: project10.id)
Follow.create!(user_id: user1.id, project_id: project11.id)
Follow.create!(user_id: user1.id, project_id: project12.id)
Follow.create!(user_id: user2.id, project_id: project1.id)
Follow.create!(user_id: user3.id, project_id: project1.id)
Follow.create!(user_id: user4.id, project_id: project1.id)
Follow.create!(user_id: user5.id, project_id: project1.id)
Follow.create!(user_id: user6.id, project_id: project1.id)
Follow.create!(user_id: user7.id, project_id: project1.id)
Follow.create!(user_id: user8.id, project_id: project1.id)
Follow.create!(user_id: user9.id, project_id: project1.id)
Follow.create!(user_id: user10.id, project_id: project1.id)
Follow.create!(user_id: user11.id, project_id: project1.id)
Follow.create!(user_id: user12.id, project_id: project1.id)
Follow.create!(user_id: user13.id, project_id: project1.id)
Follow.create!(user_id: user14.id, project_id: project1.id)