export let sentences = [];
export const createDummyContradiction = (id, contradiction, sentence, speaker, trueSentence, source, sentenceBefore, sentenceAfter, confidenceLevel, sourceTitle) => {
    sentences.push({id: id, contradiction: contradiction, sentence: sentence, speaker: speaker, trueSentence: trueSentence, source: source, sentenceBefore: sentenceBefore, sentenceAfter: sentenceAfter, confidenceLevel: confidenceLevel, sourceTitle: sourceTitle});
}
export const createDummySentence = (id, contradiction, sentence, speaker, timestamp) => {
    sentences.push({id: id, contradiction: contradiction, sentence: sentence, speaker: speaker, timestamp: timestamp});
}
export const DummySentences2 = () =>{
    if (sentences.length < 41 ) {
        // Democratic
        createDummySentence(0, false, 'But quickly Senator Booker you did say that you didn’t think it was right to name names, to name companies and single them out as Senator Warren has. ', 'guthrie');
        createDummySentence(1, false, 'Briefly, why is that? ', 'guthrie');
        createDummyContradiction(2, true, 'Well, again I will single out companies like Halliburton or Amazon that pay nothing in taxes and our need to change that.', 'booker', 'By 2017, that all changed, Amazon started charging sales tax in all the states that have it, but it’s not that simple, a lot of third-party sellers sell stuff through Amazon as well, and many of them don’t charge sales tax. ', 'https://www.businessinsider.com/amazon-not-paying-taxes-trump-bezos-2018-4', 'It allowed Amazon and other retailers to sell tons of stuff to you effectively tax-free. ', 'A lot of sites show that there are tens of millions of dollars every year in state sales tax that go uncollected from third-party sellers. ', 85, "Business Insider");
        createDummySentence(3, false, ' And when it comes to antitrust law what I would do is number one appoint judges that will enforce it; number two, have a DOJ and a Federal Trade Commission that will go through the processes necessary to check this kind of corporate concentration. ', 'booker');
        createDummySentence(4, false, 'At the end of the day we have too much of a problem with corporate, power growing. ', 'booker');
        createDummySentence(5, false, 'We see that with everything from Citizens United in the way they are trying to influence Washington. ', 'booker');
        createDummySentence(6, false, 'It’s about time that we have a president that fights for the people in this country. We need to have someone that’s champion for them.', 'booker');
        createDummySentence(7, false, 'Yes, I believe you can. ', 'ryan');
        createDummySentence(8, false, 'But the first, let’s say the president came, he said don’t sell your house, the people in Youngstown Ohio. ', 'ryan');
        createDummySentence(9, false, 'And—and his administration just in the last two years, we lost $4000—4000 jobs out of General Motors facility. ', 'ryan');
        createDummySentence(10, false, 'That rippled throughout our community. ', 'ryan');
        createDummySentence(11, false, 'General Motors got a tax cut, General Motors got a bailout. ', 'ryan');
        createDummySentence(12, false, 'And then they have the audacity to move a new car that they’re going to produce to Mexico. ', 'ryan');
        createDummySentence(13, false, 'I’ve had family members that have to unbolt a machine from the factory floor, put it in a box, and ship it to China. ', 'ryan');
        createDummySentence(14, false, 'My area where I come from in Northeast Ohio, this issue we’re talking about here, it’s been going on 40 years. ', 'ryan');
        createDummySentence(15, false, 'This is not a new phenomenon in the United States of America. ', 'ryan');
        createDummyContradiction(16, true, 'The bottom 60 percent haven’t seen a raise since 1980. ', 'ryan', 'According to the Peter G. Peterson Foundation, from 1979 to 2014, the top 20 percent saw a 101 percent increase in their average incomes. For everyone else, incomes rose by 32 percent.','https://www.pgpf.org/chart-archive/0261_income_growth_by_quintile', '', '', 73,"Peter G. Peterson Foundation");
        createDummyContradiction(17, true, 'Meanwhile, the top 1 percent controlled 90 percent of the wealth.', 'ryan', 'The best survey data show that the share of wealth held by the top 1 percent rose from just under 30 percent in 1989 to nearly 39 percent in 2016, while the share held by the bottom 90 percent fell from just over 33 percent to less than 23 percent over the same period. ','https://www.cbpp.org/research/poverty-and-inequality/a-guide-to-statistics-on-historical-trends-in-income-inequality', 'Wealth — the value of a household’s property and financial assets, minus the value of its debts — is much more highly concentrated than income.', '', 83, "Center on Budget and Policy Priorities");
        createDummySentence(18, false, ' We need an industrial policy saying we are going to dominate building electric vehicles, there’s going to be 30 million navy made in the next 10 years. ', 'ryan');
        createDummySentence(19, false, 'I want half of them made in the United States. ', 'ryan');
        createDummySentence(20, false, 'I want to dominate the solar industry and manufacture those here in the United States. ', 'ryan');
        // GOP
        createDummySentence(21, false, 'Mr. Trump, I’ll give you 30 seconds, ', 'wallace');
        createDummySentence(22, false, 'I’ll give you 30 seconds to answer my question, which was, what evidence do you have, specific evidence that the Mexican government is sending criminals across the border? ', 'wallace');
        createDummySentence(23, false, 'Thirty seconds. ', 'wallace');        
        createDummySentence(24, false, 'Border Patrol, I was at the border last week. ', 'trump');
        createDummySentence(25, false, 'Border Patrol, people that I deal with, that I talk to, they say this is what’s happening. ', 'trump');
        createDummySentence(26, false, 'Because our leaders are stupid. ', 'trump');
        createDummySentence(27, false, 'Our politicians are stupid. ', 'trump');
        createDummySentence(28, false, 'And the Mexican government is much smarter, much sharper, much more cunning. ', 'trump');
        createDummyContradiction(29, true, 'And they send the bad ones over because they don’t want to pay for them.', 'trump', 'This population has remained essentially stable since 2009 after nearly two decades of changes.', 'https://www.pewresearch.org/fact-tank/2016/09/21/unauthorized-immigrant-population-stable-for-half-a-decade/', 'An estimated 11.1 million unauthorized immigrants lived in the U.S. in 2014, according to a new Pew Research Center estimate based on government data. ', ' The recent overall stability contrasts with past trends. ', 80, "Pew Research");
        createDummySentence(30, false, ' They don’t want to take care of them. ', 'trump');
        createDummySentence(31, false, 'Why should they when the stupid leaders of the United States will do it for them? ', 'trump');
        createDummySentence(32, false, 'And that’s what is happening whether you like it or not. ', 'trump');
        createDummySentence(33, false, 'Well, thank you for the question, Chris, and it’s great to be here tonight. ', 'rubio');
        createDummySentence(34, false, 'Let me begin by saying this: I’m not new to the political process; ', 'rubio');
        createDummySentence(35, false, 'I was making a contribution as the speaker of the third largest and most diverse state in the country well before I even got into the Senate. ', 'rubio');
        createDummySentence(36, false, 'I would add to that that this election cannot be a resume competition.', 'rubio');
        createDummySentence(37, false, 'It’s important to be qualified,', 'rubio');
        createDummyContradiction(38, true, ' but if this election is a resume competition, then Hillary Clinton’s gonna be the next president, because she’s been in office and in government longer than anybody else running here tonight.', 'rubio', 'Kasich served as a U.S. representative from 1983 to 2001 and as governor of Ohio since 2011. That’s 22 years of experience.', 'https://www.cnn.com/2015/08/06/politics/republican-debate-fact-check/index.html', 'She also served as the chair of the Arkansas Educational Standards Committee from 1983 to 1992, which brings her to 21 years. ', 'Lindsey Graham has served as a U.S. senator and representative and state lawmaker since 1993 for 22 years in office.', 82,"CNN");
        // createDummySentence(24, false, ' ', '');
    }
    return sentences;
}