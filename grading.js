const points =
    [
        {
            id: 1,
            question: 'Can manipulate styles via JS (5 point)',
            grade: 5
        },
        {
            id: 2,
            question: 'Can read HTML attributes with JS (5 point)',
            grade: 5
        },
        {
            id: 3,
            question: '	Can handle focus and blur events(5 point )',
            grade: 5
        },
        {
            id: 4,
            question: 'Can handle form submit events(10 Point)',
            grade: 10
        },
        {
            id: 5,
            question: '	Can read and write tabular data(20 point)',
            grade: 20
        },
        {
            id: 6,
            question: 'Can handle click events & delete DOM nodes (10 point)',
            grade: 10
        },
        {
            id: 7,
            question: 'Can handle form submit events & prevent default (15 Point)',
            grade: 15
        },
        {
            id: 8,
            question: 'Can handle mouse hover events (15 point)',
            grade: 15
        },
        {
            id: 9,
            question: 'Can handle window events (15 point)',
            grade: 15
        }
    ];

for (let i = 0; i < points.length; i++) {
    console.log(points[i].id, '-', points[i].question, ':', points[i].grade)
}

const result = points.reduce(function (acc, obj) { return acc + obj.grade; }, 0);
console.log('total:', result, 'points')
