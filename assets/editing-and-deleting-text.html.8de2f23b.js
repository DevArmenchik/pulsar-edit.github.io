import{_ as h,a as m,b as p}from"./encodings.03a1adc8.js";import{_ as u,o as f,c as b,d as a,w as i,a as e,b as t,f as o,r as d}from"./app.67aa3f8b.js";const g={},k=o('<h3 id="editing-and-deleting-text" tabindex="-1"><a class="header-anchor" href="#editing-and-deleting-text" aria-hidden="true">#</a> Editing and Deleting Text</h3><p>So far we&#39;ve looked at a number of ways to move around and select regions of a file, so now let&#39;s actually change some of that text. Obviously you can type in order to insert characters, but there are also a number of ways to delete and manipulate text that could come in handy.</p><h4 id="basic-manipulation" tabindex="-1"><a class="header-anchor" href="#basic-manipulation" aria-hidden="true">#</a> Basic Manipulation</h4><p>There are a handful of cool keybindings for basic text manipulation that might come in handy. These range from moving around lines of text and duplicating lines to changing the case.</p><ul><li><kbd class="platform-mac">Cmd+J</kbd><kbd class="platform-windows platform-linux">Ctrl+J</kbd> - Join the next line to the end of the current line</li><li><kbd class="platform-mac">Cmd+Ctrl+Up/Down</kbd><kbd class="platform-windows platform-linux">Ctrl+Up/Down</kbd> - Move the current line up or down</li><li><kbd class="platform-mac">Cmd+Shift+D</kbd><kbd class="platform-windows platform-linux">Ctrl+Shift+D</kbd> - Duplicate the current line</li><li><kbd class="platform-mac">Cmd+K</kbd> <kbd class="platform-mac">Cmd+U</kbd><kbd class="platform-windows platform-linux">Ctrl+K</kbd> <kbd class="platform-windows platform-linux">Ctrl+U</kbd> - Upper case the current word</li><li><kbd class="platform-mac">Cmd+K</kbd> <kbd class="platform-mac">Cmd+L</kbd><kbd class="platform-windows platform-linux">Ctrl+K</kbd> <kbd class="platform-windows platform-linux">Ctrl+L</kbd> - Lower case the current word</li></ul>',5),w=e("ul",null,[e("li",null,[e("kbd",{class:"platform-mac"},"Ctrl+T"),t(" - Transpose characters. This swaps the two characters on either side of the cursor.")])],-1),y=o('<p>Atom also has built in functionality to re-flow a paragraph to hard-wrap at a given maximum line length. You can format the current selection to have lines no longer than 80 (or whatever number <code>editor.preferredLineLength</code> is set to) characters using <kbd class="platform-mac">Alt+Cmd+Q</kbd><kbd class="platform-windows platform-linux">Alt+Ctrl+Q</kbd>. If nothing is selected, the current paragraph will be reflowed.</p><h4 id="deleting-and-cutting" tabindex="-1"><a class="header-anchor" href="#deleting-and-cutting" aria-hidden="true">#</a> Deleting and Cutting</h4><p>You can also delete or cut text out of your buffer with some shortcuts. Be ruthless.</p><ul><li><kbd class="platform-mac platform-windows platform-linux">Ctrl+Shift+K</kbd> - Delete current line</li><li><span class="platform-mac"><kbd class="platform-mac">Alt+Backspace</kbd> or <kbd class="platform-mac">Alt+H</kbd></span><kbd class="platform-windows platform-linux">Ctrl+Backspace</kbd> - Delete to beginning of word</li><li><span class="platform-mac"><kbd class="platform-mac">Alt+Delete</kbd> or <kbd class="platform-mac">Alt+D</kbd></span><kbd class="platform-windows platform-linux">Ctrl+Delete</kbd> - Delete to end of word</li></ul>',4),x=e("ul",null,[e("li",null,[e("kbd",{class:"platform-mac"},"Cmd+Delete"),t(" - Delete to end of line")]),e("li",null,[e("kbd",{class:"platform-mac"},"Ctrl+K"),t(" - Cut to end of line")]),e("li",null,[e("kbd",{class:"platform-mac"},"Cmd+Backspace"),t(" - Delete to beginning of line")])],-1),_=o('<h4 id="multiple-cursors-and-selections" tabindex="-1"><a class="header-anchor" href="#multiple-cursors-and-selections" aria-hidden="true">#</a> Multiple Cursors and Selections</h4><p>One of the cool things that Atom can do out of the box is support multiple cursors. This can be incredibly helpful in manipulating long lists of text.</p><ul><li><kbd class="platform-mac">Cmd+Click</kbd><kbd class="platform-windows platform-linux">Ctrl+Click</kbd> - Add a new cursor at the clicked location</li><li><kbd class="platform-mac">Ctrl+Shift+Up/Down</kbd><kbd class="platform-windows">Alt+Ctrl+Up/Down</kbd><kbd class="platform-linux">Alt+Shift+Up/Down</kbd> - Add another cursor above/below the current cursor</li><li><kbd class="platform-mac">Cmd+D</kbd><kbd class="platform-windows platform-linux">Ctrl+D</kbd> - Select the next word in the document that is the same as the currently selected word</li><li><kbd class="platform-mac">Cmd+Ctrl+G</kbd><kbd class="platform-windows platform-linux">Alt+F3</kbd> - Select all words in the document that are the same as the currently selected word</li></ul>',3),C=e("ul",null,[e("li",null,[e("kbd",{class:"platform-mac"},"Cmd+Shift+L"),t(" - Convert a multi-line selection into multiple cursors")])],-1),v=o('<p>Using these commands you can place cursors in multiple places in your document and effectively execute the same commands in multiple places at once.</p><p><img src="'+h+'" alt="Using multiple cursors"></p><p>This can be incredibly helpful in doing many type of repetitive tasks such as renaming variables or changing the format of some text. You can use this with almost any plugin or command - for example, changing case and moving or duplicating lines.</p><p>You can also use the mouse to select text with the <kbd class="platform-mac">Cmd</kbd><kbd class="platform-windows platform-linux">Ctrl</kbd> key pressed down to select multiple regions of your text simultaneously.</p><h4 id="whitespace" tabindex="-1"><a class="header-anchor" href="#whitespace" aria-hidden="true">#</a> Whitespace</h4><p>Atom comes with several commands to help you manage the whitespace in your document. One very useful pair of commands converts leading spaces into tabs and converts leading tabs into spaces. If you&#39;re working with a document that has mixed whitespace, these commands are great for helping to normalize the file. There are no keybindings for the whitespace commands, so you will have to search your command palette for &quot;Convert Spaces to Tabs&quot; (or vice versa) to run one of these commands.</p>',6),A={href:"https://github.com/atom/whitespace",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"whitespace",-1),D=o('<p><img src="'+m+'" alt="Managing your whitespace settings"></p><div class="custom-container note"><p class="custom-container-title">Note</p><p>The &quot;Remove Trailing Whitespace&quot; option is on by default. This means that every time you save any file opened in Atom, it will strip all trailing whitespace from the file. If you want to disable this, go to the <code>whitespace</code> package in your settings panel and uncheck that option.</p></div><p>Atom will also by default ensure that your file has a trailing newline. You can also disable this option on that screen.</p><h4 id="brackets" tabindex="-1"><a class="header-anchor" href="#brackets" aria-hidden="true">#</a> Brackets</h4><p>Atom ships with intelligent and easy to use bracket handling.</p><p>It will by default highlight <code>[]</code>, <code>()</code>, and <code>{}</code> style brackets when your cursor is over them. It will also highlight matching XML and HTML tags.</p><p>Atom will also automatically autocomplete <code>[]</code>, <code>()</code>, and <code>{}</code>, <code>&quot;&quot;</code>, <code>&#39;&#39;</code>, <code>\u201C\u201D</code>, <code>\u2018\u2019</code>, <code>\xAB\xBB</code>, <code>\u2039\u203A</code>, and backticks when you type the leading one. If you have a selection and you type any of these opening brackets or quotes, Atom will enclose the selection with the opening and closing brackets or quotes.</p><p>There are a few other interesting bracket related commands that you can use.</p><ul><li><kbd class="platform-mac platform-windows platform-linux">Ctrl+M</kbd> - Jump to the bracket matching the one adjacent to the cursor. It jumps to the nearest enclosing bracket when there&#39;s no adjacent bracket.</li><li><kbd class="platform-mac">Cmd+Ctrl+M</kbd><kbd class="platform-windows platform-linux">Alt+Ctrl+,</kbd> - Select all the text inside the current brackets</li><li><kbd class="platform-mac">Alt+Cmd+.</kbd><kbd class="platform-windows platform-linux">Alt+Ctrl+.</kbd> - Close the current XML/HTML tag</li></ul>',9),S={href:"https://github.com/atom/bracket-matcher",target:"_blank",rel:"noopener noreferrer"},U=o('<h4 id="encoding" tabindex="-1"><a class="header-anchor" href="#encoding" aria-hidden="true">#</a> Encoding</h4><p>Atom also ships with some basic file encoding support should you find yourself working with non-UTF-8 encoded files, or should you wish to create one.</p><ul><li><kbd class="platform-mac platform-windows">Ctrl+Shift+U</kbd><kbd class="platform-linux">Alt+U</kbd> - Toggle menu to change file encoding</li></ul><p>If you pull up the file encoding dialog, you can choose an alternate file encoding to save your file in.</p><p>When you open a file, Atom will try to auto-detect the encoding. If Atom can&#39;t identify the encoding, the encoding will default to UTF-8, which is also the default encoding for new files.</p><p><img src="'+p+'" alt="Changing your file encoding"></p><p>If you pull up the encoding menu and change the active encoding to something else, the file will be written out in that encoding the next time you save the file.</p>',7),L={href:"https://github.com/atom/encoding-selector",target:"_blank",rel:"noopener noreferrer"};function M(I,B){const l=d("Tabs"),n=d("ExternalLinkIcon");return f(),b("div",null,[k,a(l,{id:"39",data:[{title:"Mac"}],"tab-id":"editing-and-deleting"},{tab0:i(({title:s,value:r,isActive:c})=>[w]),_:1}),y,a(l,{id:"76",data:[{title:"Mac"}],"tab-id":"editing-and-deleting"},{tab0:i(({title:s,value:r,isActive:c})=>[x]),_:1}),_,a(l,{id:"125",data:[{title:"Mac"}],"tab-id":"editing-and-deleting"},{tab0:i(({title:s,value:r,isActive:c})=>[C]),_:1}),v,e("p",null,[t("The whitespace commands are implemented in the "),e("a",A,[t("atom/whitespace"),a(n)]),t(" package. The settings for the whitespace commands are managed on the page for the "),T,t(" package.")]),D,e("p",null,[t("The brackets functionality is implemented in the "),e("a",S,[t("bracket-matcher"),a(n)]),t(" package. Like all of these packages, to change defaults related to bracket handling, or to disable it entirely, you can navigate to this package in the Settings view.")]),U,e("p",null,[t("The encoding selector is implemented in the "),e("a",L,[t("encoding-selector"),a(n)]),t(" package.")])])}const E=u(g,[["render",M],["__file","editing-and-deleting-text.html.vue"]]);export{E as default};
