const nodeData = [
    { "Node ID": "S1", "Node Name": "Cauvery River", "Node Type": "Source", "Flow Value (MLD)": 1460 },
    { "Node ID": "S2", "Node Name": "Groundwater", "Node Type": "Source", "Flow Value (MLD)": 1370 },
    { "Node ID": "S3", "Node Name": "Rainfall", "Node Type": "Source", "Flow Value (MLD)": 1807 },
    { "Node ID": "S4", "Node Name": "Evapotranspiration Loss", "Node Type": "Loss", "Flow Value (MLD)": 830 },
    { "Node ID": "S5", "Node Name": "Natural Recharge", "Node Type": "Source", "Flow Value (MLD)": 183 },
    { "Node ID": "S6", "Node Name": "Rainwater Harvesting", "Node Type": "Source", "Flow Value (MLD)": 19 },
    { "Node ID": "S7", "Node Name": "Anthropogenic Recharge (Leakage)", "Node Type": "Anthropogenic Recharge", "Flow Value (MLD)": 455 },
    { "Node ID": "D1", "Node Name": "Residential", "Node Type": "Distribution", "Flow Value (MLD)": 2037.6 },
    { "Node ID": "D2", "Node Name": "Commercial/Institutional", "Node Type": "Distribution", "Flow Value (MLD)": 226.4 },
    { "Node ID": "D3", "Node Name": "Industrial", "Node Type": "Distribution", "Flow Value (MLD)": 481.1 },
    { "Node ID": "D4", "Node Name": "Construction", "Node Type": "Distribution", "Flow Value (MLD)": 56.6 },
    { "Node ID": "C1", "Node Name": "Domestic Demand", "Node Type": "Consumption", "Flow Value (MLD)": 1890 },
    { "Node ID": "C2", "Node Name": "Industrial Demand", "Node Type": "Consumption", "Flow Value (MLD)": 441 },
    { "Node ID": "C3", "Node Name": "Commercial/Institutional Demand", "Node Type": "Consumption", "Flow Value (MLD)": 205 },
    { "Node ID": "W1", "Node Name": "Wastewater Generation", "Node Type": "Wastewater", "Flow Value (MLD)": 2536 },
    { "Node ID": "T1", "Node Name": "Centralized Treatment Plants", "Node Type": "Treatment", "Flow Value (MLD)": 1239 },
    { "Node ID": "T2", "Node Name": "Small-Scale Treatment Plants", "Node Type": "Treatment", "Flow Value (MLD)": 250 },
    { "Node ID": "T3", "Node Name": "Total Treated Wastewater", "Node Type": "Treated Water", "Flow Value (MLD)": 1494 },
    { "Node ID": "R1", "Node Name": "KC Valley Project", "Node Type": "Reuse/Discharge", "Flow Value (MLD)": 380 },
    { "Node ID": "R2", "Node Name": "Reuse to Chikkaballapur", "Node Type": "Reuse/Discharge", "Flow Value (MLD)": 150 },
    { "Node ID": "R3", "Node Name": "Reuse to Devanahalli", "Node Type": "Reuse/Discharge", "Flow Value (MLD)": 40 },
    { "Node ID": "R4", "Node Name": "Untreated Industrial Wastewater", "Node Type": "Discharge", "Flow Value (MLD)": 432.2 },
    { "Node ID": "R5", "Node Name": "Runoff to Stormwater Drains and Lakes", "Node Type": "Discharge", "Flow Value (MLD)": "Variable (untreated remainder)" }
];

const flowData = [
    { "Flow ID": "F1", "From Node": "S1 (Cauvery River)", "To Node": "Distribution", "Flow Value (MLD)": 1460 },
    { "Flow ID": "F2", "From Node": "S2 (Groundwater)", "To Node": "Distribution", "Flow Value (MLD)": 1370 },
    { "Flow ID": "F3", "From Node": "S3 (Rainfall)", "To Node": "Evapotranspiration Loss", "Flow Value (MLD)": 830 },
    { "Flow ID": "F4", "From Node": "S3 (Rainfall)", "To Node": "Natural Recharge", "Flow Value (MLD)": 183 },
    { "Flow ID": "F5", "From Node": "S3 (Rainfall)", "To Node": "Rainwater Harvesting", "Flow Value (MLD)": 19 },
    { "Flow ID": "F6", "From Node": "Anthropogenic Recharge", "To Node": "Groundwater", "Flow Value (MLD)": 455 },
    { "Flow ID": "F7", "From Node": "Distribution", "To Node": "Residential", "Flow Value (MLD)": 2037.6 },
    { "Flow ID": "F8", "From Node": "Distribution", "To Node": "Commercial/Institutional", "Flow Value (MLD)": 226.4 },
    { "Flow ID": "F9", "From Node": "Distribution", "To Node": "Industrial", "Flow Value (MLD)": 481.1 },
    { "Flow ID": "F10", "From Node": "Distribution", "To Node": "Construction", "Flow Value (MLD)": 56.6 },
    { "Flow ID": "F11", "From Node": "Residential", "To Node": "Wastewater Generation", "Flow Value (MLD)": 1890 },
    { "Flow ID": "F12", "From Node": "Industrial", "To Node": "Wastewater Generation", "Flow Value (MLD)": 441 },
    { "Flow ID": "F13", "From Node": "Commercial/Institutional", "To Node": "Wastewater Generation", "Flow Value (MLD)": 205 },
    { "Flow ID": "F14", "From Node": "Wastewater Generation", "To Node": "Centralized Treatment", "Flow Value (MLD)": 1239 },
    { "Flow ID": "F15", "From Node": "Wastewater Generation", "To Node": "Small-Scale Treatment", "Flow Value (MLD)": 250 },
    { "Flow ID": "F16", "From Node": "Centralized Treatment Plants", "To Node": "KC Valley Project", "Flow Value (MLD)": 380 },
    { "Flow ID": "F17", "From Node": "Centralized Treatment Plants", "To Node": "Reuse to Chikkaballapur", "Flow Value (MLD)": 150 },
    { "Flow ID": "F18", "From Node": "Centralized Treatment Plants", "To Node": "Reuse to Devanahalli", "Flow Value (MLD)": 40 },
    { "Flow ID": "F19", "From Node": "Untreated Industrial Wastewater", "To Node": "Runoff", "Flow Value (MLD)": 432.2 }
];

