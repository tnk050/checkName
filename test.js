function convertTest() {
  const testStr = ["Rinsyankaihou", "shissin", "ixtsunu"];
  const expected = ["リンシャンカイホウ", "シッシン", "イッヌ"];
  const answers = testStr.map((item) => convertRomanToKana(item));
  const checkAnswers = answers.map((answer, index) =>
    expected[index] === answer ? "corect" : "fail"
  );
  checkAnswers.forEach((item, index) =>
    console.log("%s - %s - %s", item, expected[index], answers[index])
  );
}

function foo(){
  const foo = 'bar'
  console.log(foo[1])
}