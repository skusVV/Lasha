import {renderCar} from './car'

export const CarsList = (props) => {
    console.log('props', props)
    return (
       <>
        {
            props.cars.map((item, index) => renderCar(item, index))
        }
       </>
    )
}