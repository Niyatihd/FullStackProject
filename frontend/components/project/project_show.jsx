import React from 'react';
import { Link } from 'react-router-dom';
import ProjectShowItem from './project_show_item';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Poly-Juice Potion Recipe', 
      description: "The Polyjuice Potion, which is a complex and time-consuming concoction, is best left to highly skilled witches and wizards. It enables the consumer to assume the physical appearance of another person, as long as they have first procured part of that individual's body to add to the brew (this may be anything — toenail clippings, dandruff or worse — but it is most usual to use hair)", 
      author_id: 4,
      videoURL: "https://www.youtube.com/embed/nSUTckioHQ4",
      author: "Severus Snape",
      followsCount: 29,
      steps: {
        1: { title: 'Step1: Ingredients', description: 'Fluxweed, Knotgrass, Lacewing flies, Leeches, Horn of Bicorn, BoomSlang skin, Hair of person you are turning into', project_id: 1},
        2: { title: 'Step2: Directions-Part1', description: 'Add 3 measures of fluxweed to the cauldron (must have been picked on a full moon)., Add 2 bundles of knotgrass to the cauldron., Stir 4 times clockwise., Wave your wand then let potion brew for 80 minutes (for a Pewter Cauldron. A Brass Cauldron will only require 68 and a copper one only 60.)', project_id: 1},
        3: { title: 'Step3: Directions-Part2', description: 'Add 3 measures of boomslang skin to the cauldron., Add 1 measure of bicorn horn to the mortar, crush to a fine powder, then add one measure of the crushed horn to the cauldron., Heat for 20 seconds at a high temperature., Wave your wand then let potion brew for 24 hours (for a Pewter Cauldron. A Brass Cauldron will only require 1224 minutes, and a copper one only 18 hours).', project_id: 1},
        4: { title: 'Step4: Directions-Part3', description: 'Add 1 additional scoop of lacewings to the cauldron., Stir 3 times, counter-clockwise., Split potion into multiple doses, if desired, then add the pieces of the person you wish to become., Wave your wand to complete the potion.', project_id: 1},
        5: { title: 'Step5: Directions-Part4', description: "Before this final ingredient is added, Polyjuice looks like thick, dark mud that bubbles slowly. When the piece of the person to be imitated is added, however, the potion changes colour; it seems to react according to the nature of the person to be imitated, once even described as the 'essence' of the person. Good-hearted people result in more attractive colours and tastes, while mean people cause the opposite effect. Harry Potter's was a pure golden colour, whereas Gregory Goyle's tasted like overcooked cabbage and ‘looked like bogies’, Bellatrix Lestrange's tasted disgusting, worse than Gurdyroots and Mafalda Hopkirk's was a pleasant heliotrope colour. It is likely that the taste differs from potion to potion.", project_id: 1},
        6: { title: 'Step6: Effects', description: "The effects of a single dose last anywhere from ten minutes to twelve hours depending on how well the potion has been brewed., Continued drinking prior to the transformation wearing off extends the form's duration until the next dosage is required.", project_id: 1},
        7: { title: 'Step7: Known Uses', description: "Some of the known uses are:", project_id: 1}
      }
    };
  }

  componentDidMount() {
    this.props.fetchProject(this.props.projectId);
  }

  render() {
    if (this.props.project === undefined) {
      return null;
    }
    // let step = Object.values(this.state.steps).map((step) => {
    //   return(
    //   <ProjectShowItem step={step} key={`{step.id}`}/>
    //   );
    // })

    return (
      // <div>WORKS</div>
      <div>
        <div className="thisisTitle">{this.props.project.title}</div>
        {/* <div>{this.props.project.author.username}</div> */}
      </div>
      // <div>
      //   <img id='project-show-bg' src={window.images.pjpotion} />
      //   <div className="proj-title">
      //     <img id='proj-icon' src={window.images.splash1} />
      //     <h3 >{this.state.title}</h3>
      //     <div className="proj-title-details">
      //       <span>{this.state.author}</span>
      //       <span>|</span>
      //       <span>Followers {this.state.followsCount}</span>
      //     </div>
      //     <div>
      //       <Link to="/" className="project-follow-link">Follow</Link>
      //     </div>
      //   </div>
      //   <div className="proj-body">
      //     <span>{this.state.description}</span>
      //     <img id='proj-body-main-img' src={window.images.splash1} />
      //   </div>
      //   <div className="proj-step-body">{step}</div>
      // </div>
    );
  }
}

export default ProjectShow;