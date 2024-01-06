var illegalChars =
        [
            "/", "\\", ":", "*", "?", "\"", "<", ">", "|"
        ]

    var forwardSlashes = [
        "∕",
        "̸",
        "／",
        "╱",
        "⧸",
    ];

    var backSlashes = [
        "⧵",
        "∖",
        "＼",
        "﹨",
        "⧹",
        "⧵",
    ]

    var colons = [
        "꞉",
        "：",
        "︓",
    ]

    var asterisks = [
        "＊",
    ]

    var questionMarks = [
        "？",
        "︖",
    ]

    var quotes = [
        "＂",
        "＇",
        "ʹ",
        "ʺ",
        "˝",
        "˶",
        "ˮ",
        "ײ",
        "״",
        "＂",
    ]

    var lessThan = [
        "≺",
        "＜",
    ]

    var greaterThan = [
        "≻",
        "＞",
    ]

    var pipes = [
        "ǀ",
        "｜",
        "⎜",
    ]

    var allChars = 
    {
        "Forward Slash": forwardSlashes,
        "Back Slash": backSlashes,
        "Colon": colons,
        "Asterisk": asterisks,
        "Question Mark": questionMarks,
        "Quote": quotes,
        "Less Than": lessThan,
        "Greater Than": greaterThan,
        "Pipe": pipes,
    }

    // same as above, but add each set of chars to a new group based on the key
    for (var key in allChars) {
        var charArray = allChars[key];
        var groupElement = document.createElement("div");
        groupElement.classList.add("characterGroup");
        groupElement.innerHTML = "<h2>" + key + "</h2>";
        document.getElementsByClassName("content-wrapper")[0].appendChild(groupElement);
        for (var i = 0; i < charArray.length; i++) {
            var char = charArray[i];
            var charElement = document.createElement("div");
            charElement.classList.add("char");
            charElement.innerHTML = char;
            charElement.setAttribute("onclick", "copyChar(this)");
            groupElement.appendChild(charElement);
        }
    }

    function copyChar(element) {
        var text = element.innerHTML;
        
        console.log(`Copying ${text} to clipboard`);
                
        changeAndResetText(element, "Copied!");
        copyToClipboard(text);
    }

    function changeAndResetText(element, text, timeout = 1000, className = "copied") {
        let originalText = element.innerHTML;
        element.innerHTML = text;
        element.classList.add(className);

        setTimeout(function () {
            console.log("Resetting text");
            element.innerHTML = originalText;
            element.classList.remove(className);
        }, timeout);
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(function () {
            console.log('Copying to clipboard was successful!');
        }, function (err) {
            console.error('Could not copy text: ', err);
        });
    }