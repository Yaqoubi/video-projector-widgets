function drawCoordinate() {
    let x = document.getElementById('coordinateMaxX').value;
    let y = parseInt(document.getElementById('coordinateMaxY').value) + 1;
    const showNumbering = document.getElementById('showCoordinateNumbering').checked;
    // Create the container for the chessboard
    const chessContainer = document.createElement('div');
    chessContainer.style.display = 'flex';
    chessContainer.style.alignItems = 'flex-start';
    chessContainer.style.width = '100%'; // عرض کل به اندازه صفحه

    // Create and style the row numbers container
    const rowNumbers = document.createElement('div');
    rowNumbers.style.display = 'flex';
    rowNumbers.style.flexDirection = 'column';
    rowNumbers.style.justifyContent = 'flex-start';
    rowNumbers.style.marginRight = '10px';
    rowNumbers.style.setProperty('--cols', x); // Setting custom property for dynamic sizing
    document.documentElement.style.setProperty('--cols', x); // Set property globally

    // Create and style the chessboard container
    const chessboard = document.createElement('div');
    chessboard.style.display = 'grid';
    chessboard.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    chessboard.style.gap = '0';
    chessboard.style.width = '100%'; // عرض صفحه شطرنجی به اندازه کل صفحه

    // Create and style the column numbers container
    const colNumbers = document.createElement('div');
    colNumbers.style.display = 'flex';
    colNumbers.style.justifyContent = 'space-between';
    colNumbers.style.marginTop = '5px';

    // Remove previous content
    chessboard.innerHTML = '';
    rowNumbers.innerHTML = '';
    colNumbers.innerHTML = '';

    // Create chessboard cells
    for (let row = 0; row < y; row++) {
        for (let col = 0; col < x; col++) {
            const cell = document.createElement('div');
            cell.style.width = '100%'; // عرض هر خانه
            cell.style.paddingBottom = '100%'; // حفظ نسبت مربعی برای هر خانه
            cell.style.border = '1px solid black';
            cell.style.boxSizing = 'border-box';

            if (col === 0 && row + 1 !== y) {
                cell.style.padding = '0';
                let ColID = document.createElement('div');
                ColID.style.position = 'relative';
                ColID.style.textAlign = 'left';
                ColID.style.left = '-20px';
                if (!showNumbering)
                    ColID.style.opacity = '0%';
                ColID.style.top = '20px !important';
                ColID.style.top = row + 1 === y ? '0' : '-10px';
                ColID.innerText = y - row - 1;
                cell.appendChild(ColID);
            }

            if (row + 1 === y) {
                cell.style.border = 'none';
                cell.style.height = '2px';
                cell.style.padding = '0';
                let ColID = document.createElement('div');
                ColID.style.position = 'relative';
                ColID.style.textAlign = 'right';
                if (!showNumbering)
                    ColID.style.opacity = '0%';
                ColID.style.right = '-3px';
                ColID.style.top = '5px';
                ColID.innerText = col + 1;
                cell.appendChild(ColID);
            }

            cell.classList.add('cell');
            chessboard.appendChild(cell);
        }
    }

    // Append all elements to the container
    chessContainer.appendChild(rowNumbers);
    chessContainer.appendChild(chessboard);
    chessContainer.appendChild(colNumbers);

    let t = document.createElement('div');
    t.style.padding = '20px';
    t.appendChild(chessContainer);

    let s = document.createElement('div');
    s.appendChild(t);
    newWindow(s, title='مختصات', width = 350, height = x > y ? 350 : ((y-1)/x) * 400);

        // return chessContainer;
}
