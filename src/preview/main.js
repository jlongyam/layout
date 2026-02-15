var title = document.getElementById('title');
var main = document.getElementById('main');
var result = document.getElementById('result');
var preview = document.getElementById('preview');

var code = {};
code.html = `
  <h1>Hi</h1>
`;

var snippet = {
  html: sourceCode({
    open: true,
    title: 'HTML',
    id: 'txt_html',
    content: stripInitial(code.html).trim()
  })
};

main.innerHTML += snippet.html;

window.addEventListener('load', function() {

  var txt_html = document.getElementById('txt_html');
  
  result.addEventListener('click', function() {
    writeToIframe('preview', contentHtml({
      body: txt_html.value
    })
  )});

});
