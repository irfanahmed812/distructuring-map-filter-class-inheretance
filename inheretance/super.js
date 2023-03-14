class webDeveloper {
    constructor(developer) {
        this.development = developer;
    }

    start() {
        return 'I am ' + this.development;
    }
}

class company extends webDeveloper {
    constructor(framework, frameworkName) {
        super(framework);
        this.company = frameworkName;
    }

    end() {
        return this.start() + ', with ' + this.company;
    }
}

let myWork = new company('Junior Developer', 'MERN Stack Development');
document.getElementById('demo-inheretance').innerHTML = myWork.end();