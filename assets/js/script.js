let gameDurationGlobal = 30000
let gameDurationLocal = gameDurationGlobal
let timeOut = ''
let interval = ''
const WORDS_TO_TYPE = [
	'use',
	'lumpy',
	'slippery',
	'gratis',
	'rebel',
	'gigantic',
	'wrap',
	'interrupt',
	'ruddy',
	'enchanting',
	'place',
	'combative',
	'deserve',
	'multiply',
	'luxuriant',
	'price',
	'battle',
	'healthy',
	'sweltering',
	'dress',
	'trick',
	'descriptive',
	'train',
	'coach',
	'tangible',
	'quiet',
	'mushy',
	'horn',
	'tire',
	'slow',
	'waggish',
	'root',
	'swim',
	'war',
	'agreement',
	'burly',
	'dog',
	'horse',
	'fall',
	'calendar',
	'bird',
	'actor',
	'road',
	'tick',
	'unable',
	'sleet',
	'miscreant',
	'sail',
	'lazy',
	'hilarious',
	'horses',
	'glue',
	'room',
	'egg',
	'signal',
	'adaptable',
	'smoke',
	'jolly',
	'embarrassed',
	'careful',
	'better',
	'drink',
	'sweater',
	'trucks',
	'squalid',
	'itchy',
	'challenge',
	'oranges',
	'increase',
	'wonder',
	'untidy',
	'air',
	'trot',
	'cute',
	'lunch',
	'piquant',
	'board',
	'land',
	'waste',
	'soap',
	'unsightly',
	'theory',
	'repair',
	'hot',
	'expand',
	'hanging',
	'berry',
	'capable',
	'belief',
	'wool',
	'carve',
	'dust',
	'believe',
	'ordinary',
	'frightening',
	'impulse',
	'action',
	'squeak',
	'inexpensive',
	'gainful',
	'zinc',
	'stain',
	'double',
	'cause',
	'question',
	'punishment',
	'racial',
	'hushed',
	'motionless',
	'distinct',
	'small',
	'shaggy',
	'activity',
	'oven',
	'list',
	'shape',
	'gold',
	'fear',
	'magenta',
	'arrive',
	'precious',
	'used',
	'tank',
	'utter',
	'cake',
	'wish',
	'wild',
	'fear',
	'wide',
	'colossal',
	'bruise',
	'normal',
	'grateful',
	'alleged',
	'jealous',
	'mug',
	'clear',
	'ceaseless',
	'obsequious',
	'rainy',
	'simple',
	'camera',
	'six',
	'magic',
	'thoughtless',
	'table',
	'aberrant',
	'shrill',
	'rinse',
	'soak',
	'obey',
	'lame',
	'fail',
	'afford',
	'water',
	'heat',
	'part',
	'extralarge',
	'grotesque',
	'flawless',
	'chickens',
	'gather',
	'spy',
	'card',
	'part',
	'yell',
	'ambiguous',
	'preach',
	'sordid',
	'striped',
	'green',
	'graceful',
	'two',
	'breathe',
	'subsequent',
	'future',
	'unwritten',
	'chew',
	'past',
	'zoo',
	'treat',
	'married',
	'doctor',
	'optimal',
	'discover',
	'month',
	'trade',
	'mom',
	'imperfect',
	'silky',
	'spark',
	'likeable',
	'caption',
	'thirsty',
	'true',
	'wrathful',
	'scarce',
	'punch',
	'eggnog',
	'tame',
	'recess',
	'ball',
	'welltodo',
	'wretched',
	'zipper',
	'gabby',
	'wacky',
	'friendly',
	'advise',
	'bite',
	'didactic',
	'shocking',
	'money',
	'frighten',
	'tree',
	'wheel',
	'rod',
	'awesome',
	'lively',
	'boil',
	'add',
	'word',
	'cycle',
	'girl',
	'greasy',
	'watch',
	'memory',
	'omniscient',
	'beg',
	'actually',
	'tax',
	'goofy',
	'invincible',
	'vagabond',
	'strong',
	'dramatic',
	'cow',
	'arrange',
	'substantial',
	'awful',
	'curly',
	'plain',
	'thaw',
	'wiry',
	'laugh',
	'account',
	'bumpy',
	'sleepy',
	'sofa',
	'skin',
	'pies',
	'metal',
	'drown',
	'peck',
	'type',
	'volatile',
	'whisper',
	'toothbrush',
	'advertisement',
	'kettle',
	'wrong',
	'force',
	'push',
	'pass',
	'rain',
	'quick',
	'side',
	'river',
	'hurried',
	'drab',
	'drop',
	'songs',
	'chilly',
	'labored',
	'accept',
	'tramp',
	'comparison',
	'acrid',
	'wary',
	'lowly',
	'property',
	'parsimonious',
	'snow',
	'deafening',
	'buzz',
	'recondite',
	'continue',
	'incredible',
	'strange',
	'halting',
	'zippy',
	'sun',
	'snails',
	'produce',
	'chivalrous',
	'scene',
	'surround',
	'ladybug',
	'kindhearted',
	'fluffy',
	'stop',
	'hook',
	'income',
	'measly',
	'deer',
	'apparatus',
	'stone',
	'curved',
	'dirt',
	'hope',
	'scientific',
	'bulb',
	'creator',
	'naughty',
	'dry',
	'seashore',
	'edge',
	'park',
	'necessary',
	'fixed',
	'unused',
	'boast',
	'spiffy',
	'brother',
	'exotic',
	'touch',
	'clean',
	'crowd',
	'blind',
	'young',
	'wall',
	'tan',
	'dock',
	'mark',
	'pushy',
	'glorious',
	'squeamish',
	'fang',
	'writer',
	'white',
	'enter',
	'correct',
	'tumble',
	'mix',
	'tender',
	'savory',
	'dysfunctional',
	'tangy',
	'suppose',
	'abandoned',
	'icicle',
	'stick',
	'encourage',
	'wiggly',
	'mouth',
	'bat',
	'injure',
	'distribution',
	'gaping',
	'plot',
	'concentrate',
	'store',
	'idiotic',
	'decision',
	'forgetful',
	'evanescent',
	'misty',
	'stocking',
	'jelly',
	'stuff',
	'spark',
	'judge',
	'quixotic',
	'thoughtful',
	'plant',
	'lighten',
	'yoke',
	'delay',
	'excited',
	'camp',
	'farm',
	'enthusiastic',
	'guess',
	'lucky',
	'visitor',
	'scared',
	'animated',
	'demonic',
	'remove',
	'exist',
	'analyse',
	'thumb',
	'bizarre',
	'lying',
	'peep',
	'brash',
	'efficacious',
	'attract',
	'worry',
	'understood',
	'fairies',
	'trip',
	'aware',
	'move',
	'bathe',
	'axiomatic',
	'count',
	'quartz',
	'trip',
	'living',
	'expert',
	'fowl',
	'supply',
	'arch',
	'vest',
	'number',
	'wing',
	'secret',
	'sharp',
	'time',
	'incompetent',
	'wanting',
	'popcorn',
	'moon',
	'coast',
	'slope',
	'authority',
	'hateful',
	'donkey',
	'plant',
	'obeisant',
	'rightful',
	'existence',
	'porter',
	'hands',
	'houses',
	'learn',
	'stage',
	'exciting',
	'supreme',
	'bell',
	'unhealthy',
	'distance',
	'breezy',
	'gusty',
	'waiting',
	'radiate',
	'pumped',
	'try',
	'pop',
	'meeting',
	'scandalous',
	'waste',
	'serious',
	'even',
	'common',
	'clever',
	'applaud',
	'barbarous',
	'allow',
	'little',
	'obtain',
	'versed',
	'nonchalant',
	'live',
	'birds',
	'object',
	'round',
	'accessible',
	'dear',
	'bury',
	'typical',
	'pale',
	'shake',
	'harmonious',
	'military',
	'lethal',
	'behave',
	'adjustment',
	'play',
	'abundant',
	'smash',
	'flight',
	'giant',
	'crate',
	'torpid',
	'cautious',
	'sticks',
	'truck',
	'decay',
	'cross',
	'spiritual',
	'imagine',
	'fire',
	'intelligent',
	'jar',
	'pear',
	'boy',
	'obnoxious',
	'cheerful',
	'mundane',
	'nice',
	'star',
	'billowy',
	'leather',
	'touch',
	'teaching',
	'highfalutin',
	'soft',
	'aunt',
	'finicky',
	'squash',
	'brave',
	'happen',
	'sleep',
	'impartial',
	'troubled',
	'badge',
	'consist',
	'perfect',
	'drag',
	'brief',
	'stale',
	'scold',
	'cause',
	'petite',
	'hard',
	'flashy',
	'queue',
	'helpless',
	'pack',
	'form',
	'minute',
	'drum',
	'scrape',
	'stop',
	'obscene',
	'sheet',
	'superb',
	'flame',
	'join',
	'thrill',
	'proud',
	'half',
	'listen',
	'scintillating',
	'cherries',
	'zany',
	'furniture',
	'tested',
	'cast',
	'abortive',
	'nutty',
	'belong',
	'program',
	'twig',
	'debonair',
	'rough',
	'rabbit',
	'colour',
	'chess',
	'food',
	'tease',
	'dolls',
	'bag',
	'kaput',
	'shoe',
	'clover',
	'screw',
	'subtract',
	'joke',
	'thirsty',
	'pointless',
	'tour',
	'suggest',
	'rejoice',
	'cooperative',
	'magical',
	'guide',
	'chase',
	'consider',
	'library',
	'apologise',
	'drip',
	'absurd',
	'spoon',
	'shame',
	'receptive',
	'pretend',
	'pest',
	'arrest',
	'jog',
	'interfere',
	'poor',
	'feeble',
	'bubble',
	'brush',
	'trust',
	'trains',
	'offend',
	'frightened',
	'stamp',
	'vacuous',
	'somber',
	'claim',
	'silver',
	'rambunctious',
	'stream',
	'nondescript',
	'cumbersome',
	'pickle',
	'grin',
	'probable',
	'resolute',
	'plausible',
	'observation',
	'pot',
	'coal',
	'new',
	'grandmother',
	'crash',
	'workable',
	'bead',
	'free',
	'greedy',
	'arm',
	'compare',
	'skirt',
	'slave',
	'coherent',
	'marked',
	'shelf',
	'division',
	'vanish',
	'illegal',
	'behavior',
	'wire',
	'transport',
	'kill',
	'mourn',
	'heavy',
	'knowledgeable',
	'mend',
	'amazing',
	'group',
	'perform',
	'prickly',
	'pet',
	'knee',
	'sink',
	'crooked',
	'sticky',
	'system',
	'educated',
	'liquid',
	'serve',
	'soda',
	'self',
	'handle',
	'heal',
	'attempt',
	'unruly',
	'adventurous',
	'rot',
	'argument',
	'grain',
	'nerve',
	'drunk',
	'knowledge',
	'mammoth',
	'itch',
	'heavenly',
	'hook',
	'possessive',
	'noxious',
	'fancy',
	'warn',
	'crown',
	'nation',
	'engine',
	'vein',
	'zebra',
	'overconfident',
	'faded',
	'vase',
	'precede',
	'jumpy',
	'chemical',
	'wellmade',
	'victorious',
	'tough',
	'disagree',
	'appreciate',
	'fire',
	'bewildered',
	'sky',
	'wilderness',
	'approval',
	'spot',
	'acoustics',
	'instruct',
	'hydrant',
	'puncture',
	'eight',
	'quilt',
	'angle',
	'run',
	'credit',
	'wreck',
	'big',
	'gorgeous',
	'coat',
	'shivering',
	'insidious',
	'heady',
	'joyous',
	'bottle',
	'quince',
	'ray',
	'structure',
	'airport',
	'dizzy',
	'eatable',
	'reign',
	'cows',
	'confuse',
	'sort',
	'majestic',
	'alive',
	'bitesized',
	'special',
	'slip',
	'bake',
	'terrific',
	'steel',
	'handsome',
	'elite',
	'welloff',
	'wet',
	'terrify',
	'hose',
	'devilish',
	'stay',
	'momentous',
	'fierce',
	'eminent',
	'early',
	'fade',
	'towering',
	'territory',
	'attractive',
	'tomatoes',
	'sparkling',
	'toothpaste',
	'selfish',
	'divergent',
	'mine',
	'grab',
	'sore',
	'basin',
	'mark',
	'harmony',
	'redundant',
	'trashy',
	'silent',
	'tie',
	'annoyed',
	'unadvised',
	'infamous',
	'beef',
	'cemetery',
	'condition',
	'face',
	'death',
	'curl',
	'winter',
	'sack',
	'nostalgic',
	'frail',
	'color',
	'cherry',
	'pull',
	'quarrelsome',
	'sisters',
	'tendency',
	'lamentable',
	'groan',
	'cover',
	'old',
	'satisfy',
	'nose',
	'rely',
	'fax',
	'fearful',
	'useless',
	'nonstop',
	'possess',
	'sin',
	'mean',
	'toe',
	'loud',
	'smile',
	'moldy',
	'science',
	'box',
	'match',
	'hospitable',
	'record',
	'stimulating',
	'instinctive',
	'voracious',
	'jittery',
	'cover',
	'crib',
	'army',
	'religion',
	'boring',
	'secretary',
	'check',
	'heap',
	'avoid',
	'communicate',
	'splendid',
	'curtain',
	'flap',
	'strap',
	'hellish',
	'language',
	'need',
	'insect',
	'sassy',
	'file',
	'industrious',
	'kick',
	'bless',
	'cat',
	'disapprove',
	'cabbage',
	'abounding',
	'shop',
	'copper',
	'bright',
	'fork',
	'sound',
	'slow',
	'nauseating',
	'empty',
	'release',
	'gruesome',
	'pause',
	'support',
	'hallowed',
	'watch',
	'flippant',
	'meek',
	'son',
	'relax',
	'exclusive',
	'aboriginal',
	'country',
	'simplistic',
	'ship',
	'upset',
	'wound',
	'wood',
	'drain',
	'mighty',
	'back',
	'blade',
	'glib',
	'aloof',
	'channel',
	'lie',
	'excite',
	'lamp',
	'present',
	'inform',
	'zip',
	'evasive',
	'cable',
	'pinch',
	'imaginary',
	'angry',
	'political',
	'stupid',
	'taste',
	'hapless',
	'employ',
	'desk',
	'squeeze',
	'succinct',
	'unbiased',
	'peaceful',
	'bushes',
	'roll',
	'fit',
	'gray',
	'late',
	'sprout',
	'hang',
	'fascinated',
	'eggs',
	'comfortable',
	'book',
	'nasty',
	'beam',
	'surprise',
	'observant',
	'colorful',
	'glove',
	'error',
	'sister',
	'enjoy',
	'truculent',
	'branch',
	'label',
	'hand',
	'thinkable',
	'end',
	'visit',
	'noisy',
	'eager',
	'surprise',
	'selective',
	'defective',
	'rifle',
	'faulty',
	'five',
	'poised',
	'blot',
	'share',
	'slimy',
	'phobic',
	'ludicrous',
	'clumsy',
	'chop',
	'tight',
	'auspicious',
	'lavish',
	'macho',
	'wine',
	'grate',
	'vigorous',
	'fish',
	'damaged',
	'excellent',
	'ants',
	'throne',
	'protective',
	'dust',
	'cold',
	'flaky',
	'sip',
	'overrated',
	'purple',
	'yummy',
	'picture',
	'irritate',
	'tail',
	'plane',
	'teeny',
	'record',
	'elbow',
	'puzzled',
	'unlock',
	'snake',
	'jagged',
	'slim',
	'melted',
	'weather',
	'deserted',
	'lovely',
	'economic',
	'parallel',
	'cub',
	'juicy',
	'hesitant',
	'crabby',
	'plan',
	'pail',
	'habitual',
	'voyage',
	'rule',
	'escape',
	'fantastic',
	'oil',
	'love',
	'hole',
	'telling',
	'train',
	'tremble',
	'worried',
	'unfasten',
	'poke',
	'bashful',
	'important',
	'unite',
	'whimsical',
	'overflow',
]

