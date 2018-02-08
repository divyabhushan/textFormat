CF.main = (function() {
  // HOT SETUP
  var formatsInput = document.querySelector(".formatfield__input");
  var hotContainer = document.querySelector(".formatcases__beforetable");
  var afterColumn = document.querySelector("#aftercol");
  var afterColumnCell = document.querySelector("#aftercol td");
  var allAfterColumnCells = document.querySelectorAll("#aftercol td > span");
  var presetBtns = document.querySelectorAll(".preset");
  var whatIsThisLink = document.querySelector("#what-is-this");
  var missingFeaturesLink = document.querySelector("#missing-features");
  var takeoverCloseButtons = document.querySelectorAll(".takeover__close");
  CF.hotInstance = new Handsontable(hotContainer, {
    data: CF.presets["number-preset"].data,
    width: afterColumn.offsetWidth,
    stretchH: "all",
    rowHeights: afterColumnCell.offsetHeight,
    maxRows: CF.presets["number-preset"].data.length,
    maxCols: 1
  });

  // SSF SETUP
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

  window.onresize = CF.utils.throttle(function() {
    CF.hotInstance.updateSettings({ width: afterColumn.offsetWidth });
  }, 250);

  for (var i = 0; i < presetBtns.length; i++) {
    presetBtns[i].addEventListener("click", function(e) {
      var id = e.target.id;
      populate(CF.presets[id].formatCode, CF.presets[id].data);
      updateAllExamples();
    });
  }

  for (var i = 0; i < takeoverCloseButtons.length; i++) {
    takeoverCloseButtons[i].addEventListener("click", closeTakeover);
  }

  whatIsThisLink.addEventListener("click", openTakeover);
  missingFeaturesLink.addEventListener("click", openTakeover);

  function openTakeover(e) {
    var takeoverId = e.target.id + "-takeover";
    document.getElementById(takeoverId).classList.add("takeover--visible");
  }
  function closeTakeover() {
    document
      .querySelector(".takeover--visible")
      .classList.remove("takeover--visible");
  }

  function populate(formatCode, data) {
    formatsInput.value = formatCode;
    CF.hotInstance.updateSettings({ data: data });
  }

  function updateAllExamples() {
    var allBeforeEls = document.querySelectorAll("#beforecol td");
    var allAfterEls = document.querySelectorAll("#aftercol td > span");
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
      try {
        formattedText = SSF.format(formatCode, Number(beforeText));
        afterEl.innerHTML = formattedText.trim() === "" ? "" : formattedText;
      } catch (e) {
        afterEl.innerHTML = e;
      }
      // @todo: figure out when to use this non-number version
      // try {
      //   T.innerHTML = SSF.format(F.value, V.value);
      // } catch (e) {
      //   T.innerHTML = e;
      // }
    }
  }

  return {
    updateAllExamples: updateAllExamples,
    updateOneExample: updateOneExample
  };
})();
