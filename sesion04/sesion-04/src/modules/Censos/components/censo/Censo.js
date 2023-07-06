import React, {useState, useEffect} from 'react';
import { censos } from '../../data';
import TableData from '../table-data/TableData';
import Alert from '../alert/Alert'
import ItemDetails from '../item-details/ItemDetails';
import {useSelector, useDispatch} from 'react-redux';
import { fetchDepartamentos, selectDepartamentos } from '../../../../reducers/departamentos.reducer';

const Censo = (props) => {
    const departamentos = useSelector(selectDepartamentos);
    const dispatch = useDispatch();
    const [censo, setCenso] = useState();

    useEffect( () => {
        dispatch(fetchDepartamentos());
    }, [])

    const onSelectDepartamento = (index) => {
        setCenso(censos[index]);
    }

    return(
        <>
            {props.children}
            <TableData data={departamentos} onChangeDepartamento={onSelectDepartamento}/>

            {censo ? 
                <ItemDetails censoSelected={censo}/>:
                <Alert message={'No Hay Censos Seleccionados'}/>
            }
        </>
    )
}

export default Censo;

// class Censo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             censosData: censos,
//             censoSelected: null,
//         }
//         this.onSelectDepartamento = this.onSelectDepartamento.bind(this);
//     }

//     onSelectDepartamento(index) {
//         this.setState({censoSelected: censos[index]});
//     }
     
//     render() {
//         let {censosData, censoSelected} = this.state;
        
//     }
// }

// export default Censo;
