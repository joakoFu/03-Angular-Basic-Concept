interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song:string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const audioplayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2020
    }
}


const{song: anotherSong, details} = audioplayer;
const{author, year} = details;
console.log({anotherSong});
console.log({author});
console.log({year});


const dbz: string[]=[ 'Goku', 'Vegeta', 'Trunks'];
const [ , , trunks='no found' ] = dbz;
console.log({trunks});
export{}