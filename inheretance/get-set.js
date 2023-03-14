class company {
    constructor(developer) {
        this.developmentCompany = developer;
    }

    get developerWork() {
        return this.developmentCompany;
    }

    set developerWork(a) {
        this.developmentCompany = a;
    }
}

let companyName = new company('WEB DEVELOPER LID');
document.getElementById('demo-inheretance').innerHTML = companyName.developmentCompany;