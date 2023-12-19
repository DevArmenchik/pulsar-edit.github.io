import{_ as o,o as n,c as l,a as e,b as t,d as a,e as s,f as i,r as d}from"./app.67aa3f8b.js";const u={},p={href:"https://github.com/pulsar-edit/pulsar/releases/tag/v1.104.0",target:"_blank",rel:"noopener noreferrer"},h=i('<h1 id="what-is-new-in-1-104-0" tabindex="-1"><a class="header-anchor" href="#what-is-new-in-1-104-0" aria-hidden="true">#</a> What is new in 1.104.0?</h1><p>This release contains many internal changes and upgrades, focusing on preparing the editor for much bigger changes to come.</p><p>One technical change is that we have internally patched WebComponents (document.registerElement), which will potentially fix many of our community packages that rely on this (deprecated) functionality.</p><p>We&#39;ve also started our first migrations to WASM based packages (which is required for new NodeJS Versions). Any issues found here will be important to address, in order to ensure future updates go smoothly, and to unblock the road to compatibility with newer Electron versions. Please let us know if you find anything broken due to these updates!</p><p>We also have updates such as improved whitespace in a certain PHP snippet, and bleeding edge HTML completions. And with more decaf work, we should be seeing some slightly faster startup speeds.</p><p>Last but not least, we can expect to see this release being available on Chocolatey for Windows; Thank you HighHarmonics, il_mix, and COLAMAroro!</p><p>But as always we want to say a huge thanks to all those that contribute and donate to Pulsar, making it possible for us to continually release these improvements. And we want to give a special thanks to the new faces we are seeing in this update, with some brand new contributors!</p><p>As always we appreciate every single one of you, happy coding, and see you among the stars!</p><ul><li>The Pulsar Team</li></ul><hr><ul><li>The settings-view package now lists a package\u2019s snippets more accurately</li><li>Fixed some issues with some packages with WebComponents v0 (tablr package<br> should work now) by internalizing and patching document-register-element</li><li>Migrated away from <code>node-oniguruma</code> in favor of <code>vscode-oniguruma</code> (WASM<br> version). This fixes issues with Electron 21</li><li>Ensured new WASM packages will work on Apple Silicon</li><li>Completions for HTML will now be as bleeding edge as possible.</li></ul><h3 id="pulsar" tabindex="-1"><a class="header-anchor" href="#pulsar" aria-hidden="true">#</a> Pulsar</h3>',12),c=e("code",null,"settings-view",-1),m={href:"https://github.com/pulsar-edit/pulsar/pull/451",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/pulsar-edit/pulsar/pull/488",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/pulsar-edit/pulsar/pull/483",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"wrap-guide",-1),b={href:"https://github.com/pulsar-edit/pulsar/pull/443",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/pulsar-edit/pulsar/pull/424",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/pulsar-edit/pulsar/pull/454",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/pulsar-edit/pulsar/pull/471",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/pulsar-edit/pulsar/pull/463",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/pulsar-edit/pulsar/pull/406",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/pulsar-edit/pulsar/pull/446",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,"autocomplete-html",-1),C=e("code",null,"completions.json",-1),P={href:"https://github.com/pulsar-edit/pulsar/pull/405",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/pulsar-edit/pulsar/pull/450",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/pulsar-edit/pulsar/pull/438",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/pulsar-edit/pulsar/pull/435",target:"_blank",rel:"noopener noreferrer"},W={href:"https://github.com/pulsar-edit/pulsar/pull/440",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/pulsar-edit/pulsar/pull/414",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/pulsar-edit/pulsar/pull/434",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/pulsar-edit/pulsar/pull/239",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/pulsar-edit/pulsar/pull/432",target:"_blank",rel:"noopener noreferrer"},B=e("h3",{id:"second-mate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#second-mate","aria-hidden":"true"},"#"),t(" second-mate")],-1),D={href:"https://github.com/pulsar-edit/second-mate/pull/1",target:"_blank",rel:"noopener noreferrer"},N=e("h3",{id:"autosave",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#autosave","aria-hidden":"true"},"#"),t(" autosave")],-1),V={href:"https://github.com/pulsar-edit/autosave/pull/2",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/pulsar-edit/autosave/pull/1",target:"_blank",rel:"noopener noreferrer"},L=e("h3",{id:"bracket-matcher",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bracket-matcher","aria-hidden":"true"},"#"),t(" bracket-matcher")],-1),I={href:"https://github.com/pulsar-edit/bracket-matcher/pull/3",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/pulsar-edit/bracket-matcher/pull/2",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/pulsar-edit/bracket-matcher/pull/1",target:"_blank",rel:"noopener noreferrer"},q=e("h3",{id:"timecop",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#timecop","aria-hidden":"true"},"#"),t(" timecop")],-1),G={href:"https://github.com/pulsar-edit/timecop/pull/1",target:"_blank",rel:"noopener noreferrer"},J=e("h3",{id:"keybinding-resolver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#keybinding-resolver","aria-hidden":"true"},"#"),t(" keybinding-resolver")],-1),Y={href:"https://github.com/pulsar-edit/keybinding-resolver/pull/1",target:"_blank",rel:"noopener noreferrer"};function K(Q,X){const r=d("ExternalLinkIcon");return n(),l("div",null,[e("p",null,[t("Check out our newest Regular Release for Pulsar! "),e("a",p,[t("Available Now!"),a(r)])]),s(" more "),h,e("ul",null,[e("li",null,[t("Added: "),c,t(" Support for Badges "),e("a",m,[t("@confused-Techie"),a(r)])]),e("li",null,[t("Removed: remove weird duplicate accented fixture file (hopefully?) "),e("a",_,[t("@Meadowsys"),a(r)])]),e("li",null,[t("Added: Add optional entitlements monkey-patch "),e("a",g,[t("@confused-Tecie"),a(r)])]),e("li",null,[t("Added: Decaf "),f,t(),e("a",b,[t("@confused-Techie"),a(r)])]),e("li",null,[t("Added: Additional Bundling of Core Packages "),e("a",k,[t("@confused-Techie"),a(r)])]),e("li",null,[t("Added: add allow-jit entitlement (fixes Apple Silicon builds) "),e("a",w,[t("@Meadowsys"),a(r)])]),e("li",null,[t('Removed: Revert "Create i18n API" '),e("a",v,[t("@mauricioszabo"),a(r)])]),e("li",null,[t("Added: Build first, and test later "),e("a",x,[t("@mauricioszabo"),a(r)])]),e("li",null,[t("Update: [settings-view] Update package snippets view to reflect new features "),e("a",y,[t("@savetheclocktower"),a(r)])]),e("li",null,[t("Added: Create i18n API "),e("a",A,[t("@Meadowsys"),a(r)])]),e("li",null,[t("Added: Add Automated updating of "),S,t(),C,t(),e("a",P,[t("@confused-Techie"),a(r)])]),e("li",null,[t("Fixed: docs: fix markdown links in packages README "),e("a",T,[t("@oakmac"),a(r)])]),e("li",null,[t("Fixed: Patch document register element "),e("a",M,[t("@mauricioszabo"),a(r)])]),e("li",null,[t('Added: Using "second-mate" '),e("a",U,[t("@mauricioszabo"),a(r)])]),e("li",null,[t(`Fixed: Fix spacing of PHP's "for ..." snippet `),e("a",W,[t("@machitgarha"),a(r)])]),e("li",null,[t("Update: Update resources metadata "),e("a",E,[t("@Spiker985"),a(r)])]),e("li",null,[t("Fixed: Cirrus: Windows: install ppm deps with Yarn "),e("a",F,[t("@DeeDeeG"),a(r)])]),e("li",null,[t("Added: made cirrus build scripts consistent "),e("a",R,[t("@Sertonix"),a(r)])]),e("li",null,[t("Update: Update package.json author "),e("a",z,[t("@Daeraxa"),a(r)])])]),B,e("ul",null,[e("li",null,[t("Added: Migrate to vscode-oniguruma "),e("a",D,[t("@mauricioszabo"),a(r)])])]),N,e("ul",null,[e("li",null,[t("Removed: removed fs-plus dependency "),e("a",V,[t("@Sertonix"),a(r)])]),e("li",null,[t("Update: Cleanup and rename "),e("a",H,[t("@Sertonix"),a(r)])])]),L,e("ul",null,[e("li",null,[t("Fixed: Fixing test that need to run locally "),e("a",I,[t("@mauricioszabo"),a(r)])]),e("li",null,[t("Update: cleanup .md and rename repo url "),e("a",j,[t("@Sertonix"),a(r)])]),e("li",null,[t("Update: Rename A[a]tom -> P[p]ulsar "),e("a",O,[t("@Spiker985"),a(r)])])]),q,e("ul",null,[e("li",null,[t("Update: cleanup and rename "),e("a",G,[t("@Sertonix"),a(r)])])]),J,e("ul",null,[e("li",null,[t("Update: Cleanup and rename "),e("a",Y,[t("@Sertonix"),a(r)])])])])}const $=o(u,[["render",K],["__file","20230418-Daeraxa-v1.104.0.html.vue"]]);export{$ as default};
