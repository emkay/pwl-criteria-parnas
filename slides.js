const h = require('virtual-dom/h')
const slides = [
  intro,
  intro2,
  natoScienceCommittee,
  natoScienceCommittee2,
  natoScienceCommittee3,
  natoScienceCommittee4,
  bigquestions,
  bigquestions2,
  bigquestions3,
  conferenceTheme,
  conferenceTheme2,
  conferenceTheme3,
  dijkstra,
  dijkstra2,
  dijkstra3,
  dijkstra4,
  paperSetup,
  backToThePaper,
  backToThePaper2,
  backToThePaper3,
  backToThePaper4,
  briefStatusReport,
  briefStatusReport2,
  briefStatusReport3,
  briefStatusReport4,
  briefStatusReport5,
  kwic,
  kwic2,
  kwic3,
  kwicExample,
  kwicExample2,
  kwicExample3,
  kwicExample4,
  firstKwicSolution,
  firstKwicSolution1,
  firstKwicSolution2,
  firstKwicSolution3,
  firstKwicSolution4,
  firstKwicSolution5,
  secondKwicSolution,
  secondKwicSolution2,
  secondKwicSolution3,
  secondKwicSolution4,
  secondKwicSolution5,
  secondKwicSolution6,
  secondKwicSolution7,
  comparison,
  comparison2,
  comparison3,
  comparison3point5,
  comparison4,
  comparison5,
  comparison6,
  comparison7,
  comparison8,
  comparison9,
  comparison10,
  comparison11,
  comparison12,
  theCriteria,
  theCriteria2,
  theCriteria3,
  conclusion,
  conclusion2,
  conclusion3,
  conclusion4,
  out
]

console.log('slide count: ', slides.length)

function progressbar (state) {
  return h('div.progressbar', [
    h('div', {style: `width: ${state.percent}%;`})
  ])
}

function intro (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'On the Criteria To Be Used in Decomposing Systems into Modules'),
        h('h2', 'By D.L. Parnas - December 1972')
      ])
    ])
  ])
}

function intro2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Time Travelin\' to 1969')
      ])
    ])
  ])
}

function natoScienceCommittee (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'NATO Science Committee'),
        h('h2', 'Rome, Italy, 27th to 31st October 1969')
      ])
    ])
  ])
}

function natoScienceCommittee2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'NATO Science Committee'),
        h('h2', 'Rome, Italy, 27th to 31st October 1969'),
        h('ul', [
          h('li', 'A conference on software engineering techniques')
        ])
      ])
    ])
  ])
}

function natoScienceCommittee3 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'NATO Science Committee'),
        h('h2', 'Rome, Italy, 27th to 31st October 1969'),
        h('ul', [
          h('li', 'A conference on software engineering techniques'),
          h('li', 'First software conference?')
        ])
      ])
    ])
  ])
}

function natoScienceCommittee4 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'NATO Science Committee'),
        h('h2', 'Rome, Italy, 27th to 31st October 1969'),
        h('ul', [
          h('li', 'A conference on software engineering techniques'),
          h('li', [h('strike', 'First'), h('span', 'Second software conference?')])
        ])
      ])
    ])
  ])
}

function bigquestions (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'They asked big questions'),
        h('blockquote', 'Can computing science be of any assistance to software engineering, or what can software engineering get out of computing science?'),
        h('cite', [h('a', {href: 'http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1969.PDF'}, 'Strachey quoting Aron and Needham')])
      ])
    ])
  ])
}

function bigquestions2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'They asked big questions'),
        h('blockquote', 'Take a very simple example with which I think almost everybody in the small scale and more abstract way of thinking about programming would agree; that to use recursive methods is undoubtedly an assistance. No self respecting programmer would dream of programming in a language without recursion.'),
        h('cite', [h('a', {href: 'http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1969.PDF'}, 'Strachey')])
      ])
    ])
  ])
}

function bigquestions3 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'They asked big questions'),
        h('blockquote', 'Now so far as I know recursive programming is not used in general in any large-scale software system...'),
        h('cite', [h('a', {href: 'http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1969.PDF'}, 'Strachey')])
      ])
    ])
  ])
}

function conferenceTheme (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Theme'),
        h('h2', 'Practical v Theoretical')
      ])
    ])
  ])
}

function conferenceTheme2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Theme'),
        h('h2', 'Practical v Theoretical'),
        h('ul', [
          h('li', 'University depts doing theoretical work'),
          h('li', 'New software industry doing practical work')
        ])
      ])
    ])
  ])
}

function conferenceTheme3 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Theme'),
        h('h2', 'Practical v Theoretical'),
        h('ul', [
          h('li', 'University depts doing theoretical work'),
          h('li', 'New software industry doing practical work'),
          h('li', 'What can the two learn from each other?')
        ])
      ])
    ])
  ])
}

