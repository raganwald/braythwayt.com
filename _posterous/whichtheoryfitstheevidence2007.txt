## Which theory fits the evidence? (2007)

_(This post originally appeared in _[2007](http://weblog.raganwald.com/2007/06/which-theory-first-evidence.html).)

There are two schools of thought about the practice of managing software development (The _theory_ of managing software development is of little use to us, because "The gap between theory and practice is narrower in theory than it is in practice").

One school is that everything is fully deterministic in practice ("Theory D"). If development appears, from the outside, to be probabilistic, it is only because we haven't discovered the "hidden variables" that fully determine the outcome of software development projects. And, since we are talking about development in practice, it is practical to measure the variables that determine the outcome such that we can predict that outcome in advance.

The other school of thought is that development is fully probabilistic in practice ("Theory P"), that there are no hidden variables that could be used to predict with certainty the outcome of a software development project. Theory P states that the time and effort required to measure all of the variables influencing a software development project precisely enough to predict the outcome with certainty and in advance exceeds the time and effort required develop the software.

Theory P does not mean that software development cannot be managed in such a way that the desired outcome is nearly certain: the flight of an airplane is fully probabilistic as it encounters atmospheric conditions, yet we have a huge industry built around the idea that airplanes arrive at their destinations and land on the runway as planned.

**why do theory p and theory d matter?**

Understanding whether software development follows the Theory D (fully deterministic) model or the Theory P (probabilistic) model helps us set our expectation for the relationship between what we plan and what transpires.

If we believe Theory D, we believe that it is possible and practical to plan software development entirely in advance. Therefore, when things do not go as planned, our first reaction is to either blame the planners for faulty planning or to blame the implementers for failing to carry out a reasonable plan. Believing in Theory D, we believe that we ought to have a plan that can be carried out to perfection.

> Programming is not complicated because computers are complicated---it's complicated because your requirements are complicated (even if you don't know it yet).  
---Chris Ashton

  
If we believe Theory P, we believe that it is only possible and practical to plan some part of software development in advance. Therefore, when things do not go as planned, our first reaction is to embrace the new information and update our expectations. Believing in Theory P, we believe we ought to have aprocess for continually updating a plan that asymptotically approaches a description of reality as the project nears its conclusion.

**belief drives behaviour**

Our belief about which theory is true drives the way we manage software development projects in almost every way. Here are three examples: the way we manage _software design_, the way we manage _time estimates_, and the way we manage _selecting people_.

> If extra time is required, people on Theory D projects work nights or weekends, or they cut testing time. They do this because their belief is that if a task takes too long, the fault lies with the estimate or with the worker carrying out the task, and by working overtime they can "make up for their fault."

**software design**

Theory D adherents believe you can design software in advance. They believe it is possible to collect all of the information needed about software's requirements and the technical elements of its construction, such that you can fully specify how to build it before you start. In short, Theory D adherents believe in Big Design Up Front.

Theory P adherents believe that software can only partially be designed in advance. They believe that requirements suffer from observation, that the act of building software causes the requirements to change. Theory P adherents also believe that technical factors cannot be perfectly understood, that only the act of trying to build something with specific components will reveal all of the gotchas and who-knews associated with a chosen technology strategy. They believe that software design is an iterative process, starting with a best guess that is continually refined with experience.

**time estimates**

Theory D adherents believe it is possible to estimate the amount of time required to develop software (in both the large and the small) with precision. This is partly a consequence of their belief that you can know the requirements and design in advance, and therefore you can plan the activities required without uncertainty. Theory D adherents do not plan to miss milestones. Theory D adherents do not, in fact, have a process around re-estimating tasks; instead, they have a mechanism for raising exceptions when something goes wrong.

Theory D adherents believe that the normal case for software projects is that tasks are completed within the time estimated. (If extra time is required, people on Theory D projects work nights or weekends, or they cut testing time. They do this because their belief is that if a task takes too long, the fault lies with the estimate or with the worker carrying out the task, and by working overtime they can "make up for their fault." Theory D managers often "game" their workers by "negotiating" estimates downward in a cruel game of "guess the estimate I'm think of.")

Theory P adherents are always fussing with an updated view of how long things will take. They talk about "velocity" or "effective vs. actual programmer-hours." Theory P adherents believe that the normal case for software projects is that tasks are rarely completed exactly as estimated, but that as a project progresses, the aggregate variance from estimates falls.

  
Theory P adherents believe that there are lies, damned lies, and software development estimates.

**selecting people**

Theory D adherents believe that the most important element of successful software development is planning. If a plan is properly constructed for the design and development of a software project, the actual implementation is virtually guaranteed. Theory D adherents therefore invest most of their human capital in "architects" and "managers," leaving little for "programmers." They often have architects, senior developers, and other "valuable resources" involved in the early stages of projects and then moved to the early stage of other projects, leaving the team to implement their "vision." They likewise believe that you can "parachute" rescuers into a troubled project. Since the plan is perfect, it is easy to jump in and be productive.

Theory D adherents believe in "architecture by proxy," the belief that using frameworks, components, programming languages, libraries, or other golden bullets makes it possible to employ lesser talents to perform the implementation of software, since the difficult decisions have been made by the creators of the pre-packaged software. Theory D adherents also believe in "success by proxy," the belief that using methodologies, practices, SDLCs, or other buzzwords makes it possible to employ lesser talents to perform the management of software development, since the difficult project management decisions have been made by the "thought leaders" who coined the buzzwords.

Theory P adherents believe that the most important element of successful software development is learning. They invest their human capital more evenly between implementers and architects, often blurring the lines to create a flatter technical structure and a more egalitarian decision-making environment. This is a consequence of the belief that learning is important: if you invest heavily in a few "smart" people, you have a very small learning surface exposed: there is only so much even very bright people can learn at one time. Whereas when the entire team meets a certain standard for competence, there is a very large learning surface exposed and the team is able to absorb more information.

Theory P adherents strongly prefer to have the same team work a single project from start to finish, believing that when a member moves on to another project, crucial knowledge moves on with them. They likewise abhor bringing new members onto a team late in a project, believing that the new people will need experience with the project to "get up to speed."

Theory P adherents use frameworks (especially testing frameworks), but are skeptical of claims that the framework eliminates technical risk or the need for talented contributors. Theory P adherents, even Agilists, are skeptical of methodology claims as well. They do not believe that a deck of slides and a nicely bound book can capture the work required to learn how to develop software for a particular user community in a particular environment.

**so which theory fits the evidence?**

So: Which theory fits the evidence collected in sixty years of software development?

To date, Theory P is the clear winner on the evidence, and it's not even close. Like any reasonable theory, it explains what we have observed to date and makes predictions that are tested empirically every day.

Theory D, on the other hand, is the overwhelming winner in the marketplace, and again it's not even close. The vast majority of software development projects are managed according to Theory D, with large, heavyweight investments in design and planning in advance, very little tolerance for deviation from the plan, and a belief that good planning can make up for poor execution by contributors.

Does Theory D reflect reality? From the perspective of effective software development, I do not believe so. However, from the perspective of organizational culture, Theory D is reality, and you ignore it at your peril.

post scriptum: _Do not confuse Computer Science---the study of the properties of computing machines---with Software Development, the employment of humans to build computing machines. The relationship between Computer Science and Software Development parallels the relationship between Engineering, the hard science of the behaviour of constructions, and Project Management, the employment of humans to construct engineered artefacts._

[Permalink](http://raganwald.posterous.com/which-theory-fits-the-evidence-2007)
