Huffman tree is a classic application of binary trees. It is an optimal prefix code tree and is often used for data compression.

## Intro
We can divide data compression algorithms into two types: lossless compression and lossy compression.

Lossless compression means the compressed data can be fully restored, with no information lost.

For example, when we pack some files into a zip file, the zip file takes less disk space, and when we unzip it, we can get back the original files without any loss. This is lossless compression.

Lossy compression means some information is lost during compression, but the compression ratio is higher (the compressed data is smaller)

For example, when we compress images, some tools can greatly reduce image file size without obvious loss of quality. This is lossy compression.

Now, let's think about some questions:
1. How can lossy compression keep the image quality while losing information?
2. Lossy compression loses information to save space, which is easy to unerstand. But how does lossless compression redue data size while not losing any information?

First, lossy compression will always reduce the image quality, but the loss is within what we can accept.

Take image compression for example. The human eye is more sensitive to brigtness than color. So, we can use lower-precision data to store "color". Even if we lose some "color" information, we can hardly tell the difference.

But loseless compression cannot do this, because it must allow the data to be fully restored. So, the essence of lossless compressio is encoding and decoding. 

The effect of lossless compression depends on how well the algorithm can find and use redundant information in the original dta.

General-purpose compression algorithms can find less redundancy, so the compression rate is lower. Special-purpose algorithms can find more redundancy and achieve better compression.

For example, audio files have sound wave data. A special audio compression can find redundancy in sound waves and compress it well. But a general zip compressor just sees audio files as byte streams and cannot find sound wave redundancy, so the compression is not as good.

So, there is no perfect compression algorithm. We must take trade-offes between being general, compression rate and performance.

Human coding, which we are going to discuss, is a genral-purpose lossless compression algorithm. When you give your data to the Huffman algorithm, you will get compressed data and code table. You need the code table to decode and restore the original data.

## Fixed-Length Encoding vs Variable-Length Encoding
ASCII is a fixed-length encoding. It uses 8 bits (1 byte) for each character.
UTF-8 is a variable-length encoding. it uses 1 to 4 bytes for each character.

The biggest advantage of fixed-length encoding is random access. Because each character uses the same number of bits, you can easily find a character's position by its index.

The advantage of variable-length encoding is high storage efficiency. For example, UTF-8 uses 1 byte for English letters and 3 bytes for Chinese characters. It is more flexible and saves space compared to ASCII. But because the length varies, you can't use the index for random access.

Think about this: modern text editors use UTF-8, and random access is a basic feawture. If every access requires scanning from the start, it would be very slow. How do editors solve this?

Back to the compression example. Suppose we have the string aaabacc, which has 7 lowercase letters. Using ASCII, we need 7 x 8 = 56 bits. If we want to compress it further, what should we do?

Since we only ahve a, b, and c, we do not need 8 bits for each character. 2 bits are enoguh. 

Fixed-length encoding is simple. As logn as you know all possible characters, you can assign codes. But the compression is not great, because it does not use the frequency of each character.

## The difficulties of Variable-length encoding
1. How to design the encoding so that decoding is always unique?
2. How to keep the compression rate high (make the encoded data as short as possible)?
3/ How to make decoding efficient?

For example,

aaabacc

The encoding schema has no ambiguity:
a is encoded as 0
b is encoded as 10
c is encoded as 11

But if you encode as as 1, then there is ambiguity betwwen the codes for a and c:
a is encoded as 1
b is encoded as 10
c id encoded as 11

The string aaabacc would be encoded as binary 11111011111, but now the codes for a and c are confusing. 11 could be decoded as c or as aa. So you cannot decode the original data correctly.

By comparing these two examples, you can see a rule: No code should be a prefix of another code.

For example, in the second case, a is 1, but both b and c start with 1, so the code has ambiguity.

Some reader might say, what about this encoding shcema:
-a is encoded as 1
-b is encoded as 10
-c id encoded as 100

Although the codes have the same prefix, you could add extra logic when decoding:

When you read a 1, you look ahead two more bits to see if you can match 10 or 100. Then you decide how to decode.

This can make decoding unique, but the compression rate is low, and decoding is slow. The lookahead logic acts like a nested for loop:...

### Principle of Huffman Coding
Huffman coding is a variable-length encoding method. It uses a binary tree to create variable-length codes. This way, each code can be decoded without confusion, and the algorithm is efficient and  compresses well.

Huffman coding is a greedy algorithm for lossless data compression that assigns variable-length codes to characters based on their frequencies.

Core Idea
Frequent characters get shorter codes, rare charactesr gets longer codes -> reduces total bits needed. 
