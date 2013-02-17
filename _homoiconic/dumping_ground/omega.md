Functional Complexity Modulo a Test Suite
===

**Functionality and Functional Equivalence**

What does it mean for two programs to be *equivalent* to each other? For example, here are three Ruby programs that appear to be equivalent:

    puts '19620614'
    puts %w(1962 06 14).join
    puts 2**1 * 13**1 * 754639**1
    
How do we know that  these three are equivalent? Is there a precise way we can define "equivalence?" Is there an algorithm for determining whether any two (or more) programs are equivalent? The answer is *yes*, provided that we start by defining the *functionality* of each program. Given a program's functionality, we can then define *functional equivalence*.

For any program, we shall define a *test suite* that inspects the program's behaviour. Each test suite shall have one or more tests in it.

* A test is a function that takes a program as input and produces either a 1 (pass) or 0 (fail).
* Tests are *consistent*: given the same program, a test always produces 1 or always produces 0.
* A test suite contains an ordered set of *n* tests.
* A test suite is a function that takes a program as input and passes the program to each of its *n* tests. This produces an ordered set of 1s and 0s, which we shall take to be a binary number from 0 (all fail) to 2^*n*-1 (all pass).

Imagine the set of all possible tests. It's infinitely large, so we won't try to give an example. If we had to write it out, we might write a program that methodically generates tests, perhaps by generating every possible representation of a test and throwing out the ones that are syntactically invalid.

There is a test suite that contains the set of all possible tests with some ordering. The ordering could be the order that our program generates tests. It's an infinitely large test suite, of course, but let's carry on. We will call this test suite the Aleph One Test Suite. If we give any program to Aleph One, we will get a number as a result. We will call that number the *absolute functionality* of a program. Any two programs with the exact same absolute functionality are *absolute functionally equivalent*.

Unfortunately, Aleph One is only theoretical. For practical reasoning about programs we need finite test suites. What happens if we work with a test suite containing a finite set of tests? If we pass a program to a finite test suite, we will get a finite number. This is not the absolute functionality of the program, it is the *the functionality of the program modulo the test suite*. Any two programs that have the identical functionality modulo a test suite are *functionally equivalent modulo the test suite*.

For the above three programs, if we imagine a test suite consisting of a single test that inspects the output for the string `19620614`, all three programs are functionally equivalent modulo that test suite because they all produce the number "1".

**Invalidity**

Most programming languages have the notion of an invalid representation, something that is not a program. It could be that a text representation of the program has invalid syntax. It could be that while its syntax is valid, there are other errors that prevent it from even running tests. In a language like Ruby, there could be semantic errors such as:

    class Foo < Bar
      # ...
    end
      => NameError: uninitialized constant Bar

We can consider all such invalid programs to produce the number 0 when fed to any test suite. In other words, if the program is not valid, all tests always fail. Likewise, most systems have the notion of un-handled runtime errors such as division by zero. If such a thing occurs when running a test, we declare that the test returns a zero, always. 

**Why is functional equivalence modulo a test suite useful?**

At first glance, functional equivalence modulo a test suite may seem to have little value. Imagine selecting a program at random and a test suite at random. My conjecture is that the functionality of a random program modulo a random test suite is nearly always going to be 0, meaning that a randomly selected test will nearly always fail for any program. Therefore, nearly every pair of randomly selected programs will be functionally equivalent modulo almost every test suite. So what good is this concept?

My suggestion is that the fact that an infinite number of tests fail for any one program is no more troublesome than the observation that nearly every randomly constructed string of characters is "noise." When reasoning about things that humans deliberately construct, it is useful to restrict ourselves to observing properties that are semantically meaningful to humans.

In the case of test suites, the finite set of tests represents a set of observations we can choose to make about a program. We choose to make observations that reflect our understanding of what the program is intended to do. Of course, our understanding is imperfect. We might construct tests for a program that ignore certain edge cases. For example, consider this test suite:

    def test0(program)
      send(program, 1) == 1 ? 1 : 0 rescue 0
    end
    
    def test1(program)
      send(program, 1,2) == 3 ? 1 : 0 rescue 0
    end
    
    def test2(program)
      send(program, 1, 2, 3) == 6 ? 1 : 0 rescue 0
    end
    
    def test_suite_alpha(program)
      test0(program) + test1(program) * 2 + test2(program) * 4 
    end
    
For this program, the functionality modulo test\_suite\_alpha is 7:

    def simple_inject(*list)
      list.inject { |a,b| a + b }
    end
    
    test_suite_alpha(:simple_inject)
      => 7
      
And this program produces the same result:

    def inject_with_default(*list)
      list.inject(0) { |a,b| a + b }
    end
    
    test_suite_alpha(:inject_with_default)
      => 7

