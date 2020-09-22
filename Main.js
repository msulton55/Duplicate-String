const Main = () => {
  let input = "SuLtOn"
  let inputProcess = ""
  let finalResult = ""
  let temp = ''

  for (const key in input) {
    const element = input[key];
    if (temp === '')
      temp = element
    else {
      if (temp !== element) {
        inputProcess = inputProcess + input.substr(key-1, 1) + temp
        temp = element
      } 
    }
  }
  inputProcess = inputProcess + temp + temp
  
  finalResult = inputProcess
  console.log(finalResult)
}

Main()