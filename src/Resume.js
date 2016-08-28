import React, { Component } from 'react';
import Rcslider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { connect } from 'react-redux';

const DEFAULT_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus turpis in blandit lacinia. Etiam fermentum facilisis est vitae maximus. Ut porttitor ex at ex varius, id lobortis velit convallis.';
class Resume extends Component {
  static propTypes: {
    font: PropTypes.string,
  }

  constructor (props) {
    super(props);
    this.state = {
      experiences: [{ company: '', role: '', date: '', text: DEFAULT_TEXT }],
      skills: [{ value: 50, name: '' }],
      swapping: false,
    };
  }

  addExperiences = () => {
    const { experiences } = this.state;
    experiences.push({ company: '', role: '', date: '', text: DEFAULT_TEXT });
    this.setState({
      experiences,
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

  removeExperience = (i) => {
    const { experiences } = this.state;
    experiences.splice(i, 1);
    this.setState({ experiences });
  }

  renderExperiences () {
    const { experiences } = this.state;
    const elm = [];
    const style = { fontFamily: this.props.font };

    experiences.forEach((exp, index) => {
      elm.push(
        <div key={index} className="experience">
          <div>
            <input onChange={e => this.handleChange('company', e.target.value, index)} className="uppercase" value={exp.company} placeholder="Company XYZ"/>
            <input onChange={e => this.handleChange('date', e.target.value, index)} className="uppercase secondary" value={exp.date} placeholder="January 2016"/>
            <input onChange={e => this.handleChange('role', e.target.value, index)} className="uppercase secondary" value={exp.role} placeholder="UI/UX Design"/>
            <textarea style={style} defaultValue={exp.text} />
          </div>
          <span className="options">
            <i onClick={() => this.removeExperience(index)} className="material-icons">delete</i>
          </span>
        </div>
      );
    });
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
        <div key={index} className="skill">
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
    const style = { fontFamily: this.props.font };
    return (
      <div className="A5">
        <section className="sheet padding-10mm">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <input style={style} className="profile" placeholder="John Doe" />
              <input style={style} placeholder="UI/UX Designer" />
            </div>
            <div>
              <input style={style} className="right" placeholder="john@doe.com" />
              <input style={style} className="right"  placeholder="555 - 555 - 5555" />
            </div>
          </div>
        </section>
        <section className="sheet padding-10mm uppercase">
          Biography
        </section>
        <section>
        <textarea style={style} defaultValue={DEFAULT_TEXT} />
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

const mapStateToProps = (state) => {
  return {
    font: state.font,
  }
}

export default connect(mapStateToProps)(Resume);
