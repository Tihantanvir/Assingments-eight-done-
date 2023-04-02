// @flow strict

import * as React from 'react';

function Questions() {
    return (
        <div>
        <div className=' my-12 md:mx-32 mx-6'>
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is difference between props and state ?
                    </div>
                    <div className="collapse-content">
                        <p>Props are a JavaScript object that React components receive as an arbitrary input to produce a React element. They provide a data flow between the components. To pass the data (props) from one component to another as a parameter.</p>
                        <p>State is a JavaScript object which contains data that influence how the component looks at a certain point in time. The second part is what makes the state different compared to props. State is just a snapshot of the app in a time. Every user interaction with your app may lead to changes in the underlying state and in the whole UI as a result. State changes over the lifetime of a React component. Examples of state.</p>
                    </div>
                    
                </div>
                <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does useState work ?
                    </div>
                    <div className="collapse-content">
                        <p>useState() is a react hook, it,s allows to manage state. It takes an initial value as an argument and returns an array with two elements, the current state value, and a function that update that value.</p>
                    </div>
                </div>
                  <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What does do useEffect without data load ?
                    </div>
                    <div className="collapse-content">
                        <p>useEffect() is react hooks, it's mainly use for randaring and data loading, it's can be very time re-render if using dependency</p>
                    </div>
                </div>
                <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does react work ?
                    </div>
                    <div className="collapse-content">
                        <p>React is a component--based, open-source front-end library that is in charge of the application's view layer, react mainly concernt and focus to building user Interface, The upside of using React JS is that can infuse HTML code with JavaScript.  jsx(JavaScript XML)</p>
                    </div>
                </div>














            </div>    
        </div>
    );
};

export default Questions;