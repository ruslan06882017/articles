import React from 'react';
import ArticleList from './components/article-list'
import articles from './fixtures'

function App() {
  return (
    <ArticleList articles={articles}/>
  );
}

export default App;
