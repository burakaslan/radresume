import React, { Component } from 'react';

export default class Resume extends Component {
  constructor (props) {
    super(props);
    this.state = {
      experiences: 1,
    };
  }

  addExperiences = () => {
    const { experiences } = this.state;
    this.setState({
      experiences: experiences + 1,
    });
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
  render () {
    return (
      <div className="A5">
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
        <div onClick={this.addExperiences} className="add">
        Add Experience
        </div>
        </section>
      </div>
    );
  }
}
