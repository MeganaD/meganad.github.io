---
layout: post
title: Syntax highlight on Jekyll
subtitle: Rouge Syntax Highlighter
tag: [jekyll, theme, Rouge]
published: true
---

기왕 local에 jekyll을 설치했으니 code theme 색상을 바꿔보자.  
현재 jekyll은 [rouge](http://rouge.jneen.net/)라는 highlighter를 권장하고 있다.  
jekyll 에서 syntax highlight의 색상을 바꾸려면 pygments css 형태의 파일을 첨부하면 된다.  
<https://jekyllrb.com/docs/liquid/tags/#stylesheets-for-syntax-highlighting>참고  
~~웃긴 게 rouge 스타일 미리보기가 없다. 쓰지 말라는 pygments의 갤러리로 연결해놨다...~~   
rouge의 css는 이상하게 검색이 안되서 결국 직접 생성해서 썼다.  
rouge 공식페이지에 설명이 거의 없는데 [깃헙](https://github.com/jneen/rouge)에 가면 사용법이 나온다.

터미널에서 `rougify help style`을 실행하면 사용가능한 theme 목록을 확인할 수 있다.  
이다.
>##### rouge의 버전 3.3.0 기준으로 사용 가능 한 theme 목록
>###### base16, base16.dark, base16.light, base16.monokai, base16.monokai.dark, base16.monokai.light, base16.solarized, base16.solarized.dark, base16.solarized.light, colorful, github, gruvbox, gruvbox.dark, gruvbox.light, igorpro, molokai, monokai, monokai.sublime, pastie, thankful_eyes, tulip  

원하는 theme을 `rougify style [theme] > [file].css` 명령으로 css 파일을 생성한다.  
사용 중인 jekyll theme에 맞게 css파일을 위치시키면 적용 끝.  
~~현재 사용중인 theme `rougify style base16.light > css/pygment_highlights.css`~~



#### 참고로 아래는 [dracula theme의 pygments 버전](https://github.com/dracula/pygments)이다. 각 요소의 의미가 잘 정리 되어있다.  
<details><summary>dracula pygments css</summary>
{% highlight css  %}
.highlight .hll { background-color: #f1fa8c }
.highlight  { background: #282a36; color: #f8f8f2 }
.highlight .c { color: #6272a4 } /* Comment */
.highlight .err { color: #f8f8f2 } /* Error */
.highlight .g { color: #f8f8f2 } /* Generic */
.highlight .k { color: #ff79c6 } /* Keyword */
.highlight .l { color: #f8f8f2 } /* Literal */
.highlight .n { color: #f8f8f2 } /* Name */
.highlight .o { color: #ff79c6 } /* Operator */
.highlight .x { color: #f8f8f2 } /* Other */
.highlight .p { color: #f8f8f2 } /* Punctuation */
.highlight .ch { color: #6272a4 } /* Comment.Hashbang */
.highlight .cm { color: #6272a4 } /* Comment.Multiline */
.highlight .cp { color: #ff79c6 } /* Comment.Preproc */
.highlight .cpf { color: #6272a4 } /* Comment.PreprocFile */
.highlight .c1 { color: #6272a4 } /* Comment.Single */
.highlight .cs { color: #6272a4 } /* Comment.Special */
.highlight .gd { color: #8b080b } /* Generic.Deleted */
.highlight .ge { color: #f8f8f2; text-decoration: underline } /* Generic.Emph */
.highlight .gr { color: #f8f8f2 } /* Generic.Error */
.highlight .gh { color: #f8f8f2; font-weight: bold } /* Generic.Heading */
.highlight .gi { color: #f8f8f2; font-weight: bold } /* Generic.Inserted */
.highlight .go { color: #44475a } /* Generic.Output */
.highlight .gp { color: #f8f8f2 } /* Generic.Prompt */
.highlight .gs { color: #f8f8f2 } /* Generic.Strong */
.highlight .gu { color: #f8f8f2; font-weight: bold } /* Generic.Subheading */
.highlight .gt { color: #f8f8f2 } /* Generic.Traceback */
.highlight .kc { color: #ff79c6 } /* Keyword.Constant */
.highlight .kd { color: #8be9fd; font-style: italic } /* Keyword.Declaration */
.highlight .kn { color: #ff79c6 } /* Keyword.Namespace */
.highlight .kp { color: #ff79c6 } /* Keyword.Pseudo */
.highlight .kr { color: #ff79c6 } /* Keyword.Reserved */
.highlight .kt { color: #8be9fd } /* Keyword.Type */
.highlight .ld { color: #f8f8f2 } /* Literal.Date */
.highlight .m { color: #bd93f9 } /* Literal.Number */
.highlight .s { color: #f1fa8c } /* Literal.String */
.highlight .na { color: #50fa7b } /* Name.Attribute */
.highlight .nb { color: #8be9fd; font-style: italic } /* Name.Builtin */
.highlight .nc { color: #50fa7b } /* Name.Class */
.highlight .no { color: #f8f8f2 } /* Name.Constant */
.highlight .nd { color: #f8f8f2 } /* Name.Decorator */
.highlight .ni { color: #f8f8f2 } /* Name.Entity */
.highlight .ne { color: #f8f8f2 } /* Name.Exception */
.highlight .nf { color: #50fa7b } /* Name.Function */
.highlight .nl { color: #8be9fd; font-style: italic } /* Name.Label */
.highlight .nn { color: #f8f8f2 } /* Name.Namespace */
.highlight .nx { color: #f8f8f2 } /* Name.Other */
.highlight .py { color: #f8f8f2 } /* Name.Property */
.highlight .nt { color: #ff79c6 } /* Name.Tag */
.highlight .nv { color: #8be9fd; font-style: italic } /* Name.Variable */
.highlight .ow { color: #ff79c6 } /* Operator.Word */
.highlight .w { color: #f8f8f2 } /* Text.Whitespace */
.highlight .mb { color: #bd93f9 } /* Literal.Number.Bin */
.highlight .mf { color: #bd93f9 } /* Literal.Number.Float */
.highlight .mh { color: #bd93f9 } /* Literal.Number.Hex */
.highlight .mi { color: #bd93f9 } /* Literal.Number.Integer */
.highlight .mo { color: #bd93f9 } /* Literal.Number.Oct */
.highlight .sa { color: #f1fa8c } /* Literal.String.Affix */
.highlight .sb { color: #f1fa8c } /* Literal.String.Backtick */
.highlight .sc { color: #f1fa8c } /* Literal.String.Char */
.highlight .dl { color: #f1fa8c } /* Literal.String.Delimiter */
.highlight .sd { color: #f1fa8c } /* Literal.String.Doc */
.highlight .s2 { color: #f1fa8c } /* Literal.String.Double */
.highlight .se { color: #f1fa8c } /* Literal.String.Escape */
.highlight .sh { color: #f1fa8c } /* Literal.String.Heredoc */
.highlight .si { color: #f1fa8c } /* Literal.String.Interpol */
.highlight .sx { color: #f1fa8c } /* Literal.String.Other */
.highlight .sr { color: #f1fa8c } /* Literal.String.Regex */
.highlight .s1 { color: #f1fa8c } /* Literal.String.Single */
.highlight .ss { color: #f1fa8c } /* Literal.String.Symbol */
.highlight .bp { color: #f8f8f2; font-style: italic } /* Name.Builtin.Pseudo */
.highlight .fm { color: #50fa7b } /* Name.Function.Magic */
.highlight .vc { color: #8be9fd; font-style: italic } /* Name.Variable.Class */
.highlight .vg { color: #8be9fd; font-style: italic } /* Name.Variable.Global */
.highlight .vi { color: #8be9fd; font-style: italic } /* Name.Variable.Instance */
.highlight .vm { color: #8be9fd; font-style: italic } /* Name.Variable.Magic */
.highlight .il { color: #bd93f9 } /* Literal.Number.Integer.Long */
{% endhighlight %}
</details>  
<br/>