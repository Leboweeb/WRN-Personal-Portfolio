
const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: '',
  },
  () => {
    console.log('Deploy Complete!')
  }
)