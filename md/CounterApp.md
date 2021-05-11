Create-App project
==================

This project will have Bootstrap 4.1.1 as dependency

`npm install --save bootstrap@4.1.1`

In `index.js` we add a line to import the library.

`import 'bootstrap/dist/css/bootstrap.css';`

## Components

Components are placed in a `src/components` subfolder by convention. Components may be written in `.js` files but using `.jsx` file extension is advised for it allows the IDE to provide a more complete API.

We create a first `Counter` component with the `rce` snippet from the extension we have installed.

In `index.js` we import our newly created component.

 `import Counter from './components/counter';`

 ## Rendering code

 The code to UI rendition in placed into a `render()` method unto the component. This method has a `return` statement that can either be a one liner followed by JSX code, or a multiline JSX code which needs to be put into braces.


> Different possible syntaxes for the return statement
 ```javascript
 // render as one liner
 render() { return <p>A one liner with simple JSX code is fine.</p>; } 

 // render as multiple lines
 render(){

     return(
         <div>
            <p>Or multiple lines.</p>
         </div>
    );
}
 ```

One important note is you can't une the non braced syntax on several lines. If you do so, the `return` statement will be replaced by `return ;`. Indeed there is an *automatic semi-colon insertion* process in JavaScript that adds semi-colons when they are not present. Should a `return` statement be alone on a line, a semicolon will be inserted and the JSX code on the next line will be ignored and cause errors. To avoid this, we add parentheses around the code.

The render method actually translate to a call to `React.createElement()` which takes as the 1st parameter the element to be added. Therefore this element is unique and this is why the `render()` method into a React component must have a unique element. Because of that it is common practice to wrap the code to be rendered into a `<div>` tag.

 When we see the source of the HTML file in the browser, this `<div>` will obviously be present.

> Code generated when wrapping into a classical `<div>` tag.
 ```html
 <div id="root">
    <div>
        <h1>Hello World!</h1>
    </div>
 </div>
 ```

 We can prevent that by wrapping the code into a special tag being `<React.Framgent>` that will not reflect in the HTML code.

> Code generated when wrappin into the specialised `<React.Fragment>` tag.
 ```html
 <div id="root">
    <h1>Hello World!</h1>
 </div>
 ```

 ## Embedding Expression

 We want to make our `Counter` component modular so that the `<h1>` tag has customizable text.

 We will use the `state` object to hold relevant data.

 ```javascript
 state  = {
    count: 0
}
 ```

 We can put expressions in JSX code by putting them in curly braces. Any valid JavaScript code is valid inside these.

 To display the value of the count from state, the following line is OK:
 ```javascript
 <span>{this.state.count}</span><br/>
 ```

 We want to implement a business rule that say if the count value is 0 it will display as text.
 ```js
 <span>{this.state.count === 0 ? 'Zero': this.state.count}</span>
 ```

 With *object deconstruction* we can simplify the access to the count variable from the state, like this

 ```js
 const count = this.state.count;
 const {count} = this.state; // equivalent to the above.
 ```

 ## Setting Attributes

 To apply a CSS class to HTML code, we cannot simply use `class` int he JSX code for it is a reserved word of JS. Therefore we must use `className` attribute instead.

 To apply CSS styles inline, we can use the `style` attribute that takes a plain JS object.
 The syntax into that object is to name CSS properties in camel case:


 ```js
 styles = {
     fontSize = 10,
     fontWeight = 'bold'
 }
 ```
 
 You can either provide a prepared object just as the styles object above, or write it inline directly.
 In the second approach it would look like this:

 ```js
 <span style={{fontSize:12, fontWeight:'bold'}} className="badge badge-primary m-2">{this.formatCount()}</span>
 ```

## Rendering classes dynamically

We want to make the badge for the counter apply `badge-warning` Bootstrap class is the value is 0 or `badge-primary` otherwise.

In the `render()` method, we could define an inner variable that hold the string with classes to be applied. Some more code to adapt to the expected rule mentioned above. Then pass that variable into braces.

We can also refactor this code so that it ends up becoming a method providing those classes. Then no need to extra variables in the `render()` method.

```js
getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    // In the render() method where relevant ...
    <span className={this.getBadgeClasses()}> // ...
```

## Rendering lists

There is no convenient syntax to render lists in React so far. For that job we use the JS `map()` method. The syntax inside the map is similar to a classical `foreach` loop.

```js
state  = {
    count: 0,
    tags: ['tag1','tag2','tag3']
}

// In the render() method where relevant.
// ...
<ul>
    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
</ul>
```

## Conditional rendering

We want to follow a new rule to display a message when there is no element in the `tags` array, or the array otherwise.

JSX has no `if` or `else` kind statements unlike Angular ofr instance. So we can write our code in a separate function which has these `if`/`else` statements.

```js
render() {
    return (
        <React.Fragment>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span><br/>
            <button className="btn btn-secondary btn-sm m-2">Increment</button>
            {this.renderTags()}
        </React.Fragment>
    );
}

renderTags() {
    if (this.state.tags.length === 0) return <p className="m-2">There is no tag to display.</p>;

    return (
        <ul className="m-2">
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    )
}
```

Another method is by using the `&&` operator. Javascript allows to apply such operator for values that are not booleans.
In such case JS tries to convert those non-boolean type to either *truthy* or *falsy*. The result is the last operand.

A string is truthy if not empty. Falsy otherwise.
A number that has a value of 0 is falsy. Truthy otherwise.

In short, everything is truthy unless they are of one of these:
- false
- 0
- ""
- null
- undefined
- NaN

Though there is no `if`/`else` available in JSX, we can still check a single condition. So using the principle above, we can follow the condition with `&&` operator to get what is following as a result.