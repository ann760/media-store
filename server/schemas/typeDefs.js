const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
    bidderId: String
    bidderName: String
    bidValue: Float
    bidTimeStamp: String
    sold:Boolean
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    messages:[String]
  }

  type Auth {
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user(email:String): User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String): User
    updateProduct(_id: ID!, value: Float!, bidderId:String! , bidderName:String! , bidTimeStamp:String! ): Product
 
  }

  type Checkout {
    session: ID
  }
`;

module.exports = typeDefs;
