import React from 'react'

//______________________________________________
// this for props for root15
export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
};
//______________________________________________
// this for props for root18
export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
};
//______________________________________________
// this for prop even handler for root19
export class Futton extends React.Component {
  render() {
    return (
      <button onClick ={this.props.onClick} >
        Click me!
      </button>
    );
  }
}
//______________________________________________
// this for prop even handler for root20

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

//______________________________________________
// this for prop even handler for root21