Therefore, `simple_inject` and `inject_with_default` are functionally equivalent modulo test\_suite\_alpha. We can add a new test and create a new test suite:
    
    def test3(program)
      send(program) == 0 ? 1 : 0 rescue 0
    end
    
    def test_suite_beta(program)
      test0(program) + test1(program) * 2 + test2(program) * 4 + test3(program) * 8
    end
    
Now we get:

    test_suite_beta(:simple_inject)
      => 7

    test_suite_beta(:inject_with_default)
      => 15

While our two programs are functionally equivalent modulo test\_suite\_alpha, they are *not* functionally equivalent modulo test\_suite\_beta. If we draw conclusions about the relationship between `simple_inject` and `inject_with_default` based on test\_suite\_alpha, we may be gravely disappointed to discover that they are not absolutely functionally equivalent.

This error comes from imagining that functional equivalence modulo a test suite is an approximation of absolute functional equivalence. Functional equivalence modulo a test suite is no more an approximation of absolute functional equivalence than equality modulo a number is an arithmetic approximation of equality.

Given finite space and time, we will always be forced to make a finite number of observations of a program. My thesis is that we do not observe has no meaning. Our notion of functionality modulo a test suite simply formalizes this limit.

**Does strong type checking affect our thinking?**

Consider using a programming language with strong type checking instead of Ruby. The type checker is a kind of test, and one that appears to be far more general than the tests in our test suites. For example, test\_suite\_alpha did not test the empty list case. However, the compiler for a language such as Haskell or OCaml would insist that our program include code to handle the empty list case. What this means in the context of functionality modulo a test case is that Haskell or OCaml programs failing to handle the empty list fail every test because they are invalid.

The notion of a compiler performing type checking, or design-by-contract checking, or any other form of static analysis can be very useful for humans, but there is no need to establish a separate model for reasoning about them. Consider two Haskell programs, one of which can sum any list and will not accept an empty list as input, the other of which can sum any list including the empty list. Provided that the compiler accepts both programs, they are functionally equivalent modulo test\_suite\_alpha. 

There is the strawman argument that the one program is superior to the other because the type checker has eliminated the possibility of a program failing to handle the empty list. If you ever want to pass in an empty list, you must write code that handles it properly. This seems vastly superior to a language where it is possible to pass an empty list to code that cannot handle it. That has practical value. But does it affect our reasoning about functionality modulo a test suite? No.

It is superior in practice because we make a certain assumption that the type system is a form of test suite. We say that the type system forms a set of assertions about the implementation of the program. So for the strong typing programmer, there are actually two test suites, the runtime tests and also the assertions enforced by the typing system. Both say something about the behaviour of the implementation.

However, we will not necessarily treat the assertions in the typing system as tests for the purpose of calculating functionality modulo a test suite. If we always include the type system in our notion of a test suite, we could only compare two programs with the same type system architecture. Consider two different programmers independently implementing mathematics from first principles in a strongly typed language.

One uses the following encoding:

    ZERO = []
    ONE  = [ZERO]
    TWO  = [ONE]
    
