export function extractNumbersFromString(str) {
    return str.split(/(\d+)/).map(part => (isNaN(part) ? part : Number(part)));
}


export function sortByFilename(data) {
    const sortedByFilename = [...data].sort((a, b) => {
        const aParts = extractNumbersFromString(a.filename);
        const bParts = extractNumbersFromString(b.filename);

        const minLength = Math.min(aParts.length, bParts.length);

        for (let i = 0; i < minLength; i++) {
            const aPart = aParts[i];
            const bPart = bParts[i];

            // Compare numeric parts as numbers
            if (typeof aPart === 'number' && typeof bPart === 'number') {
                return aPart - bPart;
            }
            // Compare numeric part vs string
            if (typeof aPart === 'number') return -1; // Numbers come before strings
            if (typeof bPart === 'number') return 1;

            // Compare strings lexicographically
            if (aPart !== bPart) {
                return aPart.localeCompare(bPart, undefined, { numeric: true });
            }
        }
        return aParts.length - bParts.length; // If equal up to the shortest length
    });
    return sortedByFilename;
}

export function sortByFilenameDesc(data) {
    const sortedByFilename = [...data].sort((a, b) => {
        const aParts = extractNumbersFromString(a.filename);
        const bParts = extractNumbersFromString(b.filename);

        const minLength = Math.min(aParts.length, bParts.length);

        for (let i = 0; i < minLength; i++) {
            const aPart = aParts[i];
            const bPart = bParts[i];

            // Compare numeric parts as numbers in descending order
            if (typeof aPart === 'number' && typeof bPart === 'number') {
                return bPart - aPart;
            }
            // Compare numeric part vs string
            if (typeof aPart === 'number') return 1; // Numbers come after strings
            if (typeof bPart === 'number') return -1;

            // Compare strings lexicographically in descending order
            if (aPart !== bPart) {
                return bPart.localeCompare(aPart, undefined, { numeric: true });
            }
        }
        return bParts.length - aParts.length; // If equal up to the shortest length
    });
    return sortedByFilename;
}


export function sortByCreated(data) {
    const sortedByDate = [...data].sort((a, b) => new Date(a.created) - new Date(b.created));
    return sortedByDate;
}