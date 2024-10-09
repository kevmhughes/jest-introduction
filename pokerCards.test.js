// TODO: Importar selectCard !!
const { selectCard } = require("./pokerCards")

it("should check to see if the card is the removed card, then check the array length has been reduced by one, then check that the deck does NOT contain the card after removal", () => {
    const deck = ['A♠', '2♠', '3♠', '4♠', '5♠']
    expect(selectCard(deck, '3♠')).toBe('3♠');
    expect(deck).toHaveLength(4)
    expect(deck).not.toContain('3♠')
});

it("should check to see if the card is the removed card, then check the array length has been reduced by one, then check that the deck does NOT contain the card after removal", () => {
    const deck = ['A♥', 'K♦', '10♣', 'J♠']
    expect(selectCard(deck, 'A♥')).toBe('A♥');

    expect(deck).not.toContain('A♥')
});

it("should check to confirm that no card has been removed", () => {
    const deck = ['7♠', '8♦', '9♣']
    expect(selectCard(deck, '10♣')).toBe(undefined);
});

it("should check to confirm that no card has been removed", () => {
    const deck = ['9♣']
    expect(selectCard(deck, '9♣')).toBe('9♣');
    expect(deck).toHaveLength(0)
});
