import chalk from 'chalk'
import dedent from 'dedent-js'

export const printError = (error) => {
  console.log(chalk.bgRed(' === ERROR === ') + ' ' + error)
}

export const printSuccess = (message) => {
  console.log(chalk.bgGreen(' === SUCCESS === ') + ' ' + message)
}

export const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' === HELP === ')}
        no params  - show weather
        -s [CITY] - add city
        -h - help
        -t [API_KEY] - save token
        `
  )
}
