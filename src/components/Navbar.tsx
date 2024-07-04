import { Component } from 'react'
import handleLocalStorage from '../utils/handleLocalStorage';

interface NavbarProps {
    setInputValue: (value: string) => void;
    onBtnClick: () => void;
}

const localStorageKey = "inputValue";
const defaultValue = "";

export default class Navbar extends Component<NavbarProps> {
    componentDidMount(): void {
        this.props.setInputValue(handleLocalStorage(localStorageKey, defaultValue));
    }

    render() {
        return (
            <nav>
                <form>
                    <input
                        type="text"
                        value={handleLocalStorage(localStorageKey, defaultValue)}
                        onChange={(e) => {
                            localStorage.setItem(localStorageKey, e.target.value);
                            this.props.setInputValue(e.target.value)
                        }}
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
