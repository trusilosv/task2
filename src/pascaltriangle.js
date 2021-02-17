class pascalTriangele {
    constructor(n = 5) {
        this.n = n;
        this.currentIteration = 5;
        this.pascalTriangele = [
            [1],
            [1, 1],
            [1, 2, 1],
            [1, 3, 3, 1],
            [1, 4, 6, 4, 1]
        ];
    }
    create() {
        if (this.n > this.currentIteration)
            for (; this.currentIteration < this.n; this.currentIteration += 1) {
                this.iteration();
            }
    }
    iteration() {
        const currentLine = this.pascalTriangele[this.currentIteration - 1];
        let tempLine = [1];
        for (let i = 0; i < Math.trunc(this.currentIteration / 2); i += 1) {
            tempLine.push(currentLine[i] + currentLine[i + 1])
        }
        if (this.currentIteration % 2)
            this.pascalTriangele.push([...tempLine, ...tempLine.reverse()])
        else this.pascalTriangele.push([...tempLine, ...tempLine.reverse().slice(1)])
    }
    getLine(n) {
        if (n > this.currentIteration) {
            this.n = n;
            this.create();
        }
        return this.pascalTriangele[n - 1];
    }
}
let triangele = new pascalTriangele();
export { pascalTriangele };