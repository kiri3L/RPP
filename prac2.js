window.onload = init;

function init() {
    input = document.getElementById('input');
    input.oninput = count_character ;
    input2 = document.getElementById('input2');
    input2.oninput = count_word;
}


function count_character () {
    var txt = input.value;

    var pos = 0;
    var count = 0;
    var foundPos = -1;
    while (true) {
        foundPos = txt.indexOf(' ', pos);
        if (foundPos == -1) break;

        count += 1;
        pos = foundPos + 1;
    }

    var output = document.getElementById('output');
    output.innerText = 'кол-во символов: ' + (txt.length - count);
}

function count_word() {
    var txt = input2.value;
    var arr = txt.split(/\s/g);
    var arr2 = [];
    var temp;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] != ''){
            arr2.push(arr[i])
        }
    }
    for(var i = 0; i < arr2.length; i++){
        for(var j = 0; j < arr2.length - 1; j++){
            if( arr[j] > arr[j + 1]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    var output2 = document.getElementById('output2');
    output2.innerText = arr.join('          ');
}