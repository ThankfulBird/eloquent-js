class IterableGroup {
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
        let newIterableGroup = new IterableGroup()
        for (let element of iterable) {
            newIterableGroup.add(element)
        }
        return newIterableGroup
    }

    [Symbol.iterator]() {
        return new GroupIterator(this.content)
    }
}

class GroupIterator {
    constructor(groupContent, index = 0) {
        this.groupContent = groupContent
        this.index = index
    }

    next() {
        if (this.index === this.groupContent.length) return {done: true}
        // Must be always named as value otherwise undefined 
        let result = {value: this.groupContent[this.index], done: false}
        this.index++
        return result
    }
}

for (let value of IterableGroup.from(['a', 'b' ,'c'])) {
    console.log(value)
}