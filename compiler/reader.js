function BlsReader(text) {
    let spl = text.split("\n");

    spl = spl.map((v) => {
        let hashIndex = undefined;

        return v.split("").filter((cv, ci) => {

            if (cv == "#" && !hashIndex && hashIndex !== 0) hashIndex = ci;
            return !(ci >= hashIndex)
        }).join("");
    
    });

    let stuff = spl.join("\n").trim().replace(/(\r\n|\n|\r)/gm, "");;

    console.log(stuff);
}

const fs = require('fs');

fs.readFile('src/skins/ex/.skin.bls', 'utf8', function (err, data) {
    if (err) throw err;
    BlsReader(data);
});