import React, {Component} from 'react';
import ArticleList from './components/article-list'
import articles from './fixtures'
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select'
import UserForm from './components/user-form'
import DateRange from './components/date-range'

class App extends Component {

  state = {
    openItem: null
  }

  render(){
    return (
      <div>
        <DateRange />
        <UserForm />
        <Select 
          options={this.options}
          value={this.state.openItem}
          onChange={this.handleSelect}
        />
        <ArticleList articles={articles} />
      </div>
    )
  }

  get options(){
    return articles.map(article => ({
      label: article.title,
      value: article.id
    }))
  }

  handleSelect = openItem => this.setState({ openItem });
}

export default App;