// Store sort state
const sortState = {};

function generateTable(data, columns, containerId, tableId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID ${containerId} not found.`);
        return;
    }
    container.innerHTML = ''; // Clear previous table content

    const table = document.createElement('table');
    table.id = tableId;
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');

    columns.forEach(column => {
        const th = document.createElement('th');
        th.textContent = column.header;
        th.dataset.key = column.key;
        th.addEventListener('click', () => {
            const key = column.key;
            const tableType = tableId; // Differentiate sort states for different tables
            if (!sortState[tableType]) {
                sortState[tableType] = {};
            }
            const currentOrder = sortState[tableType][key] || 'none';
            let newOrder;

            if (currentOrder === 'asc') {
                newOrder = 'desc';
            } else { // Covers 'none' and 'desc'
                newOrder = 'asc';
            }
            sortState[tableType][key] = newOrder;

            // Reset other column sort orders for this table
            Object.keys(sortState[tableType]).forEach(k => {
                if (k !== key) sortState[tableType][k] = 'none';
            });

            sortData(data, key, newOrder);
            generateTable(data, columns, containerId, tableId); // Re-render table
        });
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    data.forEach(rowData => {
        const tr = document.createElement('tr');
        columns.forEach(column => {
            const td = document.createElement('td');
            td.textContent = rowData[column.key] !== undefined ? rowData[column.key] : '';
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    container.appendChild(table);
}

function sortData(data, key, order) {
    data.sort((a, b) => {
        let valA = a[key];
        let valB = b[key];

        // Handle numeric sorting for "Flow Value (MLD)"
        if (key === "Flow Value (MLD)") {
            // Convert to number, treating non-numeric/problematic as very small or large
            // to handle "Variable..." string and potential nulls/undefined
            valA = parseFloat(valA);
            valB = parseFloat(valB);
            if (isNaN(valA)) valA = order === 'asc' ? Infinity : -Infinity;
            if (isNaN(valB)) valB = order === 'asc' ? Infinity : -Infinity;
        } else if (typeof valA === 'string' && typeof valB === 'string') {
            valA = valA.toLowerCase();
            valB = valB.toLowerCase();
        }

        if (valA < valB) {
            return order === 'asc' ? -1 : 1;
        }
        if (valA > valB) {
            return order === 'asc' ? 1 : -1;
        }
        return 0;
    });
}

function filterData(originalData, filterText, columns) {
    if (!filterText) {
        return [...originalData]; // Return a copy if no filter
    }
    const lowerCaseFilter = filterText.toLowerCase();
    return originalData.filter(row => {
        return columns.some(column => {
            const cellValue = row[column.key];
            return cellValue !== undefined && cellValue !== null &&
                   cellValue.toString().toLowerCase().includes(lowerCaseFilter);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const nodeColumns = [
        { header: "Node ID", key: "Node ID" },
        { header: "Node Name", key: "Node Name" },
        { header: "Node Type", key: "Node Type" },
        { header: "Flow Value (MLD)", key: "Flow Value (MLD)" }
    ];

    const flowColumns = [
        { header: "Flow ID", key: "Flow ID" },
        { header: "From Node", key: "From Node" },
        { header: "To Node", key: "To Node" },
        { header: "Flow Value (MLD)", key: "Flow Value (MLD)" }
    ];

    // Initial table generation
    generateTable(nodeData, nodeColumns, 'node-table-container', 'node-table');
    generateTable(flowData, flowColumns, 'flow-table-container', 'flow-table');
    console.log("Tables generated.");

    // Filter event listeners
    const nodeFilterInput = document.getElementById('node-filter');
    const flowFilterInput = document.getElementById('flow-filter');

    nodeFilterInput.addEventListener('keyup', () => {
        const filteredNodes = filterData(nodeData, nodeFilterInput.value, nodeColumns);
        generateTable(filteredNodes, nodeColumns, 'node-table-container', 'node-table');
    });

    flowFilterInput.addEventListener('keyup', () => {
        const filteredFlows = filterData(flowData, flowFilterInput.value, flowColumns);
        generateTable(filteredFlows, flowColumns, 'flow-table-container', 'flow-table');
    });
});
