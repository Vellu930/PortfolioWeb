
function call(id) {
    var sectionID = document.getElementById(id).value;

    alert("Before switch, value is: "+sectionID);

    switch (sectionID) {
        case "aboutSection":
            alert("About section click!");
            document.getElementById('main').innerHTML = "about.html";
            break;
        case "workSection":
            alert("WORK section click!");
            document.getElementById('main').innerHTML = "work.html";
            break;
        case "skillSection":
            alert("SKILL section click!");
            document.getElementById('main').innerHTML = "work.html";
            break;
        default:
        
    }
}