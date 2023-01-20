const { check } = require("prettier");

// TODO: Add here the function to validate


const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;

exports.checkGamerTag = (gamertag) =>{
    const regex = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const found = gamertag.match(regex);

    if(found === null || found.length === 0){
        return true;
    }
    else{
        return false;
    }
};