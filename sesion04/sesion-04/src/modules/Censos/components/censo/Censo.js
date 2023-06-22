import React, {Component} from 'react';
import { censos } from '../../data';
import TableData from '../table-data/TableData';
import Alert from '../alert/Alert'
import ItemDetails from '../item-details/ItemDetails';

class Censo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            censosData: censos,
            censoSelected: null,
        }
        this.onSelectDepartamento = this.onSelectDepartamento.bind(this);
    }

    onSelectDepartamento(index) {
        this.setState({censoSelected: censos[index]});
    }
     
    render() {
        let {censosData, censoSelected} = this.state;
        return(
            <>
                {this.props.children}
                <TableData data={censosData} onChangeDepartamento={this.onSelectDepartamento}/>

                {censoSelected ? 
                    <ItemDetails censoSelected={censoSelected}/>:
                    <Alert message={'No Hay Censos Seleccionados'}/>
                }
            </>
        )
    }
}

export default Censo;
