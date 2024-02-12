import { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css';

const App = () => {
    const [searchField, setSearchField] = useState('')
    const [catos, setCatos] = useState([])
    const [filteredCatos, setFilteredCatos] = useState(catos)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => setCatos(users))
    }, [])

    useEffect(() => {
        const newFilteredCatos = catos.filter((cato) => {
            return cato.name.toLocaleLowerCase().includes(searchField)
        })
        setFilteredCatos(newFilteredCatos)
    }, [catos, searchField])

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase()
        setSearchField(searchFieldString)
    }

    return(
        <div className = 'tc'>
            <h1 className = 'f1' >CatoFriends</h1>
            <SearchBox 
                onChangeHandler = {onSearchChange}
                placeholder = 'Search Catos'
            />
                <CardList catos = {filteredCatos}/>
        </div>
    )
}

    

export default App;