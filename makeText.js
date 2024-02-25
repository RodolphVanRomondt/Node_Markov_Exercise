/** Command-line tool to generate Markov text. */

const { MarkovMachine } = require("./markov");
const axios = require("axios");
const fs = require("fs");


function file(path) {

    fs.readFile(path, "utf8", function (err, data) {

        if (err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        }

        let mm = new MarkovMachine(data);
        console.log(mm.makeText());
    })
}


async function url(url) {

    try {
        let res = await axios.get(url)

        let mm = new MarkovMachine(res.data);
        console.log(mm.makeText());
        process.exit(0);
    }
    catch (err) {
        console.log(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}


if (process.argv[2] === "file") {
    file(process.argv[3]);
}

if (process.argv[2] === "url") {
    url(process.argv[3]);
}