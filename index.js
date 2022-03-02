#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const boxen = require("boxen");
const fs = require("fs-extra");
const ora = require("ora");
const shell = require("shelljs");
const currentDir = process.cwd();
const txtDctr = chalk.cyanBright.bold;

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

async function initialize() {
  await resolveAfter2Seconds();
  console.log(
    boxen(
      txtDctr(
        figlet.textSync("M O K S H A", {
          font: "Standard",
          horizontalLayout: "full",
          verticalLayout: "full",
          width: 100,
          whitespaceBreak: true,
        })
      ),
      {
        title: chalk.cyanBright.bold("End is just the Beginning!"),
        titleAlignment: "center",
        borderStyle: "classic",
        borderColor: "cyanBright",
      }
    )
  );
  await resolveAfter2Seconds();
}

async function promptQuestions() {
  await resolveAfter2Seconds();
  try {
    const questions = [
      {
        name: "PROJECTNAME",
        type: "input",
        message: txtDctr("Enter a name for your Project:"),
        validate: function (input) {
          if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
          else
            return chalk.yellow.bold(
              "Project name can only include letters, numbers, underscores and hashes."
            );
        },
      },
    ];
    return await inquirer.prompt(questions);
  } catch (err) {
    console.error(chalk.white.bgRed.bold(err.message));
  }
}

async function createNewDir(nameOfDir) {
  let spinner = ora(txtDctr(`Creating project \"${nameOfDir}\"...`)).start();
  await resolveAfter2Seconds();
  const newDirPath = `${currentDir}/${nameOfDir}`;
  const templatePath = `${__dirname}/templates/`;
  fs.access(newDirPath, async (notExist) => {
    if (notExist) {
      await resolveAfter2Seconds();
      spinner.succeed();
      await fs.mkdir(newDirPath);
      spinner = ora(txtDctr("Copying boilerplate templates...")).start();
      await fs.copy(templatePath, `${nameOfDir}/`);
      await resolveAfter2Seconds();
      spinner.succeed();
      await resolveAfter2Seconds();
      spinner = ora(
        chalk.cyanBright.bold(
          `Project '${nameOfDir}' successfully created at '${newDirPath}'`
        )
      ).succeed();
      await resolveAfter2Seconds();
      spinner = ora(txtDctr(`Changing directory to '${nameOfDir}'`)).start();
      await resolveAfter2Seconds();
      shell.cd(`${nameOfDir}/e2e/src`);
      await resolveAfter2Seconds();
      spinner.succeed();
      await resolveAfter2Seconds();
      if (!shell.which("pm2")) {
        spinner = ora(txtDctr("Installing global dependencies...")).start();
        await resolveAfter2Seconds();
        shell.exec("npm install -g pm2 --silent");
        await resolveAfter2Seconds();
        spinner.succeed();
        await resolveAfter2Seconds();
        spinner = ora(txtDctr("Installing project dependencies...")).start();
        await resolveAfter2Seconds();
        shell.exec("npm install --silent");
        await resolveAfter2Seconds();
        spinner.succeed();
        await resolveAfter2Seconds();
        console.log(
          boxen(
            chalk.cyanBright.bold(
              "=> Open project in IDE/editor of your choice \n=> Read the instructions in README.md file \n=> Follow along from '- Begin'"
            ),
            {
              title: chalk.cyanBright.bold("All Set!"),
              titleAlignment: "center",
              borderStyle: "classic",
              borderColor: "cyanBright",
            }
          )
        );

        shell.exit(1);
      } else {
        spinner = ora(txtDctr("Installing project dependencies...")).start();
        await resolveAfter2Seconds();
        shell.exec("npm install --silent");
        await resolveAfter2Seconds();
        spinner.succeed();
        await resolveAfter2Seconds();
        console.log(
          boxen(
            chalk.cyanBright.bold(
              "=> Open project in IDE/editor of your choice \n=> Read the instructions in README.md file \n=> Follow along from '- Begin'"
            ),
            {
              title: chalk.cyanBright.bold("All Set!"),
              titleAlignment: "center",
              borderStyle: "classic",
              borderColor: "cyanBright",
            }
          )
        );

        shell.exit(1);
      }
    } else {
      spinner.fail(chalk.redBright.bold("Failed creating new project!"));
      spinner = ora(
        chalk.redBright.bold(
          `Project '${nameOfDir}' already exist at '${newDirPath}'`
        )
      ).fail();
    }
  });
}

async function moksha() {
  await resolveAfter2Seconds();
  try {
    await initialize();
    const answers = await promptQuestions();
    const { PROJECTNAME } = await answers;
    await createNewDir(PROJECTNAME);
  } catch (err) {
    console.log(err.message);
  }
}

moksha();
