document.getElementById('expression-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numbersInput = document.getElementById('numbers').value;
    const target = parseInt(document.getElementById('target').value);
    
    const numbers = numbersInput.split(',').map(num => parseInt(num.trim()));
    const result = findExpression(numbers, target);
    
    document.getElementById('result').textContent = result ? 'Possible Expression found : ' +result : 'No solution';
});

function findExpression(numbers, target) {
    const operators = ['+', '-', '*'];
    const n = numbers.length;
    
    const numberPermutations = [
        [numbers[0], numbers[1], numbers[2], numbers[3]],
        [numbers[0], numbers[1], numbers[3], numbers[2]],
        [numbers[0], numbers[2], numbers[1], numbers[3]],
        [numbers[0], numbers[2], numbers[3], numbers[1]],
        [numbers[0], numbers[3], numbers[1], numbers[2]],
        [numbers[0], numbers[3], numbers[2], numbers[1]],
        [numbers[1], numbers[0], numbers[2], numbers[3]],
        [numbers[1], numbers[0], numbers[3], numbers[2]],
        [numbers[1], numbers[2], numbers[0], numbers[3]],
        [numbers[1], numbers[2], numbers[3], numbers[0]],
        [numbers[1], numbers[3], numbers[0], numbers[2]],
        [numbers[1], numbers[3], numbers[2], numbers[0]],
        [numbers[2], numbers[0], numbers[1], numbers[3]],
        [numbers[2], numbers[0], numbers[3], numbers[1]],
        [numbers[2], numbers[1], numbers[0], numbers[3]],
        [numbers[2], numbers[1], numbers[3], numbers[0]],
        [numbers[2], numbers[3], numbers[0], numbers[1]],
        [numbers[2], numbers[3], numbers[1], numbers[0]],
        [numbers[3], numbers[0], numbers[1], numbers[2]],
        [numbers[3], numbers[0], numbers[2], numbers[1]],
        [numbers[3], numbers[1], numbers[0], numbers[2]],
        [numbers[3], numbers[1], numbers[2], numbers[0]],
        [numbers[3], numbers[2], numbers[0], numbers[1]],
        [numbers[3], numbers[2], numbers[1], numbers[0]]
    ];
    
    const operatorCombinations = cartesianProduct(operators, n - 1);
    
    for (let numPerm of numberPermutations) {
        for (let ops of operatorCombinations) {
            const expression = generateExpression(numPerm, ops);
            
            console.log("Generated expression:", expression); 
            
            if (evaluateExpression(expression) === target) {
                return expression;
            }
        }
    }
    
    return null;
}

function cartesianProduct(arr, length) {
    let result = [];
    function helper(prefix, length) {
        if (length === 0) {
            result.push(prefix);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            helper(prefix.concat(arr[i]), length - 1);
        }
    }
    helper([], length);
    return result;
}

function generateExpression(numbers, operators) {
    let expression = '';
    
    for (let i = 0; i < numbers.length; i++) {
        expression += numbers[i];
        if (i < operators.length) {
            expression += operators[i];
        }
    }
    
    return expression;
}

function evaluateExpression(expression) {
    let result = math.evaluate(expression.replace(/\*/g, ' * ').replace(/\+/g, ' + ').replace(/ - /g, ' - '));
    return result;
}
