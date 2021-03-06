---
path: objectInState
date: 2021-03-06T13:53:25.236Z
title: Using Objects in JSX State
tags:
  - React
  - JSX
  - useState
  - JSON
  - object
author: Chris Kujawa
excerpt: A post on fixing an error that seems to be saying one thing...but really isn't.
---
As you might guess, I tabled the Sanity project I was talking about in my last entry. I'll get back to it eventually, but I've got too much going on right now to be bothered with creating yet another blog. Besides, I barely write enough to justify the one I **do** have. But every once in a while I come across something that I think is worth sharing...and this is definitely it.

My current project involves working on an application to display GDP data from countries around the world. It's a React front end that consumes RESTful services built using Java/Spring on the back end. Easy enough, right? It's just something to keep the wheels turning at the end of the day (and gives me an opportunity to play with data visualization in React so hey...I'll take it). But easy as the project is, I'm learning some new stuff as I go--double bonus. And today's lesson is well worth sharing, so let's dive right in...

I'm working on building out a detail page to display data about an individual country that a user might select. As such, I want to store data about that country on the page so I don't have to go look it up constantly. So I create my tsx file (oh...did I mention I'm using Typescript?) and start setting up the page to just dump data out:

```
const [country, setCountry] = useStateWithPromise({
            code: '',
            name: '',
            continent: '',
            region: '',
            surfaceArea: 0,
            indepYear: 0,
            population: 0,
            lifeExpectancy: 0,
            gnp: 0,
            localName: '',
            governmentForm: '',
            headOfState: '',
            capital: {
               id: 0,
                name: '',
                countryCode: '',
                country: null,
                district: '',
                population: 0 
            },
            code2: ''
    })

    const populateCountryData = async () : Promise<void> => {
        const endpt = `${serviceEndpointBase}/countries/${countryCode}`
        console.log(endpt)
        const resp = await fetch(endpt)
        console.log(resp)
        const c = await resp.json()
        setCountry(previous => ({...previous, ...c}))
    }

    useEffect(() => {
        populateCountryData()
    }, [])

    return (<BaseLayout>
        <p>
            Country Detail: {country}
        </p>
    </BaseLayout>)
```

Pretty straight forward stuff, really, right? I mean, I need country data which comes back in a handy JSON object so I set up my state, retrieve and set the data on page load and display it...or not. Instead I get a blank page with a console full of angry red text. The start of it all is this:

`Objects are not valid as a React child (found: object with keys {<blah, blah, blah>}). If you meant to render a collection of children, use an array instead`

SAY WHAT? I'm pretty sure I KNOW what I want in my state, but in my Saturday morning, pre-coffee haze it looks like React is telling me I don't want that. So I dig, and I dig more. And after about an hour of reading through React docs, S/O posts, blogs, etc. the coffee finally kicks in and it dawns on me. The error has nothing to do with the object I'm trying to set in my state. After all, I'm doing the exact same thing in the home page for this very app. 

Then it hits me. The blogs I passed over because they talk about pushing props to components might actually have something to teach me. The general idea they seemed to be getting at was that when passing props, you should pass the individual properties in your object instead of the object itself. Well, Ok, that's a simplified version of it...but I'm only running on one cup of coffee still. But it turns out that this simplified version of what the blog posts were getting at was just what I needed. When I changes my return to look like this:

```
return (<BaseLayout>
        <p>
            Country Detail: {country.name}
        </p>
    </BaseLayout>)
```
the page finally loaded and I'm now displaying the country name, just as I wanted.

Speaking of which, I think my next project is going to involve figuring out how to style Markdown in Gatsby here on Netlify. After all, if I'm going to continue using this blog moving forward it really should look good.