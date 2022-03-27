(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{529:function(t,s,a){"use strict";a.r(s);var e=a(5),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"http是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http是什么"}},[t._v("#")]),t._v(" HTTP是什么？")]),t._v(" "),a("p",[t._v("HTTP全称叫HyperText Transfer Protocol、"),a("strong",[t._v("超文本传输协议")]),t._v("。其中"),a("strong",[t._v("超文本")]),t._v("指代的是文本、超链接、音频、视频、图片等的统称，"),a("strong",[t._v("传输")]),t._v("指的是把一堆东西从一个点搬到另一个点，"),a("strong",[t._v("协议")]),t._v("有两个特点，第一点，必须要有两个或多个参与者，也就是“协”，第二点，协议是对参与者的一种行为约定和规范，也就是“议”。")]),t._v(" "),a("p",[t._v("综上所述，可以将HTTP的概念概括为："),a("strong",[t._v("HTTP是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范。")])]),t._v(" "),a("p",[t._v("HTTP的传输工作由底层的TCP/IP来负责，那HTTP主要负责做些什么呢？")]),t._v(" "),a("p",[t._v("那就要从它的"),a("strong",[t._v("报文结构（header+body）")]),t._v(" 讲起了，HTTP协议在规范文档详细定义了报文的格式，规定了组成部分、解析规则、处理策略等，可以在TCP/IP层之上实现连接控制、缓存管理、数据编码、内容协商等功能。")]),t._v(" "),a("h2",{attrs:{id:"请求行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求行"}},[t._v("#")]),t._v(" 请求行")]),t._v(" "),a("p",[t._v("请求行（request line）表示"),a("strong",[t._v("客户端想要如何操作服务器端的资源")]),t._v("。请求行 = 请求方法 + 请求目标 + 版本号，三个部分用空格来分隔，最后用CRLF换行表示结束。比如：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"状态行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态行"}},[t._v("#")]),t._v(" 状态行")]),t._v(" "),a("p",[t._v("状态行（status line）表示"),a("strong",[t._v("服务器响应的状态")]),t._v("。状态行 = 版本号 + 状态码 + 原因短语。也是用空格分隔，行尾用CRLF表示结束。比如：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OK")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"头部字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头部字段"}},[t._v("#")]),t._v(" 头部字段")]),t._v(" "),a("p",[t._v("请求头 = 请求行 + 头部字段集合，如下图：\n"),a("img",{attrs:{src:t.$withBase("/net/HTTP请求头.webp"),alt:"图片加载失败",title:"HTTP请求头"}})]),t._v(" "),a("p",[t._v("响应头 = 响应行 + 头部字段集合，如下图：\n"),a("img",{attrs:{src:t.$withBase("/net/HTTP响应头.webp"),alt:"图片加载失败",title:"HTTP响应头"}})]),t._v(" "),a("p",[t._v("头部字段是key-value的形式，key和value之间用“：”分隔，最后用CRLF换行表示字段结束。HTTP头字段比较灵活，可以添加自定义头，但需要注意：")]),t._v(" "),a("ol",[a("li",[t._v("字段名不区分大小写")]),t._v(" "),a("li",[t._v("字段名中不允许出现空格和下划线“_”")]),t._v(" "),a("li",[t._v("字段名后面必须紧接着“：”，不能有空格，而“：”后的字段值前可以有多个空格")]),t._v(" "),a("li",[t._v("字段的顺序没有意义")])]),t._v(" "),a("h2",{attrs:{id:"常用头字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用头字段"}},[t._v("#")]),t._v(" 常用头字段")]),t._v(" "),a("p",[t._v("HTTP的头字段可以分为四大类：")]),t._v(" "),a("ol",[a("li",[t._v("通用字段：既可以作请求头也可以作为响应头")]),t._v(" "),a("li",[t._v("请求字段：仅能出现在请求头，说明请求信息和额外的附加条件")]),t._v(" "),a("li",[t._v("响应字段：仅能出现在响应头中，补充说明响应报文的信息")]),t._v(" "),a("li",[t._v("实体字段：它实际上属于通用字段，但专门描述body的额外信息")])]),t._v(" "),a("p",[t._v("下面介绍几个常见的头字段：")]),t._v(" "),a("ol",[a("li",[t._v("Host字段。它属于请求字段，是唯一一个HTTP/1.1规范里要求"),a("strong",[t._v("必须出现")]),t._v("的字段。")]),t._v(" "),a("li",[t._v("User-Agent字段。它属于请求字段，使用一个字符串来描述发起的HTTP请求的客户端，服务器可以依据它来返回最合适此浏览器显示的页面。")]),t._v(" "),a("li",[t._v("Date字段。它属于通用字段，表示HTTP报文创建的时间，客户端可以使用这个时间再搭配其他字段决定缓存策略。")]),t._v(" "),a("li",[t._v("Server字段。它属于响应字段，告诉客户端当前正在提供Web服务的软件名称和版本号。")]),t._v(" "),a("li",[t._v("Content-Length。它属于实体字段，表示报文里body的长度，也就是请求头或响应头空行后面数据的长度。如果没有这个字段，则表示body是不定长的，需要使用分块（chunked）方式分段传输。")])])])}),[],!1,null,null,null);s.default=v.exports}}]);