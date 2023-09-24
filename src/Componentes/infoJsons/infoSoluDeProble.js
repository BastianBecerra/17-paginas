export const obtenerSDP_SC250 = async () => {
    try {
      const response = await fetch('/data/SC250/infoSolucionDeProblemas.json', {
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

export const obtenerSDP_ROS1300= async () => {
    try {
      const response = await fetch('/data/ROS1300/infoSolucionDeProblemas.json', {
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