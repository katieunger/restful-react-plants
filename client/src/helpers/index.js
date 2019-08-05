export const formatCommonName = (name) => {
        if (name) {
            return name.replace(/\w\S*/g, function(str){
                return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
            }); 
        }
        return null;
}