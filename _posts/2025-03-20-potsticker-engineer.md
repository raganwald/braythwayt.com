---
title: Potsticker Engineer
subtitle: Canus Potsticker gets his start
layout: default
published: true
---
Canus Potsticker was an articulate kid who grew up in the 1960s and 70s watching his entrepreneurial mother buying and renovating properties. His parents had difficulty renting an apartment when they first married, and needed to buy a succession of fixer-uppers, fix them up, and rent out extra bedrooms to make ends meet.

He remembered his mother negotiating with contractors, and how she always rephrased everything the contractor promised in terms of how they would know it was done. And how she put everything in writing. She had worked in systems analysis and some consulting during the mainframe days, and she carried the lessons of those early enterprise computer projects over into renovating houses and offices.

Real estate was a familiar business, and Potsticker toyed with the idea of getting into property himself. But he was excited by computers, not homes. So one day, he impulsively took out an ad in Toronto's "The Buy and Sell" classified ad newspaper, advertising his services as a professional programmer for hire. 
### classified ad newspapers
Classified ad newspapers—also called penny-savers—were print publications where the vast majority of the pages were classified advertisements. And classified advertisements were called "classified advertisements," because they were "classified" into sections such as cars for sale, apartments for rent, or the ever-popular "personals."[^print]

[^print]: The printed word is both information and a highly constrained interface for consuming information.

Penny-savers traditionally accepted ads by mail or telephone, and they operated their own call centres. Each operator would write up the ad on a multi-copy form, and accept payment by credit card. One copy would go to accounting, where important things would happen to record customers and transactions.

Another would go to typesetting, and it would be someone's job to type up and lay out the ads on paper, which would then be glued together in columns and set within a page. A special camera would take a picture of the page, and a printing press would do the rest.

This manual and paper-form system was typical for business processes in that era. Small and medium-sized businesses couldn't afford minicomputers, and those that bought personal computers weren't trying to run publishing workflows on them.
### the buy and sell
The Buy and Sell in Toronto had once used a manual and paper-form system of their own, but recognizing the benefits of computerization, they saw an opportunity to do it on the cheap. They commissioned their own custom system, hiring two whizz-kid teenaged brothers to design and build it.

The kids delivered a custom mini-computer system they built themselves out of commodity components. Each operator had their own terminal, the ads were taken in real time, and there were programs for administrators. To further save time and money, the system typeset the ads and printed them on a pair of Apple LaserWriters.

The Buy and Sell had taken its first step into a larger, digital world.[^mosaic]

[^mosaic]: Ironically, the digital publishing revolution that delivered both speed of operations and headcount savings would ultimately make penny-savers obsolete with the arrival of the web. A few publishers with defensive niches would make the transition to digital online. Most would be steamrolled by Craigslist, eBay, Facebook Marketplace, others.
### the deal
Potsticker's ad had been taken over the phone and entered into a terminal. When the next issue was to be printed, the LaserWriters output his ad alongside others for professional services such as bookkeepers. After being printed, the papers were bundled and sent out on deliver trucks, which placed them in street-side newspaper boxes all over Toronto. People walking by would pick one up.

One such person was Thyme. Thyme was a young entrepreneur who was launching a software company, and he worked a deal to license The Buy and Sell's source code. His business plan was to make it configurable for different publications and sell it as a turnkey system. Thyme had closed his first deal, and he needed a programmer to customize the code for his buyer, a penny-saver in Ohio.

Thyme liked to go over every issue of The Buy and Sell, and he didn't miss Potsticker's ad. He called, and they talked. Then they met, exchanged hagiographic descriptions of themselves, and settled down to talk terms.

Thyme's parents were very senior professionals, and they coached him well on negotiating with a contractor. Potsticker went by his mother's example and politely but meticulously made sure that the two of them were crystal clear on what it meant for each requested change to be "done."

When everything was perfectly clear, Potsticker quoted his "best price," fingers crossed behind his back, meaning "best for me." Thyme countered with Thyme's best price, and they wound up almost exactly where they each thought it ought to end up.

The plan was ambitious, and Potsticker worked especially hard. The code was written in [Turbo Pascal], while he had only used SNOBOL, WATFIV, and BASIC. The operating system was [MP/M], and the minicomputer was *weird*: It wasn't a minicomputer at all, it was a closely-coupled distributed system.[^ccds]

[Turbo Pascal]: https://en.wikipedia.org/wiki/Turbo_Pascal
[mpm]: https://en.wikipedia.org/wiki/MP/M

[^ccds]: Distributed systems are computers running software applications that work with each other by communicating over the network. A closely-coupled distributed system co-locates the computer systems such that they have close physical proximity, a single (physical and logical) security domain, shared physical access to disk storage, and high-speed memory-to-memory block transfers between nodes.

The Buy and Sell's minicomputer consisted of several cabinets, each supporting an S-100 bus, and all connected to form one big bus. Each operator had an 8088-based microcomputer on a card with a serial port for connecting a terminal. There was a card for the printers and another for the storage.

And they all ran a distributed program that was built on an ad hoc, informally-specified, bug-ridden, slow implementation of half of a distributed resource contention protocol. They were all peers. There was no server or service. There wasn't a database either. The program used a very early version of [BTrieve] to directly manage persistent data records.

[BTrieve]: https://en.wikipedia.org/wiki/Btrieve

Potsticker was inexperienced, but curious. And systems were far, far simpler in those days. Balanced against that was the undeniable fact that he was a first-time professional attempting to maintain and extend a program written by two other first-timer professionals. He worked things out, and bit by bit, he ticked off the requirements.

