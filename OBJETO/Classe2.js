class Avô {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avô {
    constructor(sobrenome, profissão = 'Professor') {
        super(sobrenome)
        this.profissão = profissão
    }
}

class Filho extends Pai {
    constructor() {
        super('Zandonai')
    }
}

const Pedro = new Filho
console.log(Pedro)