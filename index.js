var fs = require('fs')
var MarkovChain = require('markovchain')

var realJones = fs.readFileSync('./realJones.txt').toString()

var words = realJones.split(' ')

var fakeJones = new MarkovChain(realJones)

function word () {
	return words[Math.floor(Math.random()*words.length)]
}

setInterval(function () {
	console.log(fakeJones.start(word()).end(17).process())
}, 1000);
