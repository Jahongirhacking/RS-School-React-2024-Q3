import { Component } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import IPerson from './types/IPerson';
import fetchApi from './utils/fetchApi';

interface AppProps { }

interface IApiData {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPerson[];
}

interface AppState {
  inputValue: string;
  page: number;
  apiData: IApiData;
}

const initialData = {
  count: 0,
  next: null,
  previous: null,
  results: [],
}

const apiURL = "https://swapi.dev/api/people";

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      inputValue: "",
      page: 1,
      apiData: initialData,
    }
    this.handleFetchPeople = this.handleFetchPeople.bind(this);
  }

  async handleFetchPeople() {
    const data: IApiData = await fetchApi(`${apiURL}?page=${this.state.page}`);
    this.setState({
      apiData: {
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: data.results.map(person => ({
          name: person.name,
          height: person.height,
          created: person.created,
        })).filter(person => person.name.toLowerCase().includes(this.state.inputValue.toLowerCase()))
      }

    })
  }

  componentDidMount(): void {
    this.handleFetchPeople();
  }

  render() {
    return (
      <div className='contianer'>
        <Navbar
          setInputValue={(value: string) => { this.setState({ inputValue: value }) }}
          onBtnClick={this.handleFetchPeople}
        />
        <hr />
        <Main
          inputValue={this.state.inputValue}
          items={this.state.apiData.results}
        />
      </div>
    )
  }
}
