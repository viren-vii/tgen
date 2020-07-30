var btns = document.getElementsByClassName('buttonsMain');
var data = document.getElementById('data');
var closeBtn = document.getElementById('close');
//form
var formIp = document.getElementById('formIp');
var formSub = document.getElementById('formSubmit');
var formSel = document.getElementsByClassName('formSelector');
//form
function copy() {
    var range = document.createRange();
    range.selectNode(document.getElementById("data"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
    alert("Code is Copied!");
}

function clearButtons() {
    for (btn of btns) {
        btn.style.display = "none";
    }
}

function showClose() {
    closeBtn.style.visibility = "visible";
}

function hideClose() {
    closeBtn.style.visibility = "hidden";
}

function showButtons() {
    for (btn of btns) {
        btn.style.display = "block";
    }
}

function visibleFormIp() {
    for (ip of formSel) {
        ip.style.display = "block";
    }
}

function clearFormIp() {
    for (ip of formSel) {
        ip.style.display = "none";
    }
}

function showData() {
    data.style.display = "block";

}

function closeData() {
    console.log("close");
    showButtons();
    hideClose();
    clearFormIp();
    data.innerHTML = "";
    data.style.display = "none";
}

function starterHTML() {
    console.log("inside");
    clearButtons();
    showClose();
    showData();
    data.innerHTML = "&lt;!doctype html&gt; <br> &lt;html lang=&quot;en&quot;&gt;<br>&lt;head&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;meta charset=&quot;utf-8&quot;&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;title&gt;HTML generator&lt;/title&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;meta name=&quot;description&quot; content=&quot;HTML generator&quot;&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;meta name=&quot;author&quot; content=&quot;Viren-vii&quot;&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;link rel=&quot;stylesheet&quot; href=&quot;css/styles.css&quot;&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;script src=&quot;js/scripts.js&quot;&gt;&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;    ";

}

function createForm() {
    clearButtons();
    showClose();
    visibleFormIp();
}

function getVal() {
    var IP = formIp.value;
    showData();
    for (i = 0; i < IP; i++) {
        console.log("hello" + i);
    }
    var code = "";
    for (i = 1; i <= IP; i++) {
        code += "&lt;lable for=&quot;input" + i + "&quot;&gt;Input" + i + ":&lt;/lable&gt;<br>&lt;input type=&quot;text&quot; id=&quot;input" + i + "&quot; name=&quot;input" + i + "&quot; /&gt;<br>";
    }
    data.innerHTML = code;
}