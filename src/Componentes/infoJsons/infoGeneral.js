export const obtenerInfoGeneral = async () => {
  try {
    const response = await fetch('/data/AS510B/infoGeneral.json', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Al hacer el fetching en data por el json", error);
    return [];
  }
}

export const obtenerInfoGeneral_SC250 = async () => {
  try {
    const response = await fetch('/data/SC250/infoGeneral.json', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Al hacer el fetching en data por el json", error);
    return [];
  }
}

export const obtenerInfoGeneral_AS710R = async () => {
  try {
    const response = await fetch('/data/AS710R/infoGeneral.json', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Al hacer el fetching en data por el json", error);
    return [];
  }
}

export const obtenerInfoGeneral_ROS1300 = async () => {
  try {
    const response = await fetch('/data/ROS1300/infoGeneral.json', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Al hacer el fetching en data por el json", error);
    return [];
  }
}