export const obtenerDataBanner = async () => {
    try {
      const response = await fetch('/data/infoBanner.json', {
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