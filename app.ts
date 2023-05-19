
class Department  {
  name: string;

  constructor(n: string){
    this.name = n;
  }

  describe() {
    console.log('Departament: ' + name);
  }
}

const accounting = new Department('Accounting');

accounting.describe();

const accountingCopy = {describe: accounting.describe};

accountingCopy.describe();