function createCircle() {
    var coordinate = document.createElement("div");
    coordinate.style.padding = '20px 10px 10px 10px';
    coordinate.appendChild(drawCircle(document.getElementById("circle-devision-parts").value));
    createWindow(400, 450, "دایره", coordinate);
}


function drawCircle() {
    console.log('drawing circle...');
    const segments = document.getElementById('drawCircleSegments').value;
    const circle = document.createElement('div');
    // تنظیم استایل‌های دایره
    circle.style.position = 'relative';
    circle.style.width = '100%';
    circle.style.paddingBottom = '100%'; // نسبت 1:1 برای دایره
    circle.style.borderRadius = '50%';
    if(document.getElementById('drawCircleSegmentsShowCakeBG').checked) {
        circle.style.backgroundImage = "url('files/circleCakeBG.jpg')";
        circle.style.backgroundSize = "100% auto";
    } else {
        circle.style.border = 'solid 3px black';
        circle.style.backgroundColor = '#d2e3dd';
    }
    circle.style.margin = '0 auto';
    circle.style.overflow = 'hidden';

    // اضافه کردن مرکز دایره
    const centerPoint = document.createElement('div');
    centerPoint.style.position = 'absolute';
    centerPoint.style.backgroundColor = 'red';
    centerPoint.style.width = '10px';
    centerPoint.style.height = '10px';
    centerPoint.style.borderRadius = '50%';
    centerPoint.style.top = '50%';
    centerPoint.style.left = '50%';
    centerPoint.style.transform = 'translate(-50%, -50%)';
    circle.appendChild(centerPoint);

    // ایجاد شعاع‌ها
    if (segments > 1) {
        for (let i = 0; i < segments; i++) {
            const radiusLine = document.createElement('div');

            // تنظیم استایل‌های شعاع‌ها
            radiusLine.style.position = 'absolute';
            radiusLine.style.backgroundColor = 'black';
            radiusLine.style.width = '2px';
            radiusLine.style.height = '50%';
            radiusLine.style.top = '0';
            radiusLine.style.left = '50%';
            radiusLine.style.transformOrigin = 'bottom center';

            // چرخاندن شعاع‌ها به تناسب تقسیمات
            const angle = (360 / segments) * i;
            radiusLine.style.transform = `rotate(${angle}deg)`;

            // اضافه کردن شعاع به دایره
            circle.appendChild(radiusLine);
        }
    }
    let t = document.createElement('div');
    t.appendChild(circle);
    newWindow(t, title='دایره', width = 350, height = 350)
    //     // بازگرداندن المان دایره
    // return circle;
}
