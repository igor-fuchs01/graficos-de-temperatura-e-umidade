const canvasLinhas = document.getElementById('graficoLinhas');

new Chart(canvasLinhas, {
    type: 'line',

    data: {
        labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],

        datasets: [
            {
                label: 'Temperatura (°C)',
                data: [30, 29, 28, 25, 22, 23],
                borderColor: 'red'
            },
            {
                label: 'Umidade (%)',
                data: [80, 82, 80, 85, 80, 83],
                borderColor: 'blue'
            }
        ]
    }
});

const canvasBarras = document.getElementById('graficoBarras');

new Chart(canvasBarras, {
    type: 'bar',

    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],

        datasets: [
            {
                label: 'Temperatura Média (°C)',
                data: [22, 24, 27, 23, 20, 18],
                backgroundColor: 'red'
            },
            {
                label: 'Umidade Média (%)',
                data: [90, 89, 93, 87, 88, 82],
                backgroundColor: 'blue'
            }
        ]
    }
});
