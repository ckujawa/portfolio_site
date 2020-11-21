---
path: /styling-gatsby
date: 2020-11-21T11:30:00.000Z
title: Styling Markdown In Gatsby 
tags:
  - Gatsby
  - Markdown
  - rehype-react
  - styled-components
author: Chris Kujawa
excerpt: My adventures as I figure out how to tell Netlify which version of Node to use
---
So I was writing a blog post the other night when I noticed that the post just didn't look right. In fact, it was downright UGLY. And I don't really like ugly looking things on the web...expecially my own stuff. But what to do about it? After all, all of the posts are written in markdown and parsed using [gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/). I could probably use global styles to solve the issue, but that isn't consistent with my use of styled components to scope my styles throughout the rest of the site. What to do?

If there's one thing I've learned in the number of years I've been coding, it's that regardless of the problem I'm trying to solve, I'm usually not the first one to have encountered it. And a quick run to DuckDuckGo made it quite apparent that this was the case here as well. There were several solutions to this exact problem. I decided that using [rehype-react](https://github.com/rehypejs/rehype-react) suited me best since it allowed me to use styled-components to style my markdown. Here's what I did.

First, I installed rehype-react:

```
npm i rehype-react
```
I then built a handful of styled components for use in my blog posts. While you can do this anywhere, I chose to export them from blog_posts.js. As an example, I decided I really don't like the style of the code block here so I wrote the following component to fix it:

```
export const Code = styled.code`
    display: inline-block;
    padding: 1rem;
    font-family: monospace;
    font-size: 0.9em;
    background-color: #e0d6f9;
    border: 1px solid black;
    border-radius: 5px;
`
```

I then import rehype-react and my Code component into my blog post template file:

```
import RehypeReact from 'rehype-react'
import { Code } from  '.../components/blog_elements'
```

Now we can tell rehype to use our component to render our code element:

```
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    code: Code
  }
}).Compiler;
```

And the last thing we need to do is replace our dangerouslySetInnerHTML statement with 

```
{renderAst(htmlAst)}
```

and replace "html" with "htmlAst" in our graphql. Once that is done, we should have nicely formatted code blocks!

But what about images? No matter what I did, the image was left justified--exactly NOT what I wanted. The image was wrapped in a paragraph tag. Enter custom tags...

To make this work, I created a styled div in blog_elements.js, then used that to create a custom element in my blog post template:

```
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    "image-div": ImageDiv,
    code: Code
  }
}).Compiler;
```

I could then wrap my image with the tag as follows:

```
<image-div>
![Blog Creation Tool](assets/cool-image.png "A Cool Image")
</image-div>
```

This wrapped the image in my custom div component and I could then style it exactly as I wanted to.