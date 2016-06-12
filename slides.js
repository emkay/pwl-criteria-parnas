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
  dijkstra4
]

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


module.exports = slides
