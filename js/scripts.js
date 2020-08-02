var btns = document.getElementsByClassName('buttonsMain');
var data = document.getElementById('data');
var closeBtn = document.getElementById('close');

function infoAlert() {
    dynAlert("To copy code simply click on text!");
}

function dynAlert(x) {
    $("#dialog").dialog({
        closeText: "X",
        autoOpen: false,
        appendTo: "body",
        resizable: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "blind",
            duration: 1000
        },
        classes: {
            "ui-dialog": "highlight"
        }

    });
    $("#dialog").css('visibility', 'visible');
    $("#dialog").html("<p>" + x + "</p>");
    $("#dialog").dialog("open");

}



//form
function createFormIp() {
    $formIp = $('<lable for="formIp" class="formSelector">Number of inputs:</lable><input type="text" id="formIp" class="formSelector" />').appendTo('body');
    $formSub = $('<button type="submit" id="formSubmit" class="formSelector" onclick="getVal()">Get Code for Form!</button>').appendTo('body');
    // var formIp = $formIp.value;
}
// var formIp = document.getElementById('formIp');
var formSub = document.getElementById('formSubmit');
var formSel = document.getElementsByClassName('formSelector');
//form
function copy() {
    if (document.getElementById('modForm') != null)
        return false;
    else {
        var range = document.createRange();
        range.selectNode(document.getElementById("data"));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges(); // to deselect
        dynAlert("Code is Copied!");
    }
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

function clearTableIp() {
    $(".tableSelector").remove();
}

function showData() {
    data.style.display = "block";
}

function closeData() {
    console.log("close");
    showButtons();
    hideClose();
    clearFormIp();
    clearTableIp();
    $("#dialog").dialog("close");
    $("#data").css('display', 'none');
    data.style.display = "none";
    $("#formIp").remove();
    $("#formSubmit").remove();
    $(".formSelector").remove();
}

function starterHTML() {
    console.log("inside");
    clearButtons();
    showClose();
    showData();
    data.innerHTML = "&lt;!doctype html&gt; <br> &lt;html lang=&quot;en&quot;&gt;<br>&lt;head&gt;<br>&emsp;&emsp;&emsp;&emsp;  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;<br><br>&emsp;&emsp;&emsp;&emsp;&lt;meta charset=&quot;utf-8&quot;&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;title&gt;HTML generator&lt;/title&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;meta name=&quot;description&quot; content=&quot;HTML generator&quot;&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;meta name=&quot;author&quot; content=&quot;Viren-vii&quot;&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;link rel=&quot;stylesheet&quot; href=&quot;css/styles.css&quot;&gt;<br>&lt;/head&gt;<br>&lt;body&gt;<br>&emsp;&emsp;&emsp;&emsp;&lt;script src=&quot;js/scripts.js&quot;&gt;&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;    ";
    infoAlert();
}

function createForm() {
    clearButtons();
    showClose();
    visibleFormIp();
    createFormIp();
}

function getVal() {
    var IP = $("#formIp").val();
    console.log(typeof(IP) + IP);
    if (IP > 100 || IP <= 0 || isNaN(IP)) {
        dynAlert(" Don't try to mess with my code! Provide proper input!");
        return false;
    }
    showData();
    for (i = 0; i < IP; i++) {
        console.log("hello" + i);
    }
    var code = "";
    for (i = 1; i <= IP; i++) {
        code += "&lt;lable for=&quot;input" + i + "&quot;&gt;Input" + i + ":&lt;/lable&gt;<br>&lt;input type=&quot;text&quot; id=&quot;input" + i + "&quot; name=&quot;input" + i + "&quot; /&gt;&lt;br&gt;<br>";
    }
    data.innerHTML = code;
    infoAlert();


    // $formMod = $('<button type="submit" id="modForm" class="formSelector" onclick="modifyForm()" >MODIFY</button>').appendTo('body');
}

// function modifyForm() {
//     var IP = formIp.value;
//     if (IP > 100) {
//         alert("Hey! Stop messing okay? You're not gonna need such long form!");
//         return false;
//     }
//     showData();
//     for (i = 0; i < IP; i++) {
//         console.log("helloNew" + i);
//     }
//     var code = "";
//     for (i = 1; i <= IP; i++) {
//         code += "<input id=&quot;IP" + i + "&quot; class=&quot;IP&quot; value=&quot;input&quot;>:<input type=&quot;text&quot; id=&quot;input" + i + "&quot; name=&quot;input1&quot; /><br>";
//     }
//     // code += "<button id=&quot;getNewCode&quot; class=&quot;formSelector&quot; onclick=&quot;pushNewCodeToData()&quot;>Get new code!</button>"

//     data.innerHTML = code;
//     $("#modForm").hide();
//     $newCode = $('<button type="submit" id="getNew" class="formSelector" onclick="pushNewCodeToData()" >Get New Code</button>').appendTo('#data');
// }

// function pushNewCodeToData() {

// } 
function createTable() {
    clearButtons();
    showClose();
    $rows = $('<lable for="rowsIp" class="tableSelector">Rows:</lable> <input type="text" id="rowsIp" class="tableSelector" value=""/><br class="tableSelector">').appendTo('body');
    $cols = $('<lable for="colsIp" class="tableSelector">Columns:</lable> <input type="text" id="colsIp" class="tableSelector" value=""/><br class="tableSelector">').appendTo('body');
    $submitTableIp = $('<button type="submit" id="submitTableIp" class="tableSelector" onclick="makeTable()">Get Code for Table!</button>').appendTo('body');
}

function makeTable() {
    var rows = $('#rowsIp').val();
    var cols = $('#colsIp').val();
    console.log(typeof(rows));
    if (rows <= 0 || cols <= 0 || isNaN(rows) || isNaN(cols)) {
        dynAlert(" Don't try to mess with my code! Provide proper input!");
        return false;
    }
    showData();
    var code = "&lt;table border=&quot;1&quot;&gt;<br>";
    for (i = 1; i <= rows; i++) {
        code += "&emsp;&emsp;&emsp;&emsp;&lt;tr&gt;<br>"
        for (j = 1; j <= cols; j++) {
            if (i == 1) {
                code += "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;th&gt;HEADING" + j + "&lt;/th&gt;<br>"
            } else {
                code += "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&lt;td&gt;data" + i + "x" + j + "&lt;/td&gt;<br>"
            }

        }
        code += "&emsp;&emsp;&emsp;&emsp;&lt;/tr&gt;<br>"
    }
    code += "&lt;/table&gt;";
    $("#data").html(code);
    infoAlert();


}
//"+i+"
