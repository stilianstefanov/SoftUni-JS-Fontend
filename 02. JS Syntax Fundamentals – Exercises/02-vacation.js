function solve(peopleCount, groupType, day) {

    let totalprice;

    if (groupType === 'Students') {
        switch (day) {
            case 'Friday':
                totalprice = peopleCount * 8.45;
                break;
            case 'Saturday':
                totalprice = peopleCount * 9.80;
                break;
            case 'Sunday':
                totalprice = peopleCount * 10.46;
        }

        if (peopleCount >= 30) {
            totalprice -= (totalprice * 0.15)
        }
    }
    else if (groupType === 'Business') {

        if (peopleCount >= 100) {
            peopleCount -= 10;
        }

        switch (day) {
            case 'Friday':
                totalprice = peopleCount * 10.90;
                break;
            case 'Saturday':
                totalprice = peopleCount * 15.60;
                break;
            case 'Sunday':
                totalprice = peopleCount * 16.00;
        }
    }
    else {
        switch (day) {
            case 'Friday':
                totalprice = peopleCount * 15.00;
                break;
            case 'Saturday':
                totalprice = peopleCount * 20.00;
                break;
            case 'Sunday':
                totalprice = peopleCount * 22.50;
        }

        if (peopleCount >= 10 && peopleCount <= 20) {
            totalprice -= (totalprice * 0.05)
        }
    }

    console.log(`Total price: ${totalprice.toFixed(2)}`);
}