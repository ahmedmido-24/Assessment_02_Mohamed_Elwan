const { log } = require("console");
const fs = require("fs");
const path = require("path");
const { format } = require("path/posix");
const EventEmitter = require("events");
const os = require("os");

/**
 * Write a function that logs the current file path and directory. (0.5 Grade)
• Output Example:{File:“/home/user/project/index.js”, Dir:“/home/user/project”}
 */

// console.log(__filename);
// console.log(__dirname);
// // OR
// const OutputPath = () => {
//   const fileInfo = {
//     File: __filename,
//     Dir: __dirname,
//   };
//   console.log(fileInfo);
// };

// OutputPath();
///////////////////////////////////////////////////////////////////////
/**
 * Write a function that takes a file path and returns its file name. (0.5 Grade)
• Input Example: /user/files/report.pdf
• Output Example:"report.pdf"
 */

// const OutputExample = (enter) => {
//   console.log(path.basename(enter));
// };
// OutputExample("/user/files/report.pdf");
///////////////////////////////////////////////////////////////////////
/**
 * 3. Write a function that builds a path from an object (0.5 Grade)
• Input Example: { dir: "/folder", name: "app", ext: ".js"}
• Output Example: “/folder/app.js”
 */

// const OutputExample = (enter) => {
//   return format(enter);
// };
// const ObjectPath = {
//   dir: "/folder",
//   name: "app",
//   ext: ".js",
// };
// const fullPath = OutputExample(ObjectPath);
// console.log(fullPath);
///////////////////////////////////////////////////////////////////////
/**
 * Write a function that returns the file extension from a given file path. (0.5 Grade)
• Input Example: /docs/readme.md"
• Output Example: “.md”
 */

// const OutputExample = (enter) => {
//   return path.extname(enter);
// };

// const fullPath = "/docs/readme.md";
// const fileExtend = OutputExample(fullPath);
// console.log(fileExtend);
///////////////////////////////////////////////////////////////////////
/**
 * 5. Write a function that parses a given path and returns its name and ext. (0.5 Grade)
• Input Example: /home/app/main.js
• Output Example: { Name: “main”, Ext: “.js” }
 */

// const OutputExample = (enter) => {
//   const parsedPath = path.parse(enter);
//   return {
//     Name: parsedPath.name,
//     Ext: parsedPath.ext,
//   };
// }

// const fullPath = "/home/app/main.js";
// const fileExtend = OutputExample(fullPath);
// console.log(fileExtend);
///////////////////////////////////////////////////////////////////////
/**
 * 6. Write a function that checks whether a given path is absolute. (0.5 Grade)
• Input Example: /home/user/file.txt
• Output Example: true
 */
// const OutputExample =(enter)=>{
// return path.isAbsolute(enter);
// }
// const fullPath = "/home/user/file.txt";
// const fileExtend = OutputExample(fullPath);
// console.log(fileExtend);
///////////////////////////////////////////////////////////////////////
/**
 * 7. Write a function that joins multiple segments (0.5 Grade)
• Input:"src","components", "App.js"
• Output Example: src/components/App.js
 */
// const OutputExample = (...enter) => {
//   return path.join(...enter);
// };
// const values = "App.js";
// const finalPath = OutputExample("src", "components", `${values}`);
// console.log(finalPath);
///////////////////////////////////////////////////////////////////////
/**
 * 8. Write a function that resolves a relative path to an absolute one. (0.5 Grade)
• Input Example: ./index.js
• Output Example: /home/user/project/src/index.js
 */

// const OutputExample = (enter) => {
//   return path.resolve(enter);
// };
// const InputExample = "./index.js";
// const finalPath = OutputExample(InputExample);
// console.log(finalPath);
///////////////////////////////////////////////////////////////////////

/**
 * 9. Write a function that joins two paths. (0.5 Grade)
• Input Example: /folder1, folder2/file.txt
• Output Example: /folder1/folder2/file.txt
 */

// const OutputExample = (...enter) => {
//   return path.join(...enter);
// };
// const values = "file.txt";
// const finalPath = OutputExample("/folder1", "folder2", `${values}`);
// console.log(finalPath);
///////////////////////////////////////////////////////////////////////

/**
 * 10. Write a function that deletes a file asynchronously. (0.5 Grade)
• Input Example: /path/to/file.txt
• Output Example: The file.txt is deleted.
 */

