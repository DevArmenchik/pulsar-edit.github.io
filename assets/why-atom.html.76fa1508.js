import{_ as e,o as t,c as a,f as o}from"./app.67aa3f8b.js";const i={},n=o('<h3 id="why-atom" tabindex="-1"><a class="header-anchor" href="#why-atom" aria-hidden="true">#</a> Why Atom?</h3><p>There are a lot of text editors out there; why should you spend your time learning about and using Atom?</p><p>Editors like Sublime and TextMate offer convenience but only limited extensibility. On the other end of the spectrum, Emacs and Vim offer extreme flexibility, but they aren&#39;t very approachable and can only be customized with special-purpose scripting languages.</p><p>We think we can do better. Our goal is a zero-compromise combination of hackability and usability: an editor that will be welcoming to an elementary school student on their first day learning to code, but also a tool they won&#39;t outgrow as they develop into seasoned hackers.</p><p>As we&#39;ve used Atom to build Atom, what began as an experiment has gradually matured into a tool we can&#39;t live without. On the surface, Atom is the modern desktop text editor you&#39;ve come to expect. Pop the hood, however, and you&#39;ll discover a system begging to be hacked on.</p><h4 id="the-nucleus-of-atom" tabindex="-1"><a class="header-anchor" href="#the-nucleus-of-atom" aria-hidden="true">#</a> The Nucleus of Atom</h4><p>The web is not without its faults, but two decades of development has forged it into an incredibly malleable and powerful platform. So when we set out to write a text editor that we ourselves would want to extend, web technology was the obvious choice. But first, we had to free it from its chains.</p><h5 id="the-native-web" tabindex="-1"><a class="header-anchor" href="#the-native-web" aria-hidden="true">#</a> The Native Web</h5><p>Web browsers are great for browsing web pages, but writing code is a specialized activity that warrants dedicated tools. More importantly, the browser severely restricts access to the local system for security reasons, and for us, a text editor that couldn&#39;t write files or run local subprocesses was a non-starter.</p><p>For this reason, we didn&#39;t build Atom as a traditional web application. Instead, Atom is a specialized variant of Chromium designed to be a text editor rather than a web browser. Every Atom window is essentially a locally-rendered web page.</p><p>All the APIs available to a typical Node.js application are also available to the code running in each window&#39;s JavaScript context. This hybrid provides a unique client-side development experience.</p><p>Since everything is local, you don&#39;t have to worry about asset pipelines, script concatenation, and asynchronous module definitions. If you want to load some code, just require it at the top of your file. Node&#39;s module system makes it easy to break the system down into lots of small, focused packages.</p><h5 id="javascript-meet-c" tabindex="-1"><a class="header-anchor" href="#javascript-meet-c" aria-hidden="true">#</a> JavaScript, Meet C++</h5><p>Interacting with native code is also really simple. For example, we wrote a wrapper around the Oniguruma regular expression engine for our TextMate grammar support. In a browser, that would have required adventures with NaCl or Esprima. Node integration made it easy.</p><p>In addition to the Node APIs, we also expose APIs for native dialogs, adding application and context menu items, manipulating the window dimensions, etc.</p><h5 id="web-tech-the-fun-parts" tabindex="-1"><a class="header-anchor" href="#web-tech-the-fun-parts" aria-hidden="true">#</a> Web Tech: The Fun Parts</h5><p>Another great benefit, that comes with writing code for Atom, is the guarantee that it&#39;s running on the newest version of Chromium. That means we can ignore issues like browser compatibility and polyfills. We can use all the web&#39;s shiny features of tomorrow, today.</p><p>For example, the layout of our workspace and panes is based on flexbox. It&#39;s an emerging standard and has gone through a lot of change since we started using it, but none of that mattered as long as it worked.</p><p>With the entire industry pushing web technology forward, we&#39;re confident that we&#39;re building Atom on fertile ground. Native UI technologies come and go, but the web is a standard that becomes more capable and ubiquitous with every passing year. We&#39;re excited to dig deeper into its toolbox.</p><h4 id="an-open-source-text-editor" tabindex="-1"><a class="header-anchor" href="#an-open-source-text-editor" aria-hidden="true">#</a> An Open-Source Text Editor</h4><p>We see Atom as a perfect complement to GitHub&#39;s primary mission of building better software by working together. Atom is a long-term investment, and GitHub will continue to support its development with a dedicated team going forward. But we also know that we can&#39;t achieve our vision for Atom alone. As Emacs and Vim have demonstrated over the past three decades, if you want to build a thriving, long-lasting community around a text editor, it has to be open source.</p><p>The entire Atom editor is free and open source and is available under the https://github.com/atom organization.</p>',22),r=[n];function s(d,h){return t(),a("div",null,r)}const c=e(i,[["render",s],["__file","why-atom.html.vue"]]);export{c as default};
