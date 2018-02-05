(function() {
  // HOT SETUP
  var data = [
    ["-10"],
    ["-1"],
    ["0"],
    ["10"],
    ["100"],
    ["1000"],
    ["10000"],
    ["100000"]
  ];

  var formatsInput = document.querySelector(".formatfield__input");
  var hotContainer = document.querySelector(".formatcases__beforetable");
  var afterColumn = document.querySelector("#aftercol");
  var afterColumnCell = document.querySelector("#aftercol td");
  var allAfterColumnCells = document.querySelectorAll("#aftercol td > span");
  var hotInstance = new Handsontable(hotContainer, {
    data: data,
    width: afterColumn.offsetWidth,
    stretchH: "all",
    rowHeights: afterColumnCell.offsetHeight,
    maxRows: data.length,
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
})();
