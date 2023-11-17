import * as XLSX from 'xlsx';


async function excelToCsv() {
    console.log(__dirname);
    const workbook = XLSX.readFile(__dirname + "/processed_data.xlsx");
    XLSX.writeFile(workbook, "changed_Data.csv", { bookType: "csv" });
}

excelToCsv();