function dijkstra (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Dijkstra'),
        h('blockquote', 'I would like to comment on the distinction that has been made between practical and theoretical people. I must stress that I feel this distinction to be obsolete, worn out, inadequate and fruitless.'),
        h('cite', [h('a', {href: 'http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1969.PDF'}, 'Dijkstra')])
      ])
    ])
  ])
}

function dijkstra2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Dijkstra'),
        h('blockquote', '...we all tell each other and ourselves that software engineering techniques should be improved considerably, because there is a crisis. But there are a few boundary conditions which apparently have to be satisfied. I will list them for you:'),
        h('cite', [h('a', {href: 'http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1969.PDF'}, 'Dijkstra')])
      ])
    ])
  ])
}

function dijkstra3 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Dijkstra'),
        h('ul', [
          h('li', 'We may not change our thinking habits.'),
          h('li', 'We may not change our programming tools.'),
          h('li', 'We may not change our hardware.'),
          h('li', 'We may not change our tasks.'),
          h('li', 'We may not change the organizational set-up in which the work has to be done.')
        ]),
        h('cite', [h('a', {href: 'http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1969.PDF'}, 'Dijkstra')])
      ])
    ])
  ])
}

function dijkstra4 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Dijkstra'),
        h('blockquote', 'Now under these five immutable boundary conditions, we have to try to improve matters. This is utterly ridiculous. Thank you. (Applause)'),
        h('cite', [h('a', {href: 'http://homepages.cs.ncl.ac.uk/brian.randell/NATO/nato1969.PDF'}, 'Dijkstra')])
      ])
    ])
  ])
}

function paperSetup (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Setup'),
        h('p', 'If we read this paper with the knowledge of this conference taking place, we get some insight as to what the problems were, and how they were being solved.')
      ])
    ])
  ])
}

function backToThePaper (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'The Paper')
      ])
    ])
  ])
}

function backToThePaper2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'The Paper'),
        h('h2', 'Intro')
      ])
    ])
  ])
}

function backToThePaper3 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'The Paper'),
        h('h2', 'Intro'),
        h('p', 'Opens with a quote from a Gouthier and Pont textbook.'),
        h('p', 'A project can be broken up into tiny pieces and each task can form a seperate module. Modules can be tested independently. Errors can be traced to specific modules.')
      ])
    ])
  ])
}

function backToThePaper4 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'The Paper'),
        h('h2', 'Intro'),
        h('p', [h('span', 'Nothing is said about '), h('strong', 'how'), h('span', ' we divide the system into modules.')])
      ])
    ])
  ])
}

function briefStatusReport (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Brief Status Report'),
        h('blockquote',
          `The major advancement in the area of modular programming has been the development of coding techniques... (l) allow one module
          to be written with little knowledge of the code in
          another module, and (2) allow modules to be reassembled
          and replaced without reassembly of the whole
          system.`),
        h('cite', [h('a', {href: 'https://www.cs.umd.edu/class/spring2003/cmsc838p/Design/criteria.pdf'}, 'Parnas')])
      ])
    ])
  ])
}

function briefStatusReport2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Benefits of modular programming'),
        h('ol', [
          h('li', 'Managerial'),
          h('li', 'Product flexibility'),
          h('li', 'Comprehensibility')
        ])
      ])
    ])
  ])
}

function briefStatusReport3 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Benefits of modular programming'),
        h('h2', 'Managerial'),
        h('p', 'Shorter development time because teams could work on different modules.')
      ])
    ])
  ])
}

function briefStatusReport4 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Benefits of modular programming'),
        h('h2', 'Product flexibility'),
        h('p', 'Changes in one module will not require other modules to change.')
      ])
    ])
  ])
}

function briefStatusReport5 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Benefits of modular programming'),
        h('h2', 'Comprehensibility'),
        h('p', 'You can easily understand the whole system by studying one module at a time.')
      ])
    ])
  ])
}

function kwic (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'KWIC'),
        h('p', 'A key word indexing system to pull out context from titles')
      ])
    ])
  ])
}

function kwic2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'KWIC'),
        h('ul', [
          h('li', 'accepts ordered set of lines'),
          h('li', 'line is ordered set of words'),
          h('li', 'words are ordered set of characters')
        ])
      ])
    ])
  ])
}

function kwic3 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'KWIC'),
        h('p', 'Lines are circularly shifted, removing the first word and appending it to the end of the line.'),
        h('p', 'Output is a listing of the lines in alphabetical order.')
      ])
    ])
  ])
}

function kwicExample (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'KWIC Example'),
        h('p', 'Ride Your Heart')
      ])
    ])
  ])
}

