// document.getElementById('button').addEventListener('click', function() {
//     alert('hello');
// });

// document.querySelector('.modal_content__button').addEventListener('click', function() {
//     document.querySelector('.modal').style.display = 'none';
// });

function show() {
    var number = document.getElementById("input").value;
        if (!isNaN(number) && number != '' && number.length == 11) {
            document.getElementById('modal_id').style.display = 'flex';
        }
        else {
            alert('проверьте правильность номера')
        }    
}

function hide() {
    document.getElementById('modal_id').style.display = 'none';
}