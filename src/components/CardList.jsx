import Card from './Card';

const CardList = ({catos}) => {
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