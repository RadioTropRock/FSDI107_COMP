var isItImportant = false;
var isDetailsVisible= true;

function toggleDetailsVisibility(){
    
    if(isDetailsVisible) { 
    $("#capture").hide();
    isDetailsVisible = false;
    }
    else {
    $("#capture").show();
    isDetailsVisible = true;
}
}
function toggleImportant(){

    if (!isItImportant) {
    $("#iImportant").removeClass('far').addClass('fas');
    isItImportant = true;
    } else {
        isItImportant = false;
        $("#iImportant").removeClass('fas').addClass('far');
    }
}


function saveTask() {
    console.log("Save Clicked");


  var title = $("#txtTitle").val();
  var date = $("#txtDate").val();
  var status = $("#selStatus").val();
  var location = $("#txtLocation").val();
  var color = $("#txtColor").val();
  var desc = $("#txtDesc").val();

  var myTask = new Task(0, title, isItImportant, date, status, location, color, desc);


    $.ajax({
        url: '/api/postTask',
        type: "POST",
        data: JSON.stringify(myTask),
        contentType: "application/json",
        success: function(res){
            console.log("Server says: ", res);
         
                    displayTask(res);
    
        },
        error: function(errorDet) {
            console.log("Error", errorDet);
        }
    });
}

    clearForm();

function clearForm()  {

}

function init() {
    console.log("Task Manager");


$("#iImportant").click(toggleImportant);
$("#btnSave").click(saveTask);
$("#btnDetails").click(toggleDetailsVisibility);
}

window.onload = init;

