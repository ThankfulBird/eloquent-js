class Group {
    constructor() {
        this.content = []
    }

    add(value) {
        if (!this.content.includes(value)) {
            this.content.push(value)
        }
    }

    delete(value) {
        for (let i = 0; i < this.content.length; ++i) {
            if (this.content[i] === value) {
                delete this.content[i]
                this.content = this.content.filter((value) => value)
            }
        }
    }

    has(value) {
        return this.content.includes(value)
    }

    static from(iterable) {
        let newGroup = new Group()
        for (let element of iterable) {
            newGroup.add(element)
        }
        return newGroup
    }
}

let group = Group.from([10 ,20])
console.log(group.has(10))
console.log(group.has(30))
group.add(10)
group.delete(10)
console.log(group.has(10))