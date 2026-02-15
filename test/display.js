var src = document.currentScript.getAttribute('data-src');
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = `${src}/preview/style.css`;
document.head.appendChild(link);

var script = document.createElement('script');
script.src = `${src}/preview/script.js`;
document.head.appendChild(script);

window.addEventListener('load', function () {

  function innerHTML(title = 'Demo') {
    let txt = `
    <header>
      <h1 title="title">✨ ${title}</h1>
    </header>
    <main id="main"></main>
    <footer>
      <button id="result">⚡ RESULT &nbsp;</button>
      <iframe id="preview"></iframe>
    </footer>`
      ;
    return txt;
  }


  document.body.innerHTML = innerHTML('Test');
  var title = document.getElementById('title');
  var main = document.getElementById('main');
  var result = document.getElementById('result');
  var preview = document.getElementById('preview');

  function displayHtml(content) {
    var snippet = {
      html: sourceCode({
        open: true,
        title: 'HTML',
        id: 'txt_html',
        content: stripInitial(content).trim()
      })
    };
    main.innerHTML += snippet.html;
    var txt_html = document.getElementById('txt_html');
    function previewHtml() {
      writeToIframe('preview', contentHtml({
        link: `${src}/index.css`,
        body: txt_html.value
      }))
    }
    result.addEventListener('click', previewHtml);
    previewHtml();
  }
  window.displayHtml = displayHtml;
})





