# tutorial

[02-TOURS](https://github.com/john-smilga/react-projects)

# UI css framework

[materialize](https://materializecss.com/)

# summary

- useEffect() need to learning
  [React useEffect Hooks](https://www.w3schools.com/react/react_useeffect.asp)
  [轻松学会 React 钩子：以 useEffect() 为例](https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html)

```js
useEffect(() => {
  fetchTours();
}, []);
```

> useeffect init the fetchAPI ,because the 2nd pramater is [] ,
> empty array that means website **first time render**, It will run the 1st pramater.

- if sentence is good way to add multiple situations,

```js
 if (loading) { return (...)}
 if (tours.length === 0) { return (...)}
```

> these if sentences doesn't have own `else` of `else if `sentence, just like a patch for the programme.

- component means write Outermost layer first, deeply add new compnent into it.

```
├── ...
├── App.js                  # outermost layer
│   ├── Loading.js          # use it when App.js loading
│   ├── Tours.js            # includes all list items. map(Tour.js)
│         └── Tour.js       # every single item contents
└── ...
```

- more use parameter to transfer data

```js
{
  tours.map((tour) => {
    // every item need a key (just a standary), Tour.js need 6 paramater
    return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
  });
}
```

- a good conditional operator example
[MDN conditional operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
```js
// Tour.js
<p>
  {readMore ? info : `${info.substring(0, 200)}...`}
  <button
    className="waves-effect waves-teal btn-flat btn-small"
    onClick={() => setReadMore(!readMore)}
  >
    {readMore ? "show less" : "  read more"}
  </button>
</p>
```
> every component do own business.

