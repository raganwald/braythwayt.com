## Is planning essential? And are plans really inconsequential?

We may never know who first said that "_Planning is essential, but plans are inconsequential_."

It may have been the military theoretician [von Clausewitz](http://en.wikipedia.org/wiki/Carl_von_Clausewitz). Churchill later said that "Plans are of little importance, but planning is essential," Eisenhower famously said that "Plans are worthless, but planning is everything." Regardless of who said it and what they were thinking of when the said it, I strongly believe it to be true about Software Development, and I think that taking this into account is important for building successful software that delivers lasting value.

![Clausewitz.jpg](images/Clausewitz.jpg)

**Is planning valuable?**

Let's start by examining the fundamental question implied by the title of this post: Is planning really valuable? Or is planning in and of itself worthless because it's the plan that's really valuable? If we believe that plans are valuable, planning is the activity of producing plans, and we infer that planning has little or no value independent of the plan it produces. It's the plan that is valuable, not the planning. We could outsource the planning, or even buy a plan off the shelf and if it was the right plan, we'd be just as successful as if we did the planning ourselves.

Conversely, if we believe that planning is valuable, planning is an activity that involves something more than simply producing a plan. We believe this activity confers some value independently of the plan, and we believe that the plan without the planning is significantly less valuable. Outsourcing planning or buying a plan off the shelf won't work because we'd lose the value of the planning itself.  


While I think people might quibble over the relative value of planning and plans, I suspect most people agree that planning is valuable. Even in organizations that practice throw-it-over-the-wall development: The arguments I've heard in favour of "architects" doing the planning while "grunts" do the implementation isn't that this is just as effective as having the architects do the implementation. The argument is usually that any loss of effectiveness is more than compensated by the money saved on grunt salaries or perhaps by the ability to get more things done in the face of a limited ability to hire and keep talent.

**What is planning?**

Let's discuss what needs to be done to compose a plan.

First, we read and understand the requirements. In most cases there are areas of ambiguities, so we clarify those. We push back a bit and get some idea of priorities. We investigate and discover some unstated requirements. We discover constraints on the solution. In other words, we gather information about the proposed solution that was not expressed in the given requirements.

We then move on to determine the implementation. We consider alternatives. We think about the tradeoffs between them. We consider the constraints on the implementation such as the talent available. We dive down deeply into the more promising choices and identify benefits and risks. We do a certain amount of design work. We might circle back to the requirements and poke them a bit, seeing if there is some flexibility that might permit the use of certain promising implementations. When we have a promising approach, we write that up as "The Plan."

But again, we have gathered information about the implementation that is not reflected in the plan itself. The plan is, in essence, a subset of the information we gathered in the planning phase. It is a subset of the knowledge the team has acquired about the problem and proposed solution, but only a subset. When we contrive to throw the planning away---by throwing the plan over a wall or waiting a long time to implement the plan---we throw away some of our knowledge.

When we think of the plan as a subset of the knowledge obtained through planning, we see it in a different light. It's like a _fossil_. It reflects the knowledge, but it isn't the knowledge. It's an imprint in sediment outlining the size and shape of the knowledge.

**Procurement fossils**

Given that I believe plans are fossils and that the value of planning outweighs the value of a plan, do I believe that plans are actually inconsequential? Yes. And yet no. I do believe that a plan without planning is inconsequential. I do not believe you can throw a plan over the wall. Forget BigCo and its [Architecture Astronauts](http://www.joelonsoftware.com/articles/fog0000000018.html) for a moment. Consider a very common scenario, an [RFP](http://en.wikipedia.org/wiki/Request_for_proposal) for a software project. Typically, the client organization has researched their problem---quite possibly with the help of a vendor---and has determined their requirements. They then ask competing vendors to submit proposals.

On the face of it, this is a good way for them to make sure they have the best vendor working for them. However, this is a subtle variation on the "throw it over the wall" problem. Each vendor works from a documented set of requirements. What are the requirements, if not a fossil of the knowledge required to understand the problem? The client has a vast amount of knowledge about their problem, which they distill into requirements that are thrown over the wall to vendors. Requirements documents are fossils just like plans.

A far better approach is to ensure that each vendor is invited to study the requirements with the client. Collecting the requirements repeatedly may seem like a waste of time, but it ensures that the team preparing the proposal does so with all the knowledge available, not just  subset that made it into the document. In my experience, if a client whittles the vendors down to three and repeats the requirements process with each vendor, you will wind up with three related but separate sets of requirements. Each vendor will uncover slightly different requirements. That's a huge win.

Requirements being fossils, they exist to demonstrate that investigation has taken place, but they cannot be substituted for investigation, they cannot be thrown over the wall if you expect to receive the full benefit of the investigation.

Speaking of clients, there's also something called an [RFQ](http://en.wikipedia.org/wiki/Request_for_quotation). In an RFQ, the client determines their requirements and then does the planning! All they want is the cost of implementing the plan. I received one of these lately. It was from a client who said they wanted a "proposal," but their requirements specified that we were to propose a Content Management System. Furthermore, they specified a list of features the system was to have, a list of features that just happened to match the list of features for one particular PHP-backed CMS I won't name here.Quite obviously, they were presenting their own plan, likely one written in conjunction with one specific vendor.

Skipping briskly past the business implications of this cozy little arrangement, I don't believe this client should do business with anyone except the vendor that helped them write the requirements and plan in the first place. They have done the planning with the client. Other vendors haven't, so if they were to engage somebody else at arm's length to implement the plan, that vendor would be working without the deep knowledge obtained during the planning process.

The RFQ is a fossil just like a plan is a fossil. It's a record of planning, a demonstration that planning has taken place, but it is not a substitute for planning.

![](images/Architecture-diagram-web.jpg)

**Are plans inconsequential?**

So should we throw requirements and plans out? No. I did not say we should throw plans out, and I don't say we should throw requirements out. Plans and requirements _are_ fossils, but fossils have a tremendous utility: They prove that dinosaurs once walked the Earth. I am abusing this metaphor, but what I am saying is that plans and requirements are tremendously valuable for ensuring that the team has actually done the research.

Writing a coherent plan forces the team to perform useful and complete research. Writing intelligible and sensible requirements forces a team to thoroughly research the problem. As a manager, it is hard for me to know how much you are thinking about a problem in the abstract, but if you give me a plan, I can use that as the basis of probing your thinking and perhaps to suggest useful avenues to explore.

Requirements and plans are _necessary but not sufficient_. If you don't do them, I believe you have a problem. If you do them but do them poorly, I believe you have a problem. Good requirements and good plans are defensible, but that doesn't guarantee success. Bad requirements and bad plans guarantee failure. For this reason, it is useful to demand a plan, and then to probe the plan for weaknesses. Did you consider this? What are you going to do about this? How does this plan address this requirement? Will users really figure this out?

None of that really means that the requirements or the plan are sufficient in and of themselves for guaranteeing success, because they are still fossils. But give us confidence that the team has done the investigation and planning required to succeed. If a plan does not have any obvious weaknesses, we don't say that the plan guarantees success for anyone following it. To do so is like saying that the fossil of a dinosaur is enough information to reproduce a dinosaur. But if the fossil lacks something, we know the dinosaur lacks something.

You see this dynamic at work in raising funds for startups. Investors want business plans, even though pretty much every successful company has needed to change or even outright discard its original plan. But the value of a business plan is that it forces the founders to think their business through. And once written, they aren't discarded. No investor expects a startup to [slavishly follow a plan](http://sourcemaking.com/antipatterns/death-by-planning), but no investor expects a startup to manage by the seat of its trousers either.

I'll end this line of thought by describing one of the qualities I look for when examining a plan. I[ look for what's unique about a plan, not what most plans have in common](http://weblog.raganwald.com/2007/05/not-so-big-software-application.html). By way of example, consider a startup describing it's architecture. AWS, check. Ruby on rails, check. NoSQL database, check. Single page application, check. These things are all characteristics of a great many startup architecture plans, and in my opinion they need to be given very little weight in any one plan. They are almost givens. They should be footnotes, or stuffed in an appendix somewhere.

The real meat of a plan for a startup is what's unique to their problem, what is in their plan you won't find in another startup's plan. For example, does their database have temporal semantics, and if so, why? What is unique about their user model that solves a particular problem they anticipate or dovetails with a particular part of their customer acquisition strategy? Features like these are evidence that the people doing the planning have been thinking very hard about this particular business and not just cobbling together a plan by copying and pasting paragraphs and diagrams from other plans.

This isn't the only means of evaluating whether a plan is good or bad, but it's one example, and one that again boils down to the question of whether the plan demonstrates that the team has engaged in planning.

**Summary**

In sum, I believe that planning _is_ essential. I also believe that plans are consequential, not inconsequential. But not as artefacts with value in their own right, but as evidence of investigation and planning, evidence that can be tested and probed for weaknesses. I do believe that a plan without the planning is nearly worthless, and that business processes involving throwing requirements and plans over the wall---whether as part of an elaborate waterfall model or as part of a procurement model---are counter-productive.

(discuss this post on [Hacker News](http://news.ycombinator.com/item?id=2518269) or [Proggit](http://www.reddit.com/r/programming/comments/h4zcc/is_planning_essential_and_are_plans_really/).)

**_Appendix: Two thought experiments_**

I've asserted that planning is valuable in and of itself. How could we test this assertion?

Well, I do not have the resources to conduct a double-blind study, so instead I will propose something within my budget: Some thought experiments. In both thought experiments, we have some software development. This may be a huge, monolithic waterfall project, or it may be a single iteration in an agile project. The desired outcome of the project is pre-defined in an implementation-independent fashion, such as with formal requirements or high-level user stories.

We will perform the development in two phases. First, there will be some planning activity, and then there will be some development activity. The planning activity will produce two results:

1. The people conducting the planning are changed. We know this always to be true, because their memories change.  
2. The planning produces an artefact, the plan.

Now for our first experiment. Let's imagine three identical groups, Team "P" for planning, Team "D" for documentation, and Team "I" for implementation. Teams "P," and "D" conduct the same planning activity in the same time, producing the same document. Team "I" sits idle during this period. And then we split behaviour:

Team "P" destroys the document and then immediately attempts to perform the work, using the pre-defined outcome as a guide and whatever other methodology they desire, provided they do not attempt to immediately recreate the plan from short-term memory. The can end up with the same or some different piece of software, provided it meets the defined requirements. Team "D" passes the document to team "I," who attempt to implement the plan as written. No communication between "D" and "I" is permitted except for the plan.

Which team produces the higher value software? Team "P" who did the planning but discarded the written plan? Or Team "I" who were given the plan but did none of the planning?

Let's move on to our second thought experiment. Let's create two more identical teams, Team "N" and Team "L." Both will do the planning, both will write plans, and both will do the development with the aid of the plan. Team "N" will do the planning, write the plan, and then immediately do the development work. Team "L" will do the planning, write the plan, and then delay doing the work by a significant amount, perhaps while they do some other work on an unrelated project. So while Team "N" has the plan in hand, they also have the fresh memory of doing the planning. Team "L" must do the work later, by which time some of the planning will have faded from their memories. 

Which team produces the higher value software? Team "N" who planned and then executed the plan while the planning was still fresh in their minds? Or team "L" who planned, then waited until the planning was a distant memory before executing the plan?

My anecdotal experience suggests that planning is incredibly valuable in and of itself. If we actually conducted our thought experiments, I would expect Team "P"---who planned and then threw away the plan---to outperform Teams "D" and "I"---who planned and then "threw the plan over the wall." I would expect Team "N"---who planned and then executed the plan while it was fresh in their mind---to outperform Team "L"---who delayed executing the plan, allowing their memory of the planning to fade.

[Permalink](http://raganwald.posterous.com/is-planning-essential-and-are-plans-really-in)
