// Taken from next-mdx-remote, which was a great package and was the foundation of the original ULLD app, but became limiting moving forward. This one was a thinker...

if (process.env.NODE_ENV === 'production') {
  module.exports.jsxRuntime = require('react/jsx-runtime')
} else {
  module.exports.jsxRuntime = require('react/jsx-dev-runtime')
}
