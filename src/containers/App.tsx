import { useState, useEffect, ChangeEvent } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import './App.css';
import { getData } from '../utils/data.utils'

export interface ICato  {
    id: string;
    name: string;
    email: string;
}

const App = () => {
    const [searchField, setSearchField] = useState('')
    const [catos, setCatos] = useState<ICato[]>([])
    const [filteredCatos, setFilteredCatos] = useState(catos)

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getData<ICato[]>('https://jsonplaceholder.typicode.com/users')
            setCatos(users)
        }
        fetchUsers()
    }, [])

    useEffect(() => {
        const newFilteredCatos = catos.filter((cato) => {
            return cato.name.toLocaleLowerCase().includes(searchField)
        })
        setFilteredCatos(newFilteredCatos)
    }, [catos, searchField])

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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