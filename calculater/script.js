function appendChar(char) {
    document.getElementById('result').value += char;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteChar() {
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function calculateResult() {
    var result = document.getElementById('result').value;
    try {
        var total = eval(result);
        document.getElementById('result').value = total;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
