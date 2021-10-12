(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{653:function(e,t,a){"use strict";a.r(t);var s=a(5),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"yocto-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yocto-queue"}},[e._v("#")]),e._v(" yocto-queue "),a("a",{attrs:{href:"https://bundlephobia.com/result?p=yocto-queue",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://badgen.net/bundlephobia/minzip/yocto-queue",alt:""}}),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("p",[e._v("Tiny queue data structure")])]),e._v(" "),a("p",[e._v("You should use this package instead of an array if you do a lot of "),a("code",[e._v("Array#push()")]),e._v(" and "),a("code",[e._v("Array#shift()")]),e._v(" on large arrays, since "),a("code",[e._v("Array#shift()")]),e._v(" has "),a("a",{attrs:{href:"https://medium.com/@ariel.salem1989/an-easy-to-use-guide-to-big-o-time-complexity-5dcf4be8a444#:~:text=O(N)%E2%80%94Linear%20Time",target:"_blank",rel:"noopener noreferrer"}},[e._v("linear time complexity"),a("OutboundLink")],1),e._v(" "),a("em",[e._v("O(n)")]),e._v(" while "),a("code",[e._v("Queue#dequeue()")]),e._v(" has "),a("a",{attrs:{href:"https://medium.com/@ariel.salem1989/an-easy-to-use-guide-to-big-o-time-complexity-5dcf4be8a444#:~:text=O(1)%20%E2%80%94%20Constant%20Time",target:"_blank",rel:"noopener noreferrer"}},[e._v("constant time complexity"),a("OutboundLink")],1),e._v(" "),a("em",[e._v("O(1)")]),e._v(". That makes a huge difference for large arrays.")]),e._v(" "),a("blockquote",[a("p",[e._v("A "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Queue_(abstract_data_type)",target:"_blank",rel:"noopener noreferrer"}},[e._v("queue"),a("OutboundLink")],1),e._v(" is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue. A queue works based on the first-in, first-out ("),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)",target:"_blank",rel:"noopener noreferrer"}},[e._v("FIFO"),a("OutboundLink")],1),e._v(") principle.")])]),e._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ npm install yocto-queue\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" Queue "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'yocto-queue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" queue "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Queue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nqueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("enqueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'🦄'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nqueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("enqueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'🌈'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//=> 2")]),e._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v("queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//=> '🦄 🌈'")]),e._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("dequeue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//=> '🦄'")]),e._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("dequeue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//=> '🌈'")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br")])]),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),a("h3",{attrs:{id:"queue-new-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queue-new-queue"}},[e._v("#")]),e._v(" "),a("code",[e._v("queue = new Queue()")])]),e._v(" "),a("p",[e._v("The instance is an "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Iterable")]),a("OutboundLink")],1),e._v(", which means you can iterate over the queue front to back with a “for…of” loop, or use spreading to convert the queue to an array. Don't do this unless you really need to though, since it's slow.")]),e._v(" "),a("h4",{attrs:{id:"enqueue-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enqueue-value"}},[e._v("#")]),e._v(" "),a("code",[e._v(".enqueue(value)")])]),e._v(" "),a("p",[e._v("Add a value to the queue.")]),e._v(" "),a("h4",{attrs:{id:"dequeue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dequeue"}},[e._v("#")]),e._v(" "),a("code",[e._v(".dequeue()")])]),e._v(" "),a("p",[e._v("Remove the next value in the queue.")]),e._v(" "),a("p",[e._v("Returns the removed value or "),a("code",[e._v("undefined")]),e._v(" if the queue is empty.")]),e._v(" "),a("h4",{attrs:{id:"clear"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[e._v("#")]),e._v(" "),a("code",[e._v(".clear()")])]),e._v(" "),a("p",[e._v("Clear the queue.")]),e._v(" "),a("h4",{attrs:{id:"size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[e._v("#")]),e._v(" "),a("code",[e._v(".size")])]),e._v(" "),a("p",[e._v("The size of the queue.")]),e._v(" "),a("h2",{attrs:{id:"related"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related"}},[e._v("#")]),e._v(" Related")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/sindresorhus/quick-lru",target:"_blank",rel:"noopener noreferrer"}},[e._v("quick-lru"),a("OutboundLink")],1),e._v(" - Simple “Least Recently Used” (LRU) cache")])])])}),[],!1,null,null,null);t.default=n.exports}}]);