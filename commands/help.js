function helpfn() {
    console.log(`list of all the commands -
    1)tree command - node fo.js tree <dirname>
    2)organize command - node fo.js organize <dirname>
    3)help command - node fo.js help`)
}

module.exports={
    helpkey : helpfn
}