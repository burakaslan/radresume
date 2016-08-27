import React, { Component } from 'react';
import Rcslider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default class Resume extends Component {
  constructor (props) {
    super(props);
    this.state = {
      experiences: 1,
      skills: [{ value: 50, name: '' }],
    };
  }

  addExperiences = () => {
    const { experiences } = this.state;
    this.setState({
      experiences: experiences + 1,
    });
  }

  addSkills = () => {
    const { skills } = this.state;
    skills.push({ value: 50, name: '' });
    this.setState({
      skills,
    });
  }

  tipFormat = (tip) => {
    return <div className="slider">{this.mapSkillText(tip)}</div>
  }

  renderExperiences () {
    const { experiences } = this.state;
    const elm = [];
    for (let x = 0; x < experiences; x++) {
      elm.push(
        <div key={x} className="experience">
          <circle />
          <div>
            <input className="uppercase" placeholder="Company XYZ"/>
            <input className="uppercase secondary" placeholder="UI/UX Design"/>
            <textarea>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus turpis in blandit lacinia. Etiam fermentum facilisis est vitae maximus. Ut porttitor ex at ex varius, id lobortis velit convallis.
            </textarea>
          </div>
        </div>
      );
    }
    return elm;
  }

  setSkill = (index, val) => {
    const { skills } = this.state;
    skills[index].value = val;
    this.setState({
      skills,
    });
  }

  mapSkillText = (tip) => {
    let text;
    if (tip < 25) {
      text = 'Novice';
    } else if (tip < 50) {
      text = 'Proficient'
    }
    else if (tip < 75) {
      text = 'Intermediate'
    }
    else {
      text = 'Expert';
    }
    return text;
  }

  renderSkills() {
    const elm = [];
    const { skills } = this.state;
    skills.forEach((skill, index) => {
      elm.push(
        <div className="skill">
          <input value={skill.name} placeholder="UI/UX Design" />
          <div className="skill-print">
            {this.mapSkillText(skill.value)}
          </div>
          <Rcslider onAfterChange={(val) => this.setSkill(index, val)} tipFormatter={this.tipFormat} tipTransitionName="rc-slider-tooltip-zoom-down" min={0} defaultValue={skill.value} max={100} />
        </div>
      );
    });
    return elm;

  }

  render () {
    return (
      <div className="A5">
        <section className="sheet padding-10mm">
          <input className="profile" placeholder="John Doe" />
        </section>
        <section className="sheet padding-10mm uppercase">
          Biography
        </section>
        <section>
        <textarea>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus turpis in blandit lacinia. Etiam fermentum facilisis est vitae maximus. Ut porttitor ex at ex varius, id lobortis velit convallis.
        </textarea>
        </section>
        <hr></hr>
        <section className="sheet padding-10mm uppercase">
          Experience
        </section>
        <section>
          {this.renderExperiences()}
        </section>
        <section>
        <div onClick={this.addExperiences} className="add uppercase">
          <i className="material-icons">playlist_add</i>
          <p> Add Experience</p>
        </div>
        </section>
        <section className="sheet padding-10mm uppercase">
          Skills
        </section>
        <section className="skillContainer">
          {this.renderSkills()}
        </section>
        <div onClick={this.addSkills} className="add uppercase">
          <i className="material-icons">playlist_add</i>
          <p> Add Skill</p>
        </div>
      </div>
    );
  }
}
