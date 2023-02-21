
import './search-box.styles.css';

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}>
    </input>
);

export default SearchBox;