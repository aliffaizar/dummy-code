import palindromeNumber from './palindrome-number'
import palindrome from './palindrome'
import fizzbuzz from './fizzbuzz'
import romanToInteger from './roman-to-integer'
import integerToRoman from './integer-to-roman'
import validAnagram from './valid-anagram'
import duplicateEntry from './duplicate-entry'
import averagePair from './average-pair'

import { Challenge } from '../types/challenges'

const challanges: Challenge[] = [
  palindrome,
  palindromeNumber,
  fizzbuzz,
  duplicateEntry,
  averagePair,
  integerToRoman,
  romanToInteger,
  validAnagram,
]

export default challanges
