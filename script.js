getStudyHours = day => {
    switch (day) {
        case 'Monday':
            return 8;
        case 'Tuesday':
            return 7;
        case 'Wednesday':
            return 8;
        case 'Thursday':
            return 6;
        case 'Friday':
            return 7;
        case 'Saturday':
            return 10;
        case 'Sunday':
            return 8;
    }
}

const getActualStudyHours = () => {
    return getStudyHours('Monday') +
        getStudyHours('Tuesday') +
        getStudyHours('Wednesday') +
        getStudyHours('Thursday') +
        getStudyHours('Friday') +
        getStudyHours('Saturday') +
        getStudyHours('Sunday');
}

const getIdealStudyHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}

const calculateStudyDebt = () => {
    const actualStudyHours = getActualStudyHours();
    const idealStudyHours = getIdealStudyHours();

    if (actualStudyHours === idealStudyHours) {
        console.log('You got the perfect amount of study.');
    } else if (actualStudyHours > idealStudyHours) {
        console.log('You got ' + (actualStudyHours - idealStudyHours) + ' hour(s) more study than you planned.');
    } else if (actualStudyHours < idealStudyHours) {
        console.log('You got ' + (idealStudyHours - actualStudyHours) + ' hour(s) less study than you needed. Create some time!');
    } else {
        console.log('Error!');
    }
}

calculateStudyDebt();
