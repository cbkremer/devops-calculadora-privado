function History(){
    const items = JSON.parse(sessionStorage.getItem("history")) || [];

    return (
        <div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
  }
  
  export default History;