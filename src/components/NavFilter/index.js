import * as React from 'react'
import { Container, Button } from 'reactstrap'

import './navfilter.scss'

const NavFilter = () => {

    return (
        <div className="nav-filter-wrapper">
            <Container>
                <div className="nav-filter-row">
                    <div>
                        <label>Localização
                        <select>
                                <option>Florianópolis</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>Preço
                        <select>
                                <option>300-1000</option>
                            </select>
                        </label>
                    </div>
                    <div >
                        <label>Check-in
                        <input type="date" />
                        </label>
                    </div>
                    <div >
                        <label>Check-out
                        <input type="date" />
                        </label>
                    </div>
                    <div className="input-guests-number">
                        <label>Nº de hóspedes
                        <input type="number" className="input-number" />
                        </label>
                    </div>
                    <Button className="btn-nav-filter btn-orange-bg">Buscar</Button>
                    <button className="btn-nav-filter btn-orange-txt">+ Mais filtros</button>
                </div>
            </Container>
        </div>
    )
}

export default NavFilter