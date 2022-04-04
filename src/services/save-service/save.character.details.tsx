import React from   "react";

export function saveCharacterDetailsToFile(input: any){
    const element = document.createElement("a");
    const file = new Blob(input, {type: "text/plain;charset-utf-8",

});
element.href = URL.createObjectURL(file);
element.download ="NewCharacter.txt";
document.body.appendChild(element);
element.click();
};