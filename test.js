// Знаходимо необхідні для нас елементи
const textAreaEl = document.getElementById('user-text');
const buttonEl = document.querySelector('.send-text-btn'); 
// Вішаємо на кнопку слухач подій
buttonEl.addEventListener('click', handleTextAreaInput);

// Функція яка повертає масив слів
function textAreaInput() {
    const result = textAreaEl.value;
    const words = result.split(' ');

    return words;
}

// Функція обробки введеного тексту
function handleTextAreaInput() {
    const words = textAreaInput();
    const uniqueChars = findUniqueChars(words);
    const result = findFirstNonRepeatingChar(uniqueChars);
    console.log(result);
}

// Функція яка знаходить унікальні символи в кожному слові
function findUniqueChars(words) {
    const uniqueChars = [];

    for (const word of words) {
        const charCount = {};

        for (const char of word) {
            charCount[char] = (charCount[char] || 0) + 1;
        }

        for (const char of word) {
            if (charCount[char] === 1) {
                uniqueChars.push(char);
                break;
            }
        }
    }

    return uniqueChars;
}

// Функція яка знаходить перший унікальний символ
function findFirstNonRepeatingChar(chars) {
    const charCount = {};

    for (const char of chars) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of chars) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}