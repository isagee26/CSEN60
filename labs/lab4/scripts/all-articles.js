// Tags
const searchTags = [];

// Individual elements
let parentElement = null;
const tagLists = Array.from(document.querySelectorAll("article .tags"));


// Search Functions

function initializeSearch(newParentElement) {
  const params = new URLSearchParams(window.location.search);
  if (newParentElement === null) {
    console.error(
      "Cannot insert tags, parent element is null",
      params.getAll("tag")
    );
    return;
  }

  parentElement = newParentElement;
  for (const tag of params.getAll("tag")) {
    addSearchTerm(tag);
  }
}
/**
 * initializeSearch: Initializes the search functionality by retrieving search parameters from the URL.
 * Accepts a new parent element where tags will be displayed.
 * If the parent element is null, logs an error message and exits.
 * Sets the global parentElement variable to the provided element, then retrieves search tags from the URL
 * and adds them to the searchTags array by calling addSearchTerm for each tag.
 */

function hideArticles() {
  if (searchTags.length === 0) {
    for (const article of document.querySelectorAll("article")) {
      article.classList.remove("hidden");
    }
    return;
  }

/**
 * hideArticles: Controls the visibility of articles based on the current search tags.
 * If there are no search tags, all articles are displayed.
 * Otherwise, it calls findArticlesWithTag for each tag in searchTags to get articles that match any tag,
 * then hides or displays articles by toggling the "hidden" class based on their presence in the articlesWithTags array.
 */
  const articlesWithTags = [];
  for (const tag of searchTags) {
    articlesWithTags.push(...findArticlesWithTag(tag));
  }



for (const article of document.querySelectorAll('article')) {
  if(!articlesWithTags.includes(article)){
    article.classList.add('hidden');
  } else {
    article.classList.remove('hidden');
  }
}
}

/**
 * Creates a clickable tag button for a given search term (text). When clicked,
 * the button will remove the corresponding tag from both the DOM and the searchTags array.
 * This function also calls hideArticles to update the articles displayed after removal.
 */
function createTag(text) {

  const button = document.createElement("button")
  button.classList.add("tag")
  button.textContent = text; 

  /**
 * createTag: Creates a clickable button element for a search tag and adds a click event listener.
 * The button displays the search term and, when clicked, removes the tag from searchTags and the DOM,
 * then calls hideArticles to update the article display. Returns the created button element.
 */

  function remove() {
    button.remove();
    const index = searchTags.indexOf(text);
    if (index !== -1) {
      searchTags.splice(index, 1);
    }

    hideArticles();
  }

  button.addEventListener("click", remove); 
  console.log("removed")
  
  return button

}

function findArticlesWithTag(phrase) {
  const articles = [];
  const sanitizedPhrase = phrase.toLowerCase().trim();
  for (const tl of tagLists) {
    const tags = Array.from(tl.querySelectorAll("li"));
    for (const tag of tags) {
      if (tag.textContent.toLowerCase().trim() === sanitizedPhrase) {
        articles.push(tl.parentElement);
        break;
      }
    }
  }

  return articles;
}

/**
 * findArticlesWithTag: Searches for articles that contain a specific tag.
 * It accepts a search phrase, then iterates through the tags of each article.
 * If an article contains a tag matching the phrase (case-insensitive and trimmed),
 * it is added to the articles array, which is returned at the end.
 */

function addSearchTerm(text) {
  parentElement.appendChild(createTag(text));
  searchTags.push(text);
  hideArticles();
}

/**
 * addSearchTerm: Adds a new tag to the searchTags array and creates a tag button in the DOM.
 * Accepts a search term, calls createTag to create a button, appends the button to the parentElement,
 * adds the search term to the searchTags array, and calls hideArticles to update displayed articles.
 */

// Handlers

function onSearch(event) {
    /**
   * If event.key equals "Enter":
   * call addSearchTerm and pass the input element's value
   * set input value to an empty string
   */
  // write your code here
  const input = event.currentTarget;

  if (event.key === "Enter"){
    addSearchTerm(input.value);
    input.value=""
  }
}

// Main function

function main() {
  initializeSearch(document.querySelector("#searched-tags"));

  document
    .querySelector("input[type=search]")
    .addEventListener("keypress", onSearch);
}

// Execute main function
main();

/**
 * Order of execution for each event:
 * Pressing Enter: 
 * Clicking to Remove a Tag: 
 * Loading the Page: 
 */

/**
 * main: The primary function to set up search functionality on page load.
 * Calls initializeSearch with the parent element where tags are displayed.
 * Also attaches the onSearch event handler to the search input element for "Enter" keypress events.
 */