it was done just in time to meet the customer's desired date. Potsticker accompanied Thyme on a flight to Dayton, Ohio to deliver and install the system for the customer.[^seats]

[^seats] They flew on a twin-engine turboprop. They were first in line to climb the stairs and board, but Thyme waved off the idea of sitting up front near the exits. He led Potsticker to the second-last row, which had good legroom and overhead height. "These old birds are **loud**, he warned, you'll see that the regulars sit as far back as possible."
### the installation
The customer was represented by a loose cross-functional team, with members from each of the areas of their business that would be affected by installing the system. A senior manager led them.

Thyme and Potsticker had to install the hardware first. For reasons driven mainly by the import/export logistics of that era, Thyme had arranged for the parts of the minicomputer to be shipped to the customer, and the customer was responsible for their own terminals. Thyme would buy the LaserWriters at retail.

Potsticker went along with Thyme to rent a car, then they drove to a local authorized Apple dealer. The dealer sold PCs to small- and medium- sized businesses out of a featureless industrial park.
### backing up
The manager was surprised to see two very young Canadians showing up in a rental car with a story about wanting to buy two extremely expensive and infrequently sold Apple LaserWriters. His surprise deepened when he stepped back into his office and called the phone number on Thyme's business card. His call did not go through: there was a message telling him it was an invalid number.

He confronted them. "Boys," he demanded, "what's really going on here?" Thyme denied that anything was going on. Polite chaos reigned until someone figured out that their business telephone system had been rigged to disallow direct dialling international calls. For those, you had to call a special extension first. The confusion about the phone number having been cleared up, they called the customer team together and arranged to have the printers delivered.

The apologetic manager took them to a chain restaurant in the industrial park for pizza shooters, shrimp poppers, and extreme fajitas. As they laughed about the incident, the manager told them what made him extremely suspicious: "I saw you *back into your parking spot, like you wanted to be ready for an immediate getaway!*"

Potsticker and Thyme were dumbfounded. Doesn't everybody back in? Or at least, plenty of people? The manager waved his arm across the expanse of the restaurant's plate-glass window. They followed his gaze, and sure enough, there was just one car backed into its parking spot, theirs.
### the cheque
The following days were spent assembling the system, conducting training, and testing everything. Finally, it was time to ask for the cheque.

They met the team manager and a several other managers in a boardroom. After much mutual back-slapping over how smoothly everything had gone, the team manager opened a manilla file, extracted a single sheet of paper, and coughed meaningfully.

The manager explained that—inasmuch as the system as delivered me the requirements in the contract—the installation and training process had surfaced critical requirements that would be need to be met before the system went into production. And, regrettably, they were not able to pay for a system that would not meet their needs.

Their was silence, then Thyme started taking, they started talking, and it went around in circles for quite some time. Just as the polite veneer was wearing down, Potsticker apologized but asked for a short bio-break. There was general relief for an excuse to take a moment, let things cool, and huddle to discuss how to move forward.

Thyme was glad of a chance to have a private word with Potsticker. Could he count on Potsticker to make the necessary changes? Potsticker pointed out that creeping scope was not his problem, he had delivered what he was contracted to deliver. But wait.

Potsticker considered. Yes, he had watched his mother using her skills to make sure a contractor delivered what was bargained for. But he also recalled the good contractors upselling her work outside the original scope as an additional phase. He suggested that Thyme go back, tell them that they would accept half of the original contacted amount for delivery in good faith and defer half until the new work was done. And, in addition, they were to agree to a second phase with a charge for the second phase.

"How much can you do it for," asked Thyme. Potsticker had a ready reply: "Half of whatever they agree to pay, but no less than half of the price I tell them." Thyme was dubious, but Potsticker remembered one of the contractors who negotiated an outstanding contract, and how the pitch worked. "Trust me, it will be your negotiation. My job is to toss you a soft ball, and I can't tell you the number now because they're going to tell us the number."

Thyme shrugged and agreed to let Potsticker wing it. They reconvened, and after some preliminary affirmation of how much everyone wanted to work together and make this a great success, Potsticker asked if they could go over the requirements for the new phase of work. After some back and forth, the managers agreed that yes, this was a new set of requirements and they would need to set a realistic timeline for delivery.

Potsticker, went through the requirements, in each case asking them to explain how critical this requirement was and the impact on their business should the software not support their needs. He made careful, handwritten notes.

When they all agreed on the detailed requirements and impacts of each one, he affirmed that importance to their business. He totted up the impacts, went through a show of humming and hawing, and then said that by his math, the upgrades were worth about $2,000 a month or $24,000 a year. He glanced meaningfully at Thyme, who looked meaningfully at the team manager, who smoothly took control.

"Thank you, Potsticker. And thank you, team. We will reconvene tomorrow morning. Thyme and I have a few things to discuss first." Potsticker filed out with everyone else, and waited for Thyme to finish up.

### the aftermath
Thyme and the team manager emerged from the meeting gripping and grinning. Thyme scooped Potsticker up and they headed back to their motel. "Ok," said Thyme as he drove, "You told me to accept no less than $12,000. Your half would be $6,000. How long will this stuff take? This is really critical to them."

Potsticker grinned. "A week, maybe two." Thyme jerked the steering wheel. "What‽ You told me to settle for no less than twelve grand. Six grand is a lot of money for a week's work."

The Postmaster was ready. "Oh no, the six grand is for handling half of the process of helping them understand what a bargain twelve grand would be. The six grand you pocket is for the same thing."

Thyme couldn't help grinning too. "Well, if you think six and six is fair, how about ten and ten? they're drawing up a contract amendment for $20,000!" Now it was both of them laughing, and in a few weeks they were back in person to install the updated software and collect what was for them at the time, a very large cheque.