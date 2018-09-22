---

path: '/thoughts_on_gatsby'

date: '2018-09-20T18:30:00+00:00'

title: "Initial Thoughts on Using Gatsby"

tags: ['gatsby', 'development', 'blog','react','graphql']

author: "Chris Kujawa"

excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et volutpat massa, sit amet rhoncus est. Curabitur leo nisl, accumsan dictum velit eu, aliquet pellentesque ligula. Integer aliquam lectus a risus consectetur, ac gravida ipsum molestie. Donec sit amet luctus urna, vitae vehicula sem. Nam erat lectus, blandit et euismod id, feugiat ac ligula."

---

##How I Got Here

First things first. 

I'm Chris, and I am a software engineer that loves doing web development work. While I have worked primarily with Enterprise Java applications over the 10+ years I've done software development professionally, my favorite projects have ALWAYS involved working on web based user interfaces. Almost all of my personal projects have been in that space as well.  So as I look to leave the 9-5 and work as a freelance developer, it seemed only natural that I would focus on what I loved. 

**BUT**, since all of what I have worked on to date has been for specific companies, my public portfolio is a bit lacking. So I decided to fix that. I considered several different ways of doing that: a static html page? Too simple for my taste. Besides, I want a blog. Wordpress? Good option--and I've done a fair amount of work with it in the past--but I wanted something that I could truly call my own, not just a custom theme in a large, pre-made CMS. Then it struck me. I had just finished a React course put out by Wes Bos (props to the guys at Syntax.fm!) and would love to do a blog using that. But how? And then I stumbled across Gatsby (and a course by Wes' counterpart on Syntax, Scott Tolinski)--and that was it. It's fast, realatively easy to use, and downright fun to work with. So I rolled up my sleeves and got to work.

##My Impressions

Let me just say I love working with Gatsby. Within less than a half an hour I had a working site up and running and was well on my way to having a working blog--even if it didn't look quite polished yet. Of course, it doesn't hurt that to get the site rolling I initialized it with this:

~~~
gatsby new comic-blog
~~~

Pretty simple. And the code is pretty clean too. It *did* take me a minute to orient myself to the CSS since it's not my typical style, but once I figured out what was going on...well, it's CSS. Besides, I learned a thing or two reading through their CSS so it's all good.

One other thing I really like about this is the speed at which the pages render in the browser. When using `gatsby develop` the pages automatically re-load in your browser when you save edits. And they reload FAST. I really have to pay attention sometimes to see if the page reloaded or not. The only times I've noticed this not to be the case are when you edit the config file (understandable) or when you edit a blog post using markdown.

