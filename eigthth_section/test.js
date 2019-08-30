function test(label, body) {
    if (body) console.log(`Passed: ${label}`)
}

test('Convert number to String', () => '123' === String(123))