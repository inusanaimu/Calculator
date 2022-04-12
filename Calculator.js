// getting all the vairables

const display_Input = document.getElementById("display_Input");
const display_Result = document.getElementById("display_Result");
const cal_History = document.getElementById("history");
const show_History = document.getElementById("show_History");
const equal = document.getElementById("equal");
const clear_History = document.getElementById("clear");
const more_div = document.getElementById("more");
const item1 = document.querySelectorAll(".more_item");
const item1sub_div = document.getElementById("item1sub_div");
const main_items = document.querySelectorAll(".main_item");
const item1subs = document.querySelectorAll(".item1sub");

// initiallizing the calculation record in an array of js objects
var keep_History = [{"calculator":"on", "Input":"intial"}];

// Checking and Accepting every input
function display(x){
    console.log(x);
    if(x == "."){
       console.log(display_Input.textContent.contains("."));
        console.log(true);
    }else{
    display_Input.textContent += x;
}
}
// the function that perform the calculation and and store record in the keep_History array
function calculator(){
    let x = display_Input.innerHTML;
    let result = eval(x);
    if (result != undefined && keep_History[keep_History.length-1].Input != x){
        display_Result.innerHTML = "Busy";
        keep_History.push({"Input":x, "Result":result});
        console.log((keep_History));
        display_Result.innerHTML = result
    }
}

// the function that clear the input field.
function clear_btn(){
    display_Input.innerHTML = "";
    display_Result.innerHTML = "Tap to view history";
};

// the function that clear the last input 
function ac_btn(){
    let x = display_Input.innerHTML;
    display_Input.innerHTML = x.slice(0, x.length-1);
}
// Accessing the keep_History object and displaying in dynamically
function toggle_Histroy(){
    switch (show_History.style.display){

        // the case:"none" and default run the same function with different variable names in other to 
        // open the history correctly on the first click. 
        case "none":
            show_History.innerHTML = "";
            // creating the (X)closing span
            const span = document.createElement("span");
            span.innerHTML = "x";
            // setting the span id attribute to "close"
            span.setAttribute("id", "close");
            // add event listener on click to call toggle_History
            span.addEventListener("click", toggle_Histroy),
            // Closing(X) span now appended to the show_History div
            show_History.append(span);
            if (keep_History.length == 1){
                // Do nothing if keep_History only have default value.
            }else{
                for(let i = 1; i < keep_History.length; i++){
                    const para = document.createElement("p");
                    const codeP = document.createElement("code");
                    const br = document.createElement("br");
                    const hr = document.createElement("hr");
                    para.innerHTML = "Input: ";
                    codeP.innerHTML =  keep_History[i].Input;
                    para.append(codeP);
                    para.append(br);
                    para.innerHTML += "Result: "+ keep_History[i].Result;
                    show_History.append(para);
                    show_History.append(hr);
                }
            };
            show_History.style.display = "block";
            console.log("History is Open")
        break;
        case "block":
            show_History.style.display = "none";
            console.log("History is Closed");
        break;
        default:
        show_History.innerHTML = "";
            const spa = document.createElement("span");
            spa.innerHTML = "x";
            spa.setAttribute("id", "close");
            spa.addEventListener("click", toggle_Histroy);
            show_History.append(spa);
            if (keep_History.length == 1){
            }else{
                for(let i = 1; i < keep_History.length; i++){
                    const para = document.createElement("p");
                    const codeP = document.createElement("code");
                    const br = document.createElement("br");
                    const hr = document.createElement("hr");
                    para.innerHTML = "Input: ";
                    codeP.innerHTML =  keep_History[i].Input;
                    para.append(codeP);
                    para.append(br);
                    para.innerHTML += "Result: "+ keep_History[i].Result;
                    show_History.append(para);
                    show_History.append(hr);
                }
            };
            show_History.style.display = "block";
            console.log("History is Open")
        };
      
    }
    // toggle function use when only toggle is needed.
function _toggle(x, y = x){
switch (x.style.display) {
    case "none":
        x.style.display = "block";
        break;
    case "block":
        x.style.display = "none";
        y.style.display = "none"
      break;
        default:
        x.style.display = "block";
    }
}

/*    function close_history(){
    show_History.style.display = "none";
    console.log("History is Closed")
}
function open_more(){
    switch (more_div.style.display) {
        case "none":
            more_div.style.display = "block";
            break;
        case "block":
            more_div.style.display = "none";
            item1sub_div.style.display = "none"
          break;
            default:
            more_div.style.display = "block";
    }
}
function close_more(){
    more_div.style.display = "none";
    item1sub_div.style.display = "none";
    
} 
function toggle_item1(){
    switch (item1sub_div.style.display) {
        case "none":
            item1sub_div.style.display = "block";
            break;
        case "block":
            item1sub_div.style.display = "none";
          break;
            default:
            item1sub_div.style.display = "block";
    }
}*/

main_items.forEach(function (main_item){
    main_item.addEventListener("click", function(e){
        console.log(e.target.nextSibling);
        console.log(main_item.classList)
    })
})

item1subs.forEach(function (item1sub){
    item1sub.addEventListener("click", function(e){
        console.log(item1sub);
    })
})


console.log("You are doing well, Keep going");