export const obtenerInfoPrin_AS510B = async () => {
  try {
    const response = await fetch('/data/AS510B/infoPrincipal.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data from JSON:", error);
    return [];
  }
};

export const obtenerInfoPrin_SC250 = async () => {
  try {
    const response = await fetch('/data/SC250/infoPrincipal.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data from JSON:", error);
    return [];
  }
};

export const obtenerInfoPrin_AS710R = async () => {
  try {
    const response = await fetch('/data/AS710R/infoPrincipal.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data from JSON:", error);
    return [];
  }
};

export const obtenerInfoPrin_ROS1300 = async () => {
  try {
    const response = await fetch('/data/ROS1300/infoPrincipal.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data from JSON:", error);
    return [];
  }
};