import { Component } from 'react'
import handleLocalStorage from '../utils/handleLocalStorage';
import localStorageKeys from '../utils/localStorageKeys';

interface NavbarProps {
    setInputValue: (value: string) => void;
    onBtnClick: () => void;
}

const defaultValue = "";

export default class Navbar extends Component<NavbarProps> {
    componentDidMount(): void {
        this.props.setInputValue(handleLocalStorage(localStorageKeys.searched, defaultValue));
    }

    render() {
        return (
            <nav className='nav'>
                <form>
                    <input
                        type="text"
                        defaultValue={handleLocalStorage(localStorageKeys.searched, "")}
                        onChange={(e) => { this.props.setInputValue(e.target.value) }}
                    />

                    <button type='submit' onClick={(e) => {
                        e.preventDefault();
                        this.props.onBtnClick();
                    }}>Search</button>
                </form>
            </nav>
        )
    }
}
