import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './App';
import { Greeting } from  './App';
import { Futton } from './App';
import { List } from './App';
//import App from './App';


//ReactDOM.render(<App />,
  //   document.getElementById('root'));


const array = ['red','blue','green'];
const array2 = ['yellow', 'black','orange']
const hair =( <p className ="day" >this is a great day </p>);
// using  a const to insert code
  ReactDOM.render(
    hair,
    document.getElementById('root')
  );
  //_____________________________________________________________
  //direct injection of code
  ReactDOM.render(
      <p> direct injection of code </p>,
      document.getElementById('root2')
  )
//_____________________________________________________________
// using array .map without using "i"
const colors = array.map(color => 
<li> {array} </li>);

ReactDOM.render(
    <ol> {colors} </ol>,
document.getElementById('root3')
);
//_____________________________________________________________
// using array .map with using "i" and key
const colours = array2.map((colour,i) => 
    <li key = {'colour_' + i} > {colour} </li>);
    
    ReactDOM.render(
        <ol> {colours} </ol>,
    document.getElementById('root4')
    );
  //_____________________________________________________________  
// onClick function "e" means event
function makeDucky(e){
    e.target.setAttribute(
        'src',
        'https://png.pngtree.com/element_origin_min_pic/17/01/05/65f4518c108dfb43345446e847d517a7.jpg');
    e.target.setAttribute('alt','ducky');  
}
const frog = (
    <img src = 'https://vignette.wikia.nocookie.net/r2d/images/9/9b/Tumblr_n7g35gtYc21rlv2xno1_500.png/revision/latest?cb=20150705172158'
    alt ="froggy" onClick={makeDucky} />
)
ReactDOM.render(
   frog,
    document.getElementById('root5')
  );
//_____________________________________________________________
//Javascript using brackets
ReactDOM.render(
    <p> 2+ 5 = {2 +5} </p>,
     document.getElementById('root6')
   );

//____________________ START OF COMPONETS _________________________________
//Component class variable names must begin with capital letters!
//subclassing React.Component, you create a new component class. This is not a component!
// render () {} is a method and has a return statement 

class MyComponentClass extends React.Component {
    render() {
      return <h1>Hello world</h1>;
    }
  }
  
  ReactDOM.render(
      <MyComponentClass />, 
      document.getElementById('root7')
  );

//_____________________________________________________________
  /*So, let's make a React component! It only takes one more line:

<MyComponentClass />
To make a React component, you write a JSX element. Instead of naming your JSX element something like h1 or div like you've done before, give it the same name as a component class.
*/
// Recall the same class in the fucntion
ReactDOM.render(
    <MyComponentClass />,
     document.getElementById('root8')
    );
//_____________________________________________________________
// multi-line JSX expression should always be wrapped in parentheses! 
class QuoteMaker extends React.Component {
    render() {
      return (
        <blockquote>
          <p>
            The world is full of objects, more or less interesting; I do not wish to add any more.
          </p>
          <cite>
            <a target="_blank" rel="noopener noreferrer"
              href="http://bit.ly/1WGzM4G">
              Douglas Huebler
            </a>
          </cite>
        </blockquote>
      );
    }
  };
  
  ReactDOM.render(
    <QuoteMaker />,
    document.getElementById('root9')
  );
//_____________________________________________________________
// using objects with JSX

