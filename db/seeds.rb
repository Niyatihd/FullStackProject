# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
# Comment.destroy_all



# -----------------------
# ******* users *********
# -----------------------
user1 = User.create!(username: 'robert', email: 'rob@rob.com', password: 'passwordrob')
user2 = User.create!(username: 'ned', email: 'ned@ned.com', password: 'passwordned')
user3 = User.create!(username: 'bilbo', email: 'bilbo@bilbo.com', password: 'passwordbilbo')
user4 = User.create!(username: 'freedobby', email: 'professor_dobby@hogwarts.com', password: 'dobbyisafreeelf')

# comment1 = Comment.create!(body: 'great!', user_id: user1.id, artwork_id: artwork1.id)
# comment2 = Comment.create!(body: 'another great one', user_id: user2.id, artwork_id: artwork2.id)
# Like.create!(user_id: user1.id, likeable_id: comment1.id, likeable_type: 'Comment')
# Like.create!(user_id: user2.id, likeable_id: artwork2.id, likeable_type: 'Artwork')

# -----------------------
# ***** project #1 ******
# -----------------------
project1 = Project.create!(title: 'Poly-Juice Potion Recipe', description: "The Polyjuice Potion, which is a complex and time-consuming concoction, is best left to highly skilled witches and wizards. It enables the consumer to assume the physical appearance of another person, as long as they have first procured part of that individual's body to add to the brew (this may be anything — toenail clippings, dandruff or worse — but it is most usual to use hair)", author_id: 1)

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Ingredients', description: 'Fluxweed, Knotgrass, Lacewing flies, Leeches, Horn of Bicorn, BoomSlang skin, Hair of person you are turning into', project_id: 1)
step2 = Step.create!(title: 'Step2: Directions-Part1', description: 'Add 3 measures of fluxweed to the cauldron (must have been picked on a full moon)., Add 2 bundles of knotgrass to the cauldron., Stir 4 times clockwise., Wave your wand then let potion brew for 80 minutes (for a Pewter Cauldron. A Brass Cauldron will only require 68 and a copper one only 60.)', project_id: 1)
step3 = Step.create!(title: 'Step3: Directions-Part2', description: 'Add 3 measures of boomslang skin to the cauldron., Add 1 measure of bicorn horn to the mortar, crush to a fine powder, then add one measure of the crushed horn to the cauldron., Heat for 20 seconds at a high temperature., Wave your wand then let potion brew for 24 hours (for a Pewter Cauldron. A Brass Cauldron will only require 1224 minutes, and a copper one only 18 hours).', project_id: 1)
step4 = Step.create!(title: 'Step4: Directions-Part3', description: 'Add 1 additional scoop of lacewings to the cauldron., Stir 3 times, counter-clockwise., Split potion into multiple doses, if desired, then add the pieces of the person you wish to become., Wave your wand to complete the potion.', project_id: 1)
step5 = Step.create!(title: 'Step5: Directions-Part4', description: "Before this final ingredient is added, Polyjuice looks like thick, dark mud that bubbles slowly. When the piece of the person to be imitated is added, however, the potion changes colour; it seems to react according to the nature of the person to be imitated, once even described as the 'essence' of the person. Good-hearted people result in more attractive colours and tastes, while mean people cause the opposite effect. Harry Potter's was a pure golden colour, whereas Gregory Goyle's tasted like overcooked cabbage and ‘looked like bogies’, Bellatrix Lestrange's tasted disgusting, worse than Gurdyroots and Mafalda Hopkirk's was a pleasant heliotrope colour. It is likely that the taste differs from potion to potion.", project_id: 1)
step6 = Step.create!(title: 'Step6: Effects', description: "The effects of a single dose last anywhere from ten minutes to twelve hours depending on how well the potion has been brewed., Continued drinking prior to the transformation wearing off extends the form's duration until the next dosage is required.", project_id: 1)
step7 = Step.create!(title: 'Step7: Known Uses', description: "Some of the known uses are:", project_id: 1)

