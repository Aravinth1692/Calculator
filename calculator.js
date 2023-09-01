const display = document.getElementById('result');
// expect(document.getElementById('description').tagName).to.equal('DIV', '#description should be in P sized text');
        function appendToDisplay(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                alert('Invalid Expression');
                clearDisplay();
            }
        }
        let enterPressed = false;
        // Prevent non-numeric keys from being entered
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (!enterPressed) {
                    enterPressed = true;
                    if(event.value != undefined){
                        calculate();
                    }
                }
            } else if (
                event.key !== 'Backspace' &&
                !/^[0-9+\-]+$/.test(event.key) && event.value != undefined
            ) {
                event.preventDefault();
                alert('Only numbers are allowed');
            }
        });

        display.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {

                enterPressed = false;
                    calculate()
                
            }
        });

        display.addEventListener('input', function(event) {
            if (!/^[0-9+\-]+$/.test(event.data) && event.data != undefined) {
                alert('Only numbers are allowed');
                this.value = this.value.replace(/\D/g, ''); // Remove non-numeric characters
            }
        });
