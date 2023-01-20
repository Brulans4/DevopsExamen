const { check } = require("prettier");

// TODO: Add here the function to validate


const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;

module.exports.checkGamerTag = (Gamertag) =>{
    const regex = "";
    const found = Gamertag.match(regex);

    if(found === null || found.length === 0){
        return true;
    }
    else{
        return false;
    }
};