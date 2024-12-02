const TarjetaHotel = (hotel) => {
  return (
    <div className="card">
      <div className="card-header">{hotel.nombre}</div>
      <div className="card-body">
        <p>Descripción del hotel {hotel.id}</p>
      </div>
      <div className="card-actions">
        <button className="action-button">Acción 1</button>
        <button className="action-button">Acción 2</button>
      </div>
    </div>
  );
};

export const App = () => {
  const hoteles = [
    { id: 1, nombre: "Hotel 1" },
    { id: 2, nombre: "Hotel 2" },
    { id: 3, nombre: "Hotel 3" },
  ];
  return (
    <>
      {hoteles.map((hotel) => (
        <TarjetaHotel {...hotel} />
      ))}
    </>
  );
};
