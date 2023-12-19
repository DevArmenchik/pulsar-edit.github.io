import{_ as r,o as i,c as s,a as t,b as e,d as o,f as a,r as h}from"./app.67aa3f8b.js";const c={},l=t("h3",{id:"converting-from-textmate",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#converting-from-textmate","aria-hidden":"true"},"#"),e(" Converting from TextMate")],-1),d={href:"https://macromates.com",target:"_blank",rel:"noopener noreferrer"},m=t("h4",{id:"converting-a-textmate-grammar-bundle",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#converting-a-textmate-grammar-bundle","aria-hidden":"true"},"#"),e(" Converting a TextMate Grammar Bundle")],-1),u=t("p",null,"Converting a TextMate bundle will allow you to use its editor preferences, snippets, and colorization inside Atom.",-1),p={href:"https://en.wikipedia.org/wiki/R_(programming_language)",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/textmate",target:"_blank",rel:"noopener noreferrer"},f=a(`<p>You can convert the R bundle with the following command:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm init --package language-r --convert https://github.com/textmate/r.tmbundle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can now change directory into <code>language-r</code> to see the converted bundle. Once you link your package with the <code>apm link</code> command, your new package is ready to use. Launch Atom and open a <code>.r</code> file in the editor to see it in action!</p><h4 id="converting-a-textmate-syntax-theme" tabindex="-1"><a class="header-anchor" href="#converting-a-textmate-syntax-theme" aria-hidden="true">#</a> Converting a TextMate Syntax Theme</h4>`,4),_={href:"https://macromates.com",target:"_blank",rel:"noopener noreferrer"},v=t("h5",{id:"differences",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#differences","aria-hidden":"true"},"#"),e(" Differences")],-1),b={href:"https://en.wikipedia.org/wiki/Property_list",target:"_blank",rel:"noopener noreferrer"},x={href:"https://en.wikipedia.org/wiki/Cascading_Style_Sheets",target:"_blank",rel:"noopener noreferrer"},w={href:"http://lesscss.org",target:"_blank",rel:"noopener noreferrer"},y=t("p",null,"The utility that converts the theme first parses the theme's plist file and then creates comparable CSS rules and properties that will style Atom similarly.",-1),T=t("h5",{id:"convert-the-theme",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#convert-the-theme","aria-hidden":"true"},"#"),e(" Convert the Theme")],-1),k={href:"http://wiki.macromates.com/Themes/UserSubmittedThemes",target:"_blank",rel:"noopener noreferrer"},M=a(`<p>Now, let&#39;s say you&#39;ve downloaded the theme to <code>~/Downloads/MyTheme.tmTheme</code>, you can convert the theme with the following command:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm init --theme my-theme --convert ~/Downloads/MyTheme.tmTheme
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can then change directory to <code>my-theme</code> to see the converted theme.</p><h5 id="activate-the-theme" tabindex="-1"><a class="header-anchor" href="#activate-the-theme" aria-hidden="true">#</a> Activate the Theme</h5><p>Once your theme is installed you can enable it by launching Atom and opening the Settings View with the <span class="platform-mac"><em>Atom &gt; Preferences</em></span><span class="platform-windows"><em>File &gt; Preferences</em></span><span class="platform-linux"><em>Edit &gt; Preferences</em></span> menu item. Then select the &quot;Themes&quot; tab on the left side navigation. Finally, choose &quot;My Theme&quot; from the &quot;Syntax Theme&quot; dropdown menu to enable your new theme.</p><p>Your theme is now enabled, open an editor to see it in action!</p>`,6);function S(A,C){const n=h("ExternalLinkIcon");return i(),s("div",null,[l,t("p",null,[e("It's possible that you have themes or grammars from "),t("a",d,[e("TextMate"),o(n)]),e(" that you like and use and would like to convert to Atom. If so, you're in luck because there are tools to help with the conversion.")]),m,u,t("p",null,[e("Let's convert the TextMate bundle for the "),t("a",p,[e("R"),o(n)]),e(" programming language. You can find other existing TextMate bundles "),t("a",g,[e("on GitHub"),o(n)]),e(".")]),f,t("p",null,[e("This section will go over how to convert a "),t("a",_,[e("TextMate"),o(n)]),e(" theme to an Atom theme.")]),v,t("p",null,[e("TextMate themes use "),t("a",b,[e("plist"),o(n)]),e(" files while Atom themes use "),t("a",x,[e("CSS"),o(n)]),e(" or "),t("a",w,[e("Less"),o(n)]),e(" to style the UI and syntax in the editor.")]),y,T,t("p",null,[e("Download the theme you wish to convert, you can browse existing TextMate themes on the "),t("a",k,[e("TextMate website"),o(n)]),e(".")]),M])}const I=r(c,[["render",S],["__file","converting-from-textmate.html.vue"]]);export{I as default};
