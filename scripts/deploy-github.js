
const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/Leboweeb/WRN.Portfolio.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
