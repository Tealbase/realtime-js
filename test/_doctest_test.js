import doctest from '@tealbase/doctest-js'

describe('Doctests', () => {
  // file paths are relative to root of directory
  doctest('dist/main/transformers.js')
})