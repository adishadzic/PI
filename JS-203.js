function sahovskaPloca() {

    let velicina = 8;

    for (let i = 0; i < velicina; i++) {
        let start = i % 2 === 1 ? ' ' : '#'; 

        let temp = '';
        for (let j = 0; j < velicina; j++) {
            start = start == '#' ? ' ' : '#'; 
            temp += start;
        }
        console.log(temp);
    }
}

sahovskaPloca(8);