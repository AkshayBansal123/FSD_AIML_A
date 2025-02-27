const { myReadFile, myWriteFile } = require("./filesync");
const data="Hello World";
myReadFile();
myWriteFile(data);
myReadFile();

//fs.appendsync(filename,data);
//fs.unlinksync(filename)