function createAxisWindow() {
    var start = parseInt(document.getElementById("drawAxisStartNumber").value);
    var end = parseInt(document.getElementById("drawAxisEndNumber").value);
    var axisDiv = document.createElement("div");
    axisDiv.style.width = '100%';
    axisDiv.style.fontFamily = 'Shabmath';
    axisDiv.style.position = 'relative';
    axisDiv.style.height = '50%';

    axisDiv.style.borderBottom = '2px solid black';
    axisDiv.style.marginBottom = '10px';

    for (var i = start; i <= end; i++) {
        var numberDiv = document.createElement("div");
        numberDiv.style.position = 'absolute';
        numberDiv.style.bottom = '-30px';
        numberDiv.style.transform = 'translateX(-50%)';
        numberDiv.innerText = i;

        var tickDiv = document.createElement("div");
        tickDiv.style.position = 'absolute';
        tickDiv.style.width = '2px';
        tickDiv.style.height = '10px';
        tickDiv.style.backgroundColor = 'black';
        tickDiv.style.bottom = '-5px';

        var position = ((i - start) / (end - start)) * 100;
        numberDiv.style.left = position + '%';
        tickDiv.style.left = position + '%';

        axisDiv.appendChild(numberDiv);
        axisDiv.appendChild(tickDiv);
    }
    let t = document.createElement('div');
    t.style.padding = '20px';
    t.appendChild(axisDiv);
    let s = document.createElement('div');
    s.style.padding = '20px';
    s.appendChild(t);
    newWindow(s, title='محور اعداد', width = 400, height = 150);
}
