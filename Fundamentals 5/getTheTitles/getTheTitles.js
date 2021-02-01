const getTheTitles = function (books) {
    let titlesArray = [];
    books.array.forEach(book => {
        titlesArray.push(book.title)
    });
    return titlesArray;
}
module.exports = getTheTitles;