// REMOVE DIV FUNCTION
Element.prototype.remove = function() {
	this.parentElement.removeChild(this)
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
	for (var i = this.length - 1; i >= 0; i--) {
		if (this[i] && this[i].parentElement) {
			this[i].parentElement.removeChild(this[i])
		}
	}
}

// Store main div
let mainDiv = document.getElementById('main-div')

let play = () => {
	let letterTypied = ''
	let score = 0
	let errors = 0

	// Delete the start button
	document.getElementById('start').remove()
	document.getElementById('score').innerHTML = `Score: ${score}`
	document.getElementById('errors').innerHTML = `Errors: ${errors}`
	gameDurationLocal = gameDurationGlobal
	
	// Stop the game after x second
	timeOut = setTimeout(function() {
		stop()
		document.getElementById('cpm').innerHTML = `CPM : ${score *
			(60 / (gameDurationGlobal / 1000))}`
	}, gameDurationLocal)

	// Countdown
	interval = setInterval(function() {
		if (gameDurationLocal > 0) {
			gameDurationLocal -= 1000
			document.getElementById(
				'countdown'
			).innerHTML = `Time left : ${gameDurationLocal / 1000}`
		}
	}, 1000)

	let wordToType = WORDS_TO_TYPE[Math.floor(Math.random() * 1001)].toUpperCase()
	let goodKeyPressedCount = 0

	// Create the div where the word to type is display
	function addDiv() {
		let newDiv = document.createElement('section')
		newDiv.id = 'word-to-type'
		for (let i = 0; i < wordToType.length; i++) {
			let newSpan = document.createElement('span')
			newSpan.id = `span_${i}`
			let newContentSpan = document.createTextNode(wordToType[i])
			newSpan.appendChild(newContentSpan)
			newDiv.appendChild(newSpan)
		}
		mainDiv.appendChild(newDiv)
	}
	addDiv()

	// Capture key pressed
	document.addEventListener('keydown', function(e) {
		// Disable the default usage of the key (shortcut)
		e.preventDefault()

		// Store the last key typied with the keyboard
		letterTypied = String.fromCharCode(e.keyCode)
		console.log(letterTypied)

		// VERIFY which key is pressed
		if (goodKeyPressedCount < wordToType.length) {
			// If the you pressed the good key, add 1 to goodKeyPressedCount, else reset it
			if (letterTypied === wordToType[goodKeyPressedCount]) {
				document.getElementById(`span_${goodKeyPressedCount}`).style.color =
					'#f8f8f2'
				goodKeyPressedCount++
				console.log('COUNT: ' + goodKeyPressedCount)

			// FAIL CONDITION:
			} else {
				errors++
				document.getElementById('errors').innerHTML = `Errors: ${errors}`
				goodKeyPressedCount = 0
				for (let i = 0; i < wordToType.length; i++) {
					document.getElementById(`span_${i}`).style.color = '#6272a4'
				}
			}
		}

		// WIN CONDITION
		if (goodKeyPressedCount === wordToType.length) {
			// Update score and display it:
			score += wordToType.length
			document.getElementById('score').innerHTML = `Score: ${score}`

			// Reset key count:
			goodKeyPressedCount = 0

			// Define the new word to type and display it:
			wordToType = WORDS_TO_TYPE[Math.floor(Math.random() * 1001)].toUpperCase()
			document.getElementById('word-to-type').remove()
			addDiv('main-div')
		}
	})
}

let stop = () => {
	clearTimeout(timeOut)
	clearInterval(interval)
	
	gameDurationLocal = 0
	document.getElementById(
		'countdown'
	).innerHTML = `Time left : ${gameDurationLocal / 1000}`

	mainDiv.innerHTML = ''

	// Create the start button
	let newDiv = document.createElement('section')
	newDiv.id = 'start'
	let newButton = document.createElement('button')
	newButton.setAttribute('onclick', 'play()')
	newDiv.appendChild(newButton)
	newButton.innerHTML = 'Start'
	mainDiv.appendChild(newDiv)
}
