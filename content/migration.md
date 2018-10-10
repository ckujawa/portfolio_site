---

path: '/migration'

date: '2018-10-07T21:00:00+00:00'

title: "Migrating to Gatsby 2"

tags: ['gatsby', 'development', 'migration','react','graphql']

author: "Chris Kujawa"

excerpt: "A brief overview of my efforts to migrate to Gatsby 2.0"

---
##Let the fun Begin

As things often happen, I received a notification that Gatsby 2.0 was released just as I was finishing up the first version of my site. Figures. The work of a developer is never done. It's a fact of life for developers: your work is never done. Along with the additional work to upgrade comes an opportunity to learn though, so we all pretty much dive right in. Here's what happened when I did.

##The Upgrade Process Seems Pretty Easy...

The official documentation for the migration is located <a href="https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/" target="_blank">on the Gatsby website</a>, but I'll be running through the steps here with commentary. The process starts by upgrading all your project dependencies, starting with Gatsby itself:
```
> npm i gatsby@latest
```
Next, run the following command and do what it says
```
> npm outdated
```
By do what it says, I mean compare the list of "wanted" vs "latest" and install the latest:
```
> npm i gatsby-plugin-react-helmet@latest <etc>
```

I'm guessing you could also edit your package.json file to update the versions then do an npm install, but that's too much like work for my taste so I didn't try it. I *did* re-run the npm outdated after bringing everything up to the latest version, just to make sure that I got everything. But in spite of my best efforts, I discovered that there were a couple packages that had additional requirements when I ran gatsby develop. The one that I remember off hand was gatsby-plugin-styled-components now requires babel-plugin-styled-components. Don't worry though--the startup will clearly tell you what's missing. Take care of the missing dependencies and you should be good to go.

##But What Happened to my Style?

At this point, you should be up and running again, and if you're like I was, you're looking at a site with absolutely NO styling applied. This occurs because src/layouts/index.js no longer wraps every page. This means that the top level page is the page itself, and not the layout as it was in v1. What this means to YOU is that you need to move both src/layouts/index.js and any css files that you might be using from src/layouts to src/components. You will then need to convert the layouts's children from a render prop to a normal prop:
```
import React from 'react'
export default ({children}) => (
    <div>
        //{children()}
        {children}
    </div>
)
```

Once the files are moved and the above change has been made, you now need to import your Layou component and us it to wrap the content of each page. For example, in src/pages/index.js you would do the following:
```
import React from 'react'
import Layout from '../components/layout.js'

export default() => (
    <Layout>
        <div>
            Hi There!
        </div>
    </Layout>
)
```

The final major step I had to take was converting the GraphQl query I was using in layout.js from a normal query to a StaticQuery:
```
import React from 'react'
import {StaticQuery, graphql} from 'gatsby'

export default ({children}) => (
    <StaticQuery
        query={graphql`
            query LayoutQuery {
                site {
                    siteMetaData{
                        title
                    }
                }
            }
        `}
        render={data => (
            <div>
                <Helmet titleTemplate=>title={data.site.siteMetadata.title}/>
                <div>
                    {children}
                </div>
            </div>
        )}
    />
)
```

And there you have it. There were a few more minor tweaks that I needed to make in order to get everyting working in Gatsby 2.0, but that was the bulk of the work. Your case might be different, depending on your site design. I was lucky in that I wasn't too far into my site when 2.0 was released. If your site is still not working quite right, check out <a href="https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/" target="_blank">the Gatsby website</a> for more information, or contact me and I'd be glad to help.

