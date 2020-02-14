(function () {

    let people = [
        {
            name: 'Evgeniy',
            rate: 120
        },
        {
            name: 'Sasha',
            rate: 80
        },
        {
            name: 'Petya',
            rate: 75
        },
        {
            name: 'Sergey',
            rate: 20
        }
    ];

    let rows = [],
        $min = $('#value-min'),
        $max = $('#value-max'),
        $table = $('#rates');

    function makeRows() {
        people.forEach(function (person) {
            let $row = $('<tr></tr>');
            $row.append($('<td></td>').text(person.name));
            $row.append($('<td></td>').text(person.rate));
            rows.push({
                person: person,
                $element: $row
            });
        });
    }

    function appendRows() {
        let $tbody = $('<tbody></tbody>');
        rows.forEach(function (row) {
            $tbody.append(row.$element);
        });
        $table.append($tbody);
    }

    function update(min, max) {
        rows.forEach(function (row) {
            if (row.person.rate >= min && row.person.rate <= max) {
                row.$element.show();
            } else {
                row.$element.hide();
            }
        });
    }

    function init() {
        $('#slider').noUiSlider({
            range: [0, 150],
            start: [65, 90],
            handles: 2,
            margin: 20,
            connect: true,
            serialization: {
                to: [$min, $max],
                resolution: 1
            }
        }).change(function () { update($min.val(), $max.val()); });

        makeRows();
        appendRows();
        update($min.val(), $max.val());
    }

    $(init);

}());