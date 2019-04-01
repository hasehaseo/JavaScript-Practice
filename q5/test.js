'use strict'
/* global fail sum avg max min bsort qsort desc */

// eslint-disable-next-line no-unused-vars
function test(array) {
  // sum
  doTest('sum(null)', undefined, sum(null))
  doTest('sum([])', undefined, sum([]))
  doTest('sum([1])', 1, sum([1]))
  doTest('sum([1, 2])', 3, sum([1, 2]))
  // avg
  doTest('avg(null)', undefined, avg(null))
  doTest('avg([])', undefined, avg([]))
  doTest('avg([1])', 1, avg([1]))
  doTest('avg([1, 2])', 1.5, avg([1, 2]))
  // max
  doTest('max(null)', undefined, max(null))
  doTest('max([])', undefined, max([]))
  doTest('max([1])', 1, max([1]))
  doTest('max([1, 2])', 2, max([1, 2]))
  // min
  doTest('min(null)', undefined, min(null))
  doTest('min([])', undefined, min([]))
  doTest('min([1])', 1, min([1]))
  doTest('min([1, 2])', 1, min([1, 2]))
  // bubble sort
  doTest('bsort(null)', null, bsort(null))
  doTest('bsort([])', [], bsort([]))
  doTest('bsort([1])', [1], bsort([1]))
  doTest('bsort([1, 2])', [1, 2], bsort([1, 2]))
  doTest('bsort([2, 1])', [1, 2], bsort([2, 1]))
  doTest('bsort([1, 1])', [1, 1], bsort([1, 1]))
  // bubble sort desc
  doTest('bsort([], desc)', null, bsort(null, desc))
  doTest('bsort([], desc)', [], bsort([], desc))
  doTest('bsort([1], desc)', [1], bsort([1], desc))
  doTest('bsort([1, 2], desc)', [2, 1], bsort([1, 2], desc))
  doTest('bsort([2, 1], desc)', [2, 1], bsort([2, 1], desc))
  doTest('bsort([1, 1], desc)', [1, 1], bsort([1, 1], desc))
  // quick sort
  doTest('qsort(null)', null, qsort(null))
  doTest('qsort([])', [], qsort([]))
  doTest('qsort([1])', [1], qsort([1]))
  doTest('qsort([1, 2])', [1, 2], qsort([1, 2]))
  doTest('qsort([2, 1])', [1, 2], qsort([2, 1]))
  doTest('qsort([1, 1])', [1, 1], qsort([1, 1]))
  // quick sort desc
  doTest('qsort(null, desc)', null, qsort(null, desc))
  doTest('qsort([], desc)', [], qsort([], desc))
  doTest('qsort([1], desc)', [1], qsort([1], desc))
  doTest('qsort([1, 2], desc)', [2, 1], qsort([1, 2], desc))
  doTest('qsort([2, 1], desc)', [2, 1], qsort([2, 1], desc))
  doTest('qsort([1, 1], desc)', [1, 1], qsort([1, 1], desc))
}
/**
 * test
 */
function doTest(target, expected, actual) {
  if (JSON.stringify(expected) !== JSON.stringify(actual)) {
    fail(target, expected, actual)
  }
}