# -----------------------
# ***** project #2 ******
# -----------------------
project2 = Project.create!(title: 'Love Potion Recipe', description: "Amortentia is the world's most powerful love potion, it's name comes from the Latin 'Amor Tentia' which means 'love held'. Not only is the potion very powerful, it's also considered to be highly dangerous.", author_id: 2)

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Ingredients', description: 'Ashwinder Eggs, Rose Thorns, Peppermint, Powdered Moonstone and Pearl Dust', project_id: 2)
step2 = Step.create!(title: 'Step2: Directions-Part1', description: 'First drop one ashwinder egg into your cauldron. These serpent eggs are a common ingredient in most love potions. You can buy these buy the dozen in any magic store.', project_id: 2)
step3 = Step.create!(title: 'Step3: Directions-Part2', description: 'Next add in a handful of rose thorns. Be careful as these sometimes have sharp edges. Then add the peppermint, powedered moonstone and pearl dust. Stir your mixture well until steam rises from the cauldron.', project_id: 2)
step4 = Step.create!(title: 'Step4: Directions-Part3', description: 'Once your potion is ready, steam will rise from your cauldron in spirals and you will begin to smell a strong aroma. Amortentia has a different aroma for everyone who smells it, reminding each person of the things that they find most attractive. Amortentia is recognised by its distinctive for its mother of pearl sheen.', project_id: 2)
step5 = Step.create!(title: 'Step5: Effects', description: 'Once prepared, you will need to get your crush to drink one drop of the potion, a single dose usually lasts up to 24 hours, the drinker will only hold an obsession for the person who administered the potion. However, this is not really love, its impossible to manufacture or imitate love but the drinker will become instantly infatuated with the person who administered it. Amortentia must be drunk continuously in order to maintain the false love. As stated its dangerous to underestimate a powerful infatuation. Despite its power, Amortentia doesnt create actual love; its impossible to manufacture or imitate love.', project_id: 2)

# -----------------------
# ***** project #3 ******
# -----------------------
project3 = Project.create!(title: 'Liquid luck Recipe', description: "Felix Felicis is liquid luck, which makes the person who drinks it lucky for a certain period of time.", author_id: 3)

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Ingredients', description: 'Ashwinder egg, Squill bulb, Murtlap tentacle, Tincture of thyme, Occamy eggshell, Powdered common rue', project_id: 3)
step2 = Step.create!(title: 'Step2: Directions-Part1', description: 'Add Ashwinder egg to a cauldron, then add horseradish and heat. Juice a squill bulb, add to the cauldron and stir vigorously. Chop up anemone-like growth on the back of Murtlap, add to mixture and heat.', project_id: 3)
step3 = Step.create!(title: 'Step3: Directions-Part2', description: 'Add a dash of tincture of thyme and stir slowly. Grind up Occamy eggshell and add to mixture. Stir slowly then heat the cauldron.', project_id: 3)
step4 = Step.create!(title: 'Step4: Directions-Part3', description: 'Add a sprinkle of powdered common rue. Stir vigorously then heat the cauldron one last time. Wave wand over potion in a figure of eight and say incantation Felixempra!', project_id: 3)
step5 = Step.create!(title: 'Step5: Effects', description: 'Felix Felicis causes the drinker to have a limited period of good luck, during which they are likely to to succeed in all endeavours in which success is possible. They have a strong perception of this effect, including a high level of confidence and a "sensation of infinite opportunity."', project_id: 3)

# -----------------------
# ***** project #4 ******
# -----------------------
project4 = Project.create!(title: 'Skele Gro Potion Recipe', description: 'Skele-Gro (alternately spelled Skelegro) is a dreadful-tasting potion which restores bones. It is able to mend broken bones and even regrow entire bones that have vanished or been otherwise lost. For regrowing entire bones, the process is a notably slow and painful process, that can take over a full day.', author_id: 4)

# -----------------------
# ******** steps ********
# -----------------------
step1 = Step.create!(title: 'Step1: Ingredients', description: 'scarab beetles, rose water, dried seahorses, doxy eggs, powdered sulfur, Chinese chomping cabbage, essence of dittany, chamomile flower petals, pufferfish, jellyfish, honeywater, griffin claws, Velnamēle Pepper', project_id: 4)
step2 = Step.create!(title: 'Step2: Directions-Part1', description: 'Crush 3 scarab beetles and 2 dried seahorses with mortar and pestle. Add 2.5 tablespoons of the crushed mixture to the cauldron. Add 3 milliliters of rose water to the cauldron. Leave the potion to brew in your cauldron for 60 minutes.', project_id: 4)
step3 = Step.create!(title: 'Step3: Directions-Part2', description: 'Add 2 doxy eggs to the cauldron. Add 2 tablespoons of powdered sulfur. Carefully cut the Chinese chomping cabbage width-wise. Add the last 2 scarab beetles and 1 dried seahorse.', project_id: 4)
step4 = Step.create!(title: 'Step4: Directions-Part3', description: 'Add 4 milliliters of rose water to the cauldron and let simmer. Add 2 milliliters of essence of dittany to the cauldron. Add 2 chamomile flower petals, 1 jellyfish, and 1 pufferfish to the cauldron. Add 2 chamomile flower petals to the cauldron.', project_id: 4)
step5 = Step.create!(title: 'Step5: Effects', description: 'Once consumed, the potion will slowly work to repair bone damage and even rebuild bones that have been removed through magical or non-magical means. This potion typically takes at least twelve hours to repair and regrow bones. Depending on the severity of the injury, it may take far longer. It should be noted, however, that the potion cannot rebuild limbs or parts of the body as a whole, only the skeletal structure. It also cannot repair bodies born with deformities, such as those born with missing bones.', project_id: 4)