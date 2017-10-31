function theBeatlesPlay(musicians, instruments) {
  var result = []
  for (let i = 0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}

function johnLennonFacts(facts) {
  var result = []
  var index = 0
  while (result.length < facts.length) {
    result.push(`${facts[index]}!!!`)
    index++
  }
  return result
}