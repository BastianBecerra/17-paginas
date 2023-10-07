export const obtenerAlfinalizarJson = async () => {
    try {
          const response = await fetch('/data/AS510B/infoAlFinalizar.json', {
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

export const obtenerAlfinalizarSC250 = async () => {
    try {
          const response = await fetch('/data/SC250/infoAlFinalizar.json', {
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

export const obtenerAlfinalizarAS710R = async () => {
    try {
          const response = await fetch('/data/AS710R/infoAlFinalizar.json', {
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

export const obtenerAlfinalizarROS1300 = async () => {
    try {
          const response = await fetch('/data/ROS1300/infoAlFinalizar.json', {
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

export const obtenerAlfinalizarAS4325 = async () => {
    try {
          const response = await fetch('/data/AS4325/infoAlFinalizar.json', {
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

export const obtenerAlfinalizarAS1050R = async () => {
    try {
          const response = await fetch('/data/AS1050R/infoAlFinalizar.json', {
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