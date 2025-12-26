During coding practice or interviews, you typically won't be asked to manually write sorting algorithms from scratch. Howeve, for the sake of completeness, a section that explains the principles, characteristics, time complexity and code implementation of several common sorting algorithms.

This article will first introduce several key metrics of sorting algorithms. When discussing specific sorting algorithems later, we will analyze them based on these metrics.

## Time and Space Complexity
The primary indicators for evaluating an algorithm are time complexity and space complexity.

As mentioned in Introduction to Time and Space Complexity, for any algorithm, the goal is to minimize both time and space complexity.

## Sorting Stability
Stability is an important property of sorting algorithms, which can be summarized as follows:

A sorting algorithem is considered "stable" if identical elements maintian their relative positions after sorting, otherwise, it is "unstable"

Stability may not matter much when sorting an array of integer. However, when sorigng more compolex data structures, stable sorting can be adcantageous.

For instance, consider you have several order records already sorted by transaction date, and you now want to furthur sort them by user ID. This way, orders with the same user ID will be grouped together for easier viewing. The difference between stabel and unstable storing becomes apprent here:

If you use a stabel sorting algorithm, the orders with the same user ID will remain sorted by transaction date after sorting:

   Date    UserID
2020-02-01  1001
2020-02-02  1001
2020-02-03  1001

2020-01-01  1002
2020-01-02  1002
2020-01-03  1002

Since the data has already been sorted by date, when you perform a stable sort on user IDs, the relative order of orders with the same user ID remains unchanged, thus maintianing the order by date. If you use an unstable sorting algorithm, the relative order of orders with the same user ID might change, resulting in a loss of order by transaction date. This means your previous date sorting effort becomes meaningless.

As you can see, stability is a very imporatnt property, so you should pay special attention when using sorting algorithms to avoid unexpected results.

## In-place sorting
In-place sorting refers to sorting that does not require additional auxiliary space, only a constant amount of extra space, and directly sorts the original array.

The key here is whether extra space is needed, not whether a new array is returnd. Specifically, it is about differences like this:

```python
// non-in-place sorting
void sort(int[] nums) {
    // requires an additional auxiliary array during sorting, consuming O(N) space
    int[] tmp = new int[nums.length];

    // sort the nums array
    for ...
}

// in-place sorting
void sort(int[] nums) {
    // directly operate on nums, no additional auxiliary array needed, consuming O(1) space
    for ...
}
```

It's easy to see that for sorting large data sets, in palce sorting algo have certain advantages.

Some key metrics for sorting algo are important to consider. Later, several common sorting algorithms and analyze their strengths and weknesses based on these metrics will be introduced.