While the other uses [this encoding](http://github.com/raganwald/homoiconic/blob/master/2009-03-07/surreal.html#readme "Elegance and the Surreals"):

    Array.class_eval do

      def ^ numbers_to_the_right
        Number.new(self, numbers_to_the_right.kind_of?(Array) ? numbers_to_the_right : [numbers_to_the_right])
      end

    end

    class Number < Struct.new(:numbers_to_my_left, :numbers_to_my_right)

      # ...
  
    end
    
    ZERO = []   ^ []
    ONE  = ZERO ^ []
    TWO  = ONE  ^ []
    
The two programs would have entirely different type systems but both would calculate arithmetic correctly. If the type system was always part of the test suite, there would be no way to determine whether the two programs were functionally equivalent modulo a test suite, because each program would fail the other's type system assertions. To compare their arithmetic, we would have to use tests that were independent of the types chosen by the programmer.

That being said, it is possible to imagine the type systems becoming part of a test suite. Given a sufficiently introspective language, you could write tests that assert the existence of types with certain properties. While you might have two programs that are functionally equivalent modulo a test suite that says nothing about types, those same two programs might not be functionally equivalent when types are part of the tests.

As long as we do not require the type system to be part of the tests but treat it as something which may or not be a part of any particular test suite, we can use the same reasoning for untyped and typed languages.

**Functional Complexity Modulo a Test Suite**

Before we discuss complexity, we need a way to measure the *length* of programs. There are many debates we can have about how to measure program length, the important thing is to pick a reasonable metric and be consistent. For example, we can count the total number of symbols in a program's representation.

Now let's take a "program of interest" and a test suite. We can determine program of interest's functionality modulo the test suite using the method above. Consider the set of all programs functionally equivalent to our program of interest modulo our test suite, the set of all programs that produce the same number when passed to the test suite. (Although it is not necessary that our program satisfy the test suite, it can be helpful to think of the program satisfying the test suite, in which case we would be considering the set of all programs that satisfy the test suite.)

This is obviously an infinitely large set and quite imaginary. Infinite or not, how would we find the *shortest* program in the set? This is straightforward in practice although time consuming and [impossible in theory](http://en.wikipedia.org/wiki/Halting_problem). We simply generate every possible program by brute force, starting with all programs of length 1 and then all programs of length 2, and so forth growing in size. We take each candidate program and feed it to our test suite until one produces the same number as our program of interest. Quite obviously, we need only search the set of all programs from 1 to the length of our candidate program.

When we have found a program or reached the length of our program of interest, we know that no shorter program is functionally equivalent to our program of interest. The length we have reached is particularly interesting: it is the length of the shortest possible program that is functionally equivalent to our program of interest.

This length is the *functional complexity of our program modulo the test suite*.

**A Few Observations**

* It is not meaningful to discuss the functional complexity of a program modulo a test suite unless 

I bring up the complexity for a specific purpose: When looking at different expressions of the same program, we know that they have the exact same amount of complexity. One is not more or less complex than the other. That being said, one expression amy be more readable than the other.

**Readability**

In general, human programmers do not care for the shortest possible expression of a program. Two of the reasons given for dislike are that such programs are unmaintainable and unreadable.

"Unmaintainability" carries some weight with me. It expresses a requirement for software that our current test suite practices and tools do not capture: Given the statistically most likely changes we expect in the test suite, which expressions of a program are easiest to modify to satisfy the updated test suite?

But for now, let's focus on "unreadability" as a motivation for disliking extremely short expressions of programs. Why would extremely short programs be difficult to read? Although empirically this appears to be true for many programmers, it is not obviously true to me. In other words, my intuition is that it shouldn't be true. Why am I wrong?

After all, a program has a certain amount of complexity, there's so much it must do. Therefore there can never be less information in an expression than its program's Kolmogorov-Chaitin complexity. So how could a longer expression be more readable? A longer expression would seem to require more reading, more comprehension, and include extraneous and unnecessary information. What's going on here?

Well, let's start by defining what we mean by "readability."

**Queries, Theories, and Understanding**

I own a charming game called [Queries and Theories](http://wffnproof.com/inc/sdetail/123 "QUERIES 'N THEORIES: The Game of Science and Language"). It's a game based on linguistics (a related game called [Mastermind](http://tinyurl.com/master-mind-game "Mastermind on Wikipedia") was a game craze in the 1970s). Queries and Theories was based on the idea of a language expressed as "sentences" of "words." The words were colored chips, and the sentences were simple strings of chips. A language would have a "vocabulary" consisting of the possible colours of chips, and a "grammar" which would be rules for determining a valid sentence in the language. You can imagine how the game might work by thinking of BNF grammar rules.

One player--the Native--would compose a language with a strict limit on the vocabulary and complexity of rules. The other players would then issue queries in the form of candidate sentences. The Native never reveals the rules but indicates whether each sentence is valid or invalid. Eventually, one of the queriers ("a challenger") develops some confidence that they understand the language and issues a challenge.

The Native then puts three sentences forth and the challenger must correctly determine whether the sentences are valid or invalid. The challenger need not guess the exact rule formation, but rather must simply understand the behaviour of the language well enough to interpret it.

This is, of course, very much like learning a language in real life. Many, many people speak a language excellently while being entirely unable to write out a formal grammar for it.

Now let's consider a variation on Queries and Theories. In this variation, the Native composes a language and reveals the grammar to the players. They study it without being able to pose queries, and when a player is confident of his ability to understand the language, he issues a challenge and the Native puts three sentences to the challenger for validation as usual.

In our variation, the players are attempting to deduce the "behaviour" of the language from examining its rules alone. This is very similar to trying to read the expression of a program. And thus, we have a crude mechanism for measuring the readability of a program's expression for a given programmer.

**Measuring Readability Empirically**

We start with a full test suite and an expression passing the entire test suite. Neither have been shown to our subject programmer. We now select a small number of tests, say ten tests. We are permitted to permute zero or more of the tests such that they fail instead of pass, and we do so. We show our sample tests to the programmer and we presume that the programmer understands them. (In other words, we are hand-waving and saying the test suite is readable! Fortunately, this is not a dissertation and I need not fear disqualification for such a gaping logical hole). The sample tests are just like the challenge sentences in Queries and Theories.

Now we show the program expression to the programmer and ask them to predict which of the sample tests pass and which fail, just like asking a challenger to validate and invalidate challenge sentences. We can measure the "readability" of the expression in various empirical ways, such as measuring the time required for the programmer to determine the correct answer by inspection. or we can work with statistically significant sample sets of programmers and measure how many answer the challenge correctly within a certain time limit.

Hand waving over the exact procedure, the idea is fairly straightforward: We are claiming that "readability" represents a programmer's ability to predict the behaviour of a program from examining its expression.

**Coupling**

One factor that strongly affects the readability of a program is the amount and style of coupling between its parts. As an anti-example, consider cryptography, the art of making things unreadable. A desirable property of cryptographic algorithms is that changing just one bit of a plaintext message changes an average of 50% of the bits in the encrypted message, and does so in a way that appears to be random: There is no way to predict *which* 50% of the bits will change.

How does this translate to program expressions? Consider the expression to be the plaintext message and consider the test suite results to be the encrypted message. The analogy is not exact because the message is also the algorithm, but imagine a program with the same property: Changing just one symbol anywhere in the program would cause, on average, 50% of the tests to fail. A program with this property would require a lot of effort to understand because any one element of its functionality would depend upon the interaction between approximately 50% of its parts and the programmer cannot reliably know which 50% are affected.

Although it is not certain that the shortest possible expression of a program would exhibit this kind of coupling between its symbols, I conjecture that it is quite likely that an extremely short expression of a program would be highly coupled. Here is my reasoning.

Consider a program where--on average--changing one symbol changes the behaviour of just one test. One way to construct such a program is to break it up such that each test has its own piece of code entirely independent of the other pieces for the other tests. Such a program has certain maintenance difficulties. And each piece might be easy or difficult to understand based on other factors. But all other things being equivalent, an uncoupled expression would have a big advantage over a highly coupled expression: There would be a fixed and small set of symbols responsible for the behaviour of each test.

Now think about a highly coupled expression of the same program. The highly coupled expression can use one symbol for multiple purposes. On average, each symbol is involved in code for 50% of the tests. My conjecture is that if the program has *N* tests, the size of an uncoupled expression will be on the order of *N* and the size of a highly coupled expression will be on the order of log*N*.

So I conjecture that as the expression of a program approaches its Kolmogorov-Chaitin complexity, its coupling increases. Fine. But how does that affect readability?

**Coupling and **

And as its coupling increases, its readability decreases. Note that I say "As the expression of a program approaches its Kolmogorov-Chaitin complexity." applying DRY or Single responsibility to a program expression can make it more readable up to a point. But our search for the Kolmogorov-Chaitin complexity of a program ignores that point and ruthlessly seeks out the most compact expression without regard for semantics.

**Mel**

Consider a the most compact expression of a program, the very shortest one that passes the test suite. One conjecture I have for why it might be unreadable is that it might pass the test suite *by coïncidence*. By this, I mean that although the result of the program is correct, the structure of the program is entirely unrelated to the test suite's structure. As a counter-example, consider business applications. Typically, there are entities (customers, products, accounts, addresses, &c.), relationships between the entities, and operations of some kind on the entities.

The test suite for such an application is going to be organized along those lines. For example, you might organize the test suite around operations to create customers, purchase products, deal with overdue accounts, and so forth. But what if the shortest possible expression of the program has no such organization internally?

Although that seems impossible if we think of a human programmer expressing the program, remember that a human didn't express it, we found it by brute force. Maybe instead of entities for customers, addresses, products and accounts there are expressions that put all data into a single key-value dictionary, or into a single undifferentiated list? maybe instead of operations defined in functions or methods there is data-driven logic that looks a little like a Greenspun Von Neumann machine, so there is just a single lookup-and-execute routine trampolining itself repeatedly?

Such a program might be very heard to read

**Expression Complexity**

> In algorithmic information theory (a subfield of computer science), the Kolmogorov-Chaitin complexity (also known as descriptive complexity, Kolmogorov complexity, stochastic complexity, algorithmic entropy, or program-size complexity) of an object such as a piece of text is a measure of the computational resources needed to specify the object... More formally, the complexity of a string is the length of the string's shortest description in some fixed universal description language... Strings whose Kolmogorov-Chaitin complexity is small relative to the string's size are not considered to be complex.  --Adapted from the introduction to Wikipedia's article on [Kolmogorov complexity](http://en.wikipedia.org/wiki/Kolmogorov_complexity)

If we wanted to talk about the Kolmogorov-Chaitin complexity (or just plain "complexity") of a program's expression, how would we do it? We *could* take about the shortest description of the program's expression, which gives rise to an interesting discussion about programs that write programs. Although all of the trivial programs given above are functionally equivalent modulo our test suite, their expressions are progressively more complex.