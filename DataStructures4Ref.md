List of Study Topics

Below is a list of nearly all of the data-structures and algorithms that you can come across during a tech interview along with a very brief description and some resources to get started building your study plan. The goal is to provide a starting point for you to build your plan and not to explain in detail what each topic is. Part of your plan is finding resources to learn more about each topic from different perspectives.
If you haven’t heard of some data-structures in the list or haven’t learned much about them before, they might seem complex but as you progress, you’ll soon experience the same feelings you had before and after you understood Arrays.
Think about how complex the concept of an Array is to a non-programmer and how basic it is to even the most junior developers.
These data-structures are just the basic building blocks that help you create algorithms… they actually make things simpler once you take the time to understand them. Just as an Array handles a lot of the work required to maintain an ordered list of elements, these data-structures have functions and containers for efficiently working with data.

Basic Data-Structures

These are considered basic. Everyone should know how they work, when to use them, how to implement them and the reasoning behind their tradeoffs:
Array
Set
Hashmap
Linked List
Stack
Queue
Tree
Graph


If this list seems long, don’t worry. A lot of these data-structures are closely related and even build upon each other so you’ll be able to learn them all quicker than you might think.
Hashmaps build upon Arrays. Stacks build upon LinkedLists or Arrays. Queues build upon LinkedLists. Trees share concepts of “nodes” and “links” from LinkedList. Graphs also share the same concepts. They also have a lot of similarities to trees. All trees are technically graphs too so you can apply a lot of the same techniques to them.

Advanced Data-Structures

After mastering the basic data-structures, knowing these more advanced ones will give you a higher chance of success. Some come up very often during interviews like Heaps and Binary Search Trees. LRU Caches and Tries come up less frequently but are becoming more common. Disjoint Sets and Skip Lists rarely come up, but even if not explicitly asked about them, they can be powerful tools to help you come up with quick and performant solutions.

Heap (a.k.a Priority Queue)
LRU Cache
Binary Search Tree (AVL, Redblack)
Disjoint Set
Trie
Skip List

As we go into more advanced data-structures you’ll see they are usually made using the basic ones as building blocks. Getting a good understanding of the basic data-structures will make learning these advanced ones much easier. You’ll think of them in terms of the smaller structures you already know rather than big new complicated structures.

Heaps, also known as Priority Queues are a type of tree that behave like a queue. Binary Search Trees (BSTs) are another type of tree that make it faster to search for nodes. AVL and Redblack are two popular specific types of balanced BSTs. An LRU Cache is a memory efficient cache built by combining a Hashmap with a LinkedList.

A Trie is another type of tree that makes prefix/substring searches fast. Disjoint Sets are a special type of set that separate its members into non-overlapping subsets, useful for the Union Find algorithm. A Skip List is an optimized version of a LinkedList that reduces the time it takes to find certain nodes.

Basic Searching/Traversal Algorithms

All data structures are meant to hold information. Some structures need specials ways to access this information efficiently that are more involved than simply accessing an array index or hashmap key. Data-structures that hold collections of data such as Trees and Graphs use a few basic algorithms to access the information within.

Breadth First Search (BFS)
Depth First Search (DFS)
Binary Search
Advanced Searching/Traversal Algorithms

There is a ton of research in this field, but for the purposes of a tech interview, the most advanced searching algorithms you’ll likely come across in order of frequency are:

Quick Select:

Dijkstra
Bellman-Ford
A-star (rare)
Sorting Algorithms
Sorting is a common tool used to increase the performance of a solution. There are many sorting algorithms, but the most popular for interviews are listed below. Know how to implement all of these without looking anything up.
Quick Sort
Merge Sort
Topological Sort
Counting Sort


Important Topics

Recursion is an extremely important topic that doesn’t come up as much in day to day software engineering as it does during interviews. Bit manipulation may seem scary at first, but once you take time to understand the binary number format and operations you’ll realize how simple it is.

Recursion
Greedy Algorithms
Dynamic Programming
Bit Manipulation (AND, NOT, OR, XOR)
Common Patterns
These patterns can be used to solve many similar algorithms questions
Backtracking
Two Pointers
Sliding Window
Divide & Conquer
Reservoir Sampling
Math based problems
Permutations
Combinations
Factorial
Power Set
Other Common Problems
String to Integer
Integer to String
Adding huge numbers (that can’t fit into memory)
Addition/Subtraction/Multiplication/Division without using operators
Complexity

