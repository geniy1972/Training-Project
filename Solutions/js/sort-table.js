let numbers = [17, 25, 4, 1, 18, 15, 41, 30];
console.log(numbers.sort());
console.log(numbers.sort(function (a, b) {
    return a - b;
}));

var compare = {
    name: function (a, b) {
        if (a < b) {
            return -1;
        }
        else {
            return a > b ? 1 : 0;
        }
    },
    time: function (a, b) {
        a = a.split(':');
        b = b.split(':');

        a = Number(a[0]) * 60 + Number(a[1]);
        b = Number(b[0]) * 60 + Number(b[1]);

        return a - b;
    },
    date: function (a, b) {
        a = new Date(a);
        b = new Date(b);

        return a - b;
    }
};

$('.sortable').each(function () {
    var $table = $(this);
    var $tbody = $table.find('tbody');
    var $controls = $table.find('th');

    var rows = $tbody.find('tr').toArray(); //взяли у tbody все tr и перевели jquery выборку в массив методом toArray

    $controls.on('click', function () {
        var $header = $(this);

        var order = $header.data('sort');

        var column;

        if ($header.is('.ascending') || $header.is('.descending')) {

            $header.toggleClass('ascending descending');
            $tbody.html(rows.reverse());
        } else {
            $header.addClass('ascending');

            $header.siblings().removeClass('ascending descending');

            if (compare.hasOwnProperty(order)) {
                column = $controls.index(this);

                rows.sort(function (a, b) {
                    a = $(a).find('td').eq(column).text();
                    b = $(b).find('td').eq(column).text();

                    return compare[order](a, b);
                });

                $tbody.html(rows);
            }
        }
    });
});
