### What is Insertion Sort?

Insertion Sort is a sorting algorithm that builds a sorted array one element at a time by placing an element in the relative correct position with each iteration.


### Insertion Sort Concept
We will perform N-1 iterations on the array (N is the number of elements in the array) In iterations, 1 ≤ i ≤ N-1

The algorithm compares an element to the already sorted elements to the left. Since the element at index i = 0 has no elements to compare it to, it is already sorted and does not require any swaps. Thus the algorithm begins on the element at index i = 1

We will compare the element at index i to that of the element at index i-1. If the element at i-1 is greater than the element at i, we will then compare element i to the element at index i-2. This will continue until one of two conditions have been met: 
1. element i-x (x is an integer and i-x >= 0) is **not** greater than element i.
2. there are no longer any elements to compare to i (the front of the array has been reached). 
In **case 1**, a number less than element i has been found, and the element at i will be placed after (to the right of) element i-x.
In **case 2**, because case 1 was never met, element i is the smallest in the array, and will be placed in the leftmost position of the array.

All other elements are shifted over before element i is moved.

### Visual Example
The process can be visualized as sorting a deck of cards from left to right. Begin by sorting the 2 leftmost cards, and then continuously take the next card to the immediate right, compare it to the sorted portion of cards, and add it to the correct position. This process is continued until there are no more cards to the right, and thus the sorted portion of cards has become the entire deck. 



