import { Component } from 'react'
import IPerson from '../types/IPerson';

interface MainProps {
    inputValue: string;
    items: IPerson[];
}

export default class Main extends Component<MainProps> {
    render() {
        return (
            <main>
                <h3>Searched: {this.props.inputValue}</h3>
                <div className='card-container'>
                    {
                        this.props.items.map(item => (
                            <div key={item.created} className='card'>
                                <h4 className='person-name'>{item.name}</h4>
                                <p>Height: <b>{item.height}</b></p>
                            </div>
                        ))
                    }
                </div>
            </main>
        )
    }
}
