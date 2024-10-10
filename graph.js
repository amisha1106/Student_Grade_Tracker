let subjects = [];

    function addSubject() {
      const subjectName = document.getElementById('subject').value;
      const marks = parseFloat(document.getElementById('marks').value);
      const fullMarks = parseFloat(document.getElementById('fullMarks').value);


      if (subjects.some(subject => subject.name.toLowerCase() === subjectName.toLowerCase())) {
        alert('Subject name must be unique!');
        return;
      }


      if (marks > fullMarks) {
        alert('Marks obtained cannot be more than full marks!');
        return;
      }

      subjects.push({ name: subjectName, marks: marks, fullMarks: fullMarks });
      updateSubjectInfo();
    }

    function clearRecentSubject() {
      if (subjects.length > 0) {
        subjects.pop();
        updateSubjectInfo();
      }
    }

    function generateGraph() {
      if (subjects.length > 0) {
        updateCharts();
      } else {
        alert('Add subjects before generating graphs.');
      }
    }

    function updateSubjectInfo() {
      const subjectInfoElement = document.getElementById('subjectInfo');
      subjectInfoElement.innerHTML = subjects.map(subject =>
        `<p>${subject.name}: ${subject.marks}/${subject.fullMarks}</p>`
      ).join('');
    }

    function updateCharts() {
      updateBarChart();
      updatePieChart();
      updateDonutChart();
      updateLineChart();
      updateSubjectStatus();
    }

    function updateBarChart() {
      const ctx = document.getElementById('barChart').getContext('2d');
      const labels = subjects.map(subject => subject.name);
      const data = subjects.map(subject => subject.marks);
      const fullMarks = subjects.map(subject => subject.fullMarks);

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Marks Obtained',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
          }, {
            label: 'Full Marks',
            data: fullMarks,
            type: 'line',
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: false,
            yAxisID: 'y-axis-full-marks',
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            },
            'y-axis-full-marks': {
              position: 'right',
              beginAtZero: true
            }
          }
        }
      });
    }

    function updatePieChart() {
      const ctx = document.getElementById('pieChart').getContext('2d');
      const labels = subjects.map(subject => subject.name);
      const data = subjects.map(subject => subject.marks);

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
          }]
        }
      });
    }

    function updateDonutChart() {
      const ctx = document.getElementById('donutChart').getContext('2d');
      const labels = subjects.map(subject => subject.name);
      const data = subjects.map(subject => subject.marks);

      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
          }]
        }
      });
    }

    function updateLineChart() {
      const ctx = document.getElementById('lineChart').getContext('2d');
      const labels = subjects.map(subject => subject.name);
      const data = subjects.map(subject => subject.marks);

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Marks Obtained',
            data: data,
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    function updateSubjectStatus() {
      const maxSubject = subjects.reduce((max, subject) => (subject.marks > max.marks) ? subject : max, subjects[0]);
      const minSubject = subjects.reduce((min, subject) => (subject.marks < min.marks) ? subject : min, subjects[0]);

      const statusElement = document.getElementById('subjectStatus');
      statusElement.innerHTML = `
        <p>Focus on: ${minSubject.name} (Scored ${minSubject.marks} marks)</p>
        <p>Going well in: ${maxSubject.name} (Scored ${maxSubject.marks} marks)</p>
      `;
    }