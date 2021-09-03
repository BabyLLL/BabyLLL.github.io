import{_ as e}from"./Post.vue_vue&type=script&setup=true&lang.bcbdb260.js";import{j as t,o as a,n as o,h as n,a as r,i}from"./vendor.71f779ca.js";import"./app.ca842b37.js";const l=r("div",{class:"prose m-auto"},[r("p",null,[i("Saw "),r("a",{href:"https://twitter.com/youyuxi/status/1272932071749619712",target:"_blank",rel:"noopener"},"a tweet from Evan You"),i(" about the "),r("a",{href:"https://hey.com/",target:"_blank",rel:"noopener"},"hey.com"),i(" mail service recently. I got interested in having a short and nice email address. My current one in Hotmail is just too long to even being spell out in talk. "),r("code",null,"hey.com"),i(" looks very nice but $99/year is not a very good deal to me. I decide to use my own domain for receiving emails.")]),r("p",null,[i("I did this a couple years ago for another domain, I kinda remember an open-source tool allowing forwarding emails by just adding DNS record. I took some time to search for it but I didn’t find the page matches with my memory. I went GitHub to search in my stared projects, it turns out the tool now becomes and Freemium SaaS "),r("a",{href:"https://forwardemail.net/",target:"_blank",rel:"noopener"},"forwardemail.net"),i(" with a fresh new logo and website design that I can’t even recognize it.")]),r("p",null,"The DNS forwarding feature just works the same, but it requires you to log in and register your domain now. I am glad it now being more well documented and charging for premium supports which can help it sustain."),r("p",null,"The config is quite simple as usual, just 3 DNS record:"),r("pre",{class:"language-html"},[r("code",{class:"language-html"},"MX   @  mx1.forwardemail.net  10\nMX   @  mx2.forwardemail.net  20\nTXT  @  forward-email=youremail@example.com\n")]),r("p",null,[i("That’s it! It also provides some advanced configs, you can check "),r("a",{href:"https://forwardemail.net/en/faq",target:"_blank",rel:"noopener"},"the doc here"),i(".")]),r("p",null,[i("While setting up and reading the docs, I learned that you can explicitly purge the cache for "),r("a",{href:"https://1.1.1.1/purge-cache/",target:"_blank",rel:"noopener"},"Cloudflare DNS"),i(" and "),r("a",{href:"https://developers.google.com/speed/public-dns/cache",target:"_blank",rel:"noopener"},"Google DNS"),i(". That’s a very good-to-know tip!")]),r("p",null,[i("And now, you can say hi to me at "),r("a",{href:"mailto:hi@antfu.me"},"hi@antfu.me"),i("!")])],-1),s={setup(r,{expose:i}){const s={title:"Domain Email",date:"2020-06-17T16:00:00.000Z",lang:"en",duration:"2min",meta:[{property:"og:title",content:"Domain Email"}]};i({frontmatter:s});return t({title:"Domain Email",meta:[{property:"og:title",content:"Domain Email"}]}),(t,r)=>{const i=e;return a(),o(i,{frontmatter:s},{default:n((()=>[l])),_:1})}}};export{s as default};