// function deleteFile(filePath) {
//   fs.unlink(filePath, (err) => {
//     if (err) {
//       console.error(`Error deleting file: ${err}`);
//     } else {
//       console.log(`The file ${filePath} is deleted`);
//     }
//   });
// }

// deleteFiledFile = "/path/to/file.txt";
// console.log(deleteFile(deleteFiledFile));
///////////////////////////////////////////////////////////////////////
/**
 * 11. Write a function that creates a folder synchronously. (1 Grade)
• Output Example: “Success”
 */

// const createFolderSync = (folderPath) => {
//   try {
//     if (fs.existsSync(folderPath)) {
//       console.log(`Folder at '${folderPath}' already exists`);
//     } else {
//       fs.mkdirSync(folderPath);
//       console.log("Success");
//     }
//   } catch (err) {
//     console.error(`Error creating folder: ${err.message}`);
//   }
// };

// const newFolderPath = path.join(__dirname, "new-folder3");
// createFolderSync(newFolderPath);
///////////////////////////////////////////////////////////////////////
/**
 * 12. Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade)
• Output Example: Welcome event triggered!
 */

// const eventEmitter = new EventEmitter();

// eventEmitter.on("start", () => {
//   console.log("Welcome Dear User");
// });

// eventEmitter.emit("start");
///////////////////////////////////////////////////////////////////////
/**
 * 13. Emit a custom "login" event with a username parameter. (0.5 Grade)
• Input Example:"Ahmed"
• Output Example: “User logged in: Ahmed”
 */
// const event = new EventEmitter();

// event.on("login", (userName) => {
//   console.log(`User logged in: ${userName}`);
// });
// const AgentName = "Ahmed";
// event.emit("login", AgentName);
///////////////////////////////////////////////////////////////////////
/**
 * 14. Read a file synchronously and log its contents. (1 Grade)
• Input Example:"./notes.txt"
• Output Example: the file content => “This is a note.”
 */

// fs.readFile("data.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log(data);
// });
//////OR
// const readFileSync = (filepath)=>{

//     try{
//         const data = fs.readFileSync(filepath, "utf-8");
//         console.log(`The file content Is => ${data}`);
//     }catch(err){
//         console.error(`Error reading file: ${err.message}`);
//     }
// }
// const newNote = path.join(__dirname,"data.txt");
// fs.writeFileSync(newNote,"This is a note.");
// readFileSync(newNote);
///////////////////////////////////////////////////////////////////////
/**
 * Write asynchronously to a file. (1 Grade)
• Input: path:"./async.txt", content:"Async save"
 */

// const writeFileAsync = (filePath, content) => {
//   try {
//     fs.writeFile(filePath, content, "utf-8", (err) => {
//       if (err) {
//         console.error(`Error writing file: ${err.message}`);
//         return;
//       }
//       console.log(`Content has been saved to ${path.basename(filePath)}`);
//     });
//   } catch (err) {
//     console.error(`Error writing file: ${err.message}`);
//   }
// };
// const asyncFilePath = path.join(__dirname, "async.txt");
// console.log(asyncFilePath);
// const asyncFileContent = "Async save";
// writeFileAsync(asyncFilePath, asyncFileContent);
///////////////////////////////////////////////////////////////////////
/**
 * 16. Check if a directory exists. (0.5 Grade)
• Input Example: "./notes.txt"
• Output Example: true
 */
// const fileExists = (filePath) => {
//   try {
//     const fileExists = fs.existsSync(filePath);
//     console.log(fileExists);

//     if (!fileExists) {
//       fs.writeFileSync(filePath, "Iam New File");
//       console.log(`File '${path.basename(filePath)}' Did not exist and was created`);
//     }
//   } catch (err) {
//     console.error(`An error occurred: ${err.message}`);
//   }
// };

// const newFilePath = path.join(__dirname, "notes.txt");
// fileExists(newFilePath);
///////////////////////////////////////////////////////////////////////
/**
 * Write a function that returns the OS platform and CPU architecture. (0.5 Grade)
• Output Example: {Platform: “win32”, Arch: “x64”}
 */

// const getSystemInfo = () => {
//   const systemInfo = {
//     Platform: os.platform(),
//     Arch: os.arch(),
//   };
//   console.log(systemInfo);
// };
// getSystemInfo();