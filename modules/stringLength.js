const stringLength = (string) => {
if(string.length >=1 && string.length <=10){
   return string.length
}else if(string.length < 1){
    return "string empty"
}else{
    return "string is longer than 10 characters"
}
};

module.exports = stringLength