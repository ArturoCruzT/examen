import React from 'react';
import { TiArrowSortedDown , TiArrowSortedUp} from 'react-icons/ti';

const Sort = ({posicion, sort, order, lang}) => {
    return (
                     <span onClick={() => sort(posicion)}>
                        {lang}  {order.asc && order.key ===  posicion ? <TiArrowSortedDown/>: <TiArrowSortedUp/> }
                    </span>
    );
};

export default Sort;