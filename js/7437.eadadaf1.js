(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[7437],{7437:(s,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var e=a(7875),n={class:"varlet-site-doc"},d=(0,e.uE)('<h1>IndexBar</h1><div class="card"><h3>Intro</h3><p>Hyperlinks to scroll on one page.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { IndexBar, IndexAnchor } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(IndexBar).use(IndexAnchor)\n</code></pre></div><div class="card"><h3>Basic Usage</h3><p>When you click the index bar, it will automatically jump to the corresponding <code>IndexAnchor</code> anchor position.</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-index-bar</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> <span class="hljs-attr">duration</span>=<span class="hljs-string">&quot;300&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-index-anchor</span> \n      <span class="hljs-attr">:index</span>=<span class="hljs-string">&quot;item&quot;</span> \n      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;var-index-anchor__example&quot;</span>\n    &gt;</span> \n      Title {{ item }} \n    <span class="hljs-tag">&lt;/<span class="hljs-name">var-index-anchor</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>{{ item }} Text<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>{{ item }} Text<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>{{ item }} Text<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-index-bar</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref, onMounted } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n    <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n      <span class="hljs-keyword">const</span> list = ref([])\n\n      onMounted(<span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">26</span>; i++) {\n          list.value.push(<span class="hljs-built_in">String</span>.fromCharCode(<span class="hljs-number">65</span> + i))\n        }\n      })\n\n      <span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {\n        <span class="hljs-built_in">console</span>.log(value)\n      }\n\n      <span class="hljs-keyword">return</span> {\n        list,\n        change\n      }\n    }\n  }\n</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3></div><div class="card"><h3>IndexBar Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>sticky</code></td><td>Whether to enable anchor sticky top</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>sticky-offset-top</code></td><td>Anchor offset top when sticky</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td><code>hide-list</code></td><td>Whether to hide anchor list</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code></td><td>z-index</td><td><em>string | number</em></td><td><code>1</code></td></tr><tr><td><code>highlight-color</code></td><td>Index character highlight color</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td><code>duration</code></td><td>Animation duration</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>IndexAnchor Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>index</code></td><td>Index</td><td><em>string | number</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3></div><div class="card"><h3>IndexBar Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Emitted when an index is clicked</td><td><code>index: number | string</code></td></tr><tr><td><code>change</code></td><td>Emitted when active index changed</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3></div><div class="card"><h3>IndexAnchor Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom index character</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><p>Use ref to get IndexBar instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>scrollTo</code></td><td>scroll to target element</td><td><code>index: number | string</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--index-bar-list-item-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--index-bar-list-item-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--index-bar-list-item-active-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--index-bar-list-item-height</code></td><td><code>14px</code></td></tr><tr><td><code>--index-bar-list-item-padding</code></td><td><code>0 10px</code></td></tr></tbody></table></div>',14);const l={render:function(s,t){return(0,e.wg)(),(0,e.j4)("div",n,[d])}}}}]);