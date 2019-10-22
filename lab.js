 var getGrade = function(quiz)
         {
            return quiz.grade;
         }
        var answer=getGrade;

//table
var adding = function(penguin)
{
    var newcol=d3.select("table")
    .selectAll("tr")
    .data(penguin)
    .enter()
    .append("tr")
    
    newcol.append("img")
    .attr("src",function(d){return d.picture;})
    
    newcol.append("td")
    .text(function(d) {return d.quizes[1]})
    
    newcol.append("td")
    .text(function(d) {return d.quizes[1]})
    
    newcol.append("td")
    .text(function(d) {return d.final.getgrade})
    
    newcol.append("td")
    .text(function(d) {return d.quizes[1]})
}


//promise
var setBanner = function(message)
{
    d3.select("#banner").text(message);
}

var penguinPromise = d3.json("classData.json")

penguinPromise.then(
function(penguin)
{
    console.log("penguin",penguin);
    setBanner("Here are all the penguins");
    adding(penguin);
},
function(err)
{
    setBanner("No penguin");
});
