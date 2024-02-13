import Card from './Card';
import { ICato } from '../containers/App';

interface ICardListProps {
    catos: ICato[]
}

const CardList = ({ catos }: ICardListProps) => {
    return (
        <div>
            {
                catos.map((cato) => {
                    return (
                        <Card 
                            key = {cato.id} 
                            id = {cato.id} 
                            name = {cato.name} 
                            email = {cato.email} 
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList;