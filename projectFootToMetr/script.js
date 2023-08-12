const foot = document.getElementById('foot');
const meter = document.getElementById('meter');

// foot
foot.addEventListener('input', function () {

    // console.log("yes it's working")

    const f = this.value;
    // console.log(f)
    const m = f * 0.304;
    // console.log(m)

    meter.value = m.toFixed(4);

})

// meter
meter.addEventListener('input', function () {

    // console.log("yes")
    const m = this.value;
    // console.log(m)

    const f = m * 3.28;

    foot.value = f.toFixed(4);

})