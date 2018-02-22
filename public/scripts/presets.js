// Data for presets and examples.
CF.presets = {
  "number-preset": {
    formatCode: "##.00",
    refAnchor: "ref-placeholders",
    exAnchor: "ex-numbers",
    cases: [
      ["-10"],
      ["-1"],
      ["0"],
      ["10"],
      ["100"],
      ["1000"],
      ["10000"],
      ["100000"]
    ]
  },
  "lg-number-preset": {
    formatCode: "###,###",
    refAnchor: "ref-placeholders",
    exAnchor: "ex-numbers",
    cases: [
      ["-1000000000"],
      ["-1000000"],
      ["-1000"],
      ["-0.0000001"],
      ["0.0000001"],
      ["1000"],
      ["1000000"],
      ["1000000000"]
    ]
  },
  "fraction-preset": {
    formatCode: "##0/##0",
    refAnchor: "ref-fractions-percents",
    exAnchor: "ex-fractions",
    cases: [
      ["-0.1"],
      ["-0.01"],
      ["0"],
      ["0.01"],
      ["0.1"],
      ["0.5"],
      ["1"],
      ["1.5"]
    ]
  },
  "percent-preset": {
    formatCode: "0.0%",
    refAnchor: "ref-fractions-percents",
    exAnchor: "ex-percents",
    cases: [
      ["-0.1"],
      ["-0.01"],
      ["-0.001"],
      ["0.001"],
      ["0.01"],
      ["0.1"],
      ["1"],
      ["1.5"]
    ]
  },
  "currency-preset": {
    formatCode: "$#,##0_);$(#,##0)",
    refAnchor: "ref-placeholders",
    exAnchor: "ex-currency",
    cases: [
      ["-10.00"],
      ["-1.00"],
      ["0"],
      ["0.10"],
      ["1.00"],
      ["10.00"],
      ["100.00"],
      ["1000.00"]
    ]
  },
  "date-preset": {
    formatCode: "mmmm d, yyyy",
    refAnchor: "ref-dates",
    exAnchor: "ex-dates",
    cases: [
      ["24862"],
      ["27852"],
      ["30842"],
      ["33832"],
      ["36822"],
      ["39812"],
      ["42802"],
      ["45792"]
    ]
  },
  "time-preset": {
    formatCode: "hh:mm:ss AM/PM",
    refAnchor: "ref-time",
    exAnchor: "ex-time",
    cases: [
      ["0.283587963"],
      ["0.377037037"],
      ["0.470486111"],
      ["0.563935185"],
      ["0.657384259"],
      ["0.750833333"],
      ["0.844282407"],
      ["0.937731481"]
    ]
  },
  "plus-and-minus-signs-example": {
    formatCode: "+#,##0;-#,##0;0",
    cases: [
      ["-12345"],
      ["-1234"],
      ["-123"],
      ["0"],
      ["123"],
      ["1234"],
      ["12345"],
      ["123456"]
    ]
  },
  "thousands-only-example": {
    formatCode: "#,##0,",
    cases: [
      ["-123456"],
      ["-12345"],
      ["-1234"],
      ["123"],
      ["1234"],
      ["12345"],
      ["123456"],
      ["1234567"]
    ]
  },
  "millions-example": {
    formatCode: '#,##0,," M"',
    cases: [
      ["-12345678"],
      ["-1234567"],
      ["12345"],
      ["123456"],
      ["1234567"],
      ["12345678"],
      ["123456789"],
      ["1234567890"]
    ]
  },
  "hide-zeros-example": {
    formatCode: "#,##0;-#,##0;",
    cases: [
      ["-12345"],
      ["-1234"],
      ["-123"],
      ["0"],
      ["Some text"],
      ["1234"],
      ["12345"],
      ["123456"]
    ]
  },
  "hide-text-example": {
    formatCode: "#,##0.0;-#,##0.0;0.0;",
    cases: [
      ["-12345"],
      ["-1234"],
      ["-123"],
      ["0"],
      ["Some text"],
      ["Some more text"],
      ["12345"],
      ["123456"]
    ]
  },
  "space-as-thousands-separator-example": {
    formatCode: "# ##0",
    cases: [
      ["-12345"],
      ["-1234"],
      ["-123"],
      ["0"],
      ["Some text"],
      ["1234"],
      ["12345"],
      ["123456"]
    ]
  },
  "currency-words-left-example": {
    formatCode: "[$USD] #,##0;[$USD] -#,##0",
    cases: [
      ["-12345"],
      ["-1234"],
      ["-123"],
      ["0"],
      ["Some text"],
      ["1234"],
      ["12345"],
      ["123456"]
    ]
  },
  "currency-euro-right-example": {
    formatCode: '#,##0" €"',
    cases: [
      ["-12345"],
      ["-1234"],
      ["-123"],
      ["0"],
      ["Some text"],
      ["1234"],
      ["12345"],
      ["123456"]
    ]
  },
  "single-digit-fractions-example": {
    formatCode: "0/0",
    cases: [
      ["0.01"],
      ["0.11"],
      ["0.125"],
      ["0.24"],
      ["0.5"],
      ["0.99"],
      ["1"],
      ["1.5"]
    ]
  },
  "percentage-with-thousands-separator-example": {
    formatCode: "#,##0%",
    cases: [
      ["-0.12"],
      ["0"],
      ["0.123"],
      ["1.234"],
      ["12.34"],
      ["123.45"],
      ["1234.56"],
      ["12345.67"]
    ]
  },
  "year-month-day-example": {
    formatCode: "yyyy-mm-dd",
    cases: [
      ["24862"],
      ["27852"],
      ["30842"],
      ["33832"],
      ["36822"],
      ["39812"],
      ["42802"],
      ["45792"]
    ]
  },
  "day-of-the-week-example": {
    formatCode: "dddd",
    cases: [
      ["24862"],
      ["27852"],
      ["30842"],
      ["33832"],
      ["36822"],
      ["39812"],
      ["42802"],
      ["45792"]
    ]
  },
  "period-separated-date-example": {
    formatCode: "mm\\.dd\\.yyyy",
    cases: [
      ["24862"],
      ["27852"],
      ["30842"],
      ["33832"],
      ["36822"],
      ["39812"],
      ["42802"],
      ["45792"]
    ]
  },
  "date-and-time-example": {
    formatCode: "m/d/yyyy h:mm AM/PM",
    cases: [
      ["24862.283587963"],
      ["27852.377037037"],
      ["30842.470486111"],
      ["33832.563935185"],
      ["36822.657384259"],
      ["39812.750833333"],
      ["42802.844282407"],
      ["45792.937731481"]
    ]
  },
  "elapsed-time-stopwatch-example": {
    formatCode: "[h]:mm:ss",
    cases: [
      ["0.283587963"],
      ["0.377037037"],
      ["0.470486111"],
      ["0.563935185"],
      ["0.657384259"],
      ["0.750833333"],
      ["0.844282407"],
      ["0.937731481"]
    ]
  },
  "text-only-prefix-example": {
    formatCode: '"Delivered in "@',
    cases: [
      ["2 weeks"],
      ["4 days"],
      ["1 day"],
      ["18 hours"],
      ["-1.1"],
      [""],
      ["0"],
      ["123"]
    ]
  },
  "scientific-notation-example": {
    formatCode: "0.00E+0",
    cases: [
      ["-1234000000"],
      ["-1234000"],
      ["-1234"],
      ["-0.0001234"],
      ["0.00001234"],
      ["1234"],
      ["1234000"],
      ["1234000000"]
    ]
  },
  "degrees-farenheit-example": {
    formatCode: '0"°F"',
    cases: [
      ["-12"],
      ["-1.2"],
      ["-0.12"],
      ["0"],
      ["Some text"],
      ["1"],
      ["12"],
      ["123"]
    ]
  },
  "degrees-celsius-example": {
    formatCode: '0.0#"°C"',
    cases: [
      ["-12"],
      ["-1.23"],
      ["-0.12"],
      ["0"],
      ["1"],
      ["1.2"],
      ["1.23"],
      ["12.3"]
    ]
  }
};
