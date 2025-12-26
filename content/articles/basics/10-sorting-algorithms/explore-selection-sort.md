### Summary
Selection sort is the simplest and most straightforward sorting algorithm, but it has a high time complexity and is not a stable sort. Other basic sorting algorithms are optimizations based on selction sort.

If you are a beginner who has never been exposed to sorting algorithms, that's greate; don't rush to look at definitions or similar materials. If you have studied sorting algorithms before, now please forget the definitions and algorithm code you have memorized.

With the groundword laid earlier, you have a certain level of programming ability and can solve some basic algorithm problems. On this premise, I would like to share a learning method for your reference:

When encountering a new problem, do not rush to ask someone for a standard answer. Instead, initiate your own thinking. Being spoon fed a standard answer means missing an opportunity and losing a bit of creativity. If you are spoonfed too often, you become dull.

There are always some readers who come to me with a worried look, complaining about forgetting algorithm problems after solving them. I actually think this is a good thing. Constant remembrance indicates obsession; forgetting is good, as it means the mind is not yet full, which is an opportunity for independent thinking.

So, returning to the issue, let's seize this opportunity. Now, given an array as input, you're asked to write a sorting algorithm to sort all elemnts in ascending order. How would you write it? If you have never thought about this problem before, take a few minutes to think about it now.

The first time I though about this problem, the most straightforward method that came to mind was this:

First, go through the array to find the smallest value and swap it with the first element of the array. The niterate through the array again to find the second smallest element and swap it with the second element of the array. Continue this porocess until the entire array is sorted.

This algorithm is commonly knonw as "Selection Sort", where you repeatedly traverse to select the smallest element. Here is how it looks in code:
