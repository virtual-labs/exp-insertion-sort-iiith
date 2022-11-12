### Running time of Insertion Sort

Lets assume that we are sorting **N** elements of a given array using Insertion Sort.

- In Insertion Sort, we run N-1 iterations, each of which takes on average O(N) time. Hence the average time complexity is O(N*N).
- Because the amount of comparisons and moves depends on the given array, the best case time complexity is O(N). If the array is already sorted, for each element there will be 1 comparison and 0 moves, which is a total of N actions.
- In the worst case, the array of elements are in the exact opposite desired order. In this case, in each iteration, the current element is compared to every element before it, for a total of N-1 iterations. Thus the associated time complexity is O(N*N)
every iteration compares elements until it reaches the front of the array. 

### Space Complexity of Insertion Sort

- The space complexity of Insertion Sort is O(1) since the algorithm is sorting in place. The only additional memory involved is one variable that stores the current element being compared to the others.