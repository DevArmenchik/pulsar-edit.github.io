import{_ as n,o as i,c as r,e as l,a as e,b as t,d as o,f as s,r as h}from"./app.67aa3f8b.js";const d={},u=e("p",null,"We recently decided to change our release strategy to reflect what we are actually doing and address some potential inaccuracies in our existing terminology.",-1),c=e("h1",{id:"why-are-we-changing-our-release-strategy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#why-are-we-changing-our-release-strategy","aria-hidden":"true"},"#"),t(" Why are we changing our release strategy?")],-1),m=e("p",null,"As many of you might already have noticed we have decided to make an adjustment in our release terminology and focus. Realistically nothing has actually changed, we have just made what has become our de-facto standard our official standard.",-1),p={href:"https://discord.com/channels/992103415163396136/1073778283407224852/1073778283407224852",target:"_blank",rel:"noopener noreferrer"},f=s("<p>Essentially we felt that the terminology we were using was at best, unintentionally mildly misleading and at worst, incorrect so with this change we hope to address these issues.</p><p>The previous model was as follows:</p><ul><li>We would provide manually tagged releases at strategic milestones from our <code>master</code> branch. These milestones were never formally decided upon so we instead went with a semi-arbitrary release date of the 15th of each month simply to get these releases updated with all of our recent fixes.</li><li>These releases would be tagged <code>beta</code> or <code>latest</code> on our website to make it clear if it was a &quot;stable&quot; milestone release or a beta release candidate.</li><li>We had a second section on our page dedicated to &quot;Cirrus CI Binaries&quot;. These binaries are produced from our CI platform automatically on pushes to our <code>master</code> branch. The idea of these were that they could be treated as <code>dev</code>, <code>alpha</code> or <code>nightly</code> type releases which were potentially unstable but had the latest updates.</li></ul><p>However it became clear that this wasn&#39;t what we were actually doing. What ended up happening was that our &quot;stable&quot; releases never got a proper milestone criteria agreed upon and quickly became out of date compared to our &quot;Cirrus CI&quot; releases.<br> We also found that because all the fixes going into our <code>master</code> branch were so thoroughly reviewed and tested by both the Pulsar team and wider community, these ended up being <em>more</em> stable than the &quot;stable&quot; releases which quickly meant that, whilst our intention was correct, the reality was either incorrect or misleading.</p><p>More than a few people commented on the use of the <code>beta</code> tag meaning it was unfinished or unstable software (even more so with the <code>alpha</code> and <code>dev</code> terms used on the Cirrus builds) so were avoiding Pulsar entirely whilst they waited for a proper, stable, release which often required us to manually explain the concepts - and those are just the vocal people we heard from so we don&#39;t even know how many people got turned off from the project entirely based on this which was never our intention.<br> We also found that the very concept of the Cirrus CI binaries confused some people, particularly due to the name, so this also needed to be addressed.</p><p>So after some lengthy discussions and the aforementioned poll, we decided to address these issues by reflecting what is actually going on in practice.</p>",6),w={href:"https://pulsar-edit.dev/download.html",target:"_blank",rel:"noopener noreferrer"},g=s('<h2 id="rolling-release" tabindex="-1"><a class="header-anchor" href="#rolling-release" aria-hidden="true">#</a> Rolling Release</h2><p>The &quot;Rolling Release&quot; is the new name for what we previously called &quot;Cirrus CI Binaries&quot; and we have promoted this to the top of our downloads page to make it more obvious as we have a (soft) preference for its use - after all this is the &quot;hyper-hackable text editor&quot; and this seems to fit our mission statement nicely.</p><p>This type of release has a number of benefits for everyone:</p><ul><li>New functionality is available shortly after the relevant PR is merged. This means no waiting for a formal release milestone to include some desired features or fixes.</li><li>No formal release process is needed, we have a standard download link for each release binary that automatically pulls the very latest build from Cirrus CI.</li><li>Issues can be easily tracked to a particular PR or change because each version stamp is different for each PR so we can narrow down the problem rather easily.</li><li>Issues can be addressed quickly without the need for a formal tagged hotfix release process.</li></ul><p>Of course there are some potential drawbacks:</p><ul><li>Despite our best efforts with reviews and testing it is entirely possible that things will fall through the cracks leading to a regression or issue meaning that you would need to downgrade or swap to the Regular Release until the issue gets resolved.</li><li>Whilst we don&#39;t have automatic updates implemented yet, when we do it means that an updated version will be almost constantly shown which might be seen as a curse or blessing from your standpoint.</li></ul><h2 id="regular-releases" tabindex="-1"><a class="header-anchor" href="#regular-releases" aria-hidden="true">#</a> Regular Releases</h2><p>This is the new name for the section previously just labelled as &quot;Releases&quot;. These have been moved down on the page but remain a valid option for those that want to use a more regular release model.<br> Currently we are sticking to a release date of the 15th of every month (which initially was just a happy coincidence but we found we liked it and makes for easy organisation) but this not guaranteed and may change as needed.</p><p>This also has some benefits for some over the rolling release:</p><ul><li>Changes from one release to the next are more obvious as we provide an easy to read changelog that shows all the new functionality and fixes.</li><li>It is a somewhat more known quantity to the Pulsar team and community when it comes to support. It is easier to remember generally what kind of changes got added in <code>v1.101.0</code> vs <code>1.101.2023021600</code>.</li><li>Fewer updates made available - if you don&#39;t need to be up to date at all times then this slower release schedule may be of benefit as you won&#39;t have to download a new binary just to get a single bugfix for something that may not affect you personally - particularly relevant when we have hopefully automatic updates available in the future.</li><li>Allows us to make consolidated announcements with the changes to keep the wider community up to date via our various social channels.</li></ul><p>Of course there are also some potential drawbacks:</p><ul><li>Fixes and features available in the Rolling Releases won&#39;t be available (unless urgent) until the next release slot. This also means that some people go to the effort of logging an issue on GitHub or in Discord only to be told that it has already been fixed.</li><li>Requires a more formal release process from the team where we have to be organized to tag and update the links which currently takes a fair amount of organization and effort from many people.</li><li>Unintentional implications that this is a &quot;stable&quot; or &quot;LTS&quot; type release over the Rolling Release. This is not the case as we consider all of our releases to be stable unless otherwise indicated and we do not support anything other than the latest released version (both Rolling and Regular).</li></ul><h2 id="what-can-i-expect-going-forwards" tabindex="-1"><a class="header-anchor" href="#what-can-i-expect-going-forwards" aria-hidden="true">#</a> What can I expect going forwards?</h2>',13),y={href:"https://pulsar-edit.dev/community.html",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[t("One thing that we haven't addressed yet is the concept of automated updates. These come in a few different flavours - in-app updates and package repository updates. At the moment to update you have to manually download every application binary from the website and re-install (if using a type that requires installing of course) but we hope to somewhat automate this."),e("br"),t(' We hope to publish Pulsar to a number of software repositories which will allow the package managers to actually deal with the updates themselves. We will likely need to create two "channels" for the Rolling and Regular releases to reflect our normal process and make the whole thing unified.')],-1),v=e("p",null,'For the "in-app" updates, we first need to get this functional which is currently on our radar. We have had discussions and ideas from the community as to how we could do this including "on the fly" switching between the Rolling and Regular release channels in the application itself.',-1),_=e("p",null,"Overall we think this is a positive step forward for the community, it may be a little unorthodox compared to what you may be used to from software releases but it has been working very well for us so far so we think it makes sense to finally make it official.",-1),k=e("p",null,"We hope that you enjoyed this update, we want to keep the wider community kept as updated as much as possible outside of our closer communication channels and to be as transparent as possible for our reasoning behind making such changes, especially for changes like this.",-1),x=e("p",null,"As ever, happy coding, see you among the stars!",-1);function q(R,T){const a=h("ExternalLinkIcon");return i(),r("div",null,[u,l(" more "),c,m,e("p",null,[t("This change was recently voted on in a poll on our "),e("a",p,[t("Discord server"),o(a)]),t(' to change our focus from a "point release" model to a "rolling release" one. There were a number of factors involved in this decision which had been discussed numerous times since our first release but this is the first time we had an official consensus on it.')]),f,e("p",null,[t("So what does this mean for you? In terms of the application and releases themselves? Nothing. The biggest change is that the links and headers on our "),e("a",w,[t("downloads page"),o(a)]),t(" have been reorganised and renamed to reflect how we want to go forward with our releases. The sections below will go into detail on each type.")]),g,e("p",null,[t("We don't see this strategy changing in the near future but, as prompted this change in the first place, circumstances change and if we need to change our release model again in the future then we have the flexibility to do so. Nothing is ever set in stone and you are more than welcome to comment on and discuss this change this via any of our "),e("a",y,[t("community areas"),o(a)]),t(".")]),b,v,_,k,x])}const I=n(d,[["render",q],["__file","20230216-Daeraxa-ReleaseStrategyUpdate.html.vue"]]);export{I as default};
