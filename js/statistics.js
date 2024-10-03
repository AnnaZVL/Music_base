
    // Фильтрация по трекам
    const $filterTrack = document.getElementById('filter-track');
    const choicesFilterTrack = new Choices($filterTrack, {
        searchEnabled: false,
        allowHTML: true
    });

    // Фильтрация по периодам
    const $filterPeriod = document.getElementById('filter-period');
    const choicesFilterPeriod = new Choices($filterPeriod, {
        searchEnabled: false,
        allowHTML: true
    });

    // Подключение графика
    const chart = document.getElementById('chart');
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];
      const DISPLAY = true;

    new Chart(chart, {
        type: 'line',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Количество прослушиваний',
              data: data.map(row => row.count),
              pointBackgroundColor: '#535ff6',
              fill: {
                target: 'origin',
                above: 'rgba(83, 95, 246, 0.1)',
              }
            }
          ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    border: {
                        display: true,
                        dash: [5, 15],                        
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',                        
                    },
                    
                },
                y: {
                    border: {
                        display: true,                        
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)',
                    },
                },
            },
            elements: {
                line: {
                    borderColor: '#535ff6',
                    borderWidth: 1
                }
        }
    }
      })