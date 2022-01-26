document.addEventListener("DOMContentLoaded", () => {
    var rangeSlider = document.getElementById('slider-range');
    var snapSlider = document.getElementById('slider-snap');

    const cost = document.getElementById('priceCost');
    const sWidth = document.getElementById('startWidth');
    const eWidth = document.getElementById('endWidth');
    const size = document.getElementById('size');

    cost.textContent = '100$';
    sWidth.textContent = '0';
    eWidth.textContent = '1000';
    size.textContent = '0 cm';

    // input with one handle
    noUiSlider.create(rangeSlider, {
        start: [100],
        connect: [true, false],
        step: 1,
        range: {
            'min': [100],
            'max': [1000]
        },

        format: {
            to: function (value) {
                return parseInt(value);
            },

            from: function (value) {
                return parseInt(value);
            }
        }
    });
    // getting input with one handle values and writing in document
    rangeSlider.noUiSlider.on('change', (values, handle) => {
        cost.textContent = rangeSlider.noUiSlider.get() + '$';
    });

    // input with two handles
    noUiSlider.create(snapSlider, {
        start: [0, 1000],
        snap: true,
        connect: true,
        range: {
            'min': 0,
            '10%': 100,
            '20%': 200,
            '30%': 300,
            '40%': 400,
            '50%': 500,
            '60%': 600,
            '70%': 700,
            '80%': 800,
            '90%': 900,
            'max': 1000
        },

        format: {
            to: function (value) {
                return parseInt(value);
            },

            from: function (value) {
                return parseInt(value);
            }
        }
    });
    // getting input with two handles values and writing in document
    snapSlider.noUiSlider.on('change', (values, handle) => {
        let valuesArray = snapSlider.noUiSlider.get();
        sWidth.textContent = valuesArray[0];
        eWidth.textContent = valuesArray[1];
        size.textContent = Number(eWidth.textContent) - Number(sWidth.textContent) + ' cm';
    });

    //chenging style in active button in the product line
    let prodLineButtons = document.querySelectorAll('.prodButtons button');

    for (var button of prodLineButtons) {
        button.addEventListener('click', function () {
            prodLineButtons.forEach(i => i.classList.remove('active'));

            this.classList.toggle('active');
        });
    };

    //chenging style in active button in the features
    let featuresButtons = document.querySelectorAll(".btn");

    for (var button of featuresButtons) {
        button.addEventListener('click', function () {
            featuresButtons.forEach(i => i.classList.remove('active'));

            this.classList.toggle('active');
        });
    };

    // open modal window
    document.querySelector('.open').addEventListener('click', function () {
        document.querySelector('.modal').style.display = 'flex';
    });

    // close modal window
    document.querySelector('.close').addEventListener('click', function () {
        document.querySelector('.modal').style.display = 'none';
    });

});






