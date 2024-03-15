export const renderCar = (car, key) => {
    return (
      <div className="car-card" key={key}>
        <img className="car-card-img" src={car.img} />
        <div className="car-card-content" >
          <div className="car-card-city">{car.city}</div>
          <div className="car-card-info">{car.year} - {car.madeBy} {car.model}</div>
          <div className="car-card-price">{car.price} {car.currency}</div>
          <div className="car-card-labels">
            {
              car.labels.map(label => {
                return <span className="car-card-label">{label}</span>
              })
            }
          </div>
        </div>
       </div>
    )
  }