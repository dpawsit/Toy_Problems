// leetcode problem - https://leetcode.com/problems/generate-parentheses/#/description
// difficulty-medium
// runtime - 99ms, top 98.95% of javascript solutions

var generateParentheses = function(n) {
    let res = []
    let recursion = (soFar, openings, closings) => {
        if(closings === n && openings===n) {
            res.push(soFar)
        } else {
            if(openings<n) {
                recursion(soFar+'(', openings+1, closings)
            }
            if(closings<openings) {
                recursion(soFar+')', openings, closings+1)
            }
        }
    }
    recursion('(', 1, 0)
    return res
};

/*the approach to this problem is similar to a lot of permutation problems,
so I started by drawing a tree of how I could get all combinations of parentheses, 
which comes from starting with an empty string and each time making a new branch that closes and opens.
Then I had to make sure I was only creating valid sets. The earliest time you can tell a string is not going 
to be valid is when the closings are more than the openings - it will never be able to close itself, like '())' or
when the openings are greater than n - like '((((' if n is 3. So I check to make sure I can add a closing 
before I make the next recursive call and do the same for openings with its respective rule
I also know that starting with ')' will never work so I can skip it and start with '(' and 1 open
Lastly I know the base case is when I've reached a solution has n '('s and n ')'s - the definition of n pairs
