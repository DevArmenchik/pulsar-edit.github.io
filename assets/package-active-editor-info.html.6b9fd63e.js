import{_ as o,o as i,c as p,e as t,a as n,b as s,d as e,f as c,r as l}from"./app.67aa3f8b.js";const u={},r=n("h2",{id:"package-active-editor-info",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#package-active-editor-info","aria-hidden":"true"},"#"),s(" Package: Active Editor Info")],-1),d=n("p",null,[s("We saw in our "),n("a",{href:"#package-word-count"},"Word Count"),s(" package how we could show information in a modal panel. However, panels aren't the only way to extend Pulsar's UI\u2014you can also add items to the workspace. These items can be dragged to new locations (for example, one of the docks on the edges of the window), and Pulsar will restore them the next time you open the project.")],-1),k={href:"https://github.com/pulsar-edit/active-editor-info",target:"_blank",rel:"noopener noreferrer"},v=n("h3",{id:"create-the-package",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#create-the-package","aria-hidden":"true"},"#"),s(" Create the Package")],-1),m=n("strong",null,[n("em",null,"LNX/WIN")],-1),h=n("kbd",null,"Ctrl+Shift+P",-1),g=n("strong",null,[n("em",null,"MAC")],-1),b=n("kbd",null,"Cmd+Shift+P",-1),w={href:"https://github.com/pulsar-edit/command-palette",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"Package Generator: Generate Package",-1),y=n("a",{href:"#package-generator"},"the section on package generation",-1),q=n("code",null,"active-editor-info",-1),j=c(`<h3 id="add-an-opener" tabindex="-1"><a class="header-anchor" href="#add-an-opener" aria-hidden="true">#</a> Add an Opener</h3><p>Now let&#39;s edit the package files to show our view in a workspace item instead of a modal panel. The way we do this is by registering an <em>opener</em> with Pulsar. Openers are just functions that accept a URI and return a view (if it&#39;s a URI that the opener knows about). When you call <code>atom.workspace.open()</code>, Pulsar will go through all of its openers until it finds one that can handle the URI you passed.</p><p>Let&#39;s open <code>lib/active-editor-info.js</code> and edit our <code>activate()</code> method to register an opener:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;use babel&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> ActiveEditorInfoView <span class="token keyword">from</span> <span class="token string">&quot;./active-editor-info-view&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CompositeDisposable<span class="token punctuation">,</span> Disposable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;atom&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">subscriptions</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>

	<span class="token function">activate</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>subscriptions <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CompositeDisposable</span><span class="token punctuation">(</span>
			<span class="token comment">// Add an opener for our view.</span>
			atom<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">addOpener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">uri</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>uri <span class="token operator">===</span> <span class="token string">&quot;atom://active-editor-info&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ActiveEditorInfoView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

			<span class="token comment">// Register command that toggles this view</span>
			atom<span class="token punctuation">.</span>commands<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;atom-workspace&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
				<span class="token string-property property">&quot;active-editor-info:toggle&quot;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

			<span class="token comment">// Destroy any ActiveEditorInfoViews when the package is deactivated.</span>
			<span class="token keyword">new</span> <span class="token class-name">Disposable</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				atom<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">getPaneItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token keyword">instanceof</span> <span class="token class-name">ActiveEditorInfoView</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						item<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token function">deactivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Toggle it!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You&#39;ll notice we also removed the <code>activeEditorInfoView</code> property and the <code>serialize()</code> method. That&#39;s because, with workspace items, it&#39;s possible to have more than one instance of a given view. Since each instance can have its own state, each should do its own serialization instead of relying on a package-level <code>serialize()</code> method. We&#39;ll come back to that later.</p><p>You probably also noticed that our <code>toggle()</code> implementation just logs the text &quot;Toggle it!&quot; to the console. Let&#39;s make it actually toggle our view:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    atom<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">&#39;atom://active-editor-info&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="updating-the-view" tabindex="-1"><a class="header-anchor" href="#updating-the-view" aria-hidden="true">#</a> Updating the View</h3><p>Pulsar uses the same view abstractions everywhere, so we can almost use the generated ActiveEditorInfoView class as-is. We just need to add two small methods:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Used by Pulsar for tab text</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Active Editor Info&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Used by Pulsar to identify the view when toggling.</span>
    <span class="token keyword">return</span> <span class="token string">&#39;atom://active-editor-info&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now reload the window and run the <code>Active Editor Info: Toggle</code> command from the command palette! Our view will appear in a new tab in the center of the workspace. If you want, you can drag it into one of the docks. Toggling it again will then hide that dock. If you close the tab and run the toggle command again, it will appear in the last place you had it.</p><div class="custom-container note"><p class="custom-container-title">Note</p><p>We&#39;ve repeated the same URI three times now. That&#39;s okay, but it&#39;s probably a good idea to define the URL in one place and then import it from that module wherever you need it.</p></div><h3 id="constraining-our-item-s-locations" tabindex="-1"><a class="header-anchor" href="#constraining-our-item-s-locations" aria-hidden="true">#</a> Constraining Our Item&#39;s Locations</h3><p>The purpose of our view is to show information about the active text editor, so it doesn&#39;t really make sense to show our item in the center of the workspace (where the text editor will be). Let&#39;s add some methods to our view class to influence where its opened:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">getDefaultLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This location will be used if the user hasn&#39;t overridden it by dragging the item elsewhere.</span>
    <span class="token comment">// Valid values are &quot;left&quot;, &quot;right&quot;, &quot;bottom&quot;, and &quot;center&quot; (the default).</span>
    <span class="token keyword">return</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getAllowedLocations</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// The locations into which the item can be moved.</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now our item will appear in the right dock initially and users will only be able to drag it to one of the other docks.</p><h3 id="show-active-editor-info" tabindex="-1"><a class="header-anchor" href="#show-active-editor-info" aria-hidden="true">#</a> Show Active Editor Info</h3><p>Now that we have our view all wired up, let&#39;s update it to show some information about the active text editor. Add this to the constructor:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>subscriptions <span class="token operator">=</span> atom<span class="token punctuation">.</span>workspace
	<span class="token punctuation">.</span><span class="token function">getCenter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">.</span><span class="token function">observeActivePaneItem</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>atom<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">isTextEditor</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			message<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&quot;Open a file to see important information about it.&quot;</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		message<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;h2&gt;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span><span class="token function">getFileName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&quot;untitled&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h2&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;b&gt;Soft Wrap:&lt;/b&gt; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span>softWrapped<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li&gt;
      &lt;li&gt;&lt;b&gt;Tab Length:&lt;/b&gt; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span><span class="token function">getTabLength</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li&gt;
      &lt;li&gt;&lt;b&gt;Encoding:&lt;/b&gt; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span><span class="token function">getEncoding</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li&gt;
      &lt;li&gt;&lt;b&gt;Line Count:&lt;/b&gt; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span><span class="token function">getLineCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li&gt;
    &lt;/ul&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now whenever you open a text editor in the center, the view will update with some information about it.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>We use a template string here because it&#39;s simple and we have a lot of control over what&#39;s going into it, but this could easily result in the insertion of unwanted HTML if you&#39;re not careful. Sanitize your input and use the DOM API or a templating system when doing this for real.</p></div><p>Also, don&#39;t forget to clean up the subscription in the <code>destroy()</code> method:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>subscriptions<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="serialization" tabindex="-1"><a class="header-anchor" href="#serialization" aria-hidden="true">#</a> Serialization</h3><p>If you were to reload Atom now, you&#39;d see that our item had disappeared. That&#39;s because we haven&#39;t told Pulsar how to serialize it yet. Let&#39;s do that now.</p><p>The first step is to implement a <code>serialize()</code> method on our ActiveEditorInfoView class. Atom will call the <code>serialize()</code> method on every item in the workspace periodically to save its state.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// This is used to look up the deserializer function. It can be any string, but it needs to be</span>
      <span class="token comment">// unique across all packages!</span>
      <span class="token literal-property property">deserializer</span><span class="token operator">:</span> <span class="token string">&#39;active-editor-info/ActiveEditorInfoView&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container note"><p class="custom-container-title">Note</p><p>All of our view&#39;s state is derived from the active text editor so we only need the <code>deserializer</code> field. If we had other state that we wanted to preserve across reloads, we would just add things to the object we&#39;re returning. Just make sure that they&#39;re JSON serializable!</p></div><p>Next we need to register a deserializer function that Atom can use to recreate the real object when it starts up. The best way to do that is to add a &quot;deserializers&quot; object to our <code>package.json</code> file:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;active-editor-info&quot;</span><span class="token punctuation">,</span>
  ...
  <span class="token property">&quot;deserializers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;active-editor-info/ActiveEditorInfoView&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deserializeActiveEditorInfoView&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that the key (<code>&quot;active-editor-info/ActiveEditorInfoView&quot;</code>) matches the string we used in our <code>serialize()</code> method above. The value (<code>&quot;deserializeActiveEditorInfoView&quot;</code>) refers to a function in our main module, which we still need to add. Go back to <code>active-editor-info.js</code> and do that now:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">deserializeActiveEditorInfoView</span><span class="token punctuation">(</span><span class="token parameter">serialized</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ActiveEditorInfoView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The value returned from our <code>serialize()</code> method will be passed to this function. Since our serialized object didn&#39;t include any state, we can just return a new ActiveEditorInfoView instance.</p><p>Reload Pulsar and toggle the view with the <code>Active Editor Info: Toggle</code> command. Then reload Pulsar again. Your view should be just where you left it!</p><h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h3><p>In this section, we&#39;ve made a toggleable workspace item whose placement can be controlled by the user. This could be helpful when creating all sorts of visual tools for working with code!</p>`,36);function _(I,x){const a=l("ExternalLinkIcon");return i(),p("div",null,[r,d,t("Below was part of this section in the original docs but as Nuclide is retired we either need a new example or remove this entirely"),t(`This system is used by Pulsar's tree view, as well as by third party
packages like [Nuclide](https://nuclide.io) for its console, debugger, outline
view, and diagnostics (linter results).`),n("p",null,[s("For this package, we'll define a workspace item that tells us some information about our active text editor. The final package can be viewed at "),n("a",k,[s("https://github.com/pulsar-edit/active-editor-info"),e(a)]),s(".")]),v,n("p",null,[s("To begin, press "),m,s(": "),h,s(" - "),g,s(": "),b,s(" to bring up the "),n("a",w,[s("Command Palette"),e(a)]),s('. Type "generate package" and select the '),f,s(" command, just as we did in "),y,s(". Enter "),q,s(" as the name of the package.")]),j])}const T=o(u,[["render",_],["__file","package-active-editor-info.html.vue"]]);export{T as default};
