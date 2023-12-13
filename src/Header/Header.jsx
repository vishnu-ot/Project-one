import './Header.css'
export function Header(){
    return(
        <div className='header'>
        <div className='head'>
        <div className='logo'>
            <h1>logo</h1>
        
        </div>
        <div className='head-center'><input type="text" placeholder='Search Here...'/></div>
        <div className='Sell'>
        <h4>Become a seller</h4>
        </div>
        </div>
        </div>
    )
}