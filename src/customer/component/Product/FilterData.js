export const color = [
    "White",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
];

export const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: false },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: false },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: 'S', label: 'S', checked: false },
            { value: 'M', label: 'M', checked: false },
            { value: 'L', label: 'L', checked: false },
        ],
    },
];

export const singleFilters = [
    {
        id: "price",
        name: "price",
        options: [
            { value: "159-399", label: "159 to 399" },
            { value: "399-999", label: "399 to 999" },
            { value: "999-1999", label: "999 to 1999" },
            { value: "1999-2999", label: "1999 to 2999" },
            { value: "3999-4999", label: "3999 to 4999" },
        ],
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10", label: "10% and Above" },
            { value: "20", label: "20% and Above" },
            { value: "30", label: "30% and Above" },
            { value: "40", label: "40% and Above" },
            { value: "50", label: "50% and Above" },
            { value: "60", label: "60% and Above" },
            { value: "70", label: "70% and Above" },
            { value: "80", label: "80% and Above" },
            { value: "90", label: "90% and Above" },
        ],
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stack", label: "Out of Stack" },
        ],
    },
];