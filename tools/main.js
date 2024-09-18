function newWindow(contentElement, title='ali.id.ir', width = 100, height = 100) {
    const newWindow = window.open("", "_blank", "location=no,height=" +height.toString()+ ",width=" +width.toString()+ ",scrollbars=yes,status=yes,menubar=no");
    newWindow.document.write(contentElement.innerHTML);
    newWindow.document.title = title;
    const link = newWindow.document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/font.css";
    newWindow.document.head.appendChild(link);

    newWindow.document.close();
}
