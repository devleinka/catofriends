import { ICato } from "../containers/App";

const Card = (props: ICato) => {
    const {name, email, id} = props
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img 
                alt='cato' 
                src={`https://robohash.org/${id}?size=200x200&set=set4`}
            />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;