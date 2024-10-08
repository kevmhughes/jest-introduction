const { high } = require('./scoring-words'); 

test('debería devolver "taxi" cuando se comprueba la siguiente frase: "man i need a taxi up to ubud"', () => {
    expect(high('man i need a taxi up to ubud')).toBe("taxi");
});

test('debería devolver "volcano" cuando se comprueba la siguiente frase: what time are we climbing up the volcano', () => {
    expect(high('what time are we climbing up the volcano')).toBe("volcano");
});

test('debería devolver "semynak" cuando se comprueba la siguiente frase: "take me to semynak"', () => {
    expect(high('take me to semynak')).toBe("semynak");
});

test('debería devolver "aa" cuando se comprueba la siguiente frase: "aa b"', () => {
    expect(high('aa b')).toBe("aa");
});

test('debería devolver "education" cuando se comprueba la siguiente frase: "I think education is the most valuable investment in a modern state"', () => {
    expect(high("I think education is the most valuable investment in a modern state")).toBe("education");
});

