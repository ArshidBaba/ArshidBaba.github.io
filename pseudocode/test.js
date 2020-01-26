var code = document.getElementById("hello-world-code").textContent;
var parentEl = document.body;
var options = {
    lineNumber: true
};
pseudocode.render(code, parentEl, options);