#!/usr/bin/env node

// Import required packages
import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import open from "open";

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set up colors
const cyan = chalk.cyanBright;
const yellow = chalk.yellowBright;
const green = chalk.greenBright;
const magenta = chalk.magentaBright;
const white = chalk.whiteBright;
const blue = chalk.blueBright;

// ASCII art header using figlet
const heading = figlet.textSync("Ashish Suman", {
  font: "Standard",
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
});

// Personal information from your resume
const info = `
${white.bold("Software Engineer & Full Stack Developer")}

${yellow("📍 Education:")} Engineering Graduate from VMKVEC, Salem
${cyan("📚 Tech Stack:")} JavaScript, React, Node.js, MongoDB, Express, HTML/CSS
${magenta(
  "🎯 Career Goal:"
)} Building scalable web applications with expertise in System Design

${green("🔗 Connect With Me:")}
${blue("• GitHub:")}    https://github.com/Ashish-suman-sharma
${blue("• LinkedIn:")}  https://linkedin.com/in/ashishsuman0
${blue("• Portfolio:")} https://ashish-suman-sharma-github-io.vercel.app/
${blue("• LeetCode:")}  https://leetcode.com/u/Ashish_suman_0

${yellow("🚀 Key Projects:")}
${white.bold(
  "1. Project Deployer"
)} - An automation tool for deploying web applications
   ${green("https://github.com/Ashish-suman-sharma/deployer.git")}

${white.bold(
  "2. Google Search Clone"
)} - A functional replica of Google's search interface
   ${green("https://github.com/Ashish-suman-sharma/google-app.git")}

${magenta("📋 Type 'resume' to open my complete resume PDF")}
`;

// Create the message box
const message = `${heading}\n${info}`;
console.log(
  boxen(message, {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "cyan",
  })
);

// Check if the user wants to open the resume
const args = process.argv.slice(2);
if (args.includes("resume")) {
  console.log(chalk.green("Opening resume PDF..."));
  // Path to the resume PDF
  const resumePath = join(__dirname, ".", "final-resume-updated.pdf");
  open(resumePath);
} else {
  console.log(
    chalk.yellow('👉 Run "npx ashish-codes resume" to view my complete resume')
  );
}
