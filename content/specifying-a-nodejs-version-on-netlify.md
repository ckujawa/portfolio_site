---
path: /node-version
date: 2020-03-30T18:15:13.277Z
title: Specifying a NodeJs Version on Netlify
tags:
  - Node.js
  - Javascript
  - Netlify
  - config
author: Chris Kujawa
excerpt: My adventures as I figure out how to tell Netlify which version of Node to use
---
I was in the process of updating some things on my site today when I noticed that my version of Gatsby was a few revisions out of date. Not being one to let this sort of thing go too long, I figured I'd go ahead and update Gatsby and all its dependencies. That process was easy enough, in spite of a large handful of updates that needed to be manually verified. And it went surprisingly (to me) smoothly over all. I got everything updated locally, resolved all the security issues that npm was going on about, and started the site up locally right away. Perfect! 

After fixing a minor issue with navbar placement, I pushed everything to Github and proceeded to create a pull request--in which the Netlify deploy preview failed. WHAT?? This site just ran on my box so clearly it's ready to ship! Or not. So what was wrong? I opened the details view and started digging. There it is: 

```
error Gatsby requires Node.js 10.13.0 or higher (you have v8.17.0)
```

Clearly Netlify failed to read my mind and just make it work. **_\*SIGH\*_**  So this should be easy enough to fix. And 45 minutes later I was still saying that as I pawed through [a feature request](https://community.netlify.com/t/specifying-a-node-version/9701) and all the related links--and a slew of StackOverflow posts, etc.

I tried adding this

```
"engines": { "node": ">=10.13.0" },
```

to my package.json since that seems to be what the [npm docs](https://docs.npmjs.com/files/package.json#engines) (and the one filing the feature request) suggest is the proper way. When that didn't work I figured I'd try the **.node-version** file. But I've never seen one before. So I went to Google...and searching for documentation on this file is like searching for a unicorn. People frequently reference it, but I guess you're just supposed to KNOW what goes into it. Hmmm..so after reading several discussions on standardizing the contents of the file, I gave up and crossed my fingers as I hacked the file together by running "node --version" in my terminal then copying the output into the file:

```
v10.19.0
```

I pushed _that_ up to Github and lo-and-behold the Node version being used was now 10.19.0, which built successfully and happily deployed. And now I can go on with my day. 

Hope you found this helpful!
