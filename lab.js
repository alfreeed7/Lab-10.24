
var getquiz=function(quiz)
{
    return quiz.grade
}

var getQuiz=function(penguin)
 {
     return penguin.quizes.map(getquiz)
 }

var gethw=function(hw)
{
    return hw.grade
}

var getHw=function(penguin)
 {
     return penguin.homework.map(gethw)
 }

var gettest=function(test)
{
    return test.grade
}

var getTest=function(penguin)
 {
     return penguin.test.map(gettest)
 }

var getfinal=function(final)
{
    return final.grade
}

var getFinal=function(penguin)
 {
     return penguin.final.map(getfinal)
     
 }

var finalscore=function(penguin)
{
    return.3*d3.mean(getTest(penguin))+2*d3.mean(getQuiz(penguin))+.3*d3.mean(getHw(penguin))+.35*getFinal(penguin)
}
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
    .text(function(penguin){return d3.mean(getQuiz(penguin))})
    
    newcol.append("td")
    .text(function(penguin){return d3.mean(getHw(penguin))})
    
    newcol.append("td")
    .text(function(penguin){return d3.mean(getTest(penguin))})
    
    newcol.append("td")
    .text(function(penguin){return finalscore(penguin)})
            .style("font-size", function(penguin) 
        {
            if (finalscore(penguin)<=70)        
            {
                return "24px"
            }
            
        })

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

