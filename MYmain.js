var people_names=[];
function submit()
{
var Names=document.getElementById("guest_names").value;
people_names.push(Names);
console.log(people_names);
document.getElementById("people_names_show").innerHTML=people_names;
    document.getElementById("guest_names").value = "";
}

function searching()
{
    var search=document.getElementById("search_textinput").value;
    console.log("Need to find  "+search);
    var found=0;
    
    for(j=0; j<people_names.length;j++)
    {
        if(search == people_names[j])
        {
            found=found+1;
            console.log("name found "+search);
        }
                
    }
    document.getElementById("number_of_names_found").innerHTML="Name found "+found+" time/s";
    console.log("name found "+found+" time/s");
}

function sorting()
{
   document.getElementById("sorted_names").innerHTML=people_names.sort();
}

function show()
{
    document.getElementById("names_show_column").innerHTML=people_names;
}