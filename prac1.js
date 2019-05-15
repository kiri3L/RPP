window.onload = init;

function init() {
    var btn = document.getElementById('btn');
    btn.onclick = btnHendler;
}

function btnHendler() {
    var a = document.getElementById('a');
    var b = document.getElementById('b');
    var c = document.getElementById('c');
    var s = document.getElementById('s');
    var e1 = document.getElementById('e1');
    var e2 = document.getElementById('e2');

    var value_a = parseFloat(a.value);
    alert(value_a);
    var value_b = parseFloat(b.value);
    alert(value_b);

    var c_value;
    var s_value;

    var a_correct = !(isNaN(value_a) || value_a <= 0);
    var b_correct = !(isNaN(value_b) || value_b <= 0 );
    if(!a_correct){
        e1.innerText = ' Некорректное число';
    }
    if(!b_correct){
        e2.innerText = ' Некорректное число';
    }
    if(a_correct && b_correct){
        e1.innerText = '';
        e2.innerText = '';
        c_value = Math.sqrt(value_a * value_a + value_b * value_b);
        s_value = value_a * value_b / 2;
        c.innerText = 'Гиотенуза: ' + c_value;
        s.innerText = 'Площадь: ' + s_value
    }
}




