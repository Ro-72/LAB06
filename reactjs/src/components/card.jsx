import logo19 from '../assets/images/logo512.png';
export function Card(){
    return(
        <div class="card" style={{ width: '18rem' }}>
        <img class="card-img-top" src={logo19} alt="Card image cap"/>
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
    )
}