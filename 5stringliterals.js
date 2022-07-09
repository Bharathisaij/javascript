var name = "Stranger Things"
var rating = 4.5
var type = "scifi"
var ind = "Hollywood"

///es5
var out = "The "+name+" is a "+type+" movie, with a rating of "+rating+" and from the "+ind+" Industry"
out
'The Stranger Things is a scifi movie, with a rating of 4.5 and from the Hollywood Industry'

/// the abv format is hard to write and takes more letters

///es6 - here its easy to write and the code length is shortened

var out = `The ${name} is a ${type} movie, with a rating of ${rating} and from the ${ind} industry.`
out
'The Stranger Things is a scifi movie, with a rating of 4.5 and from the Hollywood industry.'
