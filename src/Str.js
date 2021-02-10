import React from "react";

const Str = () => {
  const str = "elliot";
  const nuStr = str.split("").reduce((char, rev) => rev + char, "");

  
  const strs = ["flower","flow","flight"]

    let prefix = "";
    if (!strs.length) return prefix;
    
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]; // looping through first characters of the string
       console.log("Char", char)

        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) return prefix; // looping through all the other characters
        }
            prefix = prefix + char
        console.log("prefix", prefix)
    
            return prefix;
};
  return (
    <div>
      <p>Dog: {nuStr}</p>
    </div>
  );


};

export default Str;
