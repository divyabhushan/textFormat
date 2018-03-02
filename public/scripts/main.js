CF.main = (function() {
  // WORKSPACE
  var formatsInput = document.querySelector(".formatfield__input");
  var hotContainer = document.querySelector(".formatcases__beforetable");
  var afterColumn = document.querySelector("#aftercol");
  var afterColumnCell = document.querySelector("#aftercol td");
  var allAfterColumnCells = document.querySelectorAll("#aftercol td > div");

  formatsInput.focus();
  formatsInput.value = CF.presets["number-preset"].formatCode;
  CF.hotInstance = new Handsontable(hotContainer, {
    data: CF.presets["number-preset"].cases,
    width: afterColumn.offsetWidth,
    stretchH: "all",
    rowHeights: afterColumnCell.offsetHeight,
    maxRows: CF.presets["number-preset"].cases.length,
    maxCols: 1
  });

  updateAllExamples();

  document.onkeyup = function(e) {
    if (e.target === formatsInput) {
      updateAllExamples();
    } else if (e.target.classList.contains("handsontableInput")) {
      var currentRow = document.querySelector(".handsontable .current")
        .parentElement;

      updateOneExample(
        e.target.value,
        allAfterColumnCells[currentRow.rowIndex]
      );
    } else if (e.key === "Backspace" || e.key === "Delete") {
      updateAllExamples();
    }
  };

  function updateAllExamples() {
    var allBeforeEls = document.querySelectorAll("#beforecol td");
    var allAfterEls = document.querySelectorAll("#aftercol td > div");
    for (var i = 0; i < allBeforeEls.length; i++) {
      updateOneExample(allBeforeEls[i].textContent, allAfterEls[i]);
    }
  }

  function updateOneExample(beforeText, afterEl) {
    var formatCode = formatsInput.value;
    var formattedText;

    if (beforeText.trim() === "") {
      afterEl.innerHTML = "";
    } else {
      var beforeTextNumber = Number(beforeText);

      try {
        if (isNaN(beforeTextNumber)) {
          formattedText = SSF.format(formatCode, beforeText);
        } else {
          formattedText = SSF.format(formatCode, beforeTextNumber);
        }
        afterEl.innerHTML = formattedText.trim() === "" ? "" : formattedText;
      } catch (e) {
        afterEl.innerHTML = e;
      }
    }
  }

  // PRESETS & EXAMPLES
  var presetAndExampleBtns = document.querySelectorAll(".preset, .example");
  var leftpane = document.querySelector(".l-leftpane");
  var rightpane = document.querySelector(".l-rightpane");
  var STICKY_OFFSEST = 53;

  window.onresize = function() {
    CF.hotInstance.updateSettings({ width: afterColumn.offsetWidth });
  };

  for (var i = 0; i < presetAndExampleBtns.length; i++) {
    presetAndExampleBtns[i].addEventListener("click", populateApp);
  }

  function populateApp(event) {
    var presetData = CF.presets[event.currentTarget.id];
    var referenceAnchor = document.getElementById(presetData.refAnchor);
    var exampleAnchor = document.getElementById(presetData.exAnchor);

    if (referenceAnchor) {
      leftpane.scrollTop = referenceAnchor.offsetTop - STICKY_OFFSEST;
    }
    if (exampleAnchor) {
      rightpane.scrollTop = exampleAnchor.offsetTop - STICKY_OFFSEST;
    }

    formatsInput.focus();
    formatsInput.value = presetData.formatCode;
    CF.hotInstance.updateSettings({ data: presetData.cases });
    updateAllExamples();
  }

  // INFOBOX
  var infoIconButtons = document.querySelectorAll(".info-icon");
  var infoboxCloseButton = document.querySelector(".infobox__close");
  infoboxCloseButton.addEventListener("click", closeInfobox);

  for (var i = 0; i < infoIconButtons.length; i++) {
    infoIconButtons[i].addEventListener("click", toggleInfobox);
  }

  function toggleInfobox(e) {
    var isInfoboxOpen = !!document.querySelector(".infobox--visible");
    var infoKey = e.target.id.split("info-")[1];
    var infoContent = CF.info[infoKey];

    if (isInfoboxOpen) {
      closeInfobox();
    } else {
      document.querySelector(".infobox__content").innerHTML = infoContent;
      document.querySelector(".infobox").classList.add("infobox--visible");
    }
  }
  function closeInfobox() {
    document
      .querySelector(".infobox--visible")
      .classList.remove("infobox--visible");
  }

  // TAKEOVERS
  var takeoverCloseButtons = document.querySelectorAll(".takeover__close");
  var aboutLink = document.querySelector("#about");
  var missingThingsLink = document.querySelector("#issues");

  aboutLink.addEventListener("click", openTakeover);
  missingThingsLink.addEventListener("click", openTakeover);

  for (var i = 0; i < takeoverCloseButtons.length; i++) {
    takeoverCloseButtons[i].addEventListener("click", closeTakeover);
  }

  function openTakeover(e) {
    e.preventDefault();

    var takeoverId = e.target.id + "-takeover";
    document.getElementById(takeoverId).classList.add("takeover--visible");
  }
  function closeTakeover() {
    document
      .querySelector(".takeover--visible")
      .classList.remove("takeover--visible");
  }

  return {
    updateAllExamples: updateAllExamples,
    updateOneExample: updateOneExample
  };
})();
