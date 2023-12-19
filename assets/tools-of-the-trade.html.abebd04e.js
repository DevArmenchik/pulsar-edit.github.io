import{_ as o,o as t,c as i,a,b as e,d as n,f as p,r}from"./app.67aa3f8b.js";const l={},c=p(`<h3 id="tools-of-the-trade" tabindex="-1"><a class="header-anchor" href="#tools-of-the-trade" aria-hidden="true">#</a> Tools of the Trade</h3><p>To begin, there are a few things we&#39;ll assume you know, at least to some degree. Since all of Atom is implemented using web technologies, we have to assume you know web technologies such as JavaScript and CSS. Specifically, we&#39;ll be using Less, which is a preprocessor for CSS.</p><p>While much of Atom has been converted to JavaScript, a lot of older code has been left implemented in CoffeeScript because changing it would have been too risky. Additionally, Atom&#39;s default configuration language is CSON, which is based on CoffeeScript. If you don&#39;t know CoffeeScript, but you are familiar with JavaScript, you shouldn&#39;t have too much trouble. Here is an example of some simple CoffeeScript code:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code>MyPackageView <span class="token operator">=</span> require <span class="token string">&#39;./my-package-view&#39;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span>
  <span class="token property">myPackageView</span><span class="token operator">:</span> <span class="token keyword">null</span>

  <span class="token property">activate</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
    <span class="token class-member variable">@myPackageView</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyPackageView</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>myPackageViewState<span class="token punctuation">)</span>

  <span class="token property">deactivate</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
    <span class="token class-member variable">@myPackageView</span><span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token property">serialize</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
    <span class="token property">myPackageViewState</span><span class="token operator">:</span> <span class="token class-member variable">@myPackageView</span><span class="token punctuation">.</span><span class="token function">serialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u={href:"http://coffeescript.org",target:"_blank",rel:"noopener noreferrer"},d={href:"http://lesscss.org/",target:"_blank",rel:"noopener noreferrer"};function k(m,f){const s=r("ExternalLinkIcon");return t(),i("div",null,[c,a("p",null,[e("We'll go over examples like this in a bit, but this is what the language looks like. Just about everything you can do with CoffeeScript in Atom is also doable in JavaScript. You can brush up on CoffeeScript at "),a("a",u,[e("coffeescript.org"),n(s)]),e(".")]),a("p",null,[e("Less is an even simpler transition from CSS. It adds a number of useful things like variables and functions to CSS. You can learn about Less at "),a("a",d,[e("lesscss.org"),n(s)]),e(". Our usage of Less won't get too complex in this book however, so as long as you know basic CSS you should be fine.")])])}const v=o(l,[["render",k],["__file","tools-of-the-trade.html.vue"]]);export{v as default};
