window.addEventListener('DOMContentLoaded', function () {
    var table = document.getElementById('historyTable');
    var tbody = table.getElementsByTagName('tbody')[0];
    var tbodyHeight = tbody.offsetHeight;
    var availableHeight = 250; // Chiều cao vùng hiển thị
    var emptyRowCount = Math.floor((availableHeight - tbodyHeight) / 50); // 120 là chiều cao mỗi dòng

    for (var i = 0; i < emptyRowCount; i++) {
        var row = document.createElement('tr');
        var cell = document.createElement('td');
        cell.setAttribute('colspan', '3');
        cell.style.height = '50px';
        row.appendChild(cell);
        tbody.appendChild(row);
    }
});