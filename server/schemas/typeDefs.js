const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Deck {
    _id: ID
    deckName: String!
    cards: [Card]
  }

  type Card {
    _id: ID
    cardName: String!
    question: String!
    answers: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    decks: [Deck]
    deck(deckId: ID!): Deck
    cards(username: String): [Card]
    card(cardId: ID!): Card
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDeck(deckName: String!, cardIds: [ID]!): Deck
    updateDeck(deckId: ID!, deckName: String, cardIds: [ID]): Deck
    removeDeck(deckId: ID!): Deck
    addCard(cardName: String!, question: String!, answers: [String]!): Card
    updateCard(cardId: ID!, cardName: String, question: String, answers: [String]): Card
    removeCard(cardId: ID!): Card
  }
`;

module.exports = typeDefs;
