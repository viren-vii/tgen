export { clearButtons, showClose, hideClose, closeData }
var btns = document.getElementsByClassName('buttonsMain');
var data = document.getElementById('data');
var closeBtn = document.getElementById('close');

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

function closeData() {
    console.log("close");
    showButtons();
    hideClose();
    clearFormIp();
    data.innerHTML = "";
    data.style.display = "none";
    // document.getElementById('starterHTML').style.display = "block";
    // document.getElementById('createForm').style.display = "block";

}

function starterHTML() {
    console.log("inside");
    clearButtons();
    showClose();
    data.style.display = "block";
    data.innerHTML = "&lt;!doctype html&gt; <br> &lt;html lang=&quot;en&quot;&gt;<br>&lt;head&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;meta charset=&quot;utf-8&quot;&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;title&gt;HTML generator&lt;/title&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;meta name=&quot;description&quot; content=&quot;HTML generator&quot;&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;meta name=&quot;author&quot; content=&quot;Viren-vii&quot;&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;link rel=&quot;stylesheet&quot; href=&quot;css/styles.css&quot;&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;script src=&quot;js/scripts.js&quot;&gt;&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;    ";

}