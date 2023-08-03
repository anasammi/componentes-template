import '../App.css'
import { Copywrite } from './Copywrite'
import { RedesSociais } from './RedesSociais'

export function Footer(){
    return(
        <footer className="header">
            <RedesSociais/>
            <Copywrite/>
        </footer>
    )
}