function kwicExample2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'KWIC Example'),
        h('p', 'Ride Your Heart'),
        h('p', 'Your Heart Ride')
      ])
    ])
  ])
}

function kwicExample3 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'KWIC Example'),
        h('p', 'Ride Your Heart'),
        h('p', 'Your Heart Ride'),
        h('p', 'Heart Ride Your')
      ])
    ])
  ])
}

function kwicExample4 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'KWIC Example'),
        h('p', 'Heart Ride Your'),
        h('p', 'Ride Your Heart'),
        h('p', 'Your Heart Ride')
      ])
    ])
  ])
}

function firstKwicSolution (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Modularization 1'),
        h('ul', [
          h('li', 'Input'),
          h('li', 'Circular Shift'),
          h('li', 'Alphabetizing'),
          h('li', 'Output'),
          h('li', 'Master Control')
        ])
      ])
    ])
  ])
}

function firstKwicSolution1 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Modularization 1'),
        h('h2', 'Input'),
        h('ul', [
          h('li', 'Reads lines'),
          h('li', 'Stores them in core')
        ])
      ])
    ])
  ])
}

function firstKwicSolution2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Modularization 1'),
        h('h2', 'Circular Shift'),
        h('ul', [
          h('li', 'Reads output from first module'),
          h('li', 'Stores output in core after shift')
        ])
      ])
    ])
  ])
}

function firstKwicSolution3 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Modularization 1'),
        h('h2', 'Alphabetizing'),
        h('ul', [
          h('li', 'Input arrays from modules 1 and 2'),
          h('li', 'Outputs array of alphabetical circular shifts')
        ])
      ])
    ])
  ])
}

function firstKwicSolution4 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Modularization 1'),
        h('h2', 'Output'),
        h('ul', [
          h('li', 'Takes arrays from module 1 and 3'),
          h('li', 'Outputs nice formatted listing of all shifts')
        ])
      ])
    ])
  ])
}

function firstKwicSolution5 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Modularization 1'),
        h('h2', 'Master Control'),
        h('ul', [
          h('li', 'Controls sequencing between modules'),
          h('li', 'Handles error messages')
        ])
      ])
    ])
  ])
}

function secondKwicSolution (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Modularization 2'),
        h('ul', [
          h('li', 'Line Storage'),
          h('li', 'Input'),
          h('li', 'Circular Shift'),
          h('li', 'Alphabetizer'),
          h('li', 'Output'),
          h('li', 'Master Control')
        ])
      ])
    ])
  ])
}

function secondKwicSolution2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Modularization 2'),
        h('h2', 'Line Storage'),
        h('ul', [
          h('li', 'Functions to access/set characters'),
          h('li', '`CHAR`'),
          h('li', '`SETCHAR`'),
          h('li', 'Error handling')
        ])
      ])
    ])
  ])
}

function secondKwicSolution3 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Modularization 2'),
        h('h2', 'Input'),
        h('ul', [
          h('li', 'Takes input'),
          h('li', 'Calls line storage to set input')
        ])
      ])
    ])
  ])
}

function secondKwicSolution4 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Modularization 2'),
        h('h2', 'Circular Shift'),
        h('ul', [
          h('li', 'Functions to circular shift'),
          h('li', 'Similar to line storage functions'),
          h('li', '`CSCHAR`')
        ])
      ])
    ])
  ])
}

function secondKwicSolution5 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Modularization 2'),
        h('h2', 'Alphabetizer'),
        h('ul', [
          h('li', 'Functions to alphabetize')
        ])
      ])
    ])
  ])
}

function secondKwicSolution6 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Modularization 2'),
        h('h2', 'Output'),
        h('ul', [
          h('li', 'Prints set of lines')
        ])
      ])
    ])
  ])
}

function secondKwicSolution7 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Modularization 2'),
        h('h2', 'Master Control'),
        h('ul', [
          h('li', 'Similar to master control in system 1')
        ])
      ])
    ])
  ])
}

function comparison (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Comparison'),
        h('ul', [
          h('li', 'Both work'),
          h('li', 'Both are "modular", ie small manageable programs'),
          h('li', 'Algorithms between the two might be the same')
        ])
      ])
    ])
  ])
}

function comparison2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Comparison'),
        h('blockquote', 'There are a number of design decisions which are questionable and likely to change under many circumstances.'),
        h('cite', [h('a', {href: 'https://www.cs.umd.edu/class/spring2003/cmsc838p/Design/criteria.pdf'}, 'Parnas')])
      ])
    ])
  ])
}

