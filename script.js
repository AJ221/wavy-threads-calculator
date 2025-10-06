document.addEventListener('DOMContentLoaded', () => {
    // Get the button element and attach the calculation function
    document.getElementById('calculateButton').addEventListener('click', calculatePrice);
});

// Main function to run the calculation
function calculatePrice() {
    // 1. Get Input Values
    const costPriceInput = document.getElementById('costPrice');
    const costPrice = parseFloat(costPriceInput.value);
    
    // Check which radio button is selected
    const productType = document.querySelector('input[name="productType"]:checked').value;
    
    const resultElement = document.getElementById('sellingPrice');
    
    // 2. Input Validation
    if (isNaN(costPrice) || costPrice <= 0) {
        resultElement.textContent = 'Enter a valid Cost Price.';
        resultElement.style.color = 'red';
        return;
    }
    
    // Reset result color
    resultElement.style.color = '#007bff';

    // 3. Define the Formulas (EASY TO MODIFY HERE)
    
    // --- Bed Sheets Formula: ((Cost price ÷ 2) × 1.4) + 50 ---
    const calculateBedsheetsPrice = (cost) => {
        return ((cost / 2) * 1.4) + 50;
    };

    // --- Suits Formula: ((Cost price - 500) * 1.4) + 50 ---
    const calculateSuitsPrice = (cost) => {
        // Ensure cost is high enough before subtracting 500
        const baseCost = Math.max(0, cost - 500); 
        return (baseCost * 1.4) + 50;
    };
    
    // 4. Run Calculation based on selection
    let sellingPrice;

    if (productType === 'bedsheets') {
        sellingPrice = calculateBedsheetsPrice(costPrice);
    } else if (productType === 'suits') {
        sellingPrice = calculateSuitsPrice(costPrice);
    } else {
        // Should not happen, but good for error handling
        sellingPrice = 0;
        resultElement.textContent = 'Error: No product type selected.';
        return;
    }

    // 5. Display the final result
    // toFixed(2) ensures it shows exactly two decimal places for currency
    resultElement.textContent = `₹ ${sellingPrice.toFixed(2)}`;
}

// NOTE: To modify the formula, simply change the numbers (e.g., 1.4 or 50) 
// in the 'calculateBedsheetsPrice' or 'calculateSuitsPrice' functions above.
