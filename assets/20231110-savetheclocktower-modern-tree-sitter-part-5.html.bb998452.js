const e=JSON.parse('{"key":"v-168f28ae","path":"/blog/20231110-savetheclocktower-modern-tree-sitter-part-5.html","title":"Modern Tree-sitter, part 5: injections","lang":"en-US","frontmatter":{"title":"Modern Tree-sitter, part 5: injections","author":"savetheclocktower","date":"2023-11-10T00:00:00.000Z","category":["dev"],"tag":["modernization","tree-sitter"]},"excerpt":"<p>One annoying thing that software developers do is insist on writing in <em>more than one language at once</em>. Web developers are espeically obnoxious about this \u2014 routinely, for instance, putting CSS inside their HTML, or HTML inside their JavaScript, or CSS inside their HTML inside their JavaScript.</p>\\n<p>Code editors like Pulsar need to roll with this, so today we\u2019ll talk about how the modern Tree-sitter system handles what we call <em>injections</em>.</p>\\n","headers":[{"level":2,"title":"A mental model for injections","slug":"a-mental-model-for-injections","link":"#a-mental-model-for-injections","children":[{"level":3,"title":"Language layers","slug":"language-layers","link":"#language-layers","children":[]}]},{"level":2,"title":"How Tree-sitter envisions injections","slug":"how-tree-sitter-envisions-injections","link":"#how-tree-sitter-envisions-injections","children":[]},{"level":2,"title":"How Pulsar implements injections","slug":"how-pulsar-implements-injections","link":"#how-pulsar-implements-injections","children":[{"level":3,"title":"How does it know which language to use?","slug":"how-does-it-know-which-language-to-use","link":"#how-does-it-know-which-language-to-use","children":[]}]},{"level":2,"title":"Architecture","slug":"architecture","link":"#architecture","children":[{"level":3,"title":"Challenges","slug":"challenges","link":"#challenges","children":[]}]},{"level":2,"title":"Strange injection tricks","slug":"strange-injection-tricks","link":"#strange-injection-tricks","children":[{"level":3,"title":"\u201CRedaction\u201D in injections","slug":"redaction-in-injections","link":"#redaction-in-injections","children":[]},{"level":3,"title":"Macros in Rust/C/C++","slug":"macros-in-rust-c-c","link":"#macros-in-rust-c-c","children":[]},{"level":3,"title":"Injecting highlighting for URLs and TODOs","slug":"injecting-highlighting-for-urls-and-todos","link":"#injecting-highlighting-for-urls-and-todos","children":[]},{"level":3,"title":"Markdown and front matter","slug":"markdown-and-front-matter","link":"#markdown-and-front-matter","children":[]}]},{"level":2,"title":"Next time","slug":"next-time","link":"#next-time","children":[]}],"git":{"updatedTime":1699689463000,"contributors":[{"name":"Andrew Dupont","email":"github@andrewdupont.net","commits":6}]},"readingTime":{"minutes":16.04,"words":4812},"filePathRelative":"blog/20231110-savetheclocktower-modern-tree-sitter-part-5.md","localizedDate":"November 10, 2023"}');export{e as data};
