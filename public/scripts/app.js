(function application () {

  "use strict";

	var aliasTextInput = window.document.createElement("input"),
    aliasUrlInput = window.document.createElement("input"),
    appContainer = window.document.getElementsByTagName("body")[0];

  aliasTextInput.type = "text";
  aliasTextInput.placeholder = "Placeholder Text";
  aliasUrlInput.type = "url";
  aliasUrlInput.placeholder = "http://";

  appContainer.appendChild(aliasTextInput);
  appContainer.appendChild(aliasUrlInput);

}());

var messages = {
    init: "Start."
};

window.console.log(messages.init);
