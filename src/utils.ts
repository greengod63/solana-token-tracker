import fs from 'fs';

// Function to store data in a JSON file
export async function storeData(filePath: string, data: any) {
  try {
    // Check if file exists
    const fileExists = fs.existsSync(filePath);
    
    let currentData = [];
    
    // If the file exists, load the current data
    if (fileExists) {
      const rawData = fs.readFileSync(filePath, 'utf-8');
      currentData = JSON.parse(rawData);
    }
    
    // Append the new data
    currentData.push(data);
    
    // Save the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
    console.log(`Data stored successfully at ${filePath}`);
  } catch (error) {
    console.error(`Error storing data: ${error.message}`);
  }
}
