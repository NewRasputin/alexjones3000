var fs = require('fs')
var MarkovChain = require('markovchain')
var CronJob = require('cron').CronJob

var T = require('./twit.js')
var realJones = fs.readFileSync('./realJones.txt').toString()

var words = realJones.split(' ')

var fakeJones = new MarkovChain(realJones)

function word () {
	return words[Math.floor(Math.random()*words.length)]
}

new CronJob('00 00 */4 * * *', function() {
	T.post('statuses/update', { status: fakeJones.start(word()).end(17).process() }, function(err, data, response) {
		console.log(data)
	})
}, null, true, 'America/Los_Angeles');
