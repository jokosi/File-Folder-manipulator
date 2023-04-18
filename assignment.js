const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to display menu options
function displayMenu() {
  console.log('File System Manipulation Menu:');
  console.log('1. Create a file');
  console.log('2. Read a file');
  console.log('3. Update a file');
  console.log('4. Delete a file');
  console.log('5. Create a directory');
  console.log('6. Delete a directory');
  console.log('7. Exit');
}

// Function to handle user input
function handleUserInput() {
  rl.question('Enter your choice (1-7): ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter file name: ', (fileName) => {
          rl.question('Enter file content: ', (fileContent) => {
            fs.writeFile(fileName, fileContent, (err) => {
              if (err) throw err;
              console.log('File created successfully!');
              displayMenu();
              handleUserInput();
            });
          });
        });
        break;
      case '2':
        rl.question('Enter file name: ', (fileName) => {
          fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) throw err;
            console.log(`File content: ${data}`);
            displayMenu();
            handleUserInput();
          });
        });
        break;
      case '3':
        rl.question('Enter file name: ', (fileName) => {
          rl.question('Enter new file content: ', (fileContent) => {
            fs.writeFile(fileName, fileContent, (err) => {
              if (err) throw err;
              console.log('File updated successfully!');
              displayMenu();
              handleUserInput();
            });
          });
        });
        break;
      case '4':
        rl.question('Enter file name: ', (fileName) => {
          fs.unlink(fileName, (err) => {
            if (err) throw err;
            console.log('File deleted successfully!');
            displayMenu();
            handleUserInput();
          });
        });
        break;
      case '5':
        rl.question('Enter directory name: ', (dirName) => {
          fs.mkdir(dirName, (err) => {
            if (err) throw err;
            console.log('Directory created successfully!');
            displayMenu();
            handleUserInput();
          });
        });
        break;
      case '6':
        rl.question('Enter directory name: ', (dirName) => {
          fs.rmdir(dirName, (err) => {
            if (err) throw err;
            console.log('Directory deleted successfully!');
            displayMenu();
            handleUserInput();
          });
        });
        break;
      case '7':
        console.log('Exiting...');
        rl.close();
        break;
      default:
        console.log('Invalid choice! Please enter a number between 1 and 7.');
        displayMenu();
        handleUserInput();
        break;
    }
  });
}

// Start the program
displayMenu();
handleUserInput();