// UMA FACTORY RETORNA UM NOVO OBJETO
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}