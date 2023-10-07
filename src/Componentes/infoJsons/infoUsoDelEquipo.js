export const obtenerUSO_AS510B = async () => {
    try {
          const response = await fetch('/data/AS510B/infoUsoDeEquipo.json', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
          const jsonData = await response.json();
          return jsonData;
        } catch (error) {
          console.error("Error fetching data from JSON:", error);
          return [];
        }
};

export const obtenerUSO_SC250 = async () => {
    try {
          const response = await fetch('/data/SC250/infoUsoDeEquipo.json', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
          const jsonData = await response.json();
          return jsonData;
        } catch (error) {
          console.error("Error fetching data from JSON:", error);
          return [];
        }
};

export const obtenerUSO_AS710R = async () => {
    try {
          const response = await fetch('/data/AS710R/infoUsoDeEquipo.json', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
          const jsonData = await response.json();
          return jsonData;
        } catch (error) {
          console.error("Error fetching data from JSON:", error);
          return [];
        }
};

export const obtenerUSO_ROS1300 = async () => {
    try {
          const response = await fetch('/data/ROS1300/infoUsoDeEquipo.json', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
          const jsonData = await response.json();
          return jsonData;
        } catch (error) {
          console.error("Error fetching data from JSON:", error);
          return [];
        }
};
export const obtenerUSO_AS4325 = async () => {
    try {
          const response = await fetch('/data/AS4325/infoUsoDeEquipo.json', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
          const jsonData = await response.json();
          return jsonData;
        } catch (error) {
          console.error("Error fetching data from JSON:", error);
          return [];
        }
};

export const obtenerUSO_AS1050R = async () => {
    try {
          const response = await fetch('/data/AS1050R/infoUsoDeEquipo.json', {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
          const jsonData = await response.json();
          return jsonData;
        } catch (error) {
          console.error("Error fetching data from JSON:", error);
          return [];
        }
};