document.getElementById('error-message').style.display = 'none';
const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
     // clear data
    searchField.value ='';
     // Handle empty search request
     if (searchText === '') {
      displayError();
  }
  else {
        
    // Hide error
    document.getElementById('error-message').style.display = 'none';
    // Clear Search Result
    document.getElementById('search-result').textContent ='';
    // load data
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaysSearchResult(data.docs))
};
};
const displayError = () => {
  document.getElementById('error-message').style.display = 'block';
  document.getElementById('book-numbers').textContent = '';

};
// Display Search Result
const displaysSearchResult = books => {
  document.getElementById('book-numbers').textContent = '';
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (books === null) {
        displayError();
    }
    else {
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('book-numbers').innerText = `Books Found : ${books.length}`;
        
        books.forEach(book => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML =`
        <div class="card h-100">
        <img src="  https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-200px" alt="...">
        <div class="card-body text-center">
          <h4 class="text-info">Book Name:${book.title}</h4>
          <h5 class="text-primary">Author Name:${book.author_name?.[0]}</h5>
          <h6  class="text-warning">First-Publish:${book.first_publish_year}</h6>
        </div>
      </div
        `
        searchResult.appendChild(div);
 
    });
};

};