const owl = {
    title: "Excellent Owl",
    src: "https://vignette.wikia.nocookie.net/animaljam/images/d/d6/Red_owl.png/revision/latest?cb=20160406184522"
  };
  
  // Component class starts here:
  class Owl extends React.Component {
    render() {
      return (
        <div>
          <h1>{owl.title}</h1>
          <img src={owl.src} alt={owl.title} />
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Owl />,
    document.getElementById('root10')
  );
//_____________________________________________________________
// using logic in a Component 

class Random extends React.Component {
    render() {
  
      // First, some logic that must happen
      // before rendering:
      const n = Math.floor(Math.random()*10+1);
  
      // Next, a return statement
      // using that logic:
      return <h1>The number is {n}!</h1>;
    }
  }
 /* Watch out for this common mistake:
  
  class Random extends React.Component {
  
    // This should be in the render function: 
    const n = Math.floor(Math.random()*10+1);
  
    render() {
      return <h1>The number is {n}!</h1>;
    }
  }; */
//_____________________________________________________________
  // using objects in an array
  
  const friends = [
    {
      title: "Yummmmmmm",
      src: "https://static3.fjcdn.com/comments/Blank+_75e6ad59cc65a33f53cd460dcc44ce84.png"
    },
    {
      title: "Hey Guys!  Wait Up!",
      src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
    },
    {
      title: "Yikes",
      src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
    }
  ];
  
  // New component class starts here:
  class Friend extends React.Component {
   render() {
  var friend = friends[0]
    return (
      <div>
        <h1>{friend.title}</h1>
        <img src= {friend.src}/>
      </div>
    );
  } 
    
  };
  
  ReactDOM.render(
  <Friend />,
  document.getElementById('root11'));
//_____________________________________________________________
  // Conditonal Statement
  const fiftyFifty = Math.random() < 0.5;
  
  // New component class starts here:
  class TonightsPlan extends React.Component{
    render(){
      let result;
      if(fiftyFifty == true){
      result =  "Tonight I'm going out WOOO";
      }else{
      result= "Tonight I'm going to bed WOOO";
      };
      return <h1>{result}</h1>
    }
  };
  
  ReactDOM.render(
  <TonightsPlan />,
    document.getElementById('root12'));
//_____________________________________________________________
// Using the instance of "this" with in the scope of a component

class MyName extends React.Component {
	// name property goes here:
get name() { // this is called a getter
  return 'Ivory Blakk';
}
  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('root13'));
//_____________________________________________________________
// Event listner

class Button extends React.Component {
    scream() {
      alert('AAAAAAAAHHH!!!!!');
    }
  
    render() {
      return <button onClick={this.scream} >AAAAAH!</button>;
    }
  };
  
  ReactDOM.render(
  <Button />,
  document.getElementById('root14'));
  //_____________________________________________________________
  // use this code to import " import { NavBar } from './App.js';" at the top of the page

  // to 'export" place the word infront of the componet  ex :  export class NavBar extends React.Component 
  
  class ProfilePage extends React.Component {
    render() {
      return (
        <div>
                      <NavBar />
          <h1>All About Me!</h1>
          <p>I like movies and blah blah blah blah blah</p>
          <img src="http://cuddlycollectibles.bizland.com/wp-content/uploads/2014/06/ap44975_seaturtle.png" />
        </div>
      );
    }
  };
  
  ReactDOM.render(
  <ProfilePage />,
  document.getElementById('root15'));
//_____________________________________________________________
//components can interact: a component can pass information to another component.
//Information that gets passed from one component to another is known as "props."

class PropsDisplayer extends React.Component {
    render() {
        const stringProps = JSON.stringify(this.props);
  
      return (
        <div>
          <h1>CHECK OUT MY PROPS OBJECT</h1>
          <h2>{stringProps}</h2>
        </div>
      );
    }
  }
  // the prop is myProp="Hello"
  ReactDOM.render(<PropsDisplayer myProp="Hello"/>, document.getElementById('root16'));
  //_____________________________________________________________
 //how to make a component display passed-in information:
  /* 1 - Find the component class that is going to receive that information.
     2 - Include this.props.name-of-information in that component class's render method's return statement.
  */
  class Meeting extends React.Component {
    render() {
      return <h1>Hi there, {this.props.firstName}!</h1>;
    }
  }
  
  ReactDOM.render(
    <Meeting firstName='Groberta' />, 
    document.getElementById('root17')
  );
   //_____________________________________________________________
   //The most common use of props is to pass information to a component, from a different component.
   class App extends React.Component {
    render() {
      return (
        <div>
          <h1>
            Hullo and, "Welcome to The Newzz," "On Line!"
          </h1>
          <Greeting name="George"/>
          
          <article>
            Latest newzz:  where is my phone?
          </article>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <App />, 
    document.getElementById('root18')
  );
  //_____________________________________________________________
// You can also use props to make decisions.
//Revisit code cademy this.props lesson 6 : Render Different UI Based on props



  //_____________________________________________________________
// Receive an Event Handler as a prop
//The attribute's value should be the event handler that you want to attach.
class Talker extends React.Component {
    handleClick() {
        let speech = '';
        for (let i = 0; i < 10000; i++) {
          speech += 'blah ';
        }
        alert(speech);
      }
      
      render() {
        return <Futton onClick= {this.handleClick}  />;
      }
    }
  
  ReactDOM.render(
    <Talker  />,
    document.getElementById('root19')
  );

  //THIS.PROPS: handleEvent, onEvent, and this.props.onEvent
   /* NOTE:
  If you are listening for a "click" event, then you name your event handler handleClick.
   If you are listening for a "keyPress" event, then you name your event handler handleKeyPress:
   */
  /* Your prop name should be the word on, plus your event type. If you are listening for a "click" event, then you name your prop onClick.
    If you are listening for a "keyPress" event, then you name your prop onKeyPress:
    */

  //_____________________________________________________________
/*this.props.children
Every component's props object has a property named children.

this.props.children will return everything in between a component's opening and closing JSX tags.
*/
class AApp extends React.Component {
    render() {
      return (
        <div>
          <List type='Living Musician'>
            <li>Sachiko M</li>
            <li>Harvey Sid Fisher</li>
          </List>
          <List type='Living Cat Musician'>
            <li>Nora the Piano Cat</li>
          </List>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <AApp />, 
    document.getElementById('root20')
  );

//_____________________________________________________________
/*
 In Example 1, <BigButton>'s this.props.children would equal the text, "I am a child of BigButton."

In Example 2, <BigButton>'s this.props.children would equal a <LilButton /> component.

In Example 3, <BigButton>'s this.props.children would equal undefined.

// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2
<BigButton>
  <LilButton />
</BigButton>


// Example 3
<BigButton />
*/
//_____________________________________________________________
//THIS.PROPS defaultProps
//If nobody passes any text to Button, then Button's display will be blank
// component class a property named "defaultProps" will give it a default message
class Mutton extends React.Component {
    render() {
      return (
        <button>
          {this.props.text}
        </button>
      );
    }
  }
  
  // defaultProps goes here:
  Mutton.defaultProps = { text: 'I am a button' };
  
  ReactDOM.render(
    <Mutton  />, 
    document.getElementById('root21')
  );
  //_____________________________________________________________
  // THIS.STATE Setting Initial State
  //A React component can access dynamic information in two ways: props and state
 // this.state should be equal to an object
 //important to note that React components always have to call super in their constructors to be set up properly.
 class Apps extends React.Component {
	// constructor method begins here:
  constructor(props){
 super(props);
  this.state = { title: 'Best App' };
  }
 
render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(
<Apps />,
document.getElementById('root22'))
//_____________________________________________________________
//THIS.STATE Update state with this.setstate
/*Notice that <Example /> has a state of:

{
  mood:   'great',
  hungry: false
}
Now, let's say that <Example /> were to call:

this.setState({ hungry: true });
After that call, here is what <Example />'s state would be:

{
  mood:   'great',
  hungry: true
}
The mood part of the state remains unaffected!
*/
//_____________________________________________________________
// THIS.STATE Call this.setState from Another Function
class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }


  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById('root23'));
