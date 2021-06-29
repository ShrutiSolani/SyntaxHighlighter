function highlight(){
    var ucode = document.getElementById('usercode').value;
    console.log(ucode);
    var language = document.getElementById('userlanguage').value;
    console.log(language);
    var str = "language-"+language;
    console.log(str);
    document.getElementById('hcode').className = str;

        var x = ucode.replaceAll(/</ig, "&lt;");
        var y = x.replace(/>/ig, "&gt;");
        document.getElementById('hcode').innerHTML = y;
   
    var utheme = document.getElementById('usertheme').value;
    var link = document.createElement('link'); 

    link.rel = 'stylesheet';
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.0/styles/" + utheme + ".min.css"; 


document.getElementsByTagName('HEAD')[0].appendChild(link); 
    hljs.highlightAll();
}


window.onload=function(){
    var clipboard = new ClipboardJS('.btn');
}


    

supported_languages = ["Bash",
"C",
"C#",
"C++",
"CSS",
"Diff",
"Go",
"HTML",
"JSON",
"Java",
"JavaScript",
"Kotlin",
"Less",
"Lua",
"Makefile",
"Markdown",
"Objective-C",
"PHP",
"PHP Template",
"Perl",
"Plain text",
"Python",
"Python REPL",
"R",
"Ruby",
"Rust",
"SCSS",
"SQL",
"Shell Session",
"Swift",

"TypeScript",
"Visual Basic .NET",
"YAML",
"XML"
];

aliases = ["bash",
"c",
"csharp",
"cpp",
"css",
"diff",
"go",
"html",
"json",
"java",
"javascript",
"kotlin",
"less",
"lua",
"makefile",
"markdown",
"objectivec",
"php",
"perl",
"plaintext",
"python",
"python",
"r",
"ruby",
"rust",
"scss",
"sql",
"shell",
"swift",
"typescript",
"vbnet",
"yml",
"xml"
];

var select = document.getElementById("userlanguage"); 
for(var i = 0; i < supported_languages.length; i++) {
    var el = document.createElement("option");
    el.textContent = supported_languages[i];
    el.value = aliases[i];
    select.appendChild(el);
}


themes = [
    "a11y-dark",
"a11y-light",
"agate",
"an-old-hope",
"androidstudio",
"arduino-light",
"arta",
"ascetic",
"atom-one-dark-reasonable",
"atom-one-dark",
"atom-one-light",
"brown-paper",
"brown-papersq.png",
"Unify style file names to dash-separated",
"codepen-embed",
"color-brewer",
"dark",
"default",
"devibeans",
"docco",
"far",
"foundation",
"github-dark-dimmed",
"github-dark",
"github",
"gml",
"googlecode",
"gradient-dark",
"gradient-light",
"grayscale",
"enh(multi-class) use hybrid scope approach",
"hybrid",
"ir-black",
"isbl-editor-dark",
"isbl-editor-light",
"kimbie-dark",
"kimbie-light",
"lightfair",
"lioshi",
"magula",
"mono-blue",
"monokai-sublime",
"monokai",
"night-owl",
"nnfx-dark",
"nnfx-light",
"nord",
"obsidian",
"paraiso-dark",
"paraiso-light",
"pojoaque",
"purebasic",
"qtcreator-dark",
"qtcreator-light",
"rainbow",
"routeros",
"school-book",
"shades-of-purple",
"srcery",
"stackoverflow-dark",
"stackoverflow-light",
"sunburst",
"tomorrow-night-blue",
"tomorrow-night-bright",
"vs",
"vs2015",
"xcode",
"xt256"
];


var select = document.getElementById("usertheme"); 
for(var i = 0; i < themes.length; i++) {
    var el = document.createElement("option");
    el.textContent = themes[i];
    el.value = themes[i];
    select.appendChild(el);
}
