use library

db.createCollection('books')

db.books.insertMany([
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
    genre: "Fiction",
    ISBN: "9780061120084"
  },
  {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    genre: "Dystopian",
    ISBN: "9780451524935"
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    publishedYear: 1851,
    genre: "Adventure",
    ISBN: "9781853260087"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951,
    genre: "Fiction",
    ISBN: "9780316769488"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    genre: "Tragedy",
    ISBN: "9780743273565"
  }
])

db.books.find().pretty()

db.books.find({ author: "George Orwell" }).pretty()

db.books.find({ publishedYear: { $gt: 2000 } }).pretty()

db.books.updateOne(
  { ISBN: "9780451524935" }, 
  { $set: { publishedYear: 1950 } }
)

db.books.updateMany(
  {}, 
  { $set: { rating: 5 } }
)

db.books.deleteOne({ ISBN: "9780451524935" })

db.books.deleteMany({ genre: "Fiction" })


db.users.insertOne({
    username: "johnDoe",
    email: "john.doe@example.com",
    password: "hashedPassword",
    shippingAddress: "123 Main St, City, Country"
})


db.products.insertMany([
    { productID: 1, name: "Laptop", description: "15-inch screen, 8GB RAM", price: 999, stockQuantity: 50 },
    { productID: 2, name: "Smartphone", description: "64GB storage, 12MP camera", price: 599, stockQuantity: 100 }
])


db.orders.insertOne({
    orderID: 1,
    userID: "johnDoe",
    products: [
        { productID: 1, quantity: 1 },
        { productID: 2, quantity: 2 }
    ],
    totalPrice: 2197,
    orderDate: new Date()
})


db.books.aggregate([
    { $group: { _id: "$genre", totalBooks: { $sum: 1 } } }
])


db.books.aggregate([
    { $group: { _id: null, averageYear: { $avg: "$publishedYear" } } }
])


db.books.aggregate([
    { $sort: { rating: -1 } },
    { $limit: 1 }
])


db.books.createIndex({ author: 1 })

