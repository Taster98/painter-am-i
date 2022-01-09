// button ticked function
function tickButton(id,entity){
    var button = document.getElementById(id);
    var actual_classes = Array.from(button.classList);
    if(actual_classes.includes("unticked")){
        button.classList.remove("unticked");
        button.classList.add("ticked");
        removeTicks(id,entity);
        disableElem(id);
        if(entity==="tool"){
            changeCursorIcon(id);
        }
    }else if(actual_classes.includes("ticked")){
        button.classList.remove("ticked");
        button.classList.add("unticked");
        if(entity === 'tool'){
            changeCursorIcon("normal");
        }
    }
}

// function that removes all other ticked
toolList = ["pencil", "brush", "bucket", "rubber", "picker", "text"];
dimensionList = ["small", "medium", "large"];
function removeTicks(id,entity){
    var localList = entity==="tool" ? toolList.filter(function(item){ return item !== id}) : dimensionList.filter(function(item){ return item !== id});
    localList.forEach(
        function(el){
            var domEl = document.getElementById(el);
            domEl.classList.remove("ticked");
            domEl.classList.add("unticked");
        }
    );
}

// function that disables dimensions or colorPicker
function disableElem(id){
    if(id==="bucket" || id==="picker"){
        dimensionList.forEach(
            function(el){
                document.getElementById(el).style.visibility = "hidden";
            }
        );
    }
    if(id==="picker"){
        document.getElementById("color").disabled=true;
    }

    // re-enable everything otherwise
    if(id !=="bucket" && id!== "picker"){
        dimensionList.forEach(
            function(el){
                document.getElementById(el).style.visibility = "visible";
            }
        );
        document.getElementById("color").disabled=false;
    }
    if(id ==="bucket"){
        document.getElementById("color").disabled=false;
    }
}

// function that changes cursor icon
function changeCursorIcon(id){
    var canvas = document.getElementById("drawingarea");
    var sidebar = document.getElementById("sidebar");
    if(id==="normal"){
        // case of reset cursor
        canvas.style.cursor = "auto";
        sidebar.style.cursor = "auto";
    }else{
        canvas.style = "cursor: url('img/cursors/"+id+".png'),auto";
        sidebar.style = "cursor: url('img/cursors/"+id+".png'),auto";
        console.log("changes");
    }
}