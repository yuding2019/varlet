(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[5147],{5147:(s,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var l=t(7875),n={class:"varlet-site-doc"},e=(0,l.uE)('<h1>评分</h1><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Rate } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Rate)\n</code></pre></div><div class="card"><h3>基础评分</h3><p>默认显示样式。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span>/&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> score = ref(<span class="hljs-number">3</span>)\n\n    <span class="hljs-keyword">return</span> {\n      score\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>自定义评分总数</h3><p>通过<code>count</code>属性设置评分总数。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;8&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>自定义评分图标颜色</h3><p>通过<code>color</code>和<code>empty-color</code>属性设置选中和未选中时的颜色。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#9c27b0&quot;</span> <span class="hljs-attr">empty-color</span>=<span class="hljs-string">&quot;#d199da&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#e91e63&quot;</span> <span class="hljs-attr">empty-color</span>=<span class="hljs-string">&quot;#f48fb1&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#4caf50&quot;</span> <span class="hljs-attr">empty-color</span>=<span class="hljs-string">&quot;#a5d6a7&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#3f51b5&quot;</span> <span class="hljs-attr">empty-color</span>=<span class="hljs-string">&quot;#9fa8da&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>自定义评分图标样式</h3><p>通过<code>icon</code>和<code>empty-icon</code>属性设置选中和未选时的图标样式。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">empty-icon</span>=<span class="hljs-string">&quot;heart-outline&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">var-rate</span>&gt;</span>\n</code></pre></div><div class="card"><h3>自定义评分图标尺寸</h3><p>通过<code>size</code>属性设置评分图标的尺寸。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;14&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;16&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;18&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;20&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>自定义图标间隔</h3><p>通过<code>gap</code>属性设置评分之间的间隔。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:gap</span>=<span class="hljs-string">&quot;2&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:gap</span>=<span class="hljs-string">&quot;6&quot;</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:gap</span>=<span class="hljs-string">&quot;8&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>允许半图标</h3><p>通过<code>half</code>属性将评分设置为可半选，<code>half-icon</code>属性设置半选时的样式。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">half</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:count</span>=<span class="hljs-string">&quot;8&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">half-icon</span>=<span class="hljs-string">&quot;heart-half-full&quot;</span> <span class="hljs-attr">empty-icon</span>=<span class="hljs-string">&quot;heart-outline&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;red&quot;</span> <span class="hljs-attr">half</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">var-rate</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> score = ref(<span class="hljs-number">3.5</span>)\n\n    <span class="hljs-keyword">return</span> { score }\n  }\n}\n</code></pre></div><div class="card"><h3>禁用评分</h3><p>通过<code>disabled</code>属性将评分设置为禁止点击状态，<code>disabled-color</code>设置禁用时图标的颜色。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">disabled-color</span>=<span class="hljs-string">&quot;#bbbbbb&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>只读评分</h3><p>通过<code>readonly</code>属性将评分设置为只读状态。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">readonly</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>禁止使用水波纹</h3><p>通过把<code>ripple</code>属性设置为<code>false</code>来禁止使用水波纹。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> <span class="hljs-attr">:ripple</span>=<span class="hljs-string">&quot;false&quot;</span>/&gt;</span>\n</code></pre></div><div class="card"><h3>监听change事件</h3><p>通过调用<code>change</code>事件完成其他交互逻辑。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;score&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;handleChange&quot;</span>/&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> handleChange = <span class="hljs-function">(<span class="hljs-params">score</span>) =&gt;</span> {\n      Snackbar({\n        <span class="hljs-attr">content</span>: <span class="hljs-string">`click <span class="hljs-subst">${score}</span>`</span>,\n        <span class="hljs-attr">position</span>: <span class="hljs-string">&#39;top&#39;</span>\n      })\n    }\n\n    <span class="hljs-keyword">return</span> {\n      handleChange\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>字段校验</h3><p>通过传入一个校验器数组可以对值进行校验，校验器返回<code>true</code>则为校验通过。 以外的值将转换为文本作为用户提示。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-rate</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v &gt;= 3 || &#39;必须大于2&#39;]&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&#39;score&#39;</span> /&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>当前分数</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>count</code></td><td>评分总数</td><td><em>number | string</em></td><td><code>5</code></td></tr><tr><td><code>color</code></td><td>选中时图标的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>icon</code></td><td>选中整个图标时的图标样式</td><td><em>string</em></td><td><code>star</code></td></tr><tr><td><code>empty-color</code></td><td>未选中时图标的颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>empty-icon</code></td><td>未选中时图标的样式</td><td><em>string</em></td><td><code>star-outline</code></td></tr><tr><td><code>size</code></td><td>图标大小，默认单位为<code>px</code></td><td><em>number | string</em></td><td><code>20</code></td></tr><tr><td><code>gap</code></td><td>图标间隔，默认单位为<code>px</code></td><td><em>number | string</em></td><td><code>4</code></td></tr><tr><td><code>half</code></td><td>是否允许半选</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>half-icon</code></td><td>半选时图标的样式，只有在<code>half</code>为<code>true</code>时才有效</td><td><em>string</em></td><td><code>star-half-full</code></td></tr><tr><td><code>disabled</code></td><td>是否禁止评分</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled-color</code></td><td>禁止评分时图标的颜色，只有在<code>disabled</code>为<code>true</code>时才有效，优先级高于<code>color</code>、<code>empty-color</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>readonly</code></td><td>是否使用评分只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>是否使用水波纹</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>rules</code></td><td>验证规则，返回<code>true</code>表示验证通过，其余的值则转换为文本作为用户提示</td><td><em>Array&lt;(v: string | number) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>评分改变时触发</td><td><code>value: string | number</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--rate-primary-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--rate-disabled-color</code></td><td><code>#aaa</code></td></tr><tr><td><code>--rate-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--rate-action-padding</code></td><td><code>4px</code></td></tr></tbody></table></div>',18);const c={render:function(s,a){return(0,l.wg)(),(0,l.j4)("div",n,[e])}}}}]);