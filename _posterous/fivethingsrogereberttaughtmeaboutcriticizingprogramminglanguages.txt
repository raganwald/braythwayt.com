## Five things Roger Ebert taught me about criticizing programming languages

Roger Ebert is a film critic (as if you didn't know). He wrote a book called, "[Your Movie Sucks](http://www.amazon.com/gp/product/0740763660/ref=as_li_ss_tl?ie=UTF8&tag=raganwald001-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0740763660)," and I learned a little about criticism from reading that book. And naturally, I'm going to share it with you. I'm a lot more interested in programming languages than I am in movies, so here's what I know about criticizing programming languages that I learned from Roger Ebert. (All quotes are by [Roger Ebert](http://blogs.suntimes.com/ebert/2011/12/test_in_the_meadow.html) unless otherwise attributed.)

**five characteristics of good movie criticism**

First off, "Your Movie Sucks" is a compendium of zero, half, and one-star reviews. And they are _hilarious_. I imagine that giving a movie a terrible review is an awful job. It's necessary, but how dry and boring to rattle off the reasons why a movie sucks. Newspaper criticism is not just providing data, it's **entertainment**. It's also much more memorable if it's entertaining to read. That matters, and this leads into the second thing:

Second, "Your Movie Sucks" taught me a lot about movies. Many of the bad reviews are **educational**. Ebert explains why these movies are so bad, and in doing so, he helped me learn a little more about movies in a way that lets me enjoy the good ones more. Bad reviews can to do more than steer readers away from clunkers, they can help them get more out of the movies worth seeing. These two things, entertainment and education, both work together. Entertaining reviews are memorable, which helps them be more effective as education.

But on to the third point: Without exception that I can recall, Ebert's reviews were **impersonal**. Ebert savaged these movies. He questioned why time and money were wasted on them. The titular review is a direct message to Rob Schneider that his movie sucked. But he never told Mr. Schneider that he, personally sucked. As evidence on the impersonal nature of Ebert's approach in the book, he gives as an example a terrible review of "The Brown Bunny." Ebert reviewed a rough cut and gave it zero stars. But when the director recut  the movie, Ebert gave it a positive review. Ebert doesn't carry a grudge or "flip the bozo bit" on filmmakers, he reviews each film on its merits.

> This movie doesn't scrape the bottom of the barrel. This movie isn't the bottom of the barrel. This movie isn't below the bottom of the barrel. This movie doesn't deserve to be mentioned in the same sentence with barrels.

My fourth point is that Ebert's reviews are **appropriate for genre**. He has said many times that he personally dislikes slasher films. But he does give some positive reviews when they are interesting and good relative to the genre. He gave a positive review to "Breaking 2: Electric Boogaloo." Why? Because it's a dance movie about a bunch of kids that stage a musical thingie to save an institution. Sure, it's a hackneyed concept, but if you like "The kids'll put on a show" movies, you deserve to know that this one will not disappoint.

Lastly, Ebert's reviews are **appropriate for his audience**. He is more than capable of discussing movies in dry, intellectual terms. He has the background to teach film. But his newspaper and blog and television audiences are of a different character, so he speaks to his audience. He also helps audiences determine whether _they_ will enjoy the movie given their experience and background. Another critic might write for a more learned audience, and that critic will be correct to use more technical terms and to steer that audience to a different set of movies. The only mistake is to talk down to the less experienced audience. It's fine to educate, but you have to do so one approachable step at a time.

**entertainment and education in programming language criticism**

These five characteristics of good criticism---that it be entertaining, educational, impersonal, appropriate for genre, and appropriate for audience---apply to criticizing programming languages. And when I think of "criticism," I am thinking of blog posts, I am thinking of comments on sites like Hacker News or Reddit, I am thinking of tweets, and I am thinking of the design of new languages. Let's look at each one:

Good criticism is entertaining. While sites like Hacker News discourage the "witty reply," I think it's good to be witty if your criticism hits the other four points. It's only bad when the wit is the only content. Alan Perlis is a master of entertaining critiques. My favourite witty critique of his goes: "The debate rages on: Is PL/1 Bactrian or Dromedary?" If the wit gets people thinking about something educational as opposed to just insulting, it's a win.

(I am violating "appropriate for audience," I guess. For those who don't know, PL/1 was a language designed by committee, and a popular joke is that "A camel is a horse designed by committee." Of course, camels are a miracle of optimizing design for living in a hostile ecosystem, so now the Joke-Explainer has ruined everything. Oh well!)

> Did you know that if a certain kind of worm learns how to solve a maze, and then you grind it up and feed it to other worms, the other worms will then be able to negotiate the maze on their first try? That's one of the scientific nuggets supplied in "Phantoms," a movie, based on the popular Dean Koontz novel, that seems to have been made by grinding up other films and feeding them to this one.

More importantly, good criticism is educational. Any fool can tick off the bad points of a programming language. But every language has flaws. How does pointing them out educate the reader? Educating people is tougher than it looks. Simply assuming that you're the smartest person in the room and then demonstrating that to yourself is not education. Helping people see something in a new way is education.

Remember the adage, "If you give a man a fish, you feed him for a day. If you teach a man to fish, you feed him for life?" It's the same with criticism. If you point out a language's flaws, you entertain me for a few minutes. If you give me an insight into how programming languages work, you educate me for life.

One way to educate is to give people some new ways of evaluating a language. For example, CoffeeScript's scoping rules differ from JavaScript, and [that can bite you under certain circumstances](http://lucumr.pocoo.org/2011/12/22/implicit-scoping-in-coffeescript/). Some of the most interesting comments I've seen on the subject compare CoffeeScript to other languages such as Python or Scheme, and discuss the trade-offs in each language's choices. This educates readers about other languages and helps them internalize a model of variable scoping behaviour, leading them to become better programmers whether they change tools or not.

**be specific in tone and genre**

I won't spend much time on the subject of [not attacking people in general based on one specific thing they say or do](https://github.com/raganwald/homoiconic/blob/master/2009-05-01/optimism.md) such as disagreeing with what you believe about a programming language. But I will point out that good criticism is specific about what it criticizes. For example, I think it's good to point out flaws in a programming language, but I scratch my head at general statements such as "...and that's why Fizbar Language is brain-damaged." Get specific, stay specific.

> "Mad Dog Time' is the first movie I've seen that doesn't improve on the sight of a blank screen viewed for the same length of time. It is like waiting for the bus in a city where you're not sure they have a bus line.

Being appropriate for genre is an important part of programming language criticism. It's true that most popular programming languages tend to get less and less specific over time. For a demonstration of this, you notice that JavaScript has escaped the browser. Nevertheless, programming languages do have specific applications and niches. It's important to criticize them within that context. Furthermore, that context includes a target programmer. There is very little point in criticizing CoffeeScript because it lacks referential transparency or typesafe monads. Those are good features, but languages with these features (such as Haskell) are from different genres, appealing to different programmers for different applications.

I went to [LL2](http://weblog.raganwald.com/2007/01/where-were-you-on-saturday-november-9.html), a conference for "lightweight languages" hosted by Paul Graham. During the Q&A following every talk, there was always at least one person complaining that the presented language didn't have macros. I think it's possible to build a lightweight language around syntactic meta-programming, but at the same time, I think that when presented with a language, you have to look at what it's trying to accomplish within it's own style or genre and ask whether it is doing a good job in that self-consistent world. The two keynote speeches were by Joe Armstrong (erlang) and Yukihere Matsumoto (ruby). Neither language has macros, and there is plenty of solid criticism to be made about how they do within their genre without complaining that they fail to be good examples of the Lisp genre.

(Complaining that a language isn't Lisp and/or Haskell is futile. If there's some cross-genre feature you want in a language, be patient. Just as some people think that Casablanca can be "improved" by colorizing it, somebody will come along sooner or later and try to [bolt macros onto Ruby](https://github.com/raganwald/rewrite_rails) or implement lazy evaluation. [Badly](http://weblog.raganwald.com/2007/02/haskell-ruby-and-infinity.html).)

**speak to your audience, not yourself**

Part of the genre of a programming language is its target audience. Even though you may appreciate that [a monad is just a monoid in the category of endofunctors](http://stackoverflow.com/questions/3870088/a-monad-is-just-a-monoid-in-the-category-of-endofunctors-whats-the-problem), a language's users may prefer [andand](https://github.com/raganwald/andand), [?.](http://jashkenas.github.com/coffee-script/#operators), or [ergo](https://github.com/raganwald/JQuery-Combinators). That being said, the audience for a language may not be the same as the audience for your criticism. Furthermore, you may have many different audiences for your criticism. What flies on Hacker News may crash and burn on Reddit. That is not wrong. There is not some universal truth, and if only those [morons](http://www.youtube.com/watch?v=BHqL7dNujNc) on ______ would get it, the world would be a better place.

If you choose to write something to an audience, write it to them, taking into account their interests, their prejudices, and their fears. Respect their social dynamic. I am not saying you should tolerate bullying, trolling or rudeness even if that is the norm in some places. But when you choose to make a reasoned argument, frame it for your audience. If your comments on Hacker News are consistently downvoted, something is wrong. Either you are saying the right thing in the wrong way, or you're saying it in the wrong place. You might need to find a new way  to talk to the folks at HN, or you need to find the folks who like the way you express your thoughts.

(I've learned the hard way that Reddit has had its Eternal September. It's a different place now than in its early days. That is not a bad thing, it is only bad when I go there and don't respect the new culture in place.)

> The movie delights me with its cocky confidence that the audience can keep up. '[Primer](http://primermovie.com/index.html)' is a film for nerds, geeks, brainiacs, Academic Decathlon winners, programmers, philosophers and the kinds of people who have made it this far into the review. It will surely be hated by those who 'go to the movies to be entertained', and embraced and debated by others, who will find it entertains the parts the others do not reach.

Now given an audience, how do you know how to speak to them? There are a few hints you can pick up. First, try to figure out how close they sail to the edge of the world. Do they constantly discuss new things? Or do they just want to "get stuff done." Do they seem to enjoy discussing the implications of esoteric languages and [weird libraries](https://github.com/raganwald/Katy)? Or do they prefer to split finer and finer hairs over how to maximize the use of existing, proven tools? I've personally found this to be the most important characteristic of an audience when writing programming language criticism. Some audiences are more willing than others to bandy new ideas around. It's that simple.

That being said, there is one other thing I try to figure out, an audience's academic bias. Do they like or disdain academic jargon? Do they tend to cite research or do they prefer industry experience? Do they practice credentialism or anti-credentialism? You comments should match their style if you want your criticisms to be appreciated. Some folks really want to place a programming language or feature into the context of computer science's "body of knowledge." Others just want  to talk about what it is and how it works (or doesn't work). 

**summary**

I'll close by repeating what I noted above:

> These five characteristics of good criticism---that it be entertaining, educational, impersonal, appropriate for genre, and appropriate for audience---apply to criticizing programming languages. And when I think of "criticism," I am thinking of blog posts, I am thinking of comments on sites like Hacker News or Reddit, I am thinking of tweets, and I am thinking of the design of new languages.

Merry Christmas and Happy Chanukah, everyone!

(Discuss on [Hacker News](http://news.ycombinator.com/item?id=3386909) or [Reddit](http://www.reddit.com/r/programming/comments/no8o8/five_things_roger_ebert_taught_me_about/))

[Permalink](http://raganwald.posterous.com/five-things-roger-ebert-taught-me-about-criti)