function comparison3 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Comparison'),
        h('h2', 'Changeability'),
        h('ul', [
          h('li', 'Input format'),
          h('li', 'Storing lines in core'),
          h('li', 'How characters/words are packed'),
          h('li', 'Circular shift approach'),
          h('li', 'When or how often to alphabetize the list')
        ])
      ])
    ])
  ])
}

function comparison3point5 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Comparison'),
        h('h2', 'Changeability'),
        h('ul', [
          h('li', [h('strike', 'Input format')]),
          h('li', 'Storing lines in core'),
          h('li', 'How characters/words are packed'),
          h('li', 'Circular shift approach'),
          h('li', 'When or how often to alphabetize the list')
        ])
      ])
    ])
  ])
}

function comparison4 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Comparison'),
        h('h2', 'Changeability'),
        h('ul', [
          h('li', [h('strike', 'Input format')]),
          h('li', [h('b', 'Storing lines in core'), h('span', ' - Would require changes in every module')]),
          h('li', 'How characters/words are packed'),
          h('li', 'Circular shift approach'),
          h('li', 'When or how often to alphabetize the list')
        ])
      ])
    ])
  ])
}

function comparison5 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Comparison'),
        h('h2', 'Changeability'),
        h('ul', [
          h('li', [h('strike', 'Input format')]),
          h('li', [h('b', 'Storing lines in core')]),
          h('li', [h('b', 'How characters/words are packed')]),
          h('li', 'Circular shift approach'),
          h('li', 'When or how often to alphabetize the list')
        ])
      ])
    ])
  ])
}

function comparison6 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Comparison'),
        h('h2', 'Changeability'),
        h('p', 'In the first system we have a problem where changes made to the system require changes made to all modules.')
      ])
    ])
  ])
}

function comparison7 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Comparison'),
        h('h2', 'Changeability'),
        h('p', 'Using line storage as an example: by storing lines in core any change to the format requires all modules to change.')
      ])
    ])
  ])
}

function comparison8 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Comparison'),
        h('h2', 'Changeability'),
        h('p', 'The second system mitigates this by keeping the details of how lines are stored hidden from all modules except one.'),
        h('p', 'Any change to line storage would result in one module being changed.')
      ])
    ])
  ])
}

function comparison9 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Comparison'),
        h('h2', 'Changeability'),
        h('p', 'Changes to circular shift will also have required changes in other modules.')
      ])
    ])
  ])
}

function comparison10 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Comparison'),
        h('h2', 'Independent Development'),
        h('p', 'First system gives us complex formats and design decisions are required between modules.'),
        h('p', 'Whole team should be involved')
      ])
    ])
  ])
}

function comparison11 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Comparison'),
        h('h2', 'Independent Development'),
        h('p', 'Second system the interfaces are more abstract, and less system wide desigin decisions will have an impact on all modules.'),
        h('p', 'People can work independently.')
      ])
    ])
  ])
}

function comparison12 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Comparison'),
        h('h2', 'Comprehensibility'),
        h('p', 'System one gives us complex formats that are coupled across modules. Because of that we need to understand certain modules in order to understand the rest of the modules.'),
        h('p', 'Example: in order to understand the output module we first need to understand the alphabetizer, circular shifter, and input modules.')
      ])
    ])
  ])
}

function theCriteria (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Criteria')
      ])
    ])
  ])
}

function theCriteria2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Criteria'),
        h('h2', 'First System'),
        h('ul', [
          h('li', 'Each major step is a module'),
          h('li', 'Flowchart(?)'),
          h('li', 'Most common approach')
        ])
      ])
    ])
  ])
}

function theCriteria3 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Criteria'),
        h('h2', 'Second System'),
        h('ul', [
          h('li', 'Information Hiding'),
          h('li', 'Modules can be used anywhere in the system'),
          h('li', 'Modules hide knowledge from other modules')
        ])
      ])
    ])
  ])
}

function conclusion (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Conclusion'),
        h('p', 'Do not try to figure out what modules your system will use by using only a flowchart.')
      ])
    ])
  ])
}

function conclusion2 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Conclusion'),
        h('p', 'Instead, begin with design decisions that are difficult, or likely to change.')
      ])
    ])
  ])
}

function conclusion3 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Conclusion'),
        h('p', 'Use information hiding so design decisions in one module have no bearing on design decisions in others.')
      ])
    ])
  ])
}

function conclusion4 (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'Conclusion'),
        h('p', 'Result of this should be reusable modules that you can use anywhere in your application, or even in other applications.')
      ])
    ])
  ])
}

function out (state) {
  return h('main', [
    progressbar(state),
    h('article', [
      h('section', [
        h('h1', 'The End'),
        h('p', [h('a', {href: 'https://twitter.com/mmatuzak'}, '@mmatuzak')])
      ])
    ])
  ])
}

module.exports = slides
