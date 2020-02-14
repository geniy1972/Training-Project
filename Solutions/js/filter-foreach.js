$(function () {

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

    let results = [];

    people.forEach(function (person) {
        if (person.rate >= 65 && person.rate <= 90) {
            results.push(person);
        }
    });


    let $tableBody = $('<tbody></tbody>');
    for (let i = 0; i < results.length; i++) {
        let person = results[i];
        let $row = $('<tr></tr>');
        $row.append($('<td></td>').text(person.name));
        $row.append($('<td></td>').text(person.rate));
        $tableBody.append($row);
    }

    $('thead').after($tableBody);

});