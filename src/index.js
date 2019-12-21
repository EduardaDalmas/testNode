let name = "Marcelo";

class App {
    constructor(){
        this.name = "Marcelo";
        this.run();
    }

    showAlert() {        
        alert(`Hello, ${name}`);
    }
    
    run() {
        this.showAlert();
    }
}



new App();