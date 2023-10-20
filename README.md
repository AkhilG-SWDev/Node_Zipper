# NodeZipper

## Description

NodeZipper is a command-line interface (CLI) application built with Node.js, designed to help you conserve disk space by compressing Node.js `node_modules` directories within a specified directory. Node.js, known for its versatility, is utilized to automate this task efficiently.

## Usage

To use NodeZipper, follow these instructions:

1. Ensure you have Node.js installed on your system. If not, download and install it from [Node.js](https://nodejs.org/).

2. Install any required npm libraries using the following command:
   ```bash
   npm install

**##Working**
1. Run NodeZipper, providing the starting directory as an argument:

bash
node NodeZipper.js startingdir
Replace startingdir with the directory from which you want to start searching for and compressing node_modules directories.

2. NodeZipper will search through the specified directory, find any node_modules directories, and compress them to save disk space.

**##Comments**
The core functionality of this project is implemented using built-in Node.js libraries, such as 'fs' for file system operations.
No external npm libraries are used in this project to keep it lightweight.
