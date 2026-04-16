const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id: 1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marijn Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
        },
        {
            id: 2,
            title: 'HTML and CSS: Design and Build Websites',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51v5ZpFyaFL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
        },
        {
            id: 3,
            title: 'JavaScript and JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51Zlr8D4RFL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
        },
        {
            id: 4,
            title: 'Learn Python the Hard Way',
            author: 'Zed A. Shaw',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51Z0nLAfLmL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
        },
        {
            id: 5,
            title: "You Don't Know JS",
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71IOtS1kzKL.jpg'
        },
        {
            id: 6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41DNu6pBYaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
        }
    ]
};

// Write your code here!
const bookStoreTitle = document.getElementById('header');
bookStoreTitle.textContent = bookStore.name;

const bookList = document.querySelector('#book-list');

bookStore.books.forEach((book) => {
  const bookContainer = document.createElement('li');
  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('p');
  const bookImage = document.createElement('img');

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.imageUrl;

  bookContainer.append(bookTitle, bookAuthor, bookImage);
  bookList.append(bookContainer);
});
