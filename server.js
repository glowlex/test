let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();
let technoDoc = require('techno-gendoc');
let path = require('path');

let technolibs = require('technolibs');

app.use('/', express.static('public'));
technoDoc.generate(require('./api'), 'public');

app.use(parser.json());
app.use('/libs', express.static('node_modules'));
app.use(technologger);

app.post('/api/messages', (req, res) => {
	technolibs.publish(req.body).then(body => res.json(req.body));
});

app.get('/api/messeges', function(req, res){
	
	res.send([technoDoc.mock(require('./api/scheme/Message'))
		]);
	
});

app.get('/api/messages', function (req, res) {
	res.send([
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message'))
	])
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
