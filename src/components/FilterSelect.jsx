import Select from 'react-select';
import { products } from '../utils/products';

const options = [
    { value: "all", label: "All" },
    { value: "CCTV Camera", label: "CCTV Cameras" },
    { value: "Wifi Camera", label: "Wifi Cameras" },
    { value: "Solar Camera", label: "Solar Cameras" },
    { value: "Fire & Safety", label: "Fire & Safety" },
    { value: "Access Control", label: "Access Control" },
    { value: "Door Phone Audio Video", label: "Door Phones Audio Video" },
    { value: "Attendance Machine", label: "Attendance Machines" },
    { value: "Cash Counter Machine", label: "Cash Counter Machines" },
    { value: "Matel Detecter", label: "Matel Detecter" },
    // { value: "Cash Counter Machine", label: "Cash Counter Machines" },
    { value: "Signal Router", label: "Signal Routers" },
    { value: "Printer", label: "Printers" },
    { value: "External Hard Drive", label: "External Hard Drives" },
    { value: "Wireless Set & Accessories", label: "Wireless Sets & Accessories" },
    { value: "Telephone Exchange", label: "Telephone Exchange" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
        backgroundColor: "#0f3460",
        color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({ setFilterList }) => {
    const handleChange = (selectedOption) => {
        // If "All" is selected, show all products
        if (selectedOption.value === "all") {
            setFilterList(products); // Show all products
        } else {
            // Otherwise, filter by the selected category
            setFilterList(products.filter(item => item.category === selectedOption.value));
        }
    };
    return (
    <Select
    options={options}
    defaultValue={{ value: "", label: "Filter By Category" }}
    styles={customStyles}
    onChange={handleChange}
    />
    );
};

export default FilterSelect;