As weird as it sounds, it’s true that it’s not enough to just provide a working solution to problems during the interview. The code has to run at a certain level of performance described by “time complexity” & “space complexity”. The complexity is described in terms of Big-O notation.
This may seem complex at first (especially given the name) but the reason most people have trouble with it is because they don’t take time to actually learn and just go by intuition after seeing a few examples. Rather than rely on intuition, read up on Big-O notation and how to determine the complexity of an algorithm. Oftentimes your interviewer will ask you to tell them what the time and space complexity of your solution is.


Practice

Self Practice
Studying means nothing without practice. Every time you learn a new topic from your study plan, you should put it to use. That’ll help you remember it longer and also give a deeper understanding. Do a few practice questions for every topic you finish. Sites like leetcode.com let you search for practice questions using tags like “trees” or “graphs”.

Practice should happen in two phases. The first is when you learn the topic for the first time. During this phase you should focus on really understanding whats involved and why your solution works. The second phase is after you’re comfortable with the concepts. At this point you should time yourself and aim for faster and faster solution times.

During an interview you’ll be expected to solve a problem within 15–45 minutes depending on the difficulty of the question. When you start out, it’ll likely take hours for you to do the first one. Over the first few weeks that time should start to come down. After a month or two of consistent practice (not just time passing), you should start being able to solve a decent amount of problems on time.

Sometimes an entire interview question will only involve implementing a single data-structure such as an LRU Cache or a Trie. Other times it’ll only involve implementing a single operation on a data-structure such as the delete operation on a Binary Search Tree.

Practice implementing all of the data-structures mentioned earlier in this article until you don’t need to look anything up and you will have a very easy time with these questions during the real interview. Focus on understanding why its implemented the way it is rather than trying to remember the exact code. Implement from understanding of what needs to happen next and not from memory.

You probably won’t be asked to implement an Array or balanced BSTs like AVL or Redblack trees but you should know how they work.
Assisted Practice (Mock Interviews)

Practicing topics and questions alone isn’t enough. During the interview you’ll be interacting with a real person who is judging your skills in real-time. The situation is more stressful than when you study at home. To get around the awkwardness and anxiety of a real interview, you should do many practice interviews beforehand. This will help you be comfortable so that you can focus on the interview question rather than being distracted by non-technical things.

These types of practice interviews are called Mock Interviews. You can have a friend help you or find a service online that’ll match you with an interviewer.


Knowing when you’re ready

You’ll never feel “ready” no matter how long you study. Theres always more topics to dive deeper into or weak areas that could use more practice.

There is definitely an element of luck in the whole process. It’s very possible that you get a question on a topic you haven’t prepared for at all or are really weak on. It’s also possible that you get all questions on topics you’re really strong in since two months ago and didn’t need to spend that extra time studying to pass. You can’t prepare for every possible outcome, but your chances of success get higher than everyone else’s with more practice.

Keeping track of your progress and getting feedback is very important in knowing when you’re truly ready to perform on the real interview without relying on just emotion.

Keep track of your completion times when you do practice questions and aim for at most 40 minutes to complete most medium level questions and 1 hour to complete hard level questions on sites like leetcode.com or hackerrank.com.

Realize that you must pass every edge case for it to count on those sites but luckily this isn’t the case for real interviews! Most interview code is evaluated on a small set of edge cases and small errors get passed or considered to be irrelevant all the time. The point of evaluation isn’t to be so strict as to expect perfection, but they need to see enough “signals" to be convinced.


Do at least three mock interviews before you do the real one. Only move forward when you can consistently perform well during practice.

Big tech companies hire non-stop so they’re extremely flexible on scheduling or rescheduling your interview date. I rescheduled my interviews with Google and Uber by 2 and 1 months respectively because I wasn’t ready. I’ve done even longer push backs in the past.


You don’t need any special excuse to reschedule an interview. I simply told them “I need more time to prepare”. These companies dedicate a lot of money for your interview. 5-6 full-time employees get paid to interview you for 4-5 hours and then evaluate the results after. Factor in the salaries of recruiters who took time to find you and process only a small % of applications for people they interact with and that’s at least a few thousand dollars per interview.


They want you to come prepared. They will wait rather than waste time, money and the opportunity cost of rejecting an engineer who could’ve passed if they just had waited an extra month or two. So push back your interview if you’re not ready. Never go in without being ready!
If you follow the above, knowing when you’re ready is easy. You might still feel you aren’t but you’ll know for sure because you’re hitting your completion times and have passed many mock interviews. Being ready means you’ve proven undoubtedly through practice that you can pass interviews that ask the same types of difficult questions under the same time limits as the real one.


This article only focuses on data-structures and algorithms questions. System Design and Behavioral questions also play a large role in the hire decision. I’ll leave those topics for another article.