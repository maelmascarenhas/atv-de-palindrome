function isPalindrome(word) {
    // Remove espaços e converter para letras minúsculas
    word = word.replace(/\s/g, '').toLowerCase();
    
    // Invertera palavra
    const reversedWord = word.split('').reverse().join('');
    
    // Verifica se a palavra original é igual à palavra invertida
    return word === reversedWord;
  }
  
  const userInput = prompt('Digite uma palavra:');
  
  if (isPalindrome(userInput)) {
    console.log(`${userInput} é um palíndromo.`);
  } else {
    console.log(`${userInput} não é um palíndromo.`);
  }
  