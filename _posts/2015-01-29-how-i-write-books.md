---
layout: default
---

Chris wrote to ask:

> I had a couple of questions about writing and publishing:

> 1. What software do you use for writing? I’ve read that Sublime Text is the way to fly. I’m new to the markdown process of writing; I’m more at home with Word, but I’m willing to try something new.
> 2. I’m investigating [LeanPub]. Another alternative would be to take a more DIY approach and use Gumroad. Why did you choose Leanpub? Was it because it’s the best end-to-end option? I know that it also allows you to support a Canadian-based business as an added bonus. Also, I can see the point that, since they are already established, you know that a specific, book-buying audience is visiting the site.

I use [GitHub] and [LeanPub] to publish my books. The combination is unbeatable for my personal needs, and IMO, are a combination that is much bigger than "the sum of its parts."

[GitHub]: https://github.com
[LeanPub]: https://leanpub.com

### why i use github and leanpub

I write [books](https://leanpub.com/u/raganwald), and I write a [technical blog](http://raganwald.com). I use the same toolchain for blogging and writing. It is more than a simple matter of convenience, part of how I create my books is to try some of the material out as blog posts. After geeting feedback on the posts, I rework the material and put it into my books. The material from [Greenspunning Predicate and Multiple Dispatch in JavaScript](http://raganwald.com/2014/06/23/multiple-dispatch.html) made its way into my book [JavaScript Spessore].

[JavaScript Spessore]: https://leanpub.com/javascript-spessore
[GitHub Pages]: https://pages.github.com

I would find it very awkward to take material on a one-way trip from a blog post into a professional publishing tool like InDesign, so I have made a conscious decision to use text files in [Markdown] format for everything. I publish. Many successful authors have much higher standards for the format and layout of their books, and I believe they are not satisfied with Markdown. I understand that, but the tradeoff works for me.

I pubish the blog posts using [GitHub Pages], and I use LeanPub's GitHub integration to publish my books. Storing things in GitHub has a very big benefit for my blog posts and for my "free" books: Readers can file issues and even submit pull requests to suggest fixes.

[Markdown]: http://daringfireball.net/projects/markdown/

![A pull request](/assets/images/pullrequest.png)

Again, I find it invaluable that I have the exact same process for both kinds of my writing: Make changes, commit, push upstream. Review pull requests, merge changes.

This workflow is obviously very accessible for programmers who are used to this process for code. But I believe that this process is valuable for all forms of collaboration, and that over time the industry will find ways to refine it to be even more useful for a wide variety of users. For example, GitHub has a specific feature for reviewing changes to prose:

![Rendered Prose Diff](/assets/images/rendered.png)

GitHub also has enormous support for [making changes right in a web browser and submitting a pull request][web-flow]. I use it myself to make quick changes. Click on a pencil, make an edit, submit a pull request. Bam!

[web-flow]: https://help.github.com/articles/github-flow-in-the-browser/

### leanpub as a business tool

From a marketing and sales point of view, I have not tried other approaches, so I cannot comment on whether LeanPub is superior. I do not publish printed works, not do I directly publish through distribtion channels like Amazon. I imagine LeanPub do provide some "walk-in traffic" for my book sales, I have seen spikes when a book of mine or a bundle is featured, but that is not my main motivation for using them.

![Rewriting a Blog Post](/assets/images/history.png)

What I like most about LeanPub is the "work in progress" model. I tend to rewrite blog posts furiously as I get feedback, and I do the same with books. Getting feedback during the writing process is very valuable to me. Presales don't hurt, obviously. I can tell you that I have abandoned at least two prospective books because the Internet yawned and didn't sign up to be informed when they were published.

That feedback can be obtained in many ways, but it doesn't hurt that LeanPub makes it so easy to put up an unpublished book and get feedback, then publish it a morsel at a time if you decide to go ahead with the project. That's the whole idea behind "lean" publishing: Tighten and accelerate the feedback loop.

### closing the loop

Which brings me to a close: My entire workflow revolves around tightening the write -> read -> feedback -> rewrite loop. Text files in [Markdown] format facilitate this. Trying material out in my blog using [GitHub Pages] facilitates this. [Pull requests in the browser][web-flow] facilitate this. And [LeanPub] facilitates this. Each piece works with the other pieces to write, be read, obtain feedback, and rewrite.

The tools will continue to evolve, but I believe very strongly that this is the right track for me to be on: Tools that facilitate speed of publishing, feedback from the market, and collaboration with readers.

Thanks for allowing me to share your question.

(Spot a typo? [Edit this page](https://github.com/raganwald/braythwayt.com/edit/gh-pages/_posts/2015-01-29-how-i-write-books.md)!)