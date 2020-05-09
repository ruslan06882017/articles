import React from 'react';
import ArticleList from './components/article-list'
import articles from './fixtures'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <ArticleList articles={articles} />
  );
}

